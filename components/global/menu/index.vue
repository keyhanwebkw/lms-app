<script lang="ts" setup>
import { menu } from "~/static/dataMenu";
import { useRoute } from "vue-router"; 

const route = useRoute(); 
</script>

<template>

    <div class="container-menu">
        <div class="box-menu">
            <NuxtLink :to="data.slug" active-class="active-class" v-for="data in menu"
                :key="data.ID" :class="route.path === data.slug && data.class ? 'pb-1' : ''">
                <component :is="'Icon' + (route.path === data.slug ? data.icon_active : data.icon)" />
            </NuxtLink>
        </div>
    </div>

</template>

<style scoped>
.container-menu{
   @apply fixed bottom-5 left-0 w-full flex justify-center px-4 z-50 
}

.box-menu{
    @apply w-full max-w-[380px] bg-[rgba(225,223,223,0.5)] backdrop-blur-sm shadow-primary h-[50px] rounded-[25px] flex items-center justify-between px-5
}

.active-class{
    @apply w-[40px] rounded-full  flex items-center justify-center  h-10 bg-purple-500
}
</style>
