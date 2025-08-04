<template>
    <div class="container-read-more">
        <div class="flex gap-x-3 border-b-2 pb-2 items-center border-blue-500">
            <div class="w-6 h-6 card_box_loading"> </div>
            <div class="w-20 h-3 card_box_loading"></div>
        </div>

        <div class="flex flex-col gap-y-2">
            <div class="w-full h-[10px] card_box_loading" v-for="_ in 5" :key="_"></div>
        </div>

        <div class="w-full flex justify-center">
            <div class="w-[130px] h-[45px] rounded-sm card_box_loading">

            </div>
        </div>
    </div>
</template>

<style scoped>
.container-read-more {
    @apply w-full flex flex-col gap-y-6
}
</style>