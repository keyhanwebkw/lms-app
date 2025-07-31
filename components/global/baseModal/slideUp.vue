<script setup lang="ts">
const emit = defineEmits<{
    (event: 'close'): void
}>()

defineProps<{
    title: string
    status: boolean
}>()
</script>

<template>
    <transition name="fade" mode="in-out">
        <div v-if="status" class="modal-container" @click.self="$emit('close')">
            <transition name="slide-up">
                <div class="slide-up-modal" v-show="status">
                    <div class="header-modal-form">
                        <span>{{ title }}</span>
                    </div>
                    <div class="content">
                        <slot name="content">
                        </slot>
                    </div>
                </div>
            </transition>
        </div>
    </transition>
</template>

<style>
.modal-container {
    @apply w-full max-w-[480px] mx-auto min-h-screen h-auto flex items-end fixed top-0 bg-[#00000074] z-[9999]
}

.slide-up-modal {
    @apply w-full flex flex-col items-center gap-y-2 bg-white rounded-t-primary p-3
}

.slide-up-modal .header-modal-form span {
    @apply w-full text-center font-semibold text-black
}

.slide-up-modal .content {
    @apply w-full flex flex-col items-center gap-5 lg:gap-7 px-4 py-3
}
</style>
