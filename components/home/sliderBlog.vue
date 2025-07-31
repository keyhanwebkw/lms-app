<script setup lang="ts">
// import { Swiper, SwiperSlide } from 'swiper/vue';
import type { DataSliderCardBlog } from '~/types/blog';

const props = defineProps<DataSliderCardBlog>();
</script>

<template>
    <Swiper class="w-full py-3 " :pagination="true" :slides-per-view="2" :loop="true" :autoplay="{
        delay: 4000,
        disableOnInteraction: false,
    }" :space-between="10">
        <SwiperSlide v-for="data in props.dataList" :key="data.ID">
            <BlogHomePageCard :data-list="data" />
        </SwiperSlide>
    </Swiper>
</template>
