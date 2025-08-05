<script lang="ts" setup>
import { CoursesList } from '~/stores/course/list';

const route = useRoute()

const coursesListStore = CoursesList()
const slug = computed(() => route.params.slug || "")

onMounted(async () => {
    await coursesListStore.resetCoursesList()
    await coursesListStore.getCoursesList({
        categorySlug: typeof slug.value === 'string' ? slug.value : '',
        name: route.query.search ? String(route.query.search) : ''
    })
})

watch(
    slug,
    async (value: string | string[]) => {
        if (!value || typeof value !== 'string') return

        coursesListStore.resetCoursesList()
        await coursesListStore.getCoursesList({
            categorySlug: value,
            page: 1,
        })
    },
    { immediate: false }
)

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

<style scoped>

.container-card {
    @apply w-full grid grid-cols-2 sm:grid-cols-2 gap-4;
}

</style>
