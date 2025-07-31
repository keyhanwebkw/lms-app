<script lang="ts" setup>
import type { DataEpisode, DetailsEpisodeType } from '~/types/course';

const props = defineProps<DataEpisode>();

const emit = defineEmits<{
    (event: 'openEpisode', payload: { type: DetailsEpisodeType; id: number,permission:boolean }): void;
}>();

const styleMap = {
    content: {
        primaryColor: '#913175',
        currentColor: '#E56ECC',
        bgBtn: '#91317533',
        iconTitle: '',
        iconDetails: 'IconTimer',
    },
    exam: {
        primaryColor: '#FF8800',
        currentColor: '',
        bgBtn: '#fff',
        iconTitle: 'IconReportAction',
        iconDetails: 'IconMessages',
    },
    assignment: {
        primaryColor: '#FC4C56',
        currentColor: '',
        bgBtn: '#fff',
        iconTitle: 'IconAssignment',
        iconDetails: 'IconMessages',
    },
} as const;

const status = computed(() => styleMap[props.dataList.type]);

const customDesign = computed(() => ({
    backgroundColor: status.value.bgBtn,
    color: status.value.primaryColor,
}));

const colorStyle = computed(() => ({
    color: status.value.primaryColor,
}));

const currentColorStyle = computed(() => ({
    color: status.value.currentColor || status.value.primaryColor,
}));

const borderStyle = computed(() =>
    props.dataList.type !== 'content'
        ? { border: `1px solid ${status.value.primaryColor}` }
        : {}
);

</script>

<template>
    <div class="wrapper ">

        <div class="flex gap-x-3 relative">
            <div class="flex gap-x-5 justify-center">

                <div class="number-icon" :style="colorStyle">
                    <div class="w-full h-full flex justify-center items-center ">
                        <span class="pb-2" v-if="props.dataList.type === 'content'">
                            {{ count }}
                        </span>
                        <span class="mr-1" v-else>
                            <component :is="status.iconTitle" />
                        </span>
                    </div>

                    <div class="underline" :style="{ backgroundColor: status.primaryColor }"></div>
                </div>

                <div class="w-[2px] h-full" :style="{ backgroundColor: status.primaryColor }"></div>
            </div>

            <div class="text-content">
                <span class="font-semibold" :style="colorStyle">{{ props.dataList.title }}</span>

                <div class="details" :style="currentColorStyle">
                    <component :is="status.iconDetails" />
                    <template v-if="props.dataList.type === 'content'">
                        <span>{{ props.dataList.duration }}</span>
                    </template>
                    <template v-else-if="props.dataList.type === 'exam'">
                        <span>{{ props.dataList.questionCount }}</span>
                        <span>{{ $t('course.detailsCourse.qustion') }}</span>
                    </template>
                    <template v-else-if="props.dataList.type === 'assignment'">
                        <span>{{ props.dataList.score }}</span>
                        <span>{{ $t('global.score') }}</span>
                    </template>
                </div>
            </div>
        </div>

        <div class="h-full flex items-center">
            <div class="view-btn" @click="$emit('openEpisode', { id: dataList.ID, type: dataList.type,permission:dataList.permission })"
                :style="[customDesign, borderStyle]">
                <IconLock v-if="!dataList.permission" />
                <span>{{ $t('course.detailsCourse.view') }}</span>
            </div>
        </div>
    </div>
</template>

<style scoped>
.wrapper {
    @apply w-full h-[75px] py-2 px-3 rounded-sm flex justify-between shadow-primary;
}

.wrapper .number-icon {
    @apply w-5 h-full flex flex-col justify-center items-center text-xl font-semibold relative -mt-[2px];
}

.wrapper .number-icon .underline {
    @apply absolute bottom-[15px] right-1 w-[14px] h-[3px] rounded-sm;
}

.wrapper .text-content {
    @apply flex flex-col justify-center text-sm gap-3;
}

.wrapper .text-content .details {
    @apply flex gap-1 items-center font-bold;
}

.wrapper .view-btn {
    @apply w-[100px] h-[30px] rounded-[5px] flex justify-center items-center gap-2 text-xs font-bold cursor-pointer;
}
</style>
