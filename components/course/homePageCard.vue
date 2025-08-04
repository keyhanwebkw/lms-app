<script lang="ts" setup>
import type { DataCardCourse } from '~/types/course';
import { separate } from '~/func/separate';
import { limitWord } from '~/func/limitWords';

defineProps<DataCardCourse>()

</script>
<template>
    <div class="container-card second-gap">
        <!-- image -->
        <NuxtLink :to="'/course/' + dataList.slug" class="w-full h-[140px]">
            <NuxtImg :src="`${$config.public.storage.original}${dataList.banner.fullSID}`" :alt="dataList.name"
                class="box-img" v-if="dataList.banner !== null"/>
            <NuxtImg src="/img/default.jpg" :alt="dataList.name"
                class="box-img" v-else />
        </NuxtLink>

        <div class="container-content second-gap">
            <!-- title -->
            <NuxtLink :to="'/course/' + dataList.slug">
                <span class="text-sm font-semibold">{{ limitWord({ sentens: dataList.name, count: 7 }) }}</span>
            </NuxtLink>
            <div class="container-teacher-time">
                <!-- teacher -->
                <div class="flex gap-x-1 text-gray-300">
                    <IconTeacher />
                    <span class="cursor-pointer">
                        {{ dataList.teacher.name }}{{ dataList.teacher.family }}
                    </span>
                </div>
                <!--  time -->
                <div class="flex gap-x-1 text-red-500">
                    <IconTime />
                    <span>{{ dataList.duration }} {{ $t('global.minute') }} </span>
                </div>
            </div>
            <div>
                <span class="text-blue-500 font-bold">{{ separate(dataList.price) }} {{ $t('global.unit') }}</span>
            </div>
        </div>
    </div>
</template>

<style scoped>
.container-card {
    @apply w-full flex flex-col rounded-sm shadow-primary
}

.box-img {
    @apply w-full object-cover rounded-t-primary h-full cursor-pointer
}

.container-content {
    @apply flex flex-col px-2 pb-3
}

.container-teacher-time {
    @apply w-full flex justify-between text-xs
}
</style>