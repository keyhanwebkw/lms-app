<template>
    <div class="flex flex-col gap-y-5">
        <div class="title">
            <div class="w-6 h-6 card_box_loading"> </div>
            <div class="w-20 h-3 card_box_loading"></div>
        </div>
        <div class="container-faq" v-for="_ in 3" :key="_">
            <div class="container-question">
                <div class="flex gap-x-3 items-center">
                    <div class="flex justify-center">
                        <div class="w-5 h-5 rounded-sm card_box_loading"></div>
                        <div class="line"></div>
                    </div>
                    <span class="w-[100px] h-5 card_box_loading"></span>
                </div>
                <div class="w-5 h-5 rounded-sm card_box_loading">
                </div>
            </div>
        </div>
    </div>
</template>


<style scoped>
.title {
    @apply flex gap-x-3 border-b-2 pb-2 items-center border-blue-500
}

.container-faq {
    @apply w-full flex flex-col gap-y-3
}

.container-question {
    @apply w-full py-4 px-5 flex justify-between items-center rounded-sm shadow-primary cursor-pointer
}

.container-question .content {
    @apply relative flex gap-x-5
}

.container-question .content .line {
    @apply absolute content-[''] bottom-[0px] right-1 w-[14px] h-[3px] rounded-sm
}
</style>