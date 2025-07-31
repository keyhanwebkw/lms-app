<script setup lang="ts">
import { ToastMsg } from "~/stores/global/toast"

const dataToast = ToastMsg()

const isSuccess = computed(() => dataToast.type == 'success')

</script>

<template>
    <div class="w-full flex justify-center" v-if="dataToast.status"
        :class="isSuccess ? 'message-success' : 'message-error'">
        <div class="container-toast-message" :class="dataToast.status ? 'translate-x-0' : 'translate-x-12'">
            <div class="flex items-center gap-x-1">
                <!-- icon -->
                <div class="img-toast-msg ">
                    <component :is="'Icon' + isSuccess ? 'Success' : 'Error'" />
                </div>
                <!-- title -->
                <div class="title-toast-msg ">
                    <span class="text-sm">{{ dataToast.msg }}</span>
                </div>
            </div>
            <!-- btn -->
            <div class="btn-close-toast-msg" @click="dataToast.status = false">
                <IconClose />
            </div>
        </div>
    </div>
</template>


<style scoped>
.container-toast-message {
    @apply fixed top-4 w-full max-w-[480px] rounded-primary h-[50px] px-3 flex items-center justify-between border-2 transition-all duration-75 ease-out z-[999]
}

.title-toast-msg {
    @apply font-semibold
}

.btn-close-toast-msg {
    @apply cursor-pointer text-red-500
}

.message-success .container-toast-message {
    @apply border-green-100 bg-[#d1f3d2]
}

.message-error .container-toast-message {
    @apply border-red-500 bg-[#F6E3E0]
}

.message-success .img-toast-msg,
.message-success .title-toast-msg span,
.message-success .btn-close-toast-msg {
    @apply text-green-100
}

.message-error .img-toast-msg,
.message-error .title-toast-msg span,
.message-error .btn-close-toast-msg {
    @apply text-red-500
}
</style>