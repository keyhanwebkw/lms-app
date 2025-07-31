<script lang="ts" setup>
import type { DataTranactionHistoryOnline } from '~/types/transactionHistory';
import { separate } from '~/func/separate';
import { GenerateDate } from '~/func/GenerateDate';

const props = defineProps<DataTranactionHistoryOnline>()

</script>

<template>
    <div class="w-full py-5 flex gap-x-2 rounded-sm px-3  shadow-primary ">
        <div class="h-full mt-3 ">
            <IconTransactionHistory class="text-gray-500" />
        </div>
        <div class="flex h-full justify-center flex-col gap-y-1">
            <div>
                <span class="text-xs text-gray-500">{{ GenerateDate({ timestamp: dataList.created, type: "timeDate" })
                    }}</span>
            </div>
            <div class="flex gap-x-1 font-bold">
                <span>{{ separate(dataList.amount) }} {{ $t('global.unit') }}</span>
                -
                <span>{{ $t(`my_account.wallet.transaction_history.${dataList.type}`) }}</span>
            </div>
        </div>
    </div>
</template>