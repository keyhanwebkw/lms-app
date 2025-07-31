<script lang="ts" setup>
import { colors } from "~/services/constants/index";
import { CourseCategoryList } from "~/stores/course/category"

const courseCategoryListStore = CourseCategoryList()
courseCategoryListStore.getCourseCategoryList()

</script>

<template>
    <div class="container-category">
        <span>{{ $t('course.category_learn') }}</span>
        <div class="container-item" v-if="courseCategoryListStore.loading">
            <div v-for="data in 9" :key="data">
                <LoadingCardCategory />
            </div>
        </div>
        <div class="container-item" v-else>
            <div v-for="(data, index) in courseCategoryListStore.list" :key="index">
                <CourseCategorycarouselCard :data="data" :color="colors[index]" />
            </div>
        </div>
    </div>
</template>

<style>
@import '/assets/css/course.css';
</style>