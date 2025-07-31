<script lang="ts" setup>
import { VerifyPhone } from "~/stores/auth/verifyPhone"

const verifyPhoneStore = VerifyPhone()

verifyPhoneStore.countDown()
verifyPhoneStore.getMsg()

const msgOTP = computed(() => verifyPhoneStore.msg)

function handleInput(event: Event) {
    const inputType = (event as InputEvent).inputType;
    let currentActiveElement = event.target as HTMLInputElement;

    if ((event.target as HTMLInputElement).value.length > 1) {
        (event.target as HTMLInputElement).value = (event.target as HTMLInputElement).value.slice(0, 1)
        if (inputType === "insertText") (currentActiveElement.nextElementSibling as HTMLElement)?.focus();
        verifyPhoneStore.checkLengthValue()
    }
    else if (inputType === "insertText") {
        (currentActiveElement.nextElementSibling as HTMLElement)?.focus();
    }
    verifyPhoneStore.updateOutput()
}

function handleDelete(event: Event) {
    let value = (event.target as HTMLInputElement).value;
    let currentActiveElement = event.target as HTMLInputElement;
    if (!value) {
        (currentActiveElement.previousElementSibling as HTMLElement)?.focus();
    }
    verifyPhoneStore.updateOutput()
}

</script>

<template>
    <div class="container-verify-phone-page container-auth-page">
        <NuxtLayout name="auth" :description="msgOTP" :loading="verifyPhoneStore.loading"
            @submitForm="verifyPhoneStore.submitSendOtp">
            <template #form>
                <!-- input -->
                <div class="verify-input-box">
                    <input v-for="(key, index) in Object.keys(verifyPhoneStore.dataModel)" :key="index" type="number"
                        class="input-verify" v-model="verifyPhoneStore.dataModel[key]" @input="handleInput"
                        @keydown.delete="handleDelete" />
                </div>
                <div class="options-box">
                    <!-- edit phone -->
                    <div class="w-full">
                        <NuxtLink to="/auth/enter-phone" class="text-gray-300 text-xs underline">{{
                            $t('auth.wrong_number') }}
                        </NuxtLink>
                    </div>
                    <!-- resend code  -->
                    <div class="resend-code-box">
                        <div v-if="verifyPhoneStore.statusDisabled" class="flex gap-x-1">
                            <span>{{ verifyPhoneStore.timer }}</span>
                            <span>{{ $t('auth.second_to') }}</span>
                            <span>{{ $t('auth.resend_code')
                            }}</span>
                        </div>
                        <div v-else @click="verifyPhoneStore.resendCode" class="text-purple-500 cursor-pointer">
                            {{
                                $t('auth.resend_code')
                            }}
                            <span class="loader-btn-gold" v-if="verifyPhoneStore.loadingResend"></span>
                        </div>
                    </div>
                </div>
            </template>
        </NuxtLayout>
    </div>
</template>

<style>
@import url('/assets/css/form.css');

.container-verify-phone-page .verify-input-box {
    @apply w-full flex flex-row-reverse justify-center gap-x-6
}

.container-verify-phone-page .verify-input-box input {
    direction: ltr;
}

.container-verify-phone-page .options-box {
    @apply w-full flex justify-between -mt-4 px-2
}

.container-verify-phone-page .resend-code-box {
    @apply w-full flex items-center justify-end text-xs gap-x-0.5 font-semibold text-purple-500 mt-1
}
</style>