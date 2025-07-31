<script lang="ts" setup>
const dataList = ref([
    {
        ID: 1,
        bankName: 'بانک سامان',
        price: 200000,
        trackingCode: 798654438434,
        created: 174545474,
    },
    {
        ID: 1,
        bankName: 'بانک سامان',
        price: 200000,
        trackingCode: 798654438434,
        created: 174545474,
    },
    {
        ID: 1,
        bankName: 'بانک سامان',
        price: 200000,
        trackingCode: 798654438434,
        created: 174545474,
    },
])
</script>


<template>
    <div class="w-full flex flex-col gap-y-5  ">
        <BaseTitle type="back" :title="$t('my_account.payment_history')" />
        <div class=" w-full flex flex-col gap-y-5 ">
            <MyAccountTransactionHistoryCardOffline :dataList="data" v-for="(data, index) in dataList" :key="index" :count="index + 1" />
        </div>
    </div>
</template>