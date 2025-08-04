<script lang="ts" setup>
import { EnterPassword } from '~/stores/auth/enterPassword';

const enterPassStore = EnterPassword()
enterPassStore.getMobile()
enterPassStore.clearCatch()
</script>

<template>
    <div class="container-auth-page">
        <NuxtLayout name="auth" :description="$t('auth.description_enter_password')" :loading="enterPassStore.loading"
            @submitForm="enterPassStore.submitLoginUser()">
            <template #form>
                <div class="w-full">
                    <FormBaseInput type="password" v-model:model-value="enterPassStore.dataModel.password"
                        :error="enterPassStore.dataError.password" :label="$t('auth.password')" :mandatory="true" />
                    <span class="text-forget-password" @click="enterPassStore.reqForgetPassword">{{
                        $t('auth.forget_password') }}</span>
                </div>
            </template>
        </NuxtLayout>
    </div>
</template>

<style scoped>
.text-forget-password {
    @apply text-blue-500 font-semibold text-xs
}
</style>