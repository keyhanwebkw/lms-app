<script lang="ts" setup>
import { SetPassword } from '~/stores/auth/setPassword'

const password = SetPassword()

password.clearCatch()
</script>


<template>
    <div class="container">
        <NuxtLayout name="auth" :description="$t('auth.description_set_password')" :loading="password.loading"
            @submitForm="password.SubmitHandler()">
            <template #form>
                <div class="w-full">
                    <FormBaseInput type="passowrd" v-model:model-value="password.dataModel.password"
                        :label="$t('auth.password')" :mandatory="true" :error="password.dataError.password" />
                </div>
                <div class="w-full">
                    <FormBaseInput type="passowrd" v-model:model-value="password.dataModel.rePassword"
                        :label="$t('auth.re_password')" :mandatory="true" @input="password.hendelPasswordSimilarity()" :error="password.dataError.rePassword"/>
                </div>
            </template>
        </NuxtLayout>
    </div>
</template>

<style scoped>
.container {
    @apply w-full h-screen flex flex-col justify-center items-center gap-y-5
}
</style>
