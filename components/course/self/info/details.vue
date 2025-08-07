<script lang="ts" setup>
import { useI18n } from "vue-i18n";
import type { DataDetailsInfo } from "~/types/course";

// Props
const props = defineProps<Partial<DataDetailsInfo>>();

// i18n
const { t } = useI18n();

// State: status-based color
const statusClass = computed((): string => {
  const statusColors: Record<string, string> = {
    completed : "bg-red-700",
    ongoing: "bg-green-100",
    upcoming: "bg-blue-100",
  };
  return props.status ? statusColors[props.status] : "bg-gray-200";
});

// Course type label
const typeLabel = computed((): string => {
  if (!props.type) return "-";
  return props.type === "video"
    ? t("course.detailsCourse.video_tutorial")
    : t("course.detailsCourse.audio_training");
});

// Feature list items
const itemsList = computed(() => [
  {
    id: 1,
    icon: "CourseActive",
    title: t("course.detailsCourse.course_length"),
    value: props.duration ? `${props.duration} ${t("global.hour")}` : "-",
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
    value: props.teacher?.name ?? "-",
  },
]);
</script>

<template>
  <div class="container-box-details-course">
    <div class="flex gap-x-4">
      <!-- Course Category -->
      <div v-if="category && String(category).trim().length > 0" class="item-box text-black bg-gray-100">
        <span>{{ category }}</span>
      </div>

      <!-- Course Status -->
      <div v-if="status" class="item-box bg-blue-300 text-white" :class="statusClass">
        <IconStatusCourse />
        <span>{{ t(`course.detailsCourse.${status}`) }}</span>
      </div>
    </div>

    <!-- Course Title -->
    <div v-if="title">
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
          <component :is="'Icon' + item.icon" class="text-blue-500 mb-2 " />
        </div>
        <span class="title-feature">{{ item.title }} :</span>
        <span class="value-feature">{{ item.value }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container-box-details-course {
  @apply w-full flex flex-col ;
}

.container-box-details-course .item-box {
  @apply px-4 h-10 flex justify-center items-center gap-x-2 text-xs rounded-[30px] font-semibold;
}

.container-box-details-course .title-details-course {
  @apply text-black text-xl;
}

.container-list-feature-details-course {
  @apply flex flex-row justify-between px-5;
}

.container-list-feature-details-course .item-feature {
  @apply flex flex-col  items-center text-center p-1 py-4 rounded-primary gap-x-5  w-[31%] shadow-[0px_1px_5px_0px_#2980B940] ;
}

.container-list-feature-details-course .icon-feature {
  @apply border border-white rounded-sm flex justify-center items-center;
}

.container-list-feature-details-course .title-feature {
  @apply text-blue-500 text-sm font-normal;
}

.container-list-feature-details-course .value-feature {
  @apply text-blue-500 text-sm;
}
</style>
