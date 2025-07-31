<script setup lang="ts">
import type { userAccount } from '~/types/myAccount';

const props = defineProps<userAccount>()
</script>
<template>
    <NuxtLink :to="dataList.slug"
        class="w-full flex justify-between items-center rounded-sm p-5 bg-white shadow-primary">
        <div class="flex gap-x-3">
            <component :is="'Icon' + dataList.icon" />
            <span class="text-sm text-gray-500">{{ dataList.title }}</span>
        </div>
        <div>
            <IconArrowLeft class="text-gray-300" />
        </div>
        
    </NuxtLink>
</template>
