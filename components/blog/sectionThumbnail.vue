<script lang="ts" setup>
import type { DataSectionThumbnail } from '~/types/blog'

defineProps<DataSectionThumbnail>()
</script>

<template>
    <div class="container-blog-thumbnail">
        <div>
            <span class="title">{{ title }}</span>
        </div>
        <div class="w-full">
            <BlogThumbnail :posterSID="posterSID" :created="created" :readingTime="readingTime" />
        </div>
    </div>
</template>


<style scoped>
.container-blog-thumbnail {
    @apply w-full flex flex-col gap-y-4 px-4 pt-6 pb-8 bg-purple-500
}

.title {
    @apply w-full text-xl font-bold text-white
}
</style>