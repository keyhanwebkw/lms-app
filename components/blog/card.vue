<script setup lang="ts">
import type { DetailsCardBlog } from '~/types/blog';
import { limitWord } from '~/func/limitWords';

defineProps<{ data: DetailsCardBlog }>()

</script>

<template>
    <div class="card-blog">
        <NuxtLink :to="`/blog/${data.slug}`" class="container-card-blog">
            <div class="img-container">
                <div v-if="data.posterSID?.fullSID">
                 
                  <NuxtImg :src="`${$config.public.storage.thumbnail}${data.posterSID.fullSID}`" :alt="data.title" />
                </div> <NuxtImg src="/img/default.jpg" alt="img thumbnail" class="w-full h-[178px] rounded-primary" v-else />

            </div>
            <div class="container-content second-gap">
                <div>
                    <span class="title-blog">{{ limitWord({ sentens: data.title, count: 7 }) }}</span>
                </div>
                <div class="container-category" v-if="data.categories">
                    <div class="item-category" v-for="category in data.categories.slice(0, 3)" :key="category.ID">
                        {{ category.title }}
                    </div>
                </div>
                <div class="container-bottom-card">
                    <span class="view-more">
                        {{ $t('global.view_more') }}
                    </span>
                    <span class="study-time">
                        {{ data.readingTime }} {{ $t('global.minute') }} {{ $t('global.study') }}
                    </span>
                </div>
            </div>
        </NuxtLink>
    </div>
</template>

<style scoped>
.container-card-blog {
    @apply w-full flex gap-x-3 rounded-sm p-2 bg-white shadow-primary
}

.container-card-blog .img-container {
    @apply w-[150px] h-[108px]
}

.container-card-blog .img-container img {
    @apply w-full h-full rounded-sm object-cover
}

.container-card-blog .title-blog {
    @apply text-sm font-bold
}

.container-card-blog .container-content {
    @apply w-full flex flex-col justify-between py-1 gap-y-5
}

.container-card-blog .container-category {
    @apply flex gap-x-3
}

.container-category .item-category {
    @apply px-4 py-1 rounded-full bg-blue-100 text-[10px] text-blue-500
}

.container-card-blog .container-bottom-card {
    @apply w-full flex justify-between items-center
}

.container-card-blog .view-more {
    @apply text-sm text-blue-500
}

.container-card-blog .study-time {
    @apply text-xs text-gray-500
}
</style>