<script lang="ts" setup>
import { ref, watch } from 'vue'
import { textAreaLength } from '~/services/constants'

const emit = defineEmits<{
  (event: 'update:modelValue', value: string): void
  (event: 'submit', value: string): void
}>()

const props = defineProps<{
  loading: boolean
  clearInputTrigger: boolean
}>()

const description = ref<string>('')

watch(() => props.clearInputTrigger, (newVal: boolean) => {
  if (newVal) {
    description.value = ''
  }
})
</script>

<template>
  <div class="container-confirm-comment">
    <form @submit.prevent="$emit('submit', description)" class="container-form">
      <div class="box-form">
        <FormBaseInput type="textarea" v-model:model-value="description" :row="8"
          :placeholder="$t('global.comment_user')" />
        <div class="box-length-text">
          <p>
            {{ textAreaLength }} / {{ description.length }}
          </p>
        </div>
      </div>
      <!-- Character counter -->
      <div class="box-btn">
        <BaseBtn type="submit" type-design="submit" :loading="loading" :text="$t('global.confirm')" />
      </div>
    </form>
  </div>
</template>

<style scoped>
.container-confirm-comment {
  @apply w-full flex flex-col gap-y-5;
}

.box-form {
  @apply h-[200px] w-full relative
}

.box-length-text {
  @apply w-[98%] h-6 flex justify-end absolute bottom-[-2px] px-2
}

.box-length-text p {
  @apply text-xs text-gray-500 text-right bg-white w-full flex justify-end items-center pl-4
}

.container-form {
  @apply flex flex-col gap-y-2 items-center;
}

.box-btn {
  @apply w-[300px] mt-3
}
</style>
