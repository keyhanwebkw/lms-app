<script setup lang="ts">
import type { DataListQuickAccess } from '~/types/home';

 defineProps<DataListQuickAccess>()
</script>

<template>
    <div class="item-category">
        <NuxtLink class="box-icon"  :to="dataList.slug">
            <NuxtImg :src="dataList.icon" :alt="dataList.title" />
        </NuxtLink>
        <NuxtLink  :style="{ color: `${dataList.color}` }">
            {{ dataList.title }}
        </NuxtLink>
    </div>
</template>

<style scoped>
.item-category{
    @apply w-full flex flex-col gap-y-3 items-center 
}

.box-icon {
    @apply w-[49px] h-[49px]  bg-white rounded-sm flex justify-center items-center shadow-primary
}

.box-icon img{
    @apply w-[24px] h-[24px] cursor-pointer
}

.item-category a{
    @apply text-xs font-semibold text-center cursor-pointer
}
</style>
