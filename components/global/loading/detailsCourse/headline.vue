<template>
    <div class="container-read-more">
        <div class="flex gap-x-3 border-b-2 pb-2 items-center border-blue-500">
            <div class="w-6 h-6 card_box_loading"> </div>
            <div class="w-20 h-3 card_box_loading"></div>
        </div>
        <div class="container-card-headline" v-for="_ in 3" :key="_">
            <div class="flex items-center gap-x-2">
                <div class="w-[50px] h-5 card_box_loading">

                </div>
                <div class="h-5 w-[1px] bg-gray-700">

                </div>
                <div class="w-[70px] h-5 card_box_loading">
                </div>
            </div>
            <div class="w-5 h-5 rounded-sm card_box_loading">

            </div>

        </div>
    </div>
</template>

<style scoped>
.container-read-more {
    @apply w-full flex flex-col gap-y-6
}

.container-card-headline {
    @apply w-full h-[55px] rounded-sm shadow-primary px-3 flex items-center justify-between cursor-pointer
}
</style>