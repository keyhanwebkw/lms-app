<template>
    <div class="container">
        <div class="flex gap-x-3 items-center text-gray-300">
            <div class="w-[40px] h-[15px] card_box_loading">

            </div>
            <span class="w-[100px] h-[15px] card_box_loading"></span>
        </div>
        <div class="w-full flex justify-between ">
            <span class="w-[150px] h-[30px] card_box_loading"></span>
            <div class="w-[100px] h-[30px] rounded-primary card_box_loading ">

            </div>
        </div>
        <div class="content-container">

            <div class="item-info">
                <div class=" icon card_box_loading"></div>
                <span class="w-[80px] h-[20px] card_box_loading"></span>
                <span class="item-value card_box_loading"></span>
            </div>
            <div class="item-info">
                <div class="icon  card_box_loading"></div>
                <span class="w-[100px] h-[20px] card_box_loading"></span>
                <span class="item-value card_box_loading"></span>
            </div>
        </div>

        <div class="w-full flex justify-center">
            <div class="btn-container card_box_loading">

            </div>
        </div>
    </div>
</template>

<style scoped>
.container {
    @apply w-full max-w-[480px] h-auto flex flex-col gap-y-4 px-3 py-5 rounded-sm shadow-primary
}

.item-info {
    @apply w-1/2 flex items-center gap-x-1
}

.btn-container {
    @apply w-[120px] h-10 rounded-sm
}

.content-container {
    @apply w-full h-[50px] flex flex-wrap
}

.item-value {
    @apply w-5 h-5
}

.icon {
    @apply w-[25px] h-[20px]
}
</style>