<script lang="ts" setup>
import type { DataListCardMultiType } from '~/types/auth';

defineProps<DataListCardMultiType>()

</script>

<template>

    <div class="container-card-multi-type">
        <div class="box-avatar">
            <NuxtImg :src="$config.public.storageURL.original + dataList.avatarSID" :alt="dataList.name" />
        </div>
        <div class="title-card">
            <span>{{ dataList.name }} {{ dataList.family }}</span>
        </div>
    </div>

</template>

<style scoped>
.container-card-multi-type {
    @apply w-full max-w-[361px] h-[64px] relative flex rounded-primary bg-white shadow-[0_0_16px_0_#0000001A] 
}

.box-avatar {
    @apply w-20 h-20 rounded-full absolute bg-[#FCD5F0] shadow-[0_0_8px_0_#91317580]  -top-7 right-10
}

.box-avatar img {
    @apply w-full h-full
}

.title-card {
    @apply w-full flex justify-center items-center font-bold text-blue-500
}
</style>