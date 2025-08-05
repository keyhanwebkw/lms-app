<script lang="ts" setup>
import { menu } from "~/static/dataMenu";
import { useRoute } from "vue-router"; 

const route = useRoute(); 
</script>

<template>

    <div class="container-menu">
        <div class="box-menu">
            <NuxtLink :to="data.slug" class="w-[10%] flex justify-center" active-class="active-class" v-for="data in menu"
                :key="data.ID" :class="route.path === data.slug && data.class ? 'pb-1 '  : ''">
                    <transition name="icon-fade" mode="out-in">
                  <component :is="'Icon' + (route.path === data.slug ? data.icon_active : data.icon)" :key="route.path === data.slug ? 'active-' + data.ID : 'inactive-' + data.ID" />
                </transition>
                
            </NuxtLink>
        </div>
    </div>

</template>

<style scoped>
.container-menu{
   @apply fixed bottom-0 left-0 w-full flex justify-center  z-50 
}

.box-menu{
    @apply w-full max-w-[480px]  bg-white  shadow-primary h-[60px]  flex items-center justify-between px-4 text-blue-500 rounded-t-primary shadow-[0px_-2px_4px_0px_#00000026];
}

.active-class {
    @apply  p-1 rounded-sm flex items-center justify-center shadow-[0px_2px_3px_0px_#2980B940] border-b-2 border-[#0078C7] bg-[#94AAB840] transition-[background,box-shadow,border-color] duration-300 ease-in-out  
}
.icon-fade-enter-active, .icon-fade-leave-active {
  transition: opacity 0.3s cubic-bezier(.4,0,.2,1), transform 0.3s cubic-bezier(.4,0,.2,1);
}
.icon-fade-enter-from, .icon-fade-leave-to {
  opacity: 0;
  transform: scale(0.8);
}
.icon-fade-enter-to, .icon-fade-leave-from {
  opacity: 1;
  transform: scale(1);
}
</style>
