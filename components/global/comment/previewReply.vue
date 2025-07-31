<script lang="ts" setup>
import type { DataPreviewComment } from '~/types/comment';
import { limitWord } from '~/func/limitWords';

const props = defineProps<DataPreviewComment>()

defineEmits<{
    (event: 'close'): void;
}>();

const words = computed(() => limitWord({ sentens: props.content, count: 5 })) 
</script>

<template>
    <div class="container-box-reply">
        <div class="top-section ">
            <div class="flex gap-x-1 ">
                <IconReply class="w-5 h-5 cursor-pointer" />
                <span class="text-xs font-bold">{{ $t('global.in_response_to') }} {{ author }}</span>
            </div>
            <div>
                <IconClose class="w-5 -mt-1" @click="$emit('close')" />
            </div>
        </div>
        <div class="text-sm text-gray-700">
            {{ words }}
        </div>
    </div>
</template>


<style scoped>
.container-box-reply {
    @apply w-full flex flex-col rounded-sm p-3 shadow-primary gap-3
}

.top-section {
    @apply flex justify-between text-gray-300 items-start
}
</style>