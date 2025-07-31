<script lang="ts" setup>
import { GenerateDate } from '~/func/GenerateDate';
import type { DataImgInfoDetailsBlog } from '~/types/blog';

const props = defineProps<DataImgInfoDetailsBlog>()
</script>

<template>
    <div class="container-img-info-blog">
        <!-- img -->
        <NuxtImg :src="$config.public.storage.original + posterSID.fullSID" :alt="posterSID.fileName"
         />
        <!-- info -->
        <div class="container-info-blog">
            <!-- created -->
            <div>
                {{ GenerateDate({ timestamp: created, type: 'numberDate' }) }}
            </div>
            |
            <!-- timeReading -->
            <div class="flex gap-x-1">
                <span>{{ readingTime }}</span>
                <span>{{ $t('global.minute') }} {{ $t('global.study') }}</span>
            </div>
        </div>
    </div>
</template>

<style scoped>
.container-img-info-blog {
    @apply w-full max-w-[360px] h-[178px] relative
}

.container-img-info-blog img {
    @apply w-full h-full object-cover rounded-primary
}

.container-img-info-blog .container-info-blog {
    @apply absolute bottom-3 right-3 flex text-xs font-semibold text-white gap-x-2
}
</style>