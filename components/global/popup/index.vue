<script setup lang="ts">
import type { popup } from '~/types/global'

const emit = defineEmits<{
    (event: 'close'): void
}>()

const props = defineProps<popup>()

</script>

<template>
    <transition name="fade">
        <div @click.self="$emit('close')" class="popup-container" :class="stylePopup">
            <div class="popup-container-form">
                <div class="popup-form">
                    <div class="header-popup-form">
                        <IconWarning />
                        <span class="lg:text-lg font-bold text-center text-blue-500">{{ title }}</span>
                        <span class="lg:text-md  text-center text-gray-500">{{ subtitle }}</span>
                    </div>
                    <div class="w-full">
                        <slot name="form">
                        </slot>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<style scoped>
.popup-container {
  @apply w-full min-h-screen h-auto flex items-center justify-center fixed top-0 left-0 bg-[#00000074] z-[9999] 
}

.popup-container-form {
  @apply w-[92%] min-w-[360px] max-w-max h-auto max-h-[calc(100vh-100px)] overflow-y-auto flex flex-col items-center rounded-[16px] border-2 border-dashed border-[#F5F5F5] shadow-[0px_0px_60px_#00000052] bg-white
}

.close-popup {
  @apply w-7 h-7 absolute top-2 right-5 flex items-center justify-center bg-[#33373a4c] rounded-full cursor-pointer z-[9999]
}

.back-popup {
  @apply w-6 h-6 rotate-180 absolute top-3 left-5 cursor-pointer z-[9999]
}

.popup-form {
  @apply w-full flex flex-col items-center gap-5 lg:gap-7 px-4 py-6
}

.header-popup-form {
  @apply w-full flex flex-col justify-center pb-2 items-center gap-3
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.1s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
