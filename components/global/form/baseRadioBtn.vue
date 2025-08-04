<script setup lang="ts">
import type { RadioBtn } from "~/types/global";
const emit = defineEmits<{
    (event: 'update:model-value', payload: string | number): void,
    (event: 'change', payload: Event): void
}>()

const props = defineProps<RadioBtn>()

const radioValue = computed({
    get() {
        return props.modelValue
    },
    set(value: any) {
        emit('update:model-value', value)
    },
})

const handleChange = (e: Event) => {
    emit('change', e)
}
</script>

<template>
    <div class="container-radio">
        <label v-if="label" class="label-radio">{{ label }}
            <span v-if="mandatory">*</span>
            <span class="mr-[2px]" v-if="optional">({{ $t('global.optional') }})</span>
        </label>

        <div class="flex gap-x-4" :class="{ 'flex-col gap-y-3': vertical }">
            <label v-for="(option, index) in options" :key="index" class="radio-label">
                <input type="radio" :name="name" :value="option.value" v-model="radioValue" @change="handleChange"
                    :disabled="disabled" class="hidden" />
                <span class="radio-custom"></span>
                <span class="text-gray-500">{{ option.label }}</span>
            </label>
        </div>
    </div>
</template>

<style scoped>
.container-radio {
    @apply w-full flex flex-col relative gap-y-1
}

.radio-label {
    @apply flex items-center gap-x-2 cursor-pointer
}

.radio-custom {
    @apply w-4 h-4 rounded-full border-2 border-gray-300 flex items-center justify-center
}

.radio-input:checked+.radio-custom {
    @apply border-blue-500
}

.radio-input:checked+.radio-custom::after {
    @apply w-2 h-2 rounded-full bg-blue-500 content-['']
}

.radio-input:disabled+.radio-custom {
    @apply opacity-50 cursor-not-allowed
}
</style>