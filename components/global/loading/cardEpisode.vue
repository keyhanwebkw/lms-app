
w<template>
    <div class="container-card-episode">
        <div class="flex gap-x-3  relative">
            <div class="flex gap-x-5 justify-center">
                <div class="h-full flex items-center ">
                    <span class="count card_box_loading">

                    </span>
                    <span class="line-bottom-count contents-[''] card_box_loading"></span>
                </div>
                <div class="w-[2px] h-full card_box_loading">

                </div>
            </div>
            <div class="container-content-card">

                <span class="w-[100px] h-[20px] card_box_loading"></span>

                <div class="flex gap-x-1 items-center ">
                    <div class="w-[20px] h-[20px] rounded-sm card_box_loading">

                    </div>
                    <span class="w-[60px] h-[14px] card_box_loading">

                    </span>
                </div>
            </div>
        </div>
        <div class="h-full flex items-center">
            <div class="w-[125px] h-[45px] rounded-sm card_box_loading">

            </div>
        </div>
    </div>
</template>

<style scoped>
.container-card-episode {
    @apply w-full h-[75px] py-2 rounded-sm shadow-primary px-3 flex justify-between cursor-pointer
}

.count {
    @apply mr-2 pb-2 w-[5px] h-[20px]
}

.line-bottom-count {
    @apply absolute  bottom-[15px] right-[4px] w-[14px] h-[3px] rounded-sm
}

.container-content-card {
    @apply h-full flex flex-col justify-center text-sm gap-y-3
}
</style>