<script setup lang="ts">
import type { DataSectionVideo } from '~/types/home';

const props = defineProps<DataSectionVideo>()
</script>
<template>
    <div class="w-full relative  flex flex-col gap-y-4 justify-between">
        <div class="flex flex-col gap-y-5 ">
            <!-- title -->
            <div>
                <BaseTitleSection :title="title" icon="" class="font-bold text-xl text-blue-500 justify-center mt-12" />
            </div>
            <!-- description -->
            <!-- <div>
                <p class="text-sm leading-8 text-justify ">
                    {{ description }}
                </p>
            </div> -->
            <!-- information -->
            <!-- <div class="w-full  flex flex-col  gap-y-4   gap-x-7">
                <div class="flex gap-x-2" v-for="data in feature" :key="data.id">
                    <div class="w-[60px] h-[60px] rounded-full bg-blue-300 flex justify-center items-center p-1">
                        <NuxtImg :src="data.icon" :alt="data.title" class="rounded-full"/>
                    </div>
                    <div class="mt-1">
                        <span class="flex font-bold text-base ">{{ data.title }}</span>
                        <span class="text-sm">{{ data.description }}</span>
                    </div>
                </div>
            </div> -->
        </div>
        <div class="w-full flex justify-center  ">
            <video controls class="w-full rounded-primary">
                <source :src="hero_vector" type="video/mp4">
            </video>
        </div>
        <SiteHomeMandana style-img="absolute -top-[150px] -left-[190px] -z-10" />
    </div>
</template>