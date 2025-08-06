<script lang="ts" setup>
import type { DataPriceInfo } from '~/types/course';
import { separate } from '~/func/separate';

const props = defineProps<DataPriceInfo>()

const showDiscount = computed(() =>  props.discountAmount !== 0 || null ?  false: true)
</script>

<template>

    <div class="container-price">
        <div v-if="showDiscount" class="container-discount-price">
            <div class=" box-price">
                <del>
                    
                    <div class="discountprice">
                        <span>{{ $t('global.org_price') }}</span>
                        <span> {{ separate(price) }} {{ $t('global.unit') }}</span>
                    </div>
                </del>
            </div>
            <div class="box-price flex flex-row justify-between ">
                <div class=" text-blue-300 font-bold text-lg">
                <span>{{ $t('course.detailsCourse.price_course') }} : </span>
                <span>{{ separate(discountAmount) }} {{ $t('global.unit') }}</span>
            </div>
            <div class="discount-percentage font-xs text-red-900 border-[2px] border-red-900 px-3  rounded-full ">
                        <span>%{{ discountPercentage }}</span>
                        <span>{{ $t('global.discount') }}</span>
                    </div>
            </div>
        </div>
        <div v-else class="box-price">
            <span>{{ $t('course.detailsCourse.price_course') }} : </span>
            <span>{{ separate(price) }} {{ $t('global.unit') }}</span>
        </div>

    </div>
</template>


<style scoped>
.container-price {
    @apply w-full flex flex-col gap-y-3 justify-start
}

.container-discount-price {
    @apply w-full flex flex-col items-start justify-start
}

.box-price {
    @apply w-full py-1  rounded-primary flex items-center  
}

.box-price del,
.box-price del .discount-percentage {
    @apply flex gap-x-2 text-[#FD949A] 
}

.discountprice span{
    @apply text-[#FD949A] text-sm
}
</style>