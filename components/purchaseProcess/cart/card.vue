<script setup lang="ts">
import type { DataCardCart, DetailsDataTeacher } from '~/types/purchaseProcess';

const emit = defineEmits<{
    (event: 'remove', payload: any): void
}>()

const props = defineProps<DataCardCart>()
const teacher = computed(() => {
    return props.dataTeacher.filter((item:DetailsDataTeacher) => {
        return props.dataOrderCart.ID === item.ID;
    });
});

</script>
<template>
    <div class="container-card-cart">
        <!-- img -->
        <div class="w-[146px] h-[106px] rounded-primary">
            <NuxtImg :src="dataOrderCart.image" :alt="dataOrderCart.name" class="w-full h-full object-cover rounded-primary" />
        </div>
        <!-- content -->
        <div class="flex flex-col gap-y-2">
            <!-- title -->
            <div>
                <span class="font-bold ">{{ dataOrderCart.name }}</span>
            </div>
            <!-- full name teacher  -->
            <div v-if="teacher.length > 0">
                <span class="text-xs text-gray-300">{{ $t('global.teacher_course') }} : {{ teacher[0].name }}{{
                    teacher[0].family }}</span>
            </div>

            <!-- The percentage of user recommendations -->
            <div class="text-green-100 flex  items-center gap-x-1 text-xs">
                <IconUserGroup />
                <span>{{ dataOrderCart.percentageUser }}</span>
                <span>{{ $t('purchaseProcess.percentage_user') }}</span>
            </div>

            <!-- price -->
            <div class="flex items-center justify-between ">
                <DefaultPrice :amount="dataOrderCart.amount" :discount="dataOrderCart.discount"
                    :discount-percentage="dataOrderCart.discountPercentage" />
                <div class="w-[31px] h-[32px]  shadow-primary rounded-sm text-red-700 flex justify-center items-center">
                    <IconRemove @click="$emit('remove', dataOrderCart.ID)" />
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.container-card-cart {
    @apply w-full h-full flex gap-x-3 items-center rounded-sm px-3 py-5 bg-white shadow-primary
}
</style>