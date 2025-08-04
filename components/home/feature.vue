<script setup lang="ts">
import type { DataContentFeature } from '~/types/home';

defineProps<DataContentFeature>()

</script>

<template>
    <div class="lg:w-[230px] xl:w-[300px] flex flex-col gap-y-5 items-center ">
        <!-- icon -->
        <div class="w-[150px] h-[150px] rounded-full p-[10px] flex items-center justify-center"
            :style="`border:solid 2px ${dataListItemFeature.color}`">
            <div class="w-full h-full bg-blue-500 rounded-full flex justify-center items-center p-3">
                <NuxtImg :src="dataListItemFeature.icon"
                    :alt="'img' + dataListItemFeature.translations[0].title" class="w-full h-full rounded-full" />
            </div>
        </div>
        <!-- title -->
        <div>
            <span class="font-bold text-sm">
                {{ dataListItemFeature.translations[0].title }}
            </span>
        </div>
    </div>
</template>
