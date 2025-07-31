<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { useFileStore } from "~/stores/course/upload";
import type { DataUserContent, DetailsUserContent } from '~/types/assignment';

const emit = defineEmits<{
    (event: 'submit', payload: { description: string; files: File[] }): void;
}>();

const props = defineProps<DataUserContent>();
const fileStore = useFileStore();
const fileObjects = ref<File[]>([]);
const description = ref<string>('');
const config = useRuntimeConfig();

const disabled = computed(() => props.status == "pending" || props.status == "resubmitted")
const fetchAndConvertToFile = async (url: string, name: string): Promise<File | null> => {
    try {
        const response = await fetch(url);
        const blob = await response.blob();
        return new File([blob], name, { type: blob.type });
    } catch (err) {
        return null;
    }
};

onMounted(async () => {
    fileStore.clearFiles();

    if (props.dataListContent?.length) {
        for (const item of props.dataListContent) {
            if (item.content?.fullSID) {
                const fullSrc = item.content.fullSID.startsWith('data:')
                    ? item.content.fullSID
                    : `${config.public.storage.original}${item.content.fullSID}`;

                fileStore.addFile({
                    name: item.content.fileName,
                    src: fullSrc,
                });

                const file = await fetchAndConvertToFile(fullSrc, item.content.fileName);
                if (file) {
                    fileObjects.value.push(file);
                }
            }

            if (item.text) {
                description.value = item.text;
            }
        }
    }
});

onUnmounted(() => {
    fileStore.clearFiles();
});

const addFile = (event: Event) => {
    const files = (event.target as HTMLInputElement)?.files;
    if (files) {
        Array.from(files).forEach((file) => {
            const reader = new FileReader();
            reader.onload = () => {
                fileStore.addFile({
                    name: file.name,
                    src: reader.result as string,
                });
                fileObjects.value.push(file);
            };
            reader.readAsDataURL(file);
        });
    }
};

const removeFile = (index: number) => {
    fileStore.removeFile(index);
    fileObjects.value.splice(index, 1);
};

const submitData = () => {
    emit('submit', {
        description: description.value || '',
        files: fileObjects.value,
    });
};
</script>

<template>
    <div class="flex flex-col gap-y-5">
        <div class="w-full">
            <FormBaseInput type="textarea" v-model:model-value="description"
                :label="$t('course.assignment.description')" :disabled="disabled" />
        </div>

        <div v-if="fileStore.files.length === 0 && !disabled" class="upload-empty">
            <label for="file-upload" class="upload-label">
                <IconUpload />
                <span class="font-bold">{{ $t('course.assignment.upload_file') }}</span>
                <input id="file-upload" type="file" multiple class="hidden" @change="addFile" />
            </label>
        </div>

        <div v-else class="flex gap-2">
            <div v-for="(file, index) in fileStore.files" :key="index" class="relative w-24 h-24">
                <NuxtImg v-if="file.src" :src="file.src" :alt="file.name" class="thumbnail" />
                <button @click="removeFile(index)" class="delete-btn" v-if="!disabled">
                    <IconRemove />
                </button>
            </div>

            <label for="file-upload" class="add-file-btn" v-if="!disabled">
                <input id="file-upload" type="file" multiple class="hidden" @change="addFile" />
                <div class="icon-plus">
                    <IconPlus />
                </div>
            </label>
        </div>

        <div class="container-btn" v-if="!disabled">
            <BaseBtn type="button" type-design="action" customDesign="!text-sm bg-orange-300" :text="$t('global.send')"
                @click="submitData" />
        </div>
    </div>
</template>

<style scoped>
.upload-empty {
    @apply border-2 h-[150px] border-dashed border-gray-100 cursor-pointer rounded-sm flex justify-center items-center;
}

.upload-label {
    @apply w-full h-full cursor-pointer text-gray-500 flex flex-col items-center gap-y-4 justify-center;
}

.thumbnail {
    @apply w-full h-full object-cover rounded-sm;
}

.delete-btn {
    @apply absolute top-1 right-1 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center cursor-pointer;
}

.add-file-btn {
    @apply w-24 h-24 flex justify-center items-center border border-dashed border-gray-300 rounded-sm cursor-pointer;
}

.icon-plus {
    @apply w-[50px] h-[50px] bg-gray-100 rounded-full flex justify-center items-center;
}

.container-btn {
    @apply w-full flex justify-end mt-5;
}
</style>
