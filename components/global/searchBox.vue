<script setup lang="ts">

const emit = defineEmits<{
    (event: 'update:model-value', payload: string | number): void,
    (event: 'search', payload: string): void
    (event: 'input', payload: string): void

}>()

const props = defineProps<{
    modelValue: string
}>()

const inputValue = computed({
    get() {
        return props.modelValue
    },
    set(value: any) {
        emit('update:model-value', value)
    },
})

const handleSearch = () => {
    if (inputValue.value.length > 2) {
        emit('search', inputValue.value)
    }
}

const handleInputUpdate = (e: Event) => {
    inputValue.value = (e.target as HTMLInputElement).value;
    emit('input', inputValue.value);
    handleSearch()
};

</script>

<template>
    <div class="search-box-container">
        <input ref="inputElement" type="text" class="input-global !h-[44px] text-sm text-gray-700" v-model="inputValue"
            @input="handleInputUpdate" spellcheck="false" :disabled="false"
            :placeholder="$t('global.search_placeholder')" @keydown.enter="handleSearch" />
        <div class="search-box-icon">
            <IconSearch class="search-icon" />
        </div>
    </div>
</template>

<style>
@import url('~/assets/css/form.css');

.search-box-container {
    @apply w-full relative bg-white shadow-primary h-[44px] rounded-primary;
}

.search-box-icon {
    @apply absolute left-3 bottom-[10px] flex items-center justify-center;
}

.search-icon {
    @apply w-6 h-6 text-gray-500;
}
</style>