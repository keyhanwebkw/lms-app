<script lang="ts" setup>
import type { DataPriceInfo } from '~/types/course';
import { separate } from '~/func/separate';

const props = defineProps<DataPriceInfo>()

const showDiscount = computed(() =>  props.discountAmount !== 0 || null ?  false: true)
</script>

<template>

    <div class="container-price">
        <div v-if="showDiscount" class="container-discount-price">
            <div class=" bg-red-500 box-price">
                <del>
                    <div class="discount-percentage">
                        <span>%{{ discountPercentage }}</span>
                        <span>{{ $t('global.discount') }}</span>
                    </div>
                    <div>
                        <span>{{ $t('global.org_price') }}</span>
                        <span> {{ separate(price) }} {{ $t('global.unit') }}</span>
                    </div>
                </del>
            </div>
            <div class="bg-green-300 box-price">
                <span>{{ $t('course.detailsCourse.price_course') }} : </span>
                <span>{{ separate(discountAmount) }} {{ $t('global.unit') }}</span>
            </div>
        </div>
        <div v-else class=" bg-green-300 box-price">
            <span>{{ $t('course.detailsCourse.price_course') }} : </span>
            <span>{{ separate(price) }} {{ $t('global.unit') }}</span>
        </div>

    </div>
</template>


<style scoped>
.container-price {
    @apply w-full max-w-[300px] flex flex-col gap-y-3
}

.container-discount-price {
    @apply w-full flex flex-col items-center gap-y-3
}

.box-price {
    @apply w-full py-3 text-white font-semibold rounded-primary flex items-center justify-center text-sm
}

.box-price del,
.box-price del .discount-percentage {
    @apply flex gap-x-2
}
</style>