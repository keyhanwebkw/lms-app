<script setup lang="ts">
import { BlogList } from "~/stores/blog/list"

const route = useRoute()
const blogListStore = BlogList()

onMounted(async () => {
    await blogListStore.getBlogCategoryList()
})

const handleInput = (value: string) => {
    if (value.length == 0) {
        blogListStore.getBlogList({ page: 1 })
        navigateTo(`${route.path}`)
    }
}

const pushToBlogs = () => {
    blogListStore.resetBlogList()
    blogListStore.getBlogList({ page: 1 })
}

</script>

<template>
    <div class="container-blog">
        <div class="w-full flex flex-col gap-y-3">
            <SearchBox v-model:model-value="blogListStore.dataModel.title" @search="blogListStore.searchBlog"
                @input="handleInput" />
            <LoadingCategroycarouselCard v-if="blogListStore.category.loading" />
            <CategoryCarousel :categories="blogListStore.category.list" type="blog" v-else
                @pushToAllPage="pushToBlogs" />
        </div>
        <div class="flex items-center justify-between" v-if="route.query.search">
            <div class="flex items-center gap-x-1">
                <span>
                    {{ $t('global.search_result') }}:
                </span>
                <span> {{ route.query.search }} </span>
            </div>
            <div class="cursor-pointer" @click="blogListStore.clearSearch">
                <IconTrash class="w-6 h-6" />
            </div>
        </div>
        <div class="w-full">
            <div v-if="blogListStore.loading" class="container-card">
                <LoadingCourseCard v-for="(_, index) in 6" :key="index" />
            </div>
            <div v-else>
                <slot />
            </div>
        </div>
    </div>
</template>

<style>
.container-blog {
    @apply w-full flex flex-col gap-y-4
}

.container-card {
    @apply w-full grid grid-cols-1 gap-y-4 mb-2
}
</style>
