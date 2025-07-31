<script lang="ts" setup>
import type { DataCardSupport } from '~/types/support';
import { limitWord } from '~/func/limitWords';
import { GenerateDate } from '~/func/GenerateDate';

const props = defineProps<DataCardSupport>()


</script>

<template>
    <div class="container-card-ticket">
        <!-- img -->
        <div class="container-icon">
            <div class="box-icon container-flex-center">
                <IconTicket />
            </div>
        </div>
        <!-- content -->
        <div class="container-content second-gap">
            <!-- title and status -->
            <div class="container-top-content">
                <span>{{ dataList.title }}</span>
                <Status :status="dataList.status" />
            </div>
            <!-- desceription -->
            <div>
                <p class="description-content">
                    {{ limitWord({ sentens: dataList.description, count: 25 }) }}</p>
            </div>
            <!-- time -->
            <div class="time-content">
                <span>{{ GenerateDate({ timestamp: dataList.created, type: 'numberDate' }) }}</span>
                <IconCalender />
            </div>
        </div>
    </div>
</template>


<style scoped>
.container-card-ticket {
    @apply w-full flex gap-x-4 rounded-sm px-5 py-3 bg-white shadow-primary
}

.container-icon {
    @apply w-[35px] h-[35px]
}

.box-icon {
    @apply w-full h-full rounded-primary bg-red-700  text-white pb-1
}

.container-content {
    @apply w-full flex flex-col 
}

.container-top-content {
    @apply w-full flex justify-between font-semibold
}

.description-content {
    @apply text-gray-500 text-xs text-justify leading-6
}

.time-content {
    @apply text-gray-500 flex gap-x-2 w-full justify-end text-sm
}
</style>