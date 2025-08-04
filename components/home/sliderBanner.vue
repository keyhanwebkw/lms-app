<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import type { DataListBanner } from '~/types/home';

const props = defineProps<DataListBanner>();
const config = useRuntimeConfig()

const baseUrlData = ref<string>(String(config.public.baseUrl))

const isInternalLink = (link: string) => link.includes(baseUrlData.value)
const getInternalPath = (link: string) => link.replace(baseUrlData.value, '').trim()

</script>

<template>
    <Swiper class="custom-swiper" :pagination="true" :slides-per-view="1" :loop="true" :autoplay="{
        delay: 4000,
        disableOnInteraction: false,
    }" :space-between="10">
        <SwiperSlide v-for="(data, index) in props.dataList" :key="index">
            <NuxtLink :to="getInternalPath(data.link)" v-if="isInternalLink(data.link)">
                <NuxtImg :src="`${data.banner.fullSID}`" alt="img banner"
                    class="img-banner" />
            </NuxtLink>
            <a :href="data.link" v-else target="_blank">
                <NuxtImg :src="`${data.banner.fullSID}`" alt="img banner"
                    class="img-banner" />
            </a>
        </SwiperSlide>
    </Swiper>
</template>

<style scoped>
.custom-swiper {
    @apply w-full px-6
}

.img-banner {
    @apply w-full h-[180px] rounded-primary
}
</style>