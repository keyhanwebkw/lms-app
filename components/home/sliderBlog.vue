<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay } from 'swiper/modules';
import type { DataSliderCardBlog } from '~/types/home';

 defineProps<DataSliderCardBlog>()
</script>

<template>
    <Swiper class="container-swiper" :modules="[Autoplay]" :pagination="true" :slides-per-view="2" :loop="true"
        :autoplay="{
            delay: 3000,
            disableOnInteraction: false
        }" :space-between="10" :breakpoints="{

        }">
        <SwiperSlide v-for="data in dataList" :key="data.ID" class=" pr-1 !flex justify-center ">
            <HomeCardBlog :data-list="data" :key="data.ID" />
        </SwiperSlide>
    </Swiper>
</template>

<style scoped>
.container-swiper {
    @apply w-full py-3 px-2 flex justify-center;
}
</style>
