<script lang="ts" setup>
import { GenerateDate } from '~/func/GenerateDate';
import type { DataCardThumbnail } from '~/types/blog';

const props = defineProps<DataCardThumbnail>()

const created = GenerateDate({ type: 'numberDate', timestamp: props.created })

</script>

<template>

    <div class="container-card">
        <div class="w-full ">
            <div v-if="posterSID?.fullSID">
                <NuxtImg :src="`${$config.public.storage.thumbnail}${posterSID.fullSID}`" alt="img thumbnail"
                    class="w-full h-[178px] rounded-primary" />
            </div>
        </div>
        <div class="container-overlay" :class="posterSID?.fullSID ? 'bg-gradient-to-t from-black/70 px-4 bottom-0 rounded-primary' : '-top-2 '">
            <div class="container-content">
                <div>
                    <span class="item-content"> {{ created }}</span>
                </div>
                <div class="w-[2px] h-3 bg-white">
                </div>
                <div class="item-content">
                    <span>{{ readingTime }} {{ $t('global.minute') }} {{ $t('global.study') }}</span>
                </div>
            </div>
        </div>
    </div>

</template>


<style scoped>
.container-card {
    @apply w-full relative
}

.container-overlay {
    @apply w-full absolute left-0  pb-5;
}

.container-content {
    @apply flex gap-x-2 items-center relative top-3 text-white
}

.item-content {
    @apply text-sm font-bold
}
</style>