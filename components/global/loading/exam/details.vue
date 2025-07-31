<template>
    <NuxtLayout name="course">
        <template #info>
            <!-- title and status  -->
            <div class="w-full flex justify-between ">
                <div class="w-[200px] h-5 card_box_loading"></div>
                <div class="w-20 h-7 rounded-full card_box_loading"></div>
            </div>
            <!-- info quizze -->
            <div class="flex items-center gap-x-5">
                <div class="item-info card_box_loading"></div>
                <div class="item-info card_box_loading"></div>
            </div>
            <div class="flex items-center gap-x-5">
                <div class="item-info card_box_loading"></div>
            </div>
            <div class="w-[300px] h-5 card_box_loading"></div>
            <!-- btn start quizze -->
            <div class="w-full flex justify-end">
                <div class="w-[118px] h-9 rounded-sm card_box_loading"></div>
            </div>
        </template>
    </NuxtLayout>
</template>

<style scoped>
.item-info {
    @apply w-[140px] h-5
}
</style>