<script lang="ts" setup>
import { defineProps, defineEmits, computed } from 'vue';
import type { CheckBox } from '~/types/global';

const props = defineProps<CheckBox>();
const emit = defineEmits(['update:model-value']);


const idValue = computed({
  get() {
    return props.modelValue;
  },
  set(value: boolean) {
    emit('update:model-value', value);
  },
});
</script>

<template>
  <label
    class="radio-container"
    :class="{ 'radio-checked': idValue === value }"
  >
    <input
      type="radio"
      :name="name"
      :value="value"
      :checked="idValue === value"
      @change="idValue = value"
    />
    <span class="checkmark"></span>
    <span class="label-text">{{ label }}</span>
  </label>
</template>

<style scoped>
.radio-container {
  @apply flex items-center cursor-pointer text-sm gap-x-2;
}

.radio-container .label-text {
  @apply text-gray-500;
}

.radio-container.radio-checked .label-text {
  @apply text-blue-500;
}

input[type='radio'] {
  @apply hidden;
}

.checkmark {
  @apply h-[18px] w-[18px] border-[2px] rounded-full relative border-blue-500;
}

input[type='radio']:checked + .checkmark {
  @apply bg-blue-500;
}
</style>
