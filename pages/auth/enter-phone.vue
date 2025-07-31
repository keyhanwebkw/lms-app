<script lang="ts" setup>
import { useSendOTPStore } from '~/stores/auth/enterPhone';

const dataSendOTPSotre = useSendOTPStore()
dataSendOTPSotre.clearData()

</script>

<template>
    <div class="container-auth-page">
        <NuxtLayout name="auth" :description="$t('auth.description_enter_phone')" :loading="dataSendOTPSotre.loading"
            @submitForm="dataSendOTPSotre.validateForm()">
            <template #form>
                <div class="w-full">
                    <FormBaseInput type="number" v-model:model-value="dataSendOTPSotre.dataModel.mobile"
                        :label="$t('auth.phone_parent')" :mandatory="true"
                        :error="dataSendOTPSotre.dataError?.mobile" />
                </div>
            </template>
        </NuxtLayout>
        <div class="container-check-box">
            <div class="font-semibold text-xs">
                <span class="text-purple-500">{{ $t('auth.login_app') }}</span>
                <span class="">{{ $t('auth.accepting_personal_privacy') }}</span>
            </div>
        </div>
    </div>
</template>

<style scoped>
.container-check-box {
    @apply w-[330px] py-5 border-t-[2px] border-t-gray-100 flex items-center gap-x-3
}

input[type=checkbox] {
    @apply w-[15px] h-[15px]
}
</style>