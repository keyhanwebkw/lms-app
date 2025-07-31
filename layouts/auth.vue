<script lang="ts" setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import type { DataLayoutAuth } from "~/types/auth"

const props = defineProps<DataLayoutAuth>()
const emit = defineEmits<{
    (event: 'submitForm'): void;
}>()

const route = useRoute()

const routeName = computed(() => String(route.name))
</script>

<template>
    <div class="auth-layout">
        <div class="content-auth-page">
            <div class="img-container">
                <NuxtImg src="/img/auth.webp" alt="avatar" />
            </div>
            <div>
                <span class="font-semibold text-purple-500">{{ $t(`pages.${routeName}`) }}</span>
            </div>
            <div>
                <p class="text-xs text-gray-300 text-center">{{ description }}</p>
            </div>
        </div>
        <form @submit.prevent="$emit('submitForm')">
            <slot name="form"></slot>

            <BaseBtn type="submit" type-design="submit" :loading="loading" :text="$t('global.confirm')" />
        </form>
    </div>
</template>

<style scoped>
.auth-layout {
    @apply w-full max-w-[330px] flex flex-col gap-y-8
}

.auth-layout .content-auth-page {
    @apply w-full flex flex-col items-center gap-y-4
}

.auth-layout form {
    @apply w-full flex flex-col gap-y-6
}

.content-auth-page .img-container {
    @apply w-[97px] h-[97px]
}

.content-auth-page .img-container img {
    @apply w-full h-full rounded-sm
}
</style>