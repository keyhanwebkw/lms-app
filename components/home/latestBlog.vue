<script lang="ts" setup>
import type { DataSliderCardBlog } from '~/types/home';

const prop = defineProps<DataSliderCardBlog>()
</script>

<template>
    <div class="relative w-full flex flex-col gap-y-6 ">
        <!-- title -->
        <BaseTitleSection title="مقالات اخیر" icon="exam.svg" />
        <!-- card course -->
        <div class="w-full h-[450px] px-8 flex justify-center  items-center rounded-[40px] bg-slider-primary bg-no-repeat bg-cover !z-50 shadow-primary-300 ">
          <HomeSliderBlog  :dataList="dataList"  :dataListCategory="dataListCategory" />
        </div>  
    </div>
</template>