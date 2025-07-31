<script lang="ts" setup>
import type { DataModelOpenEpisode, DataSectionCourse, DetailsEpisodeType } from '~/types/course';

const emit =  defineEmits<{
    (event: 'getEpisode', value: number): void
    (event: 'openEpisode', payload: { type: DetailsEpisodeType; id: number,permission:boolean }): void
}>();


const props = defineProps<DataSectionCourse>()

const activeCard = computed(() => props.listSection.ID == props.activeSection ? true : false)


function handleOpenEpisode(payload: DataModelOpenEpisode) {
    emit('openEpisode',{type:payload.type,id:payload.id,permission:payload.permission})
}
</script>

<template>
    <div class="container-section gap-y-5">
        <div>
            <CourseSelfMainCardHeadline :section="listSection" @click="$emit('getEpisode', listSection.ID)"
                :countSection="countSection" :isOpen="activeCard" />
        </div>
        <div v-if="activeCard">
            <div v-if="loadingEpisode">
                <LoadingCardEpisode />
            </div>
            <div v-else class="container-section gap-y-2">
                <CourseSelfMainCardDetails :dataList="data" :count="index + 1" v-for="(data, index) in listEpisode"
                    :key="data.ID" @openEpisode="handleOpenEpisode" />
            </div>
        </div>
    </div>
</template>

<style scoped>
.container-section {
    @apply w-full flex flex-col
}
</style>