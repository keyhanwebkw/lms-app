<script setup lang="ts">
import { CreateChild } from '~/stores/mangementChild/createChild';

const createChildStore = CreateChild()
createChildStore.clearDataModel()

const gender = ref([
    {
        ID: 'male',
        name: 'male'
    },
    {
        ID: 'female',
        name: 'female'
    },
])

const changeStatusPopup = () => {
    createChildStore.avatar.popup = !createChildStore.avatar.popup
}

</script>

<template>
    <div class="w-full flex flex-col gap-y-4">
        <BaseTitle type="back" :title="$t('my_account.manage_child.add_new')" />
        <div class="add-child-container">
            <form @submit.prevent="createChildStore.validateForm()">
                <MyAccountMangmentChildAvatar :SID="createChildStore.dataModel.avatarSID"
                    @change="changeStatusPopup()" />
                <MyAccountMangmentChildAvatarPopup :avatarSID="createChildStore.dataModel.avatarSID"
                    @change="createChildStore.changeAvatar" :show-popup="createChildStore.avatar.popup"
                    @close="changeStatusPopup()" />
                <FormBaseInput type="text" v-model:model-value="createChildStore.dataModel.name"
                    :label="$t('profile.name')" :mandatory="true" :error="createChildStore.dataError.name" />
                <FormBaseInput type="text" v-model:model-value="createChildStore.dataModel.username"
                    :label="$t('profile.username')" :error="createChildStore.dataError.username" />
                <FormBaseInput type="number" v-model:model-value="createChildStore.dataModel.nationalCode"
                    :label="$t('profile.national_code')" :error="createChildStore.dataError.nationalCode" />
                <div>
                    <FormBaseInput type="text" v-model:model-value="createChildStore.dataModel.birthDate"
                        :label="$t('profile.birth_date')" class="calender-box-selction-birthDate" :calender="true"
                        :error="createChildStore.dataError.birthDate" />
                    <date-picker v-model='createChildStore.dataModel.birthDate'
                        custom-input=".calender-box-selction-birthDate"></date-picker>
                </div>
                <FormBaseSelectBox :items="gender" v-model:model-value="createChildStore.dataModel.gender"
                    :label="$t('profile.gender')" :mandatory="true" typeInput="text" :disabled="false" />
                <div class="submit-form">
                    <BaseBtn type="submit" type-design="action" :text="$t('global.submitData')"
                        customDesign="!w-max bg-purple-500 !text-sm" :loading="createChildStore.loading" />
                </div>
            </form>
        </div>
    </div>
</template>

<style scoped>
.add-child-container {
    @apply w-full flex flex-col items-center px-2 py-6 shadow-primary rounded-primary
}

.add-child-container form {
    @apply w-full max-w-[90%] flex flex-col gap-y-4
}

.add-child-container form .submit-form {
    @apply flex items-center justify-center gap-x-3 mt-4
}
</style>