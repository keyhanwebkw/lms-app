<script setup lang="ts">

defineEmits(['change'])
defineProps<{ SID: string }>()

</script>

<template>
    <div class="avatar-container">
        <div class="avatar-box" @click="$emit('change')">
            <div class="action-btn" v-if="$route.name !== 'my-account-profile___fa-IR'">
                <IconGalleryAdd />
            </div>
            <div class="avatar border border-blue-300">
                <NuxtImg :src="$config.public.storage.original + SID" alt="avatar-child" class="img-avatar" />
            </div>

        </div>
    </div>
</template>

<style>
@import '/assets/css/avatar.css';
</style>