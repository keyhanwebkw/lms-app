<script lang="ts" setup>
import type { DataCardAuthorBlog } from '~/types/blog';

const props = defineProps<DataCardAuthorBlog>()
</script>

<template>
    <div class="container-card-auther">
        <div>
            <span class="title-card-auther">
                {{ $t('blog.auther_blog') }} :
            </span>
        </div>
        <div class="container-data-auther">
            <div class="box-avatar-auther">
                <NuxtImg :src="`${$config.public.storage.original}${avatar}`" :alt="'img' + (name + family)" />
            </div>
            <div class="container-info-auther">
                <span >{{ name }} {{ family }}</span>
                <p>{{ description }}</p>
            </div>
        </div>
    </div>
</template>

<style scoped>

.container-card-auther {
    @apply w-full rounded-sm py-3 px-5 shadow-primary flex flex-col gap-y-3
}

.title-card-auther {
    @apply text-purple-500 font-bold
}

.container-data-auther {
    @apply flex gap-x-3 items-center
}

.box-avatar-auther {
    @apply w-[40px] h-[40px]
}

.box-avatar-auther img {
    @apply w-full h-full rounded-full border border-purple-500 object-cover
}

.container-info-auther {
    @apply flex flex-col gap-y-2
}

.container-info-auther span {
    @apply font-bold text-sm text-gray-500
}

.container-info-auther p{
    @apply text-gray-300 text-xs
}
</style>