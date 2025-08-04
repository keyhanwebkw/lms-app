<script lang="ts" setup>
import { ChangePassword } from '~/stores/profile/changePassword';

const dataChangePassword = ChangePassword()
</script>

<template>
    <div class="container-change-password gap-y-8 ">

        <!-- title -->
        <BaseTitle type="back" :title="$t('my_account.change_password.title')" />

        <!-- form -->
        <form @submit.prevent="dataChangePassword.handleChangePassword" class="container-change-password items-center ">

            <div class="container-change-password  max-w-[350px]  gap-y-5">

                <!-- oldPassword -->
                <FormBaseInput type="password" v-model:model-value="dataChangePassword.dataModel.oldPassword"
                    :label="$t('my_account.change_password.old_password')" :mandatory="true"
                    :error="dataChangePassword.dataError.oldPassword" />

                <!-- new password -->
                <FormBaseInput type="password" v-model:model-value="dataChangePassword.dataModel.newPassword"
                    :label="$t('my_account.change_password.new_password')" :mandatory="true"
                    :error="dataChangePassword.dataError.newPassword" />

                <!-- confirm new password -->
                <FormBaseInput type="password"
                    v-model:model-value="dataChangePassword.dataModel.newPasswordConfirmation"
                    :label="$t('my_account.change_password.confirm_new_password')" :mandatory="true"
                    :error="dataChangePassword.dataError.newPasswordConfirmation" />
            </div>

            <div class="mt-6">
                <BaseBtn type="submit" type-design="action" :text="$t('global.confirm')" customDesign="btn-submit"
                    :loading="dataChangePassword.loading" />
            </div>
        </form>
    </div>
</template>

<style scoped>
.container-change-password {
    @apply w-full flex flex-col
}

.btn-submit {
    @apply bg-blue-500 !text-sm text-white !px-10
}
</style>