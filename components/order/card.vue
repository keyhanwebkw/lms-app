<script lang="ts" setup>
import type { DataCardOrder, DetailsItemProductOrder, DetailsProduct } from '~/types/order';
import { separate } from '~/func/separate';
import { GenerateDate } from '~/func/GenerateDate';
import { handelStatus } from '~/services/constants/dataStatus';

const props = defineProps<DataCardOrder>()
const dataProduct = ref<DetailsProduct[]>([])

props.orders.items.forEach((order: DetailsItemProductOrder) => {
    props.products.map((product: DetailsProduct) => {
        return order.productID == product.ID ? dataProduct.value.push(product) : ''
    })
})



// const resultStatus = computed(() =>  handelStatus.value[props.orders.status])

</script>

<template>
    <NuxtLink to="/" class="w-full flex flex-col second-gap rounded-sm p-3 bg-white shadow-primary">


        <div class="flex justify-between items-center">
            <!-- status -->
            <!-- <div :class="resultStatus.color" class="flex gap-x-2 items-center">
                <component :is="resultStatus.icon" class="mt-1" />
                <span>{{ $t(`order.status.${orders.status}`) }}</span>
            </div> -->
            <!-- price -->
            <div class="font-bold flex gap-x-1">
                <span>{{ separate(orders.totalPrice) }}</span>
                <span>
                    {{ $t('global.unit') }}
                </span>
            </div>
        </div>


        <div class="flex justify-between text-xs text-gray-300">
            <!-- date -->
            <div>
                {{ GenerateDate({ timestamp: orders.created, type: 'numberDate' }) }}
            </div>
            <!-- tracking code -->
            <div class="flex items-center gap-x-1">
                <IconDocument />
                <span>{{ $t('order.order_tracking_code') }}</span>
                <span>{{ orders.trackingCode }}</span>
            </div>
        </div>

        <div class="flex  justify-between items-end">
            <!-- imgaes order -->
            <div class="flex gap-x-2">
                <div class='w-[49px] h-[65px] ' v-for="product in dataProduct.splice(0,4)" :key="product.ID">
                    <NuxtImg :src="product.image" :alt="product.name" class="w-full h-full rounded-sm object-cover" />
                </div>
            </div>
            <!-- show factor -->
            <div class="flex gap-x-2 items-center text-purple-500 text-sm">
                <IconFolder />
                <NuxtLink to="/">{{ $t('order.show_factor') }}</NuxtLink>
            </div>
        </div>
    </NuxtLink>
</template>