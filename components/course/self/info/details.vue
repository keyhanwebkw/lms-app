<script lang="ts" setup>
import { useI18n } from "vue-i18n";
import type { DataDetailsInfo } from "~/types/course";

// Props
const props = defineProps<DataDetailsInfo>();

// i18n
const { t } = useI18n();

// State: status-based color
const statusClass = computed((): string => {
  const statusColors: Record<string, string> = {
    completed : "bg-red-700",
    ongoing: "bg-green-100",
    upcoming: "bg-blue-100",
  };
  return statusColors[props.status] 
});

// Course type label
const typeLabel = computed((): string =>
  props.type === "video"
    ? t("course.detailsCourse.video_tutorial")
    : t("course.detailsCourse.audio_training")
);

// Feature list items
const itemsList = computed(() => [
  {
    id: 1,
    icon: "CourseActive",
    title: t("course.detailsCourse.course_length"),
    value: `${props.duration} ${t("global.hour")}`,
  },
  {
    id: 2,
    icon: "Sound",
    title: t("course.detailsCourse.placement_model"),
    value: typeLabel.value,
  },
  {
    id: 3,
    icon: "UserInfo",
    title: t("course.detailsCourse.teacher"),
    value: props.teacher.name,
  },
]);
</script>

<template>
  <div class="container-box-details-course">
    <div class="flex gap-x-4">
      <!-- Course Category -->
      <div class="item-box text-black bg-gray-100">
        <IconTitleCourse />
        <span>{{ category }}</span>
      </div>

      <!-- Course Status -->
      <div class="item-box text-white" :class="statusClass">
        <IconStatusCourse />
        <span>{{ t(`course.detailsCourse.${status}`) }}</span>
      </div>
    </div>

    <!-- Course Title -->
    <div>
      <span class="title-details-course">{{ title }}</span>
    </div>

    <!-- Features List -->
    <div class="container-list-feature-details-course">
      <div
        class="item-feature"
        v-for="item in itemsList"
        :key="item.id"
      >
        <div class="icon-feature">
          <component :is="'Icon' + item.icon" class="text-white w-[15px]" />
        </div>
        <span class="title-feature">{{ item.title }} :</span>
        <span class="value-feature">{{ item.value }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container-box-details-course {
  @apply w-full flex flex-col gap-y-8;
}

.container-box-details-course .item-box {
  @apply px-4 h-10 flex justify-center items-center gap-x-2 text-xs rounded-[30px] font-semibold;
}

.container-box-details-course .title-details-course {
  @apply text-white text-xl;
}

.container-list-feature-details-course {
  @apply flex flex-col gap-y-3;
}

.container-list-feature-details-course .item-feature {
  @apply flex gap-x-2 items-center;
}

.container-list-feature-details-course .icon-feature {
  @apply w-[22px] h-[22px] border border-white rounded-sm flex justify-center items-center;
}

.container-list-feature-details-course .title-feature {
  @apply text-white text-sm font-normal;
}

.container-list-feature-details-course .value-feature {
  @apply text-white text-sm;
}
</style>
