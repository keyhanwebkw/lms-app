<script setup lang="ts" >

const emit = defineEmits<{
  (event: 'logoutAccount'): void
}>()

</script>
<template>
    <div>
    <div class="w-full flex items-center rounded-sm p-5 bg-white shadow-primary gap-2 cursor-pointer" @click="$emit('logoutAccount')">
      <IconLogout />
      <span class="text-sm text-red-500 ">{{ $t('auth.logout') }}</span>
    </div>
    </div>
</template>
