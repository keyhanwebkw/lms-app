import { defineStore } from "pinia";

export const useFileStore = defineStore("fileStore", {
    state: () => ({
        files: [] as Array<{ name: string; src: string }>,
    }),
    actions: {
        async addFile(file: { name: string; src: string }) {
            this.files.push(file);
        },
        async removeFile(index: number) {
            this.files.splice(index, 1);
        },
        clearFiles() {
            this.files = [];
        }
    },
});
