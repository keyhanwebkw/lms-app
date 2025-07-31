<script lang="ts" setup>
import type { DataListStatus } from '~/types/support';

const emit = defineEmits<{
    (event: 'status', value: string | number): void;
}>();

const props = defineProps<DataListStatus>()
</script>

<template>
    <div class="container-list-ticket">
        <div v-for="data in dataList" :key="data.id">
            <BaseBtn type="button" type-design="outline-action" customDesign="border-gray-100 !text-[11px] !text-gray-300"
                :text="data.title" :icon="data.icon" :loading="false" @click="$emit('status', data.status)" />
        </div>
    </div>
</template>


<style scoped>
.container-list-ticket {
    @apply w-full flex justify-between
}
</style>