<script lang="ts" setup>
import type { TypeCardSliderCourse } from '~/types/home';

const prop = defineProps<TypeCardSliderCourse>()
</script>

<template>
    <div class="relative w-full flex flex-col gap-y-6 ">
        <!-- title -->
        <BaseTitleSection :title="pageTitle" icon="exam.svg" />
        <!-- card course -->
        <div class=" h-[550px] px-8 flex items-center rounded-[40px] bg-slider-primary bg-no-repeat bg-cover !z-50 shadow-primary-300 ">
          <HomeSliderLatestCourse  :dataList="dataList"  />
        </div>  
    </div>
</template>