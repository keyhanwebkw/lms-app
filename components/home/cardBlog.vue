<script lang="ts" setup>
import { GenerateDate } from '~/func/GenerateDate';
import type { DataCardBlog } from '~/types/home';
import { limitWord } from '~/func/limitWords';

const props = defineProps<DataCardBlog>()
const resultTime = GenerateDate({ timestamp: props.dataList.created_at, type: 'numberDate' })
</script>
<template>
    <div class="w-[290px] h-auto relative pb-3 bg-blue-900 rounded-[30px] flex flex-col ">
        <!-- img blog  -->
        <NuxtLink :to="{name:'blog-slug___fa-IR' , params:{slug:dataList.slug}}" class="w-full h-[210px] ">
            <NuxtImg :src="dataList.image" :alt="dataList.name" class="w-full h-full rounded-t-[28px] " />
        </NuxtLink>
        <!-- content clog  -->
        <div class="flex flex-col ">
            <div class="text-white text-sm py-3 border-b-[1px] border-white">
                <div class="px-5 flex flex-col gap-y-2  ">
                    <!-- title blog  -->
                    <NuxtLink  :to="{name:'blog-slug___fa-IR' , params:{slug:dataList.slug}}">{{ dataList.translations[0].title }}</NuxtLink>
                    <!-- discription blog  -->
                    <p class="text-[10px] leading-4 " style="color:white !important" v-html="limitWord({ sentens: dataList.translations[0].description, count: 20 })">
                    </p>
                </div>
            </div>
            <div class="w-full  flex justify-between px-5 mt-3">
                <!--  name  -->
                <div class="text-white flex gap-x-1">
                    <IconUser class="text-white " />
                    <span>
                        {{ dataList.author.full_name }}
                    </span>
                </div>
                <!-- count blog  -->
                <div class="text-[#0CFF5F] flex items-center gap-x-1">
                    <span>{{ dataList.enable_comment }}</span>
                    <NuxtImg src="/img/svg/comment-blog.svg" alt="" class="w-[15px]" />

                </div>
            </div>
        </div>
        <!-- date  -->
        <div
            class="w-[100px] h-[30px] bg-[#003355] flex items-center justify-center text-white rounded-300 pt-1 absolute top-4 right-4">
            {{ resultTime }}
        </div>
    </div>
</template>