<template>
    <NuxtLayout name="course">
        <template #info>
            <div class="container-question-exam">
                <div class="flex items-center justify-between">
                    <div class="flex items-center gap-x-2">
                        <span class="w-5 h-5 card_box_loading"></span>
                        <span class="w-[200px] h-5 card_box_loading"></span>
                    </div>
                    <div class="w-[85px] h-5 card_box_loading">
                    </div>
                </div>
                <div class="h-5 w-[300px] card_box_loading"></div>
                <div class="flex flex-col gap-y-6">
                    <div class="flex items-center gap-x-3" v-for="(_, index) in 4" :key="index">
                        <span class="w-5 h-5 rounded-sm card_box_loading"></span>
                        <div class="w-[200px] h-5 card_box_loading"></div>
                    </div>
                </div>
                <div class="w-full flex justify-between mt-3">
                    <div class="w-20 h-5 card_box_loading"></div>
                    <div class="w-[118px] h-9 card_box_loading"></div>
                </div>
            </div>
        </template>
    </NuxtLayout>
</template>

<style scoped>
.container-question-exam {
    @apply flex flex-col gap-y-4
}
</style>