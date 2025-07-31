<script setup lang="ts">
import type { ExamStatus } from '~/types/exam';

const props = defineProps<{ status: ExamStatus }>()

const dataStatus = ref({
    todo: {
        styleData: 'bg-orange-300',
        imgData: 'IconPending',
    },
    notStarted: {
        styleData: 'bg-orange-300',
        imgData: 'IconPending',
    },
    inProgress: {
        styleData: 'bg-blue-300',
        imgData: 'IconPending',
    },
    passed: {
        styleData: 'bg-green-300',
        imgData: 'IconAccept',
    },
    failed: {
        styleData: 'bg-red-500',
        imgData: 'IconReject',
    },
})

const style = computed(() => dataStatus.value[props.status].styleData)
const icon = computed(() => dataStatus.value[props.status].imgData)


</script>

<template>
    <div class="exam-status" :class="style">
        <component :is="icon" />
        <span>{{ $t(`status.${status}`) }}</span>
    </div>
</template>

<style scoped>
.exam-status {
    @apply text-white min-w-[100px] py-[6px] px-3 rounded-full flex items-center gap-x-[6px] justify-center
}

.exam-status span {
    @apply text-xs pb-0.5
}
</style>