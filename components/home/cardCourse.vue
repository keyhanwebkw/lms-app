<script lang="ts" setup>
import type { TypeCardCourse } from "~/types/home";
import { limitWord } from "~/func/limitWords";
import { separate } from "~/func/separate";

const props = defineProps<TypeCardCourse>();
const local = useI18n();
const imageSrc = ref<string>("");
const route = useRoute()

const name = computed(() => route.name == 'my-courses___fa-IR' ? 'my-courses-slug___fa-IR' : 'course-slug___fa-IR')


const handleImageError = () => {
    imageSrc.value = "/img/png/images.jpg";
};

imageSrc.value = props.dataList.image_cover;
</script>

<template>
    <div class="box-card-course ">
        <!-- img -->
        <NuxtLink :to="{ name: name, params: { slug: dataList.slug } }" class="index-img-course">
            <NuxtImg :src="imageSrc" :alt="dataList.title" class="rounded-primary "
                @error="handleImageError" />
        </NuxtLink>
        <!-- content -->
        <div class="container-content-card-course">
            <!-- type -->
            <div class="type-card-course">
                <span>{{ $t('course.title') }}</span>
            </div>
            <!-- title -->
            <div class="container-title-card-course">
                <NuxtLink :to="{ name: name, params: { slug: dataList.slug } }" class="">{{ dataList.title }}
                </NuxtLink>
            </div>
            <!-- description -->
            <div class="text-xs !leading-6" v-html="limitWord({ sentens: dataList.description, count: 15 })"></div>

            <div class="first-line-card-course"></div>

            <div class="container-details-card-course">
                <div class="right-section">
                    <!-- teacher -->
                    <div class="teacher-right-section">
                        <IconUser />
                        <span class="text-sm mt-1">{{ dataList.teacher.full_name }}</span>
                    </div>
                    <!-- time -->
                    <div class="flex items-center gap-x-1 text-xs">
                        <IconClock class="text-orange-300"/>
                        <span> {{ dataList.duration }}</span>
                        <span>{{ $t("global.minute") }}</span>
                    </div>

                </div>

                <div class="left-section">
                    <!-- point -->
                    <span >{{ dataList.points }}</span>
                    <NuxtImg src="/img/star.png"  />
                </div>
            </div>
            <div class="secend-line-card-course"></div>
            <div class="flex justify-between items-center">
                <!-- amount  -->
                <div class="right-bar">
                    <div class="user-group flex gap-x-2 items-center">
                        <IconUserGroup class="text-orange-300" />
                        <span class="text-sm"> {{ dataList.capacity }}</span>
                    </div>
                </div>
                <!-- price -->
                <div >
                    <div v-if="dataList.price !== 0" class="">
                        <span class="text-orange-300">{{ separate(dataList.price) }} {{ local.t("global.unit") }}</span>
                    </div>
                    <div class="offer-price-card-course flex flex-col items-center" v-else>
                        <span class="text-green-300">{{ local.t("global.free") }}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<style scoped>
.box-card-course {
    @apply w-[300px]  rounded-primary flex flex-col shadow-[2px_1px_4px_0px_rgba(0,0,0,0.25)] gap-y-3 bg-white pb-3 hover:shadow-[1px_1px_14px_0px_#2980B980]
}

.box-card-course .index-img-course img {
    @apply w-full h-[200px]
}

.box-card-course .container-content-card-course {
    @apply px-5 flex flex-col gap-y-2 text-lg
}

.box-card-course .type-card-course {
    @apply w-[90px] h-[40px] rounded-primary text-[13px] bg-blue-300 text-white flex justify-center items-center hover:bg-white hover:border hover:border-blue-300 hover:text-blue-300
}

.box-card-course .container-title-card-course {
    @apply w-full flex justify-center font-bold
}

.box-card-course .first-line-card-course {
    @apply w-full h-[2px] bg-blue-300 mt-3 relative after:content-[''] after:absolute after:-right-1 after:-top-[3px] after:z-40 after:w-2 after:h-2 after:bg-blue-300 after:rotate-45 before:absolute before:-left-1 before:-top-[3px] before:z-40 before:w-2 before:h-2 before:bg-blue-300 before:rotate-45
}

.box-card-course .container-details-card-course {
    @apply w-full flex justify-between items-center mt-1
}

.box-card-course .container-details-card-course .right-section {
    @apply w-[80%] flex gap-x-3 items-center
}

.box-card-course .container-details-card-course .right-section .teacher-right-section {
    @apply text-[#FF810C] flex gap-x-1 items-center
}

.box-card-course .container-details-card-course .right-section .teacher-right-section span {
    @apply text-[#000] text-xs
}

.box-card-course .container-details-card-course .right-section .time-right-section {
    @apply text-[#FF810C] flex gap-x-1
}

.box-card-course .container-details-card-course .right-section .time-right-section span {
    @apply text-[#000] mt-[2px]
}

.box-card-course .container-details-card-course .left-section {
    @apply w-[20%] flex justify-end gap-x-1 items-center
}

.box-card-course .container-details-card-course .left-section span {
    @apply text-[#FF810C] text-lg
}

.box-card-course .container-details-card-course .left-section img {
    @apply w-[20px] h-[20px] -mt-2
}

.box-card-course .container-details-card-course .secend-line-card-course {
    @apply w-full h-[2px] bg-[#93939380] mt-1
}

.box-card-course .container-details-card-course .container-bottom-section-card-course {
    @apply w-full flex justify-between items-center mt-1
}

.box-card-course .container-details-card-course .container-bottom-section-card-course .right-bar {
    @apply w-1/2 flex gap-x-3
}

.box-card-course .container-details-card-course .container-bottom-section-card-course .right-bar .user-group {
    @apply text-[#FF810C] !flex gap-x-1
}

.box-card-course .container-details-card-course .container-bottom-section-card-course .right-bar .user-group span {
    @apply text-[#000] mt-[2px]
}

.box-card-course .container-details-card-course .container-bottom-section-card-course .content-price-card-course {
    @apply w-1/2 flex flex-col justify-end gap-x-2 items-center text-orange-300
}

.box-card-course .container-details-card-course .container-bottom-section-card-course .content-price-card-course .offer-price-card-course {
    @apply flex flex-col items-center
}

.box-card-course .container-details-card-course .container-bottom-section-card-course .content-price-card-course .offer-price-card-course del {
    @apply text-[#575757] text-xs
}

.box-card-course .container-details-card-course .container-bottom-section-card-course .content-price-card-course .offer-price-card-course span {
    @apply text-green-300
}
</style>