<script setup lang="ts">
import type { Basemodal } from '~/types/global';


const emit = defineEmits<{
    (event: 'close'): void
}>()

const props = defineProps<Basemodal>()

</script>

<template>
    <transition name="fade" mode="out-in">
        <div @click.self="$emit('close')" class="modal-container" v-if="status">
            <div class="modal-container-form">
                <div class="header-modal-form">
                    <slot name="header" />
                    <span :class="titleClass">{{ title }}</span>
                    <span v-if="subtitle" :class="subtitleClass">{{ subtitle }}</span>
                </div>
                <div class="modal-form">
                    <slot name="form">
                    </slot>
                </div>
            </div>
        </div>
    </transition>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.4s ease;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}

.modal-container{
  @apply w-full min-h-screen h-auto flex items-center justify-center fixed top-0 left-0 bg-[#00000074] z-[9999] p-2
}
.modal-container-form {
@apply p-2 w-[92%] min-w-[360px] max-w-max h-auto max-h-[calc(100vh-100px)] overflow-y-auto flex flex-col items-center rounded-[16px]  border-[#F5F5F5] shadow-[0px_0px_60px_#00000052] bg-white}
.modal-form {
    @apply w-full flex flex-col items-center gap-5 lg:gap-7 px-4 py-3
}

.header-modal-form{
    @apply w-full flex flex-col justify-center pb-2 items-center gap-3 pt-4
}
</style>





