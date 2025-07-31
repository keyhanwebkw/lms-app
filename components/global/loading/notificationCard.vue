<script setup lang="ts">

</script>

<template>
    <div class="container-loading-notification ">
        <!-- img -->
        <div class="w-[45px] h-10">
            <div class="icon-notification card_box_loading ">
            </div>
        </div>
        <!-- content -->
        <div class="container-content-notification primary-gap">
            <!-- title  -->
            <div class="container-title">
                <span class="w-[150px] h-[17px] card_box_loading"></span>
                <!-- <span class="w-[200px] h-[14px] card_box_loading"></span> -->
            </div>
            <!-- desceription -->
            <div class="container-description">
                <p class="w-full h-[12px] card_box_loading" v-for="_ in 3" :key="_"></p>
            </div>
            <!-- time -->
            <div class="container-time">
                <span class="w-[70px] h-[20px] card_box_loading"></span>
                <div class="w-[20px] h-[20px] rounded-[5px]  card_box_loading">

                </div>
            </div>
        </div>
    </div>
</template>


<style scoped>
.container-loading-notification {
    @apply w-full flex gap-x-5 rounded-sm px-5 py-3 bg-white shadow-primary
}

.container-loading-notification .icon-notification {
    @apply w-full h-full rounded-primary
}

.container-loading-notification .container-content-notification {
    @apply w-full flex flex-col  mt-1
}

.container-loading-notification .container-content-notification .container-title {
    @apply w-full flex flex-col gap-y-1
}

.container-loading-notification .container-content-notification .container-time {
    @apply text-gray-300 flex gap-x-2 w-full justify-end items-center
}

.container-loading-notification .container-content-notification .container-description {
    @apply w-full flex flex-col gap-y-2
}
</style>
