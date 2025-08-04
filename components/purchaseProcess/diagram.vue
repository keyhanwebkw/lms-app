<script lang="ts" setup>
import { DataDiagramStore } from '~/stores/purchaseProcess/diagram';
import type { DetailsDiagram } from '~/types/purchaseProcess';

const router = useRouter();
const route = useRoute();
const stepsStore = DataDiagramStore();


const handleStepClick = (index: number, step: DetailsDiagram) => {
    stepsStore.updateStepsCompletion(index);
    router.push(stepsStore.dataList[index].route);
    return !step.requiresCompletion;
};

watch(
    () => route.path,
    () => {
        stepsStore.resetSteps();
    },
    { immediate: true }
);
</script>

<template>
    <div class="checkout-header">
        <div v-for="(step, index) in stepsStore.dataList" :key="index" class="step-container">
            <button :class="[
                'checkout-button',
                { active: step.route === route.path || stepsStore.isStepCompleted(route.path, index) }
            ]" @click="handleStepClick(index, step)" :disabled="step.requiresCompletion">
                {{ step.label }}
            </button>
            <span v-if="index < stepsStore.dataList.length - 1" class="divider"></span>
        </div>
    </div>
</template>

<style scoped>
.checkout-header {
    @apply flex items-center justify-center gap-2
}

.step-container {
    @apply flex items-center text-xs
}

.checkout-button {
    @apply border-[1px] border-blue-500 text-blue-500 px-[16px] py-[10px] rounded-[25px] cursor-pointer font-semibold
}

.checkout-button.active {
    @apply bg-blue-500 text-white
}

.divider {
    @apply w-5 h-[1px] mr-[10px] bg-blue-500
}
</style>
