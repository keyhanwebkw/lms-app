import type { StorageResourceType } from "./global";

export interface ExamState {
    detailsExam: DetailsExam;
    joinPermission: JoinPermission;
    detailsQuestions: DetailsQuestions;
    dataQuestions: DataQuestion;
    answerModel: AnswerModel;
    resultExam: ResultExam;
    activeComponent: ActiveComponent;
    loading: Loading;
    pageNotFound: boolean
    examStatus: ExamStatus
    triesCount: number
    timer: Timer
}

export interface Timer {
    remainingTime: number;
    displayTime: string;
    interval: NodeJS.Timeout | null;
}

export interface DetailsExam {
    ID: number;
    title: string;
    description: string;
    startDate: number;
    endDate: number;
    score: number;
    duration: number;
    minScoreToPass: number;
    retryAttempts: number;
    questionsCount: number;
}

export interface JoinPermission {
    isAllowedToJoin: boolean
    errorCode: number
    errorMessage: string
}

export interface DetailsQuestions {
    totalQuestions: number;
    nextQuestionNumber: number;
    nextQuestionID: number;
    currentQuestionNumber?: number
    hasMoreQuestions: boolean;
}

export interface DataQuestion {
    ID: number;
    question: string;
    difficultyLevel: string;
    timeLimit: number;
    score: number;
    content: StorageResourceType;
    options: Options[];
}

export interface Options {
    ID: number;
    value: string;
    content: StorageResourceType
}

export interface AnswerModel {
    userAnswerID: number;
    optionID: number | null;
    questionID: number;
}

export interface ResultExam {
    res: {
        ID: number;
        examStatus: string;
        score: number;
        trueAnswers: number;
        falseAnswers: number;
        skippedAnswers: number;
    }
    isPassed: boolean;
}

export interface ResultComponent {
    data: ResultExam
    totalQuestions: number
    minScoreToPass: number
    loadingJoin: boolean
}

export interface ActiveComponent {
    details: boolean;
    question: boolean;
    result: boolean;
}

export interface Loading {
    page: boolean;
    join: boolean;
    question: boolean;
    answer: boolean;
    result: boolean;
    resultBtn: boolean;
}

export type ExamStatus = 'todo' | 'notStarted' | 'inProgress' | 'failed' | 'passed'

export interface DetailsCardExam {
    data: DetailsExam;
    status: ExamStatus;
    loadingJoin: boolean;
    joinPermission: JoinPermission;
    triesCount: number
    loadingResult: boolean
}

export interface QuestionComponent {
    title: string;
    totalQuestions: number;
    currentQuestion?: number;
    dataQuestion: DataQuestion
    loading: boolean
    hasMore: boolean
    timer: string
}