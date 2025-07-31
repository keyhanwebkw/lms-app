<script lang="ts" setup>

</script>

<template>

        <div class="w-full relative h-[80px] flex  justify-between items-center bg-red-300 shadow-primary px-6" >
            <div class="w-[45%] relative">
                <NuxtLink to="/my-account/management-child/select-time" class="text-orange-300 before:content-[''] before:absolute before:right-0 before:top-2 before:w-[10px] before:h-[10px] before:rounded-full before:bg-orange-300 pr-5 text-xs ">{{ $t('home.managmnet_child') }}</NuxtLink>
            </div>
            <div class="w-[55%] absolute -bottom-3 left-0">
                <NuxtImg src="/img/managmentChild.webp" class="w-full h-full" alt="img management child" />
            </div>
        </div>  
</template>