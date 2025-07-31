<script lang="ts" setup>
import PageNotFound from '~/components/global/pageNotFound.vue';
import { useExamStore } from '~/stores/course/exam';

const route = useRoute()
const dataExam = useExamStore()

onMounted(async () => {
    await dataExam.fetchExamDetails(Number(route.params.id))
})

</script>

<template>
    <div class="exam-page">
        <div class="exam-container" v-if="dataExam.loading.page">
            <LoadingTitlePage />
            <LoadingExamDetails />
        </div>
        <div v-else-if="dataExam.pageNotFound" class="page-not-found">
            <PageNotFound class="!h-auto" />
        </div>
        <div v-else class="exam-container">
            <BaseTitle type="icon" icon="Question" :title="`${dataExam.detailsExam.title}`" />
            <div v-if="dataExam.activeComponent.details">
                <CourseExamDetails :data="dataExam.detailsExam" :status="dataExam.examStatus"
                    :tries-count="dataExam.triesCount" :loadingJoin="dataExam.loading.join"
                    :joinPermission="dataExam.joinPermission" @join="dataExam.joinExam()"
                    :loading-result="dataExam.loading.resultBtn" @result="dataExam.fetchResultExam" />
            </div>
            <div v-else-if="dataExam.activeComponent.question">
                <LoadingExamQuestion v-if="dataExam.loading.question" />
                <CourseExamQuestions v-else :title="dataExam.detailsExam.title" :data-question="dataExam.dataQuestions"
                    :total-questions="dataExam.detailsQuestions.totalQuestions"
                    :current-question="dataExam.detailsQuestions.currentQuestionNumber"
                    :has-more="dataExam.detailsQuestions.hasMoreQuestions"
                    @select-option="dataExam.updateSelectedOption" :loading="dataExam.loading.answer"
                    @submit-answer="dataExam.submitAnswer" :timer="dataExam.timer.displayTime" />
            </div>
            <div v-else-if="dataExam.activeComponent.result">
                <CourseExamResult :data="dataExam.resultExam"
                    :total-questions="dataExam.detailsQuestions.totalQuestions"
                    :min-score-to-pass="dataExam.detailsExam.minScoreToPass" :loading-join="dataExam.loading.join"
                    @retry-exam="dataExam.joinExam" />
            </div>
            <div class="w-full" v-if="!dataExam.joinPermission.isAllowedToJoin">
                <ToastMessageStatic :msg="dataExam.joinPermission.errorMessage" :is-success="false" />
            </div>
        </div>
    </div>
</template>

<style scoped>
.exam-page {
    @apply w-full flex flex-col
}

.page-not-found {
    @apply w-full flex flex-col min-h-[calc(100vh-200px)] items-center justify-center gap-y-5
}

.exam-container {
    @apply w-full flex flex-col gap-y-5
}
</style>