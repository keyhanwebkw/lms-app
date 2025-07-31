<script lang="ts" setup>
import type { DataTitle } from '~/types/global'

defineProps<DataTitle>()

</script>

<template>
    <div v-if="type == 'back'" class="container-title-back">
        <span class="base-title text-xl">{{ title }}</span>
    </div>
    <div v-else class="container-title-icon">
        <component :is="'Icon' + icon" class="w-6 h-6 text-purple-500" />
        <span class="base-title">{{ title }}</span>
    </div>

</template>

<style scoped>
.container-title-back {
    @apply w-full flex justify-between items-center py-2
}

.container-title-icon {
    @apply flex gap-x-3 border-b-2 pb-2 items-center border-purple-500
}

.base-title {
    @apply text-purple-500 font-bold
}
</style>