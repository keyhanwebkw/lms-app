<script lang="ts" setup>
import type { DataCardAssignment } from '~/types/assignment'
import { GenerateDate } from '~/func/GenerateDate'

const props = defineProps<DataCardAssignment>()

const emit = defineEmits<{
  (event: 'viewAssignment'): void
}>()

const {
  status,
  dataAssignment,
  dataManagerResponse,
  submissionDeadline,
  isAllowedToReceive,
  loadingBtn,
} = toRefs(props)

const route = useRoute()

const statusInfoMap = {
  rejected: { bg: 'bg-red-500', text: 'view_assignment' },
  resubmitted: { bg: 'bg-red-500', text: 'view_assignment' },
  accepted: { bg: 'bg-green-300', text: 'back_to_course' },
  todo: { bg: 'bg-green-300', text: 'view_assignment' },
  inProgress: { bg: 'bg-green-300', text: 'view_assignment' },
  pending: { bg: 'bg-orange-300', text: 'view_assignment' },
} as const

const info = computed(() => statusInfoMap[status.value])

function handleActionBtn() {
  if (status.value === 'accepted') {
    navigateTo(`/course/${route.params.slug}`)
  } else {
    emit('viewAssignment')
  }
}
</script>

<template>
  <NuxtLayout name="course">
    <template #info>
      <div class="w-full flex justify-between">
        <span class="text-red-500 font-semibold text-lg">{{ dataAssignment.title }}</span>
        <Status :status="status" />
      </div>

      <div class="content-container">
        <!-- deadline -->
        <div class="item-info" v-if="status === 'todo'">
          <IconTime />
          <span>{{ $t('course.assignment.dedline_submission') }} :</span>
          <span>{{ dataAssignment.deadline }} {{ $t('global.hour') }}</span>
        </div>

        <!-- remained submission deadline -->
        <div class="item-info" v-if="status === 'inProgress'">
          <IconTime />
          <span>{{ $t('course.assignment.remained_submission_deadline') }} :</span>
          <span>{{ GenerateDate({ timestamp: submissionDeadline, type: 'timeDate' }) }}</span>
        </div>

        <!-- passing score -->
        <div class="item-info">
          <IconPoint />
          <span>{{ $t('course.assignment.minimum_passing_score') }} :</span>
          <span>{{ dataAssignment.minScoreToPass }}</span>
        </div>

        <!-- retry count -->
        <div
          class="item-info"
          v-if="status !== 'accepted' && status !== 'resubmitted'"
        >
          <IconLimit />
          <span>{{ $t('course.assignment.retry_count') }} :</span>
          <div>
            <span>{{ dataAssignment.retryCount }}</span>
            <span v-if="status === 'pending'"> / 1</span>
            <span v-if="status === 'rejected'"> / {{ dataManagerResponse.retryCount }}</span>
          </div>
        </div>

        <!-- score -->
        <div class="item-info">
          <IconAward />
          <span>{{ $t('course.assignment.score') }} :</span>
          <span>
            {{
              status === 'rejected' || status === 'accepted'
                ? dataManagerResponse.receivedScore
                : dataAssignment.score
            }}
          </span>
        </div>

        <!-- coach description -->
        <div
          class="item-info w-full"
          v-if="status === 'rejected' || status === 'accepted'"
        >
          <IconMessage />
          <span>{{ $t('course.assignment.description_coach') }} :</span>
          <span>{{ dataManagerResponse.text }}</span>
        </div>
      </div>

      <!-- action button -->
      <div class="btn-container" v-if="isAllowedToReceive">
        <BaseBtn
          type="button"
          type-design="action"
          :customDesign="'!text-sm ' + info.bg"
          :text="$t(`course.assignment.${info.text}`)"
          :loading="loadingBtn"
          @click="handleActionBtn"
        />
      </div>
    </template>
  </NuxtLayout>
</template>

<style scoped>
.item-info {
  @apply flex items-center gap-x-1 text-sm text-gray-300;
}

.btn-container {
  @apply w-full flex justify-center mt-3;
}

.content-container {
  @apply flex flex-wrap gap-x-4 gap-y-6 font-semibold;
}
</style>
