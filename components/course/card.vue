<script setup lang="ts">
import type { DetailsCoursesList } from '~/types/course';
import { separate } from '~/func/separate';

const config = useRuntimeConfig()
const props = defineProps<{ course: DetailsCoursesList }>()

const courseBanner = computed(() => {
    return props.course.banner ? `${config.public.storage.thumbnail}${props.course.banner.fullSID}` : '/img/notFound.webp'
})

</script>

<template>
    <div class="card-course">
        <NuxtLink :to="'/course/' + course.slug"
            class="w-full h-auto flex flex-col gap-x-3 items-center rounded-primary bg-white shadow-[0px_2px_8px_0px_#0000001A] ">
            <div class="w-full h-[150px]">
                <NuxtImg :src="courseBanner" :alt="course.name" class="rounded-primary w-full h-full" />
            </div>
            <div class="w-full flex flex-col gap-y-3 py-3 pl-2 p-2">
                <div>
                    <span class="font-bold text-sm text-blue-500 course-name-limit">{{ course.name }}</span>
                </div>
                <div class="text-gray-300 flex justify-between items-center gap-x-1 "> 
                    <span class="text-xs">{{ course.teacher.name }}{{ course.teacher.family }}</span>
                    <div class="text-gray-300 flex items-center gap-x-1">
                        
                        <div class="text-xs flex gap-x-1"><span>{{ course.duration }}</span><span>{{
                            $t('global.hour')
                                }}</span></div>
                    </div>
                </div>
                <div class="flex justify-center border border-blue-300 rounded-full py-1 ">
                    <span class="font-semibold text-sm text-blue-300 ">{{ separate(course.price) }} {{ $t('global.unit') }}</span>
                    
                </div>
            </div>
        </NuxtLink>
    </div>

</template>

<style scoped>
.course-name-limit {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  word-break: break-word;
}
</style>

