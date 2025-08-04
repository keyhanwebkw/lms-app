<script lang="ts" setup>
import type { DataCardSelfSupport, DetailsDataUser, DetailsAttachedFilesSelfSupport } from '~/types/support';
import { GenerateDate } from '~/func/GenerateDate';
import { selfSupport } from '~/stores/support/self';

const props = defineProps<DataCardSelfSupport>();
const support = selfSupport();
support.handelClearData()
const user = ref(props.dataUser.find(
    (item: DetailsDataUser) => props.dataList.userID === item.id
))

const filterFilesByType = (type: string) =>
    props.dataList.attachedFiles.filter((file: DetailsAttachedFilesSelfSupport) => file.type === type);

const images = filterFilesByType('image');
const videos = filterFilesByType('video');
const mp3s = filterFilesByType('mp3');
const files = filterFilesByType('file');
</script>

<template>
    <div class="container-card">
        <!-- info user-->
        <div class="container-info-user">
            <div class="flex gap-x-3">
                <NuxtImg :src="user?.avatar" :alt="`image` + user?.name + `` + user?.family" class="avatar-user" />
                <span class="font-sembold">
                    {{ user?.name }} {{ user?.family }}
                </span>
            </div>
            <span class="time">
                {{ GenerateDate({ timestamp: dataList.created, type: 'timeDate' }) }}
            </span>
        </div>

        <!-- description -->
        <div class="description">
            <p>
                {{ dataList.description }}
            </p>
        </div>

        <!-- attacher file -->
        <div class="container-attachedFiles">
            <!-- img -->
            <div v-for="(image, index) in images" :key="index">
                <div class="item-attached" @click="support.handelShowModalImage(image)">
                    <NuxtImg :src="image.src" :alt="image.type" class="item-image-attached" />
                </div>
            </div>

            <!-- modal img -->

            <SupportModalSelfTicket @hidden-popup="support.openModalImage = false"
                :status-popup="support.openModalImage">
                <template #data>
                    <NuxtImg :src="support.image.src" :width="support.image.width" :height="support.image.height"
                        class="rounded-sm" />
                </template>
            </SupportModalSelfTicket>


            <!-- video -->
            <div v-for="(video, index) in videos" :key="index">
                <div class="item-attached" @click="support.handelShowModelVideo(video)">
                    <NuxtImg src="/img/thumbnail-video.webp" alt="thumbnail-video" />
                </div>
            </div>

            <!-- popup video -->

            <SupportModalSelfTicket @hidden-popup="support.openModalVideo = false"
                :status-popup="support.openModalVideo">
                <template #data>
                    <video :src="support.video.src" controls autoplay class="video-popup"></video> 
                </template>
            </SupportModalSelfTicket>

            <!-- file -->
            <div v-for="(file, index) in files" :key="index">
                <div class="item-attached">
                    <a :href="file.src" download>
                        <NuxtImg src="/img/thumbnail-file.webp" alt="thumbnail-file" />
                    </a>
                </div>
            </div>

            <!-- audio-->
            <div v-for="(mp3, index) in mp3s" :key="index">
                <div class="item-attached">
                    <a :href="mp3.src" download>
                        <NuxtImg src="/img/thumbnail-file.webp" alt="thumbnail-file" />
                    </a>
                </div>
            </div>
        </div>

        <!-- download all file -->
        <div class="container-download-attached-file" v-if="dataList.attachedFiles.length !== 0">
            <IconFolder />
            <a :href="dataList.src_download_attached">{{ $t('support.download_attached_file') }}</a>
        </div>
    </div>

</template>

<style scoped>
.container-card {
    @apply w-full relative shadow-primary rounded-primary p-4 flex flex-col gap-y-4
}

.container-info-user {
    @apply w-full flex justify-between items-start
}

.avatar-user {
    @apply w-[38px] h-[38px] rounded-full object-cover
}

.time {
    @apply text-gray-500 text-xs
}

.description p {
    @apply text-justify text-gray-500 text-xs leading-6
}

.container-attachedFiles {
    @apply w-full flex flex-wrap gap-3 justify-end
}

.item-attached {
    @apply w-[75px] h-[75px] shadow-primary rounded-sm cursor-pointer
}



.video-popup {
    @apply w-[350px] h-[200px] rounded-primary
}

.item-image-attached {
    @apply w-full h-full object-cover rounded-sm
}

.container-download-attached-file {
    @apply w-full flex items-center justify-end gap-x-2 text-blue-500
}

.container-download-attached-file a {
    @apply text-sm
}
</style>