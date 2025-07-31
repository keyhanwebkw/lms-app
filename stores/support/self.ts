import { defineStore } from 'pinia'
import type { DataSelfSupportState, DetailsAttachedFilesSelfSupport } from '~/types/support'

export const selfSupport = defineStore('selfSupport', {
    state: () => <DataSelfSupportState>({
        video: {},
        image: {},
        openModalImage: false,
        openModalVideo: false
    }),

    actions: {
        handelClearData() {
            this.image = { type: '', size: 0, src: '' }
            this.video = { type: '', size: 0, src: '' }
            this.openModalImage = false
            this.openModalVideo = false
        },

        handelShowModalImage(image: DetailsAttachedFilesSelfSupport) {
            this.image = image
            this.openModalImage = true
        },
        handelShowModelVideo(video: DetailsAttachedFilesSelfSupport) {
            this.video = video
            this.openModalVideo = true
        }
    }

})