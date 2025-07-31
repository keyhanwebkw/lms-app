<script setup lang="ts">
import { dataAvatarsSID } from '~/static/dataAavatarsSID';

defineEmits<{
    (event: 'change', payload: string): void,
}>()
defineProps<{ avatarSID: string, showPopup: boolean }>()

</script>

<template>
    <BaseModal :title="$t('my_account.manage_child.change_avatar')" :status="showPopup">
        <template v-slot:form>
            <div class="child-avatar-container">
                <div class="avatar-item" v-for="(img, index) in dataAvatarsSID.slice(0, 4)" :key="index"
                    @click="$emit('change', img)" :class="avatarSID == img ? 'border-blue-300' : 'border-gray-100'">
                    <div class="avatar">
                        <NuxtImg :src="$config.public.storage.original + img" alt="avatar" class="img-avatar" />
                    </div>
                </div>
            </div>
        </template>
    </BaseModal>
</template>

<style>
@import '/assets/css/avatar.css';
</style>