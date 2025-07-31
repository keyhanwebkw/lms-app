<script setup lang="ts">
import type { BaseButton, DefultStyleBtn } from '@/types/button'

const props = defineProps<BaseButton>();

const styleData =  ref<DefultStyleBtn>({
    "simple" : 'btn-simple',
    "submit" : 'btn-submit',
    "action" : 'base-btn-action btn-action',
    "outline-action" : 'btn-action-outline base-btn-action',
    "icon" : 'btn-icon',
    "cancle" : 'btn-cancle'
})

const style = computed(() => styleData.value[props.typeDesign])

</script>

<template>
    <button :type="type" :class="[style,customDesign]" :disabled="loading || disabled">
        <div class="container-flex-center">
            <span class="loader-btn" v-if="loading"></span>
            <div v-else class="flex gap-x-2 items-center">
                <NuxtImg v-if="icon" :src="icon" :alt="alt" class="w-6 h-6 object-cover" />
                <span v-if="text">{{ text }}</span>
            </div>
        </div>
    </button>
</template>

<style scoped>
@import url('/assets/css/btn.css');
</style>