import { defineStore } from 'pinia'
import type { DataCommentState, ModelListComment, ModelSendComment } from '~/types/comment'
import type { ResultApiType, DataPrepare } from '~/types/global'
import { ToastMsg } from './toast'
import { messages } from "~/static/messages";
import { GET_LIST_COMMENT, POST_CONTENT_SEND_COMMENT } from '~/services/api/global';

export const useComments = defineStore('useComments', {
    state: () => <DataCommentState>({
        dataModel: {} as ModelSendComment,
        tableID: NaN,
        loadingBtn: false,
        type: null,
        clearInput: false,
        dataModelList: {} as ModelListComment,
        listComment: [],
        showAllCommentOriginal: false,
        allComment: [],
        parentContent: '',
        parentAuthor: '',
        isReplying: false,
        isFetch: false,
        loading: false
    }),

    actions: {
        async handleclearData() {
            this.isReplying = false
            this.parentAuthor = ''
            this.parentContent = ''
            this.tableID = NaN
            this.dataModel = {
                commentableType: this.type,
                commentableID: NaN,
                parentID: NaN,
                content: ''
            },
                this.dataModelList = {
                    commentableType: this.type,
                    commentableID: NaN,
                    page: 1,
                },
                this.isFetch = false
        },

        setDataReplyComment(parentID: number, parentContent: string, parentAuthor: string) {
            this.isReplying = true
            this.dataModel.parentID = parentID
            this.parentContent = parentContent
            this.parentAuthor = parentAuthor
        },

        handleCloseReplyComment() {
            this.isReplying = false
            this.dataModel.parentID = NaN,
                this.parentContent = '',
                this.parentAuthor = ''
        },

        async prepareForComment({ type, ID }: DataPrepare) {
            this.type = type
            this.tableID = ID
            this.getListComment()
        },


        // send data fotm
        async handleSendComment(content: string) {
            this.clearInput = false
            const toastMessage = ToastMsg()
            if (content.length <= 4) {
                toastMessage.ToastErrMsg({ message: messages.commentNotValid })
            }
            else {
                this.loadingBtn = true
                this.dataModel = {
                    commentableType: this.type,
                    commentableID: this.tableID,
                    parentID: this.dataModel.parentID,
                    content: content
                }
                const { data, status, error }: ResultApiType = await POST_CONTENT_SEND_COMMENT(this.dataModel)
                if (status == 'success') {
                    toastMessage.ToastSuccessMsg({ message: messages.commentSuccessful })
                    this.clearInput = true
                    if (this.dataModel.parentID) {
                        this.isReplying = false
                    }
                } else if (status == 'error') {
                    toastMessage.ToastErrMsg({ message: error[0].message })
                }
                this.loadingBtn = false
            }
        },
        async getListComment() {
            this.loading = true
            const toastMessage = ToastMsg()
            this.listComment = []
            this.dataModelList = {
                commentableType: this.type,
                commentableID: this.tableID,
                page: 1,
            }
            const { data, status, error }: ResultApiType = await GET_LIST_COMMENT(this.dataModelList)
            if (status == 'success') {
                this.allComment = data.comments
                if (data.comments.length > 3) {
                    this.listComment = data.comments.slice(0, 3)
                    this.showAllCommentOriginal = true
                } else {
                    this.listComment = data.comments
                }
            } else if (status == 'error') {
                toastMessage.ToastErrMsg({ message: error[0].message })
            }
            this.isFetch = true
            this.loading = false
        },
        async handleShowComment() {
            if (this.showAllCommentOriginal) {
                this.listComment = this.allComment
            } else {
                this.listComment = this.listComment.slice(0, 3)
            }
            this.showAllCommentOriginal = !this.showAllCommentOriginal

        }
    }
})