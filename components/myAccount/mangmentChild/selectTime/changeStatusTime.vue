<script setup lang="ts">
import type { StatusCheckTime } from '~/types/myAccount';

const emit = defineEmits(['update:checked']);

const props = defineProps<StatusCheckTime>()

function onCheckedChange(event:any) {
    emit('update:checked', event.target.checked);
}
</script>
<template>
    <div class="w-full flex justify-between items-center rounded-sm p-5 bg-white shadow-primary">
        <div class="flex gap-x-3">
            <IconManageTime />
            <span class="text-sm text-gray-500">{{ $t('my_account.manage_child.title_manage_time') }}</span>
        </div>
        <div>
            <label class="switch">
                <input type="checkbox" :checked="checked" @change="onCheckedChange">
                <span class="slider round"></span>
            </label>
        </div>
    </div>
</template>
<style scoped>
.switch {
@apply relative inline-block w-[48px] h-[23px]
}

.switch input {
    @apply opacity-0 
}

.slider {
    @apply absolute cursor-pointer top-0 left-0 right-0 bottom-0 pl-[5px]   transition-transform duration-700 bg-gray-100
}

.slider:before {
    @apply absolute content-[''] h-[15px] w-[15px] left-1 bottom-1 bg-white  transition-transform duration-700
}

input:checked+.slider {
    @apply bg-blue-500
}

input:focus+.slider {
  @apply shadow-[0_0_1px_#2196F3]
}

input:checked+.slider:before {
 @apply transform translate-x-[26px]
}

.slider.round {
    @apply rounded-[34px]
}

.slider.round:before {
    @apply rounded-full
}
</style>
