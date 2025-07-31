<script lang="ts" setup>
import type { DataTransactionHistory } from '~/types/transactionHistory';
import { GenerateDate } from '~/func/GenerateDate';
import { separate } from '~/func/separate';
import { clostTooltip, showTooltip } from '~/func/tooltip';

const props = defineProps<DataTransactionHistory>()
</script>

<template>
    <div class="w-full flex justify-between rounded-sm px-5 py-3 bg-white shadow-primary">
        <!-- right card -->
        <div class="gap-item primary-gap">
            <div class="flex gap-x-2 ">
                <span class="w-[25px] h-[25px] rounded-full bg-purple-100 text-purple-500 container-flex-center">
                    {{ count }}
                </span>
                <span class="text-purple-500">
                    {{ dataList.bankName }}
                </span>
            </div>
            <div class="item-transaction">
                <IconPrice />
                <span>
                    {{ separate(dataList.price) }} {{ $t('global.unit') }}
                </span>
            </div>
        </div>
        <!-- left card -->
        <div class="gap-item primary-gap  relative">
            <div class="item-transaction"  :id="`tranactionHistory${dataList.ID}`" @mouseleave="clostTooltip(`tranactionHistory${dataList.ID}`)" @mouseover="showTooltip({id:`tranactionHistory${dataList.ID}`,text:'کد رهگیری بانک',styleTooltip:'!right-4'})">
                <IconBank />
                <span>{{ dataList.trackingCode }}</span>
            </div>
            <div class="item-transaction   justify-end" >
                <IconCalender />
                <span>{{ GenerateDate({ timestamp: dataList.created, type: 'numberDate' }) }}</span>
            </div>
        </div>

    </div>
</template>

<style scoped>
.gap-item {
    @apply flex flex-col 
}

.item-transaction {
    @apply text-gray-500 flex gap-x-2 items-center
}
</style>
