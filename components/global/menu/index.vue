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
   @apply fixed bottom-0 left-0 w-full flex justify-center  z-50 
}

.box-menu{
    @apply w-full max-w-[480px]  bg-white  shadow-primary h-[60px]  flex items-center justify-between px-5 text-blue-500 rounded-t-primary shadow-[0px_-2px_4px_0px_#00000026];
}

.active-class{
    @apply w-[40px] p-1 rounded-sm flex items-center justify-center  h-10 bg-[#94AAB840] border-b-[3px] border-[#0078C7] shadow-[0px_2px_3px_0px_#2980B940]; 


}
</style>
