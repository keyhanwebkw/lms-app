<script setup lang="ts">
import type { DataSliderCardBlog } from '~/types/home';

 defineProps<DataSliderCardBlog>()
</script>

<template>
    <Swiper class="w-full py-3 " :pagination="true" :slides-per-view="1" :loop="true" :autoplay="{
        delay: 4000,
        disableOnInteraction: false,
    }" :space-between="10">
          <SwiperSlide v-for="data in dataList" :key="data.ID" class="w-full flex justify-center">
                <HomeCardBlog :data-list="data" :data-list-category="dataListCategory" />
            </SwiperSlide>

    </Swiper>
</template>

