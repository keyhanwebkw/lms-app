<script lang="ts" setup>
import { GenerateDate } from '~/func/GenerateDate';
import type { DataCardBlog } from '~/types/home';
import { limitWord } from '~/func/limitWords';

const props = defineProps<DataCardBlog>()
const resultTime = GenerateDate({ timestamp: props.dataList.created_at, type: 'numberDate' })
</script>
<template>
      <div class="card-blog my-1 w-full ">
        <NuxtLink :to="{name:'blog-slug___fa-IR' , params:{slug:dataList.slug}}" class="container-card-blog">
            <div class="img-container">
                <div v-if="dataList.image">
                  <!-- <NuxtImg :src="`${$config.public.storage.thumbnail}${dataList.image}`" :alt="dataList.translations[0].title" /> -->
                    <img src="/public/img/banner.webp" alt="">
                </div> <NuxtImg src="/public/img/banner.webp" alt="img thumbnail" class="w-full h-[178px] rounded-primary" v-else />

            </div>
            <div class="container-content second-gap">
                <div>
                    <span class="title-blog">{{ limitWord({ sentens: dataList.translations[0].title, count: 7 }) }}</span>
                </div>
                <!-- <div class="container-category" >
                    <div class="item-category" >
                        {{ dataList. }}
                    </div>
                </div> -->
                <div class="container-bottom-card">
                    <span class="view-more">
                        {{ $t('global.view_more') }}
                    </span>
                    <span class="study-time">
                        {{ resultTime }} 
                    </span>
                </div>
            </div>
        </NuxtLink>
    </div>
</template>

<style scoped>



.container-card-blog {
    @apply  flex flex-col gap-y-3 rounded-sm p-2 bg-white shadow-primary
}

.container-card-blog .img-container {
    @apply w-full h-full
}

.container-card-blog .img-container img {
    @apply w-full h-full rounded-sm object-cover
}

.container-card-blog .title-blog {
    @apply text-sm font-bold
}

.container-card-blog .container-content {
    @apply w-full flex flex-col justify-between py-1 gap-y-0
}

.container-card-blog .container-category {
    @apply flex gap-x-3 justify-center text-center
}

.container-category .item-category {
    @apply px-4 py-1 rounded-full  text-[10px] text-blue-500 -mt-3
}

.container-card-blog .container-bottom-card {
    @apply w-full flex flex-row gap-y-2 justify-between items-center mt-3
}

.container-card-blog .view-more {
    @apply text-xs text-blue-500
}

.container-card-blog .study-time {
    @apply text-xs text-gray-500
}
</style>