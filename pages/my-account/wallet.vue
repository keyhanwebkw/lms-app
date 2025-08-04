<script lang="ts" setup>
import type { DetailsTransactionHistoryOnline } from '~/types/transactionHistory';

const dataList = ref<DetailsTransactionHistoryOnline[]>([
  {
    ID: 1,
    amount: 170000,
    created: 174548878,
    type: 'increment'
  },
  {
    ID: 2,
    amount: 180000,
    created: 174548879,
    type: 'increment'
  }
])

</script>

<template>
    <div class="container-card gap-y-5 ">
        <BaseTitle type="back" :title="$t('my_account.title')" />
        <div class="container-card  gap-y-3">
            <MyAccountWallet :balance="50000" />
        </div>
        <div class="container-card gap-y-3">
            <span class="text-blue-500 font-semibold">{{ $t('my_account.wallet.history_payments') }}</span>
            <MyAccountTransactionHistoryCardOnline :dataList="data"  v-for="data in dataList" :key="data.ID"/>
        </div>
    </div>
</template>

<style scoped>
.container-card {
    @apply w-full flex flex-col
}
</style>