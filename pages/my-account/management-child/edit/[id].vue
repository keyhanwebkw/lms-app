<script lang="ts" setup>
import { ChildProfile } from '~/stores/mangementChild/edit'
import { genderChild } from '~/static/dataGender'

const editProfile = ChildProfile()
const route = useRoute()

onMounted(async () => {
    await editProfile.clearDataProfile()
    await editProfile.getChildProfile(Number(route.params.id))
})


const changeStatusPopup = () => {
    editProfile.popup = !editProfile.popup
}

</script>

<template>
    <div class="w-full flex flex-col items-center ">

        <!-- title -->
        <BaseTitle type="back" :title="$t('my_account.profile.title_child')" />
        <div class="w-full" v-if="editProfile.loading">
            <LoadingFormLayout />
        </div>
        <!-- form -->
        <div class="edit-profile" v-else>
            <form @submit.prevent="" class="container-profile items-center ">

                <div class="container-profile  max-w-[350px]  gap-y-5">
                    <MyAccountMangmentChildAvatar :SID="editProfile.profile.avatarSID.fullSID"
                        @change="changeStatusPopup()" />

                    <MyAccountMangmentChildAvatarPopup :avatarSID="editProfile.profile.avatarSID.fullSID"
                        @change="editProfile.changeAvatar" :show-popup="editProfile.popup"
                        @close="changeStatusPopup()" />

                    <!-- name -->
                    <FormBaseInput type="text" v-model:model-value="editProfile.profile.name"
                        :label="$t('my_account.profile.name')" :mandatory="true" />

                    <!-- userName -->
                    <FormBaseInput type="text" v-model:model-value="editProfile.profile.userName"
                        :label="$t('my_account.profile.user_name')" :mandatory="true" />

                    <!-- gender -->
                    <FormBaseSelectBox :items="genderChild" v-model:model-value="editProfile.profile.gender"
                        :label="$t('profile.gender')" :mandatory="true" typeInput="text" :disabled="false" />

                    <!-- nationalCode -->
                    <FormBaseInput type="number" v-model:model-value="editProfile.profile.nationalCode"
                        :label="$t('my_account.profile.national_code')" :mandatory="false" />

                    <!-- birth_date -->
                    <FormBaseInput type="text" v-model:model-value="editProfile.profile.birthDate"
                        :label="$t('my_account.profile.birth_date')" :mandatory="false"
                        class="calender-box-selction-birthDate" :calender="true" />
                    <date-picker v-model='editProfile.profile.birthDate'
                        custom-input=".calender-box-selction-birthDate"></date-picker>

                </div>

                <div class="mt-6">
                    <BaseBtn type="submit" type-design="action" :text="$t('global.confirm')"
                        customDesign="btn-submit" />
                </div>
            </form>
        </div>

    </div>
</template>

<style scoped>
.edit-profile {
    @apply w-full flex flex-col items-center px-2 py-6 shadow-primary rounded-primary mt-4
}

.container-profile {
    @apply w-full flex flex-col items-center
}

.btn-submit {
    @apply bg-purple-500 !text-sm text-white !px-10
}
</style>