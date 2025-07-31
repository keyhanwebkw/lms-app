<script lang="ts" setup>
import type { InfoProfile } from '~/types/global';

const props = defineProps<InfoProfile>()
</script>

<template>

    <div class="w-full relative h-[80px] flex rounded-sm  justify-between items-center bg-red-300 shadow-primary px-6">
        <div class=" flex gap-x-3 items-center ">
            <div class="w-[50px] h-[50px] ">
                <NuxtImg :src="image" :alt="name + family" class="w-full h-full rounded-sm object-cover "  />
            </div>
            <div class="flex flex-col gap-y-1">
                <span class="text-xs text-gray-300">{{ $t('home.info_child') }} :</span>
                <span class="text-purple-500">{{ name }} {{ family}}</span>
            </div>
        </div>
        <NuxtLink to="/my-account/profile" class="">
            <IconArrowLeft class="text-purple-500" />
        </NuxtLink>
    </div>
</template>