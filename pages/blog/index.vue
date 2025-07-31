<script lang="ts" setup>
import { BlogList } from '~/stores/blog/list'

const route = useRoute()
const observerTarget = ref<HTMLElement | null>(null)

const dataBlog = BlogList()

onMounted(async () => {
    await dataBlog.getBlogList({
        title: route.query.search ? String(route.query.search) : '',
        page: 1
    })
})

useInfiniteScrollObserver(observerTarget, dataBlog.loadNextPage)
</script>

<template>
    <NuxtLayout name="blog">
        <div class="container-blog">
            <h1 class="text-lg text-purple-500 font-semibold -mt-4">
                {{ $t('my_account.blog.title') }}
            </h1>
            <div ref="observerTarget" v-if="dataBlog.loading" class="container-card">
                <LoadingCourseCard v-for="(_, index) in 3" :key="index" />
            </div>
            <div class="container-blog  gap-y-3" v-else>
                <BlogCard v-for="(data, index) in dataBlog.list" :key="index" :data="data" />
            </div>
        </div>

        <div ref="observerTarget" v-if="dataBlog.pagination.hasNextPage && !dataBlog.pagination.loading"
            class="container-card">
            <LoadingCourseCard v-for="(_, index) in 3" :key="index" />
        </div>
    </NuxtLayout>
</template>

<style scoped>
.container-blog {
    @apply flex flex-col gap-y-5
}
</style>