<template>
    <div class="container-box-info-details-course ">
        <div class="w-[400px] h-[220px] rounded-primary card_box_loading">

        </div>
        <div class="w-full flex gap-x-3">
            <div class="w-[110px] h-[40px] rounded-full card_box_loading" v-for="_ in 2" :key="_">

            </div>
        </div>
        <div class="w-full mt-2">
            <div class="w-[300px] h-[30px] rounded-sm card_box_loading">

            </div>
        </div>
        <div class="w-full flex flex-col gap-y-2 ">
            <div class="flex gap-x-2" v-for="_ in 3" :key="_">
                <div class="w-[22px] h-[22px] rounded-sm card_box_loading">

                </div>
                <div class="w-[100px] h-[22px] rounded-sm card_box_loading">

                </div>
                <div class="w-[70px] h-[22px] rounded-sm card_box_loading">

                </div>
            </div>
        </div>
        <div class="w-full flex flex-col gap-y-3 items-center  mt-2">
            <div class="w-[300px] h-11 rounded-primary card_box_loading" v-for="_ in 2" :key="_">

            </div>
        </div>
    </div>
</template>
<style scoped>
.container-box-info-details-course {
    @apply w-full bg-blue-500 px-4 py-5 flex flex-col items-center gap-y-5 mt-3;
}
</style>
