<script lang="ts" setup>
import type { EmptyList } from '~/types/global';

defineProps<EmptyList>()

</script>

<template>
    <div class="container-empty-list" :class="styleContainer">
        <div class="w-[110px] h-[90px]">
            <component :is="icon" class="w-full h-full" />
        </div>
        <div>
            <p class="text-gray-500 font-semibold ">{{ text }}</p>
        </div>
    </div>
</template>

<style scoped>
.container-empty-list {
    @apply w-full min-h-[250px] flex flex-col items-center justify-center rounded-primary shadow-primary
} 
</style>