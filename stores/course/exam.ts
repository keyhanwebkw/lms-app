import { GET_DETAILS_EXAM, GET_QUESTION_EXAM, GET_RESULT_EXAM, POST_ANSWER_EXAM, POST_JOIN_EXAM } from "~/services/api/exam";
import type { AnswerModel, DetailsQuestions, ExamState } from "~/types/exam";
import { ToastMsg } from "../global/toast";

export const useExamStore = defineStore('useExamStore', {
    state: () => <ExamState>({
        detailsExam: {},
        joinPermission: {},
        detailsQuestions: {},
        dataQuestions: {},
        answerModel: {} as AnswerModel,
        resultExam: {
            res: {},
            isPassed: false,
        },
        activeComponent: {
            details: true,
            question: false,
            result: false
        },
        loading: {
            page: true,
            join: false,
            question: false,
            answer: false,
            result: false,
            resultBtn: false
        },
        pageNotFound: false,
        examStatus: 'todo',
        triesCount: NaN,
        timer: {
            remainingTime: 0,
            displayTime: '00:00',
            interval: null as NodeJS.Timeout | null
        }
    }),
    actions: {
        async fetchExamDetails(examID: number) {
            const toastMessage = ToastMsg()
            this.loading.page = true;
            const { data, status, error } = await GET_DETAILS_EXAM(examID);
            this.loading.page = false;
            if (status === 'success') {
                this.pageNotFound = false;
                this.detailsExam = data.exam;
                this.joinPermission = data.joinPermission;
                this.examStatus = data.status
                this.triesCount = data.triesCount
                this.detailsQuestions.totalQuestions = this.detailsExam.questionsCount
                this.activeComponentProcess({ name: 'details' })
                return;
            }

            if (error?.message) {
                toastMessage.ToastErrMsg({ message: error.message });
                return;
            }

            if (data?.errorCode === 2) {
                this.pageNotFound = true;
            }

        },

        async joinExam() {
            const toastMessage = ToastMsg()

            if (!this.joinPermission.isAllowedToJoin) {
                toastMessage.ToastErrMsg({ message: `${this.joinPermission.errorMessage} - ${this.joinPermission.errorCode}` });
                return;
            }

            this.loading.join = true;
            const { data, status, error } = await POST_JOIN_EXAM(this.detailsExam.ID);
            if (status == 'success') {
                await this.getDetailsQuestion({ data: data, join: true });
                this.activeComponentProcess({ name: 'question' })
                this.getDataQuestion(data.nextQuestionID)
            } else {
                let errorMsg = error ? error.message : data.message
                toastMessage.ToastErrMsg({ message: errorMsg })
                if (this.activeComponent.result) {
                    this.activeComponentProcess({ name: 'details' })
                }
            }
            this.loading.join = false;
        },

        async getDataQuestion(questionID: number) {
            const toastMessage = ToastMsg()

            this.loading.question = true
            const { data, error, status } = await GET_QUESTION_EXAM(questionID)
            if (status == 'success') {
                this.dataQuestions = data.question
                this.answerModel.userAnswerID = data.userAnswerID
                this.answerModel.questionID = this.dataQuestions.ID
                this.getDetailsQuestion({
                    data: {
                        hasMoreQuestions: data.hasMoreQuestions,
                        nextQuestionID: data.nextQuestionID,
                        nextQuestionNumber: data.nextQuestionNumber,
                        totalQuestions: data.totalQuestions
                    }
                })

                this.startQuestionTimer(this.dataQuestions.timeLimit)
            } else {
                let errorMsg = error ? error.message : data.message
                toastMessage.ToastErrMsg({ message: errorMsg })
            }
            this.loading.question = false
        },

        startQuestionTimer(timeLimit: number) {
            this.clearTimer()

            this.timer.remainingTime = timeLimit
            this.updateDisplayTime()

            this.timer.interval = setInterval(() => {
                this.timer.remainingTime--
                this.updateDisplayTime()

                // When time reaches zero, auto-submit
                if (this.timer.remainingTime <= 0) {
                    this.clearTimer()
                    this.submitAnswer()
                }
            }, 1000)
        },

        updateDisplayTime() {
            const minutes = Math.floor(this.timer.remainingTime / 60)
            const seconds = this.timer.remainingTime % 60
            this.timer.displayTime = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
        },

        clearTimer() {
            if (this.timer.interval) {
                clearInterval(this.timer.interval)
                this.timer.interval = null
            }
        },

        async getDetailsQuestion({ data, join }: { data: DetailsQuestions, join?: boolean }) {
            this.detailsQuestions.nextQuestionID = data.nextQuestionID;
            this.detailsQuestions.currentQuestionNumber = join ? data.nextQuestionNumber : this.detailsQuestions.nextQuestionNumber;
            this.detailsQuestions.nextQuestionNumber = data.nextQuestionNumber
            this.detailsQuestions.totalQuestions = data.totalQuestions;
            this.detailsQuestions.hasMoreQuestions = join ? true : data.hasMoreQuestions
        },

        async activeComponentProcess({ name }: { name: 'details' | 'question' | 'result' }) {
            for (const key in this.activeComponent) {
                this.activeComponent[key as keyof typeof this.activeComponent] = key === name;
            }
        },

        updateSelectedOption(optionID: number) {
            this.answerModel.optionID = optionID
        },

        async submitAnswer() {
            const toastMessage = ToastMsg()

            this.clearTimer()
            this.loading.answer = true

            const { data, error, status } = await POST_ANSWER_EXAM(this.answerModel)

            if (status === 'success') {
                if (this.detailsQuestions.hasMoreQuestions) {
                    this.answerModel.optionID = null
                    this.getDataQuestion(this.detailsQuestions.nextQuestionID)
                } else {
                    const { data, error, status } = await GET_RESULT_EXAM({ userAnswerID: this.answerModel.userAnswerID })
                    if (status === 'success') {
                        this.resultExam.res = data.userExam
                        this.resultExam.isPassed = data.isPassed
                        this.detailsQuestions.totalQuestions = this.detailsExam.questionsCount
                        this.activeComponentProcess({ name: 'result' })
                    } else {
                        let errorMsg = error ? error.message : data.message
                        toastMessage.ToastErrMsg({ message: errorMsg })
                        this.fetchExamDetails(this.detailsExam.ID)
                        this.activeComponentProcess({ name: "details" })
                    }
                }
            } else {
                const errorMsg = error?.message || data?.message || 'خطایی رخ داده است'
                toastMessage.ToastErrMsg({ message: errorMsg })
            }

            this.loading.answer = false
        },

        async fetchResultExam() {
            const toastMessage = ToastMsg()

            this.loading.resultBtn = true

            const { data, status, error } = await GET_RESULT_EXAM({ examID: this.detailsExam.ID })

            if (status === 'success') {
                this.resultExam.res = data.userExam
                this.resultExam.isPassed = data.isPassed
                this.activeComponentProcess({ name: 'result' })
            } else {
                let errorMsg = error ? error.message : data.message
                toastMessage.ToastErrMsg({ message: errorMsg })
            }

            this.loading.resultBtn = false
        }


    }
})