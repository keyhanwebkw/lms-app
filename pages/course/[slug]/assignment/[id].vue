<script lang="ts" setup>
import { useDetailsAssignment } from '~/stores/course/assignment';

const detailsAssignment = useDetailsAssignment()
const route = useRoute()

const assignmentId = Number(route.params.id)

onMounted(async () => {
    detailsAssignment.getDataGeneralitiesAssignment(assignmentId)
})

const changeStatusPopup = () => {
    detailsAssignment.popupContentAssignment = !detailsAssignment.popupContentAssignment
    if (detailsAssignment.status == 'todo') {
        detailsAssignment.getDataGeneralitiesAssignment(assignmentId)
    }
}

</script>

<template>
    <div>
        <div class="container-assignment" v-if="detailsAssignment.loading">
            <LoadingTitlePage />
            <LoadingCardAssigment />
        </div>
        <div v-else>
            <div v-if="detailsAssignment.pageNotFound">
                <PageNotFound />
            </div>
            <div class="container-assignment" v-else>
                <BaseTitle type="icon" icon="Question"
                    :title="`${$t('course.assignment.title')} ${detailsAssignment.dataAssignment.title}`" />
                <CourseAssignmentCardDetails :submissionDeadline="detailsAssignment.submissionDeadline"
                    :dataAssignment="detailsAssignment.dataAssignment" :status="detailsAssignment.status"
                    :isAllowedToReceive="detailsAssignment.dataReceivePermission.isAllowedToReceive"
                    @viewAssignment="detailsAssignment.getRecevieAssignment()"
                    :loadingBtn="detailsAssignment.loadingReceive"
                    :dataManagerResponse="detailsAssignment.dataManagerResponse" />

                <div v-if="detailsAssignment.status !== 'todo' && detailsAssignment.status !== 'accepted'">
                    <Upload :dataListContent="detailsAssignment.dataUserContent"
                        @submit="detailsAssignment.handleSendAssignment" :status="detailsAssignment.status" />
                </div>
                <div class="w-full h-full" v-if="detailsAssignment.popupContentAssignment">
                    <CourseAssignmentPopupContent :dataContentAssignment="detailsAssignment.dataContentAssignment"
                        :showPopup="detailsAssignment.popupContentAssignment" @close="changeStatusPopup" />
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.container-assignment {
    @apply w-full flex flex-col gap-y-5;
}

</style>
