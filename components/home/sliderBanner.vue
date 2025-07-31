<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import type { DataListBanner } from '~/types/home';

const props = defineProps<DataListBanner>();
</script>

<template>
  <Swiper
    class="custom-swiper" 
    :pagination="true"
    :slides-per-view="1"
    :loop="true"
    :autoplay="{
        delay: 4000,
        disableOnInteraction: false,
    }"
    :space-between="10"
  >
    <SwiperSlide v-for="data in props.dataList" :key="data.id">
      <NuxtImg
        :src="data.src"
        :alt="data.alt"
        class="img-banner"
      />
    </SwiperSlide>
  </Swiper>
</template>

<style scoped>
.custom-swiper {
 @apply w-full px-6
}
.img-banner{
  @apply  w-full h-[130px] rounded-primary
}
</style>
