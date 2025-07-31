<script setup lang="ts">
import type { DataSliderCardCourse } from '~/types/course';

defineProps<DataSliderCardCourse>();
</script>

<template>
    <div class="w-full flex flex-col gap-y-4">
        <div v-for="data in dataList" :key="data.ID" class="p-1">
            <CourseCard :course="data" />
        </div>
    </div>
</template>
