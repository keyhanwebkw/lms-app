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
            class="w-full h-auto flex gap-x-3 items-center rounded-sm bg-white shadow-primary p-2">
            <div class="w-[260px] h-[124px]">
                <NuxtImg :src="courseBanner" :alt="course.name" class="rounded-sm w-full h-full" />
            </div>
            <div class="w-full flex flex-col gap-y-3 py-3 pl-2">
                <div>
                    <span class="text-sm ">{{ course.name }}</span>
                </div>
                <div class="text-gray-300 flex items-center gap-x-1">
                    <IconTeacher />
                    <span class="text-xs">{{ course.teacher.name }}{{ course.teacher.family }}</span>
                </div>
                <div class="flex justify-between">
                    <span class="text-sm text-purple-500">{{ separate(course.price) }} {{ $t('global.unit') }}</span>
                    <div class="text-red-500 flex items-center gap-x-1">
                        <IconTime />
                        <div class="text-xs flex gap-x-1"><span>{{ course.duration }}</span><span>{{
                            $t('global.hour')
                                }}</span></div>
                    </div>
                </div>
            </div>
        </NuxtLink>
    </div>
</template>