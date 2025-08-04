<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay } from 'swiper/modules';
import type { DataFeature } from '~/types/home';

defineProps<DataFeature>()
</script>

<template>
    <Swiper class="container-swiper" :modules="[Autoplay]" :pagination="true" :slides-per-view="1" :loop="true"
        :autoplay="{
            delay: 3000,
            disableOnInteraction: false
        }" :space-between="10" :breakpoints="{

        }">
        <SwiperSlide v-for="data in dataListFeature.slice(0, 4)" :key="data.id">
            <div class="flex justify-center">
                <HomeFeature :dataListItemFeature="data" />
            </div>
        </SwiperSlide>
    </Swiper>
</template>

<style scoped>
.container-swiper {
    @apply w-full py-3 px-2 flex justify-center;
}
</style>
