<script setup lang="ts">
import type { QuestionComponent } from '~/types/exam';

const { t } = useI18n()

const props = defineProps<QuestionComponent>()

const emit = defineEmits<{
    selectOption: [optionID: number]
    submitAnswer: []
}>()

const selectedOptionID = ref<number | null>(null)

const selectOption = (optionID: number) => {
    selectedOptionID.value = optionID
    emit('selectOption', optionID)
}

const btnText = computed(() => props.hasMore ? t('course.quizze.next') : t('course.quizze.end_exam'))

</script>

<template>
    <NuxtLayout name="course">
        <template #info>
            <div class="container-question-exam">
                <div class="header">
                    <div class="static-title">
                        <IconVerify />
                        <span>
                            {{ $t('course.quizze.questions.static_title') }}
                            {{ title }}
                        </span>
                    </div>
                    <div class="current-question">
                        <IconNote />
                        <span>
                            {{ $t('global.question') }}
                            {{ currentQuestion }}
                            {{ $t('global.of') }}
                            {{ totalQuestions }}
                        </span>
                    </div>
                </div>
                <div class="quesion-title">
                    {{ dataQuestion.question }}
                </div>
                <div class="quesion-options">
                    <div v-for="option in dataQuestion.options" :key="option.ID" class="option-item"
                        @click="selectOption(option.ID)">
                        <div class="flex items-center">
                            <input type="checkbox" :id="`option-${option.ID}`" :value="option.ID"
                                :checked="selectedOptionID === option.ID" class="hidden" />
                            <div class="checkbox-box" :class="{ 'selected': selectedOptionID === option.ID }">
                                <IconCheckmark v-if="selectedOptionID === option.ID" />
                            </div>
                        </div>
                        <label :for="`option-${option.ID}`" class="option-label"
                            :class="{ 'selected': selectedOptionID === option.ID }">
                            {{ option.value }}
                        </label>
                    </div>
                </div>
                <div class="footer-container">
                    <div class="timer-display">
                        <IconClock />
                        <span class="timer-text">{{ timer }}</span>
                    </div>
                    <BaseBtn type="button" type-design="action" :customDesign="'!text-sm bg-orange-500'" :text="btnText"
                        :loading="loading" @click="$emit('submitAnswer')" />
                </div>
            </div>
        </template>
    </NuxtLayout>
</template>

<style scoped>
.container-question-exam {
    @apply flex flex-col gap-y-4
}

.container-question-exam .header {
    @apply w-full flex items-center justify-between
}

.container-question-exam .header .static-title {
    @apply text-sm font-bold text-orange-500 flex items-center gap-x-2
}

.container-question-exam .header .current-question {
    @apply text-xs text-gray-300 font-bold gap-x-2 flex items-center
}

.quesion-options {
    @apply flex flex-col gap-y-6 mt-3
}

.option-item {
    @apply flex items-center gap-x-3 cursor-pointer
}

.checkbox-box {
    @apply w-5 h-5 border-2 border-gray-300 rounded-sm flex items-center justify-center
}

.option-label {
    @apply text-sm text-gray-300 cursor-pointer flex-1 transition-colors duration-200 font-bold
}

.checkbox-box.selected {
    @apply border-blue-500 text-blue-500
}


.option-label.selected {
    @apply text-blue-500
}


.footer-container {
    @apply w-full flex justify-between mt-3;
}

.timer-display {
    @apply flex items-center gap-x-2 text-sm text-gray-300
}
</style>
