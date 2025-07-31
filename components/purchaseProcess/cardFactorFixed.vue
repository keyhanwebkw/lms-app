<script lang="ts" setup>
import type { DataFactorFixed } from '~/types/purchaseProcess';
import { separate } from '~/func/separate';

const emit = defineEmits<{
    (event: 'payment'): void;
}>();

const props = defineProps<DataFactorFixed>()
</script>

<template>
    <div class="container-factor-fixed">
        <div>
            <BaseBtn type="button" :loading="false" type-design="action" color="bg-green-100" icon="/img/icon-cart.png"
                :text="$t('purchaseProcess.payment')"  @click="$emit('payment')" />
        </div>
        <div class="flex flex-col gap-y-2 items-end">
            <span class="text-gray-300 text-sm ">{{ $t('purchaseProcess.total_shipping_cart') }}</span>
            <span class="text-gray-500 font-bold">{{ separate(totalAmount) }} {{ $t('global.unit') }}</span>
        </div>
    </div>
</template>


<style scoped>
.container-factor-fixed{
    @apply w-full h-[84px] rounded-t-sm shadow-secend  px-5 flex justify-between items-center fixed bottom-0 left-0
}
</style>
