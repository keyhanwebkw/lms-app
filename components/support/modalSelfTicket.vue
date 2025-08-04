<script lang="ts" setup>
const emit = defineEmits<{
  (event: 'hiddenPopup'): void;
}>();

const props = defineProps<{
  statusPopup: boolean;
}>();
</script>

<template>
  <div
    v-if="statusPopup"
    @click.self="$emit('hiddenPopup')"
    class="container-popup-attached"
  >
    <div class="close-popup" @click="$emit('hiddenPopup')">
      <IconClose />
    </div>
    <slot name="data"> </slot>
  </div>
</template>

<style scoped>
.container-popup-attached {
  @apply w-full max-w-[480px] h-screen flex justify-center items-center fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[100] bg-[#0000006f]
}

.close-popup {
  @apply absolute top-3 right-3 text-blue-500 cursor-pointer;
}
</style>
