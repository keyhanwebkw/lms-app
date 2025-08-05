<script setup lang="ts">
import { conv2EnNum } from "~/func/conv2EnNum";
import type { Input } from "~/types/global";
import { textAreaLength } from "~/services/constants";

const emit = defineEmits<{
  (event: 'update:model-value', payload: string | number): void,
  (event: 'change', payload: Event): void,
  (event: 'click', payload: MouseEvent): void,
  (event: 'focus'): void,
  (event: 'onFocus'): void,
  (event: 'input', payload: any): void
}>()

const props = defineProps<Input>()

const inputElement = ref<HTMLInputElement | null>(null)
const borderInputColor = ref<string>('')

const showPassword = ref<boolean>(false)
const togglePassword = () => {
  showPassword.value = !showPassword.value
}

const inputValue = computed({
  get() {
    return props.modelValue
  },
  set(value: any) {
    emit('update:model-value', value)
  },
})

const borderInputData = ref({
  defult: 'border-[#2980B9]',
  focus: 'border-[#2980B9]',
  disabled: '',
  error: '!border-red-500',
})

const focusedInput = () => {
  emit('focus')
  borderInputColor.value = borderInputData.value.focus
}

const focusOut = () => {
  emit('onFocus')
  borderInputColor.value = borderInputData.value.defult
}

const handlePaste = (e: ClipboardEvent) => {
  let pastedData = e.clipboardData?.getData("text") || "";
  if (props.type == 'number') {
    pastedData = conv2EnNum(pastedData).replace(/[^0-9۰-۹٠-٩]/g, "");
  }
  inputValue.value = pastedData;
  emit('update:model-value', pastedData);
  e.preventDefault();
}

const handleInputUpdate = (e: Event) => {
  let value = (e.target as HTMLInputElement).value;
  if (props.type == 'number') {
    value = conv2EnNum(value);
    value = value.replace(/[^0-9۰-۹٠-٩]/g, "");
  }
  inputValue.value = value;
  emit('input', inputValue.value);
}
</script>

<template>
  <div class="container-input">
    <label v-if="label" :for="id" class="label-input">
      {{ label }}
      <span v-if="mandatory" class="text-red-500">*</span>
      <span class="mr-[2px]" v-if="optional">({{ $t('global.optional') }})</span>
    </label>

    <!-- Input Field -->
    <input v-if="type !== 'textarea'" ref="inputElement" :id="id"
      :type="type === 'password' ? (showPassword ? 'text' : 'password') : (type === 'number' ? 'text' : type)"
      class="input-global"
      :class="[classInput, borderInputColor, { 'dir-ltr': type == 'number' || type == 'tel' }, error ? borderInputData.error : '']"
      v-model="inputValue" @input="handleInputUpdate" @paste="handlePaste" @focus="focusedInput" @focusout="focusOut"
      spellcheck="false" :disabled="disabled" :placeholder="placeholder"
      :inputmode="type == 'number' ? 'numeric' : undefined" />

    <!-- Textarea Field -->
    <textarea v-else ref="inputElement" :id="id" :type="type" class="input-global pb-6 !h-auto pt-4"
      v-model="inputValue" @input="handleInputUpdate" @focus="focusedInput" @focusout="focusOut" spellcheck="false"
      :disabled="disabled" :placeholder="placeholder" :rows="row" :maxlength="textAreaLength" />

    <!-- Calendar Icon -->
    <div class="input-floating-icon" v-if="calender">
      <IconCalender />
    </div>

    <!-- Password Eye Toggle -->
    <div class="input-floating-icon"
      v-if="type === 'password' && String(inputValue).length > 0 && inputValue !== undefined">
      <IconOpenEye v-if="!showPassword" @click="togglePassword" class="icon-eye-password " />
      <IconCloseEye v-else @click="togglePassword" class="icon-eye-password" />
    </div>

    <!-- Error Message -->
    <span class="err-input" v-if="error">{{ error }}</span>
  </div>
</template>

<style scoped>
@import url('~/assets/css/form.css');


.container-input {
  @apply w-full flex flex-col relative gap-y-1;
}

.input-global {
  border-radius: 12px !important;
  border-color: #2980B9 !important;
}

.input-floating-icon {
  @apply absolute text-gray-300 left-[10px] top-[37px];
}

.icon-eye-password {
  @apply cursor-pointer !w-[25px] !h-[25px]
}
</style>
