<script setup lang="ts">

defineProps<{ isSuccess: boolean; msg: string }>()

</script>

<template>
    <div class="w-full flex justify-center" :class="isSuccess ? 'message-success' : 'message-error'">
        <div class="container-toast-message">
            <div class="flex items-center gap-x-1">
                <!-- icon -->
                <div class="img-toast-msg ">
                    <component :is="'Icon' + isSuccess ? 'Success' : 'Error'" />
                </div>
                <!-- title -->
                <div class="title-toast-msg font-semibold">
                    <span class="text-sm">{{ msg }}</span>
                </div>
            </div>
        </div>
    </div>
</template>


<style scoped>
.container-toast-message {
    @apply w-full max-w-[480px] rounded-sm h-[50px] px-3 flex items-center justify-between border-2 transition-all duration-75 ease-out z-[999]
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