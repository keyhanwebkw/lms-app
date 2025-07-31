<script lang="ts" setup>
import type {InfoUserGallery}  from "~/types/myAccount"

const props = defineProps<InfoUserGallery>()
</script>

<template>
<div class="container-info">
    <div class="box-avatar">
        <NuxtImg  :src="avatar" :alt="name + family" />
    </div>
    <div class="container-content">
        <div>
            <span class="title-parent ">{{ name }} {{ family }}</span>
        </div>
        <div class="title-child">
          <span>  {{ $t('my_account.manage_child.name_child') }} </span>
          :
          <span>{{ name_child }}</span>
        </div>
    </div>
</div>
</template>

<style scoped>
.container-info{
   @apply w-full flex gap-x-2 items-center
}

.box-avatar{
    @apply w-[52px] h-[52px] rounded-full shadow-secend
}

.box-avatar img{
    @apply w-full h-full rounded-full
}

.container-content{
    @apply flex flex-col gap-y-2
}

.title-parent{
    @apply font-semibold text-purple-500
}

.title-child{
    @apply font-semibold text-gray-500 text-sm
}
</style>