<script lang="ts" setup>
import { separate } from "~/func/separate";
import type { DataFactor } from "~/types/purchaseProcess"

const props = defineProps<DataFactor>()
</script>

<template>
    <div class="container-factor">
        <div class="box-factor">
            <!-- title -->
            <div class="w-full flex justify-center font-semibold text-purple-500">
                <span> {{ $t('purchaseProcess.factor_order') }}</span>
            </div>
            <!-- basePrice -->
            <div class="items-factor text-gray-300 text-sm">
                <div>
                    {{ $t('purchaseProcess.base_price') }}
                </div>
                <div class="flex gap-x-1">
                    {{ separate(basePrice) }}
                    {{ $t('global.unit') }}
                </div>
            </div>
            <!-- discount Price -->
            <div class="items-factor text-purple-500 text-sm">
                <div>
                    {{ $t('purchaseProcess.discount_price') }}
                </div>
                <div class="flex gap-x-1">
                    {{ separate(discountAmount) }}
                    {{ $t('global.unit') }}
                </div>
            </div>
            <!-- line -->
            <div class="line-box">

            </div>
            <!-- discount Price -->
            <div class="items-factor text-purple-500 text-sm">
                <div>
                    {{ $t('purchaseProcess.total_amount') }}
                </div>
                <div class="flex gap-x-1">
                    {{ separate(totalAmount) }}
                    {{ $t('global.unit') }}
                </div>
            </div>
            <!-- submit -->
            <div class="w-full mt-3">
                <BaseBtn type="submit" type-design="submit" :loading="false" :text="$t('global.confirm')" />
            </div>
        </div>
    </div>
</template>


<style scoped>
.container-factor {
    @apply w-full shadow-primary rounded-sm py-3 flex justify-center
}

.box-factor {
    @apply w-full max-w-[300px] flex flex-col gap-y-5
}

.items-factor {
    @apply w-full flex justify-between items-center 
}

.line-box{
    @apply w-full h-[1px] bg-gray-50
}
</style>