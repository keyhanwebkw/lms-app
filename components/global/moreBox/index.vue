<script setup lang="ts">
defineEmits(['edit', 'remove']);
</script>

<template>
    <div class="more-box-container">
        <div class="item edit" @click="$emit('edit')">
            <span>{{ $t('global.edit') }}</span>
            <IconEdit />
        </div>
        <div class="item remove" @click="$emit('remove')">
            <span>{{ $t('global.remove') }}</span>
            <IconBag />
        </div>
    </div>
</template>

<style scoped>
.more-box-container {
    @apply flex flex-col gap-y-2 px-2 py-3 bg-white rounded-primary shadow-primary
}

.more-box-container .item {
    @apply w-[82px] flex items-center justify-between py-[6px] px-2 rounded-sm bg-[#f0f0f0] text-xs text-[#464646]
}
</style>