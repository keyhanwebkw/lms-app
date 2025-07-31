<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import type { DataSliderFilterCourse } from '~/types/course';


const emit = defineEmits<{
    (event: 'showPopup', value: string | number): void;
}>();

const props = defineProps<DataSliderFilterCourse>();
</script>

<template>
    <Swiper class="w-full" :pagination="true" :slides-per-view="3" :loop="true" :autoplay="{
        delay: 4000,
        disableOnInteraction: false,
    }"
    :breakpoints="{
        350: {
            slidesPerView: 3,
        },
        450:{
            slidesPerView: 3.5,
        }
    }">
        <SwiperSlide v-for="filter in props.dataListFilter" :key="filter.ID">
            <BaseBtn type="button" type-design="outline-action"  customDesign="border-gray-100 !text-gray-300" :text="filter.title" :icon="filter.icon"
                :loading="false" @click="$emit('showPopup', filter.ID)" />
        </SwiperSlide>
    </Swiper>
</template>


