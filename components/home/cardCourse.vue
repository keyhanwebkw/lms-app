<script lang="ts" setup>
import type { TypeCardCourse } from "~/types/home";
import { limitWord } from "~/func/limitWords";
import { separate } from "~/func/separate";


const props = defineProps<TypeCardCourse>();
const local = useI18n();
const imageSrc = ref<string>("");
const route = useRoute()

const name = computed(() => route.name == 'my-courses___fa-IR' ? 'my-courses-slug___fa-IR' : 'course-slug___fa-IR')


const handleImageError = () => {
    imageSrc.value = "/img/png/images.jpg";
};

imageSrc.value = props.dataList.image_cover;
</script>

<template>
         <div class="card-course">
        <NuxtLink :to="{ name: name, params: { slug: dataList.slug } }"
            class="w-full h-auto flex flex-col gap-x-3 items-center rounded-primary bg-white shadow-[0px_2px_8px_0px_#0000001A] ">
            <div class="w-full h-[150px]">
                <NuxtImg :src="imageSrc" :alt="dataList.title" class="rounded-primary w-full h-full" />
            </div>
            <div class="w-full flex flex-col gap-y-3 py-3 pl-2 p-2">
                <div>
                     <NuxtLink :to="{ name: name, params: { slug: dataList.slug } }" class=""> 
                        <span class="font-bold text-sm text-blue-500 course-name-limit">{{ dataList.title }}</span>
                </NuxtLink>
                </div>
                <div class="text-gray-300 flex justify-between items-center gap-x-1 "> 
                    <span class="text-xs">{{ dataList.teacher.full_name }}</span>
                    <div class="text-gray-300 flex items-center gap-x-1">

                        <div class="text-xs flex gap-x-1"><span>{{ dataList.duration }}</span><span>{{
                            $t('global.hour')
                                }}</span></div>
                    </div>
                </div>
                <div class="flex justify-center border border-blue-300 rounded-full py-1 ">
                    <span class="font-semibold text-sm text-blue-300 ">{{ separate(dataList.price) }} {{ local.t("global.unit") }}</span>
                    
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

.card-course{
    @apply w-full flex flex-col gap-x-3 items-center rounded-primary bg-white shadow-[0px_2px_8px_0px_#0000001A];
}
</style>