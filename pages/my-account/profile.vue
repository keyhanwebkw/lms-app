<script lang="ts" setup>
import { UserProfile } from '~/stores/profile/index'
import { GenerateDate } from '~/func/GenerateDate'
import { gender } from '~/static/dataGender'

const dataProfile = UserProfile()

onMounted(async () => {
    await dataProfile.clearDataProfile()
    await dataProfile.getUserProfile()
})


const changeStatusPopup = () => {
    dataProfile.popup = !dataProfile.popup
}

</script>

<template>
    <div class="w-full flex flex-col items-center ">

        <!-- title -->
        <BaseTitle type="back" :title="$t('my_account.profile.title')" />
        <div class="w-full" v-if="dataProfile.loading">
            <LoadingFormLayout />
        </div>
        <!-- form -->
        <form @submit.prevent="dataProfile.handleFormUpdateProfile()" class="container-profile items-center " v-else>
            <div class="container-profile  max-w-[350px]  gap-y-5">
                <MyAccountMangmentChildAvatar :SID="dataProfile.dataModel.avatarSID.fullSID" />
                <!-- fullName -->
                <FormBaseInput type="text" v-model:model-value="dataProfile.profile.name"
                    :label="$t('my_account.profile.name')" :mandatory="true" />
                <FormBaseInput type="text" v-model:model-value="dataProfile.profile.family"
                    :label="$t('my_account.profile.family')" :mandatory="true" />

                <!-- phone number -->
                <FormBaseInput type="number" v-model:model-value="dataProfile.profile.mobile"
                    :label="$t('my_account.profile.phone_number')" :mandatory="false" :disabled="true" />

                <!-- nationalCode -->
                <FormBaseInput type="number" v-model:model-value="dataProfile.profile.nationalCode"
                    :label="$t('my_account.profile.national_code')" :mandatory="false" />

                <!-- gender -->
                <FormBaseSelectBox :items="gender" v-model:model-value="dataProfile.profile.gender"
                    :label="$t('profile.gender')" :mandatory="true" typeInput="text" :disabled="false" />

                <!-- birth_date -->
                <FormBaseInput type="text" v-model:model-value="dataProfile.profile.birthDate"
                    :label="$t('my_account.profile.birth_date')" :mandatory="false"
                    class="calender-box-selction-birthDate" :calender="true" />
                <date-picker v-model='dataProfile.profile.birthDate'
                    custom-input=".calender-box-selction-birthDate"></date-picker>

            </div>

            <div class="mt-3">
                <BaseBtn type="submit" type-design="action" :loading="dataProfile.loadingBtn" :text="$t('global.confirm')" customDesign="btn-submit" />
            </div>
        </form>
    </div>
</template>

<style scoped>
.container-profile {
    @apply w-full flex flex-col items-center
}

.btn-submit {
    @apply bg-purple-500 !text-sm text-white !px-10
}
</style>