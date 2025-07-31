<script setup lang="ts">
import type { DetailsChild } from '~/types/child';

defineEmits(['edit', 'remove']);
defineProps<{ data: DetailsChild }>()

const morebox = ref<HTMLElement | null>(null);

const showMoreBox = ref(false)

useClickOutside(morebox, () => {
    showMoreBox.value = false
});


</script>

<template>
    <div class="child-card card-container">
        <div class="flex gap-x-2">
            <div class="avatar">
                <NuxtImg :src="$config.public.storage.thumbnail + data.avatarSID.fullSID" :alt="data.name" />
            </div>
            <div class="flex flex-col gap-y-2">
                <span class="text-sm font-semibold text-purple-500">
                    {{ data.name }}
                </span>
                <BaseBtn type="button" type-design="action" customDesign="!text-xs bg-orange-300 !px-2 !py-1"
                    :text="$t('my_account.manage_child.login_to_child_pannel')" />
            </div>
        </div>
        <div>
            <div class="relative" ref="morebox">
                <div @click="showMoreBox = !showMoreBox" class="cursor-pointer">
                    <IconMore />
                </div>
                <div class="absolute top-0 left-5" v-if="showMoreBox">
                    <MoreBox @remove="$emit('remove')" @edit="$emit('edit')" />
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.child-card {
    @apply p-3
}

.child-card .avatar {
    @apply w-12 h-12 rounded-full shadow-[0px_0px_2px_0px_#00000040]
}

.child-card .avatar img {
    @apply w-full h-full rounded-full p-0.5
}
</style>