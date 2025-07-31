<script lang="ts" setup>
import { ref, defineProps, defineEmits } from 'vue';
import type { Rating } from '~/types/global';

const props = defineProps<Rating>();
const emit = defineEmits(['update:modelValue']);
const rating = ref(props.modelValue);

const setRating = (index: number) => {
    if (!props.disabled) {
        rating.value = index;
        emit('update:modelValue', index);
    }
};

</script>
<template>
    <div class="flex gap-x-1">
        <span v-for="index in 5" :key="index" @click="setRating(index)">
            <component :is="index <= rating ? 'IconStarActive' : 'IconStar'" />
        </span>
    </div>
</template>
