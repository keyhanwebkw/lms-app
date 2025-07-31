import { defineStore } from "pinia";
import { GET_CONTENT_ASSIGNMENT, GET_GENERALITIES_ASSIGNMENT, POST_CONTENT_ASSIGNMENT } from "~/services/api/assignment";
import type { DataGeneralitiesAssignmentState, DetailsAssignment, DetailsManagerResponse, DetailsReceivePermission, DetailsUserContent, ModelSendContentAssignment } from "~/types/assignment";
import { ToastMsg } from "../global/toast";
import { messages } from "~/static/messages";

export const useDetailsAssignment = defineStore("useDetailsAssignment", {
    state: () => <DataGeneralitiesAssignmentState>({
        dataAssignment: {} as DetailsAssignment,
        dataUserContent: [],
        dataManagerResponse: {} as DetailsManagerResponse,
        dataReceivePermission: {} as DetailsReceivePermission,
        dataContentAssignment: {} as DetailsUserContent,
        submissionDeadline: NaN,
        status: 'todo',
        isAllowedToSend: false,
        loading: true,
        pageNotFound: false,
        loadingReceive: false,
        popupContentAssignment: false,
        assignmentID: NaN,
        userAssignmentID: NaN
    }),
    actions: {
        async getDataGeneralitiesAssignment(assignmentID: number) {
            const toastMsg = ToastMsg()
            this.assignmentID = assignmentID
            this.loading = true
            const { data, status, error } = await GET_GENERALITIES_ASSIGNMENT(this.assignmentID)
            if (status == 'success') {
                this.dataAssignment = data.assignment
                this.dataUserContent = data.userContent
                this.dataManagerResponse = data.managerResponse
                this.dataReceivePermission = data.receivePermission
                this.submissionDeadline = data.submissionDeadline
                this.status = data.status
                this.isAllowedToSend = data.isAllowedToSend
                this.pageNotFound = false
                this.userAssignmentID = data.userAssignmentID
            } else if (status == 'error') {
                if (!error && data.errorCode == 1) {
                    this.pageNotFound = true
                } else {
                    toastMsg.ToastErrMsg({ message: error.message })
                }
            }
            this.loading = false
        },

        async getRecevieAssignment() {
            const toastMsg = ToastMsg()

            this.loadingReceive = true
            if (this.dataContentAssignment.title) {
                this.loadingReceive = false
            }
            else {
                const { data, status, error } = await GET_CONTENT_ASSIGNMENT(this.assignmentID)
                if (status == 'success') {
                    this.dataContentAssignment = data.assignment
                } else {
                    if (!error) {
                        toastMsg.ToastErrMsg({ message: data.message })
                    } else {
                        toastMsg.ToastErrMsg({ message: error.message })
                    }
                }
                this.loadingReceive = false
            }

            this.popupContentAssignment = true
        },

        async handleSendAssignment(payload: { description: string; files: File[] }) {
            const toastMsg = ToastMsg()
            if (payload.description == '' && payload.files.length == 0) {
                toastMsg.ToastErrMsg({ message: messages.isDescriptionOrFileRequired })
            } else {
                const formData = new FormData();
                formData.append('userAssignmentID', this.userAssignmentID.toString());
                formData.append('text', payload.description);
                payload.files.forEach((file) => {
                    formData.append('content[]', file);
                });
                const { status, data, error } = await POST_CONTENT_ASSIGNMENT(formData)
                if (status == 'success') {
                    this.getDataGeneralitiesAssignment(this.assignmentID)
                    toastMsg.ToastSuccessMsg({ message: messages.assignmentSubmitted })
                } else {
                    if (!error) {
                        toastMsg.ToastErrMsg({ message: data.message })
                    } else {
                        toastMsg.ToastErrMsg({ message: error.message })
                    }
                }
            }
        }
    },
});
