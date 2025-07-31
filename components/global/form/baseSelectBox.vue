<script setup lang="ts">
import { ref, computed } from 'vue';
import { useClickOutside } from '@/composables/useClickOutside'
import type { SelectBox } from '~/types/global';


const props = defineProps<SelectBox>();

//props
const emit = defineEmits<{
    (event: 'update:model-value', value: any): void,
}>();

// varibal
const isOpen = ref<boolean>(false);
const searchQuery = ref<string>(props.modelValue);

const route = useRoute()

if (route.name == 'my-account-management-child-edit-id___fa-IR') {
    if (props.modelValue == 'male') {
        searchQuery.value = 'پسر'
    } if (props.modelValue == 'female') {
        searchQuery.value = 'دختر'
    }
} else {
    if (props.modelValue == 'male') {
        searchQuery.value = 'مرد'
    } if (props.modelValue == 'female') {
        searchQuery.value = 'زن'
    }
}
const selectedItem = ref<any>(null);
const dropdownRef = ref<HTMLElement | null>(null);
const classFocus = ref<string>('')

// filter
const filteredItems = computed(() => {
    if (isOpen.value && searchQuery.value) {

        return props.items;
    }
    return props.items.filter(item => item.name.includes(searchQuery.value));
});

// selectItem
const selectItem = (item: any) => {
    console.log(item)
    selectedItem.value = item;
    searchQuery.value = item.name;
    isOpen.value = false;
    emit('update:model-value', item.ID);
};

// handelFocus
const handleFocus = () => {
    isOpen.value = true;
    classFocus.value = '!rounded-b-none'
};

useClickOutside(dropdownRef, () => {
    isOpen.value = false;
    classFocus.value = '!rounded-b-primary'
});
</script>

<template>
    <div class="relative w-full rtl dropdown-container " ref="dropdownRef">
        <FormBaseInput v-model:modelValue="searchQuery" :type="typeInput" :placeholder="placeholder" :label="label"
            :mandatory="mandatory" :disabled="disabled" :classInput="classFocus" @focus="handleFocus" />
        <ul v-if="isOpen" class="dropdown-menu">
            <li v-for="item in filteredItems" :key="item.ID" @click="selectItem(item)"
                :class="{ 'active-item-input': selectedItem && selectedItem.ID === item.ID }" class="dropdown-item">
                {{ item.name }}
            </li>
            <li v-if="filteredItems.length === 0" class="dropdown-empty">
                {{ $t('global.empty_list') }}
            </li>
        </ul>
    </div>
</template>

<style scoped>
@import url('~/assets/css/form.css');
</style>
