<script lang="ts" setup>
import { CoursesList } from '~/stores/course/list';

const route = useRoute()
const coursesListStore = CoursesList()

onMounted(async () => {
    await coursesListStore.getCoursesList({
        name: route.query.search ? String(route.query.search) : ''
    })
})

const observerTarget = ref<HTMLElement | null>(null)

useInfiniteScrollObserver(observerTarget, coursesListStore.loadNextPage)
</script>

<template>
    <NuxtLayout name="courses">
        <EmptyList v-if="coursesListStore.list.length === 0" icon="IconCourses" :text="$t('course.empty_list')" />
        <div v-else>
            <div class="container-card">
                <CourseCard v-for="data in coursesListStore.list" :key="data.ID" :course="data" />
            </div>
            <div ref="observerTarget"
                v-if="coursesListStore.pagination.hasNextPage && !coursesListStore.pagination.loading"
                class="container-card">
                <LoadingCourseCard v-for="(_, index) in 3" :key="index" />
            </div>
        </div>
    </NuxtLayout>
</template>