<template>
    <div class="menu-main">
        <div v-for="_ in 4" :key="_">
            <div class="w-[74px] h-4 card_box_loading">

            </div>
        </div>
    </div>
</template>

<style scoped>
.menu-main {
    @apply w-full h-[50px] flex justify-between items-center shadow-primary rounded-sm px-5 sticky top-3 bg-white z-[99];
}
</style>