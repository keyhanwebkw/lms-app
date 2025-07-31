<script lang="ts" setup>
import type { DataListSection } from '~/types/course';

defineProps<DataListSection>()
</script>

<template>
    <div class="container-card-headline">
        <div class="flex items-center gap-x-2">
            <div class="text-gray-700 font-bold ">
                {{ $t('course.detailsCourse.section') }} {{ countSection }}
            </div>
            <div class="h-5 w-[1px] bg-gray-700">

            </div>
            <div class="title-card">
                <span class=" text-[#A3A3A3]">{{ section.title }}</span>
            </div>
        </div>
        <div class="box-arrow">
            <IconArrow class=" text-gray-300 " :class="isOpen ? 'rotate-[0deg]' : 'rotate-[90deg]'" />
        </div>
        
    </div>
</template>

<style scoped>
.container-card-headline {
    @apply w-full h-[55px] rounded-sm shadow-primary px-3 flex items-center justify-between cursor-pointer
}

.title-card {
    @apply flex gap-x-3 text-sm font-semibold
}

.box-arrow {
    @apply w-5 h-5 border border-gray-300 flex justify-center items-center rounded-sm
}
</style>