<script setup lang="ts">
import { CoursesList } from "~/stores/course/list";
import { CourseCategoryList } from "~/stores/course/category";

const route = useRoute();

const courseCategoryListStore = CourseCategoryList();
const coursesListStore = CoursesList();

onMounted(async () => {
  await coursesListStore.resetCoursesList();
  await courseCategoryListStore.getCourseCategoryList();
});

const handleInput = (value: string) => {
  if (value.length == 0) {
    coursesListStore.getCoursesList({ page: 1 });
    navigateTo(`${route.path}`);
  }
};

const pushToCourses = () => {
  coursesListStore.resetCoursesList();
  coursesListStore.getCoursesList({ page: 1 });
};
</script>

<template>
  <div class="container-course">
    <div class="w-full flex flex-col gap-y-3">
      <SearchBox
        v-model:model-value="coursesListStore.dataModel.name"
        @search="coursesListStore.searchCourses"
        @input="handleInput"
      />
      <LoadingCategroycarouselCard v-if="courseCategoryListStore.loading" />
      <CategoryCarousel
        :categories="courseCategoryListStore.list"
        type="courses"
        v-else
        @pushToAllPage="pushToCourses"
      />
    </div>
    <div class="flex items-center justify-between" v-if="route.query.search">
      <div class="flex items-center gap-x-1">
        <span> {{ $t("global.search_result") }}: </span>
        <span> {{ route.query.search }} </span>
      </div>
      <div class="cursor-pointer" @click="coursesListStore.clearSearch">
        <IconTrash class="w-6 h-6" />
      </div>
    </div>

    <div class="w-full">
      <CourseSortList />
    </div>

    <div class="w-full">
      <div v-if="coursesListStore.loading" class="container-card">
        <LoadingCourseCard v-for="(_, index) in 6" :key="index" />
      </div>
      <div v-else>
        <slot />
      </div>
    </div>
  </div>
</template>

<style>
.container-course {
  @apply w-full flex flex-col gap-y-5;
}

.container-card {
  @apply w-full  grid grid-cols-2 gap-4  gap-y-4 mb-2;
}
</style>
