<script setup lang="ts">
import type { titleSite } from '~/types/global'

const props = defineProps<titleSite>()
</script>
<template>
    <div class="flex gap-x-3 items-center w-full">
        <div v-if="icon" class="w-[40px] h-[40px] md:w-[50px] md:h-[50px] flex justify-center items-center rounded-full shadow-[0px_0px_5px_2px_[#000]]">
            <NuxtImg  :src="'/img/svg/'+ icon" :alt="title" class="w-[20px] h-[20px] md:w-[30px] md:h-[30px]" />
        </div>
        <div class=" text-blue-300 font-bold">
            <span>{{ title }}</span>
        </div>
    </div>
</template>