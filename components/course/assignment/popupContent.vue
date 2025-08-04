<script setup lang="ts">
import type { DataContentPopupAssignment } from '~/types/assignment'
import { useRuntimeConfig } from '#app'
import { useApi } from '~/composables/useApi'

const props = defineProps<DataContentPopupAssignment>()

const emit = defineEmits<{
    (event: 'close'): void,
}>()

const config = useRuntimeConfig()

const content = props.dataContentAssignment.content
const fileUrl = content ? `${config.public.storage.original}${content.fullSID}` : ''
const fileType = content?.fileType || ''

async function downloadFileWithApi(url: string) {
    try {
        const response = await useApi({
            url,
        })

        const blobUrl = URL.createObjectURL(response)
        const link = document.createElement('a')
        link.href = blobUrl
        link.download = url.split('/').pop() || 'file'
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
        URL.revokeObjectURL(blobUrl)
    } catch (error) {
        console.error('Download failed:', error)
    }
}
</script>

<template>
    <BaseModal :title="dataContentAssignment.title" :status="showPopup">
        <template v-slot:form>
            <div class="flex flex-col gap-y-4">
                <div class="flex gap-x-2 items-center">
                    <span class="font-bold">{{ $t('course.assignment.description') }} :</span>
                    <p class="text-gray-700 text-sm">{{ dataContentAssignment.description }}</p>
                </div>

                <div class="w-full h-[300px]" v-if="dataContentAssignment.content">
                    <NuxtImg v-if="fileType === 'image'" :src="fileUrl" class="w-full h-full rounded-primary" />
                    <video v-else-if="fileType === 'video'" controls :src="fileUrl"
                        class="w-full h-full rounded-primary"></video>
                </div>

                <div class="container-btn">
                    <BaseBtn type="button" :text="$t('course.assignment.download_assignment')"
                        custom-design="bg-blue-500 text-white" type-design="action"
                        @click="downloadFileWithApi(fileUrl)" v-if="dataContentAssignment.content" />

                    <BaseBtn type="button" :text="$t('global.close')" custom-design="bg-red-500 text-white"
                        type-design="action" @click="emit('close')" />
                </div>
            </div>
        </template>
    </BaseModal>
</template>

<style scoped>
.container-btn {
    @apply w-full flex justify-center gap-x-5 mt-4
}
</style>
