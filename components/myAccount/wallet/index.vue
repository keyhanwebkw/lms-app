<script lang="ts" setup>
import type { DataInventoryWallet } from '~/types/wallet';
import { separate } from '~/func/separate';
const loading = ref<boolean>(false)

const props = defineProps<DataInventoryWallet>()
</script>

<template>
    <div class="w-full max-w-[400px] flex flex-col  items-center   rounded-sm  gap-y-6 py-6  bg-white shadow-primary">
        <div>
            <NuxtImg src="/img/wallet.webp" class="w-[80px]" />
        </div>
        <div class="text-green-100">
            <span >{{ $t('my_account.wallet.title_balance') }}  : </span>
            <span>{{ separate(balance) }} {{ $t('global.unit') }}</span>
        </div>
        <div>
            <BaseBtn type="button"  typeDesign="simple" customDesign="bg-purple-500 !text-sm py-2 px-4 rounded-[30px]" :loading="loading" :text="$t('my_account.wallet.transaction_history.increment')"/>
        </div>
    </div>
</template>