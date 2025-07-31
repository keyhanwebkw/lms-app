<script lang="ts" setup>
import type { DetailsCardExam } from '~/types/exam';

const props = defineProps<DetailsCardExam>()

defineEmits<{
    (event: 'join'): void;
    (event: 'result'): void;
}>();

const { t } = useI18n()

const startBtnText = computed(() => props.status == 'failed' || props.status == 'passed' ? t('course.quizze.try_again') : t('course.quizze.start_quizze'))

</script>
<template>
    <NuxtLayout name="course">
        <template #info>
            <!-- title and status  -->
            <div class="w-full flex justify-between ">
                <span class="text-red-500 font-bold">{{ data.title }}</span>
                <CourseExamStatus :status="status" />
            </div>
            <!-- info quizze -->
            <div class="container-info mt-3">
                <div class="item-info">
                    <IconQuestion />
                    <span>{{ $t('course.quizze.number_of_question') }} :</span>
                    <span>{{ data.questionsCount }}</span>
                </div>
                <div class="item-info">
                    <IconQuizze />
                    <span>{{ $t('course.quizze.min_score_to_pass') }} :</span>
                    <span>{{ data.minScoreToPass }}</span>
                </div>
            </div>
            <div class="container-info">
                <div class="item-info">
                    <IconAward />
                    <span>{{ $t('course.quizze.score_of_sectioon') }} :</span>
                    <span>{{ data.score }}</span>
                </div>
                <div class="item-info">
                    <IconLimit />
                    <span>{{ $t('course.quizze.number_of_attempts_remaining') }} :</span>
                    <span> {{ data.retryAttempts }} </span> / <span> {{ triesCount }} </span>
                </div>
            </div>
            <div class="item-info">
                <span>{{ $t('global.description') }} :</span>
                <span>{{ data.description }}</span>
            </div>
            <!-- btn start quizze -->
            <div class="footer-container" v-if="joinPermission.isAllowedToJoin">
                <BaseBtn type="button" v-if="status == 'failed' || status == 'passed'" type-design="action"
                    :text="$t('course.quizze.show_result')" :disabled="!joinPermission.isAllowedToJoin"
                    customDesign="bg-orange-500 !text-[13px] !px-3  " :loading="loadingResult" @click="$emit('result')" />
                <BaseBtn type="button" type-design="action" :text="startBtnText"
                    :disabled="!joinPermission.isAllowedToJoin" customDesign="bg-red-500 !text-[13px] !px-3"
                    :loading="loadingJoin" @click="$emit('join')" />
            </div>
        </template>
    </NuxtLayout>
</template>
<style scoped>
.container-info {
    @apply flex items-center gap-x-5 font-semibold
}

.item-info {
    @apply flex items-center gap-x-1 text-sm text-gray-300 font-semibold
}

.footer-container {
    @apply w-full flex justify-end gap-x-2 mt-4
}
</style>
