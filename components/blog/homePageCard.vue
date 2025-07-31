<script lang="ts" setup>
import type { DataCardBlog } from '~/types/blog';
import { limitWord } from '~/func/limitWords';

 defineProps<DataCardBlog>()
</script>
<template>
    <div class="w-full flex flex-col  second-gap rounded-sm shadow-primary">
        <NuxtLink class="w-full h-[130px]">
            <NuxtImg :src="dataList.posterSID.fullSID" :alt="dataList.title"
                class="w-full object-cover rounded-t-primary h-full cursor-pointer" />
        </NuxtLink>
        <div class="flex flex-col px-2 second-gap pb-3">
            <NuxtLink to="" class="cursor-pointer">
                {{ limitWord({ sentens: dataList.title, count: 7 }) }}
            </NuxtLink>
            <div class="w-full flex justify-between text-xs">
                <NuxtLink to="" class="text-purple-500 cursor-pointer">{{ $t('global.view_more') }}</NuxtLink>
                <span class="text-gray-500">{{ dataList.readingTime }} {{ $t('global.minute') }} {{ $t('global.study')
                    }}</span>
            </div>
        </div>
    </div>
</template>