<script setup lang="ts">
import type { DataBookMeeting } from '~/types/home';

const props = defineProps<DataBookMeeting>()
</script>
<template>
    <div class="w-full relative flex flex-col gap-y-10  justify-between">
        <div class="flex flex-col gap-y-5 ">
            <div>
                <BaseTitleSection :title="title" icon="certificate.svg" />
            </div>
            <div>
                <p class="text-sm leading-8 text-justify">
                    {{ description }}
                </p>
            </div>
            <NuxtLink :to="link" class="w-full flex justify-center ">
                <BaseBtn type="button" type-design="action" :text="$t('home.book_meeting')"
                    customDesign=" bg-blue-300 !text-white !text-sm" />
            </NuxtLink>
        </div>
        <div class="w-full flex justify-center">
            <NuxtImg :src="background" :alt="title + background" class="w-[300px] h-[300px] rounded-primary " />
        </div>
        <SiteHomeMandana style-img="absolute top-[200px] -right-[180px] -z-10 rotate-[180deg]" />
    </div>
</template>