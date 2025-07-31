<script setup lang="ts">
import type { ResultComponent } from '~/types/exam';

const props = defineProps<ResultComponent>();

defineEmits<{
    retryExam: []
}>()

const statusColor = computed(() => props.data.isPassed ? 'text-green-300' : 'text-red-500')

</script>

<template>
    <NuxtLayout name="course">
        <template #info>
            <div class="container-result-exam">
                <!-- Status Title -->
                <div class="result-status" :class="statusColor">
                    <IconSuccess v-if="data.isPassed" />
                    <IconError v-else />
                    <span class="status-text">
                        {{ data.isPassed ? $t('course.quizze.passed') : $t('course.quizze.failed') }}
                    </span>
                </div>


                <!-- Result Details -->
                <div class="container-info">
                    <div class="item-info">
                        <IconQuestion />
                        <span>{{ $t('course.quizze.number_of_question') }} :</span>
                        <span>{{ totalQuestions }}</span>
                    </div>
                    <div class="item-info">
                        <IconQuizze />
                        <span>{{ $t('course.quizze.min_score_to_pass') }} :</span>
                        <span>{{ minScoreToPass }}</span>
                    </div>
                </div>
                <div class="container-info">
                    <div class="item-info">
                       <IconAward />
                        <span>{{ $t('course.quizze.score_received') }} :</span>
                        <span>{{ data.res.score }}</span>
                    </div>
                    <div class="item-info">
                        <IconCheck />
                        <span>{{ $t('course.quizze.true_answers') }} :</span>
                        <span>{{ data.res.trueAnswers }}</span>
                    </div>
                </div>

                <div class="container-info">
                    <div class="item-info">
                        <IconClose />
                        <span>{{ $t('course.quizze.false_answers') }} :</span>
                        <span>{{ data.res.falseAnswers }}</span>
                    </div>
                    <div class="item-info">
                        <IconSkip />
                        <span>{{ $t('course.quizze.skipped_answers') }} :</span>
                        <span>{{ data.res.skippedAnswers }}</span>
                    </div>
                </div>

                <!-- Action Buttons -->
                <div class="action-buttons">
                    <BaseBtn type="button" type-design="action" :text="$t('course.quizze.try_again')"
                        customDesign="!text-sm bg-orange-500 !px-4" @click="$emit('retryExam')" :loading="loadingJoin" />
                </div>
            </div>
        </template>
    </NuxtLayout>
</template>

<style scoped>
.container-result-exam {
    @apply flex flex-col gap-y-6
}

.result-status {
    @apply flex items-center gap-x-2 text-lg font-bold
}

.status-text {
    @apply text-xl
}

.result-details {
    @apply flex flex-col gap-y-3
}

.container-info {
    @apply flex items-center gap-x-5 font-semibold
}

.item-info {
    @apply flex items-center gap-x-1 text-sm text-gray-300 font-semibold
}

.detail-item {
    @apply flex items-center gap-x-2 text-sm text-gray-300 font-semibold
}

.action-buttons {
    @apply flex gap-x-3 justify-end mt-4
}
</style>
