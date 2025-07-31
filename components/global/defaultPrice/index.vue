<script lang="ts" setup>
import type { DefaultPrice } from "~/types/global"

const props = defineProps<DefaultPrice>()

const showDiscount = computed(() => {
  return props.discount !== 0;
});</script>

<template>
    <div class="flex flex-col">
        <div class="flex flex-col" v-if="showDiscount">
            <div class="flex gap-x-3 items-center ">
                <del class="text-sm text-gray-500 flex ">
                    <span>{{ amount }}</span><span>{{ $t('global.unit') }}</span>
                </del>
                <span class="w-[50px] flex justify-center items-center h-[21px] rounded-primary text-white bg-red-700">
                    {{ discountPercentage }}
                </span>
            </div>
            <div class="font-bold text-lg mr-3 flex gap-x-1">
                <span>{{ discount }}</span>
                <span>{{ $t('global.unit') }}</span>
            </div>
        </div>
        <div class="font-bold text-lg mr-3 flex gap-x-1" v-else>
            <span>{{ amount }}</span>
            <span>{{ $t('global.unit') }}</span>
        </div>
    </div>
</template>