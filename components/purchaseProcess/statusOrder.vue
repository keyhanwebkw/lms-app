<script lang="ts" setup>

const props = defineProps<{ status: 'success' | 'error' }>()

const IsSuccess = computed(() => props.status == "success")
</script>

<template>
    <div class="w-full flex flex-col  items-center gap-y-8">
        <div>
            <NuxtImg :src="'/img/' + (IsSuccess ? 'success_order.webp' : 'error_order.webp')" :alt="'image' + status" />
        </div>
        <div class="text-xl font-bold " :class="IsSuccess ? 'text-green-300' : 'text-red-700'"> 
            <span> {{ $t(`purchaseProcess.${status}`) }} </span>
        </div>
        <div class="flex gap-x-5">
            <div class="" v-if="IsSuccess">
                <BaseBtn type="button" type-design="action" customDesign="bg-green-300 !w-[170px]" :text="$t('purchaseProcess.view_order')"  @click="$router.push('/')"/>
            </div>
            <div v-else>
                <BaseBtn type="button" type-design="action" customDesign="bg-red-700 !w-[170px]" :text="$t('purchaseProcess.retry')"  @click="$router.push('/')"/>
            </div>
            <div>
                <BaseBtn type="button" type-design="outline-action" customDesign="!rounded-sm !text-gray-300 !font-bold" :text="$t('purchaseProcess.return_home')"  @click="$router.push('/')"/>
            </div>
        </div>
    </div>
</template>