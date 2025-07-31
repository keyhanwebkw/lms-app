<script lang="ts" setup>
import { SetProfile } from '~/stores/auth/setProfile';

const setProfileStore = SetProfile()

</script>

<template>
    <div class="container-auth-page ">
        <NuxtLayout name="auth" :description="$t('auth.description_set_profile')" :loading="setProfileStore.loading"
            @submitForm="setProfileStore.validateForm()">
            <template #form>
                <div class="container-flex-col-center gap-y-4">
                    <FormBaseInput type="text" v-model:model-value="setProfileStore.dataModel.name"
                        :label="$t('profile.name')" :mandatory="true" :error="setProfileStore.dataError.name" />

                    <FormBaseInput type="text" v-model:model-value="setProfileStore.dataModel.family"
                        :label="$t('profile.family')" :mandatory="true" :error="setProfileStore.dataError.family" />

                    <FormBaseInput type="number" v-model:model-value="setProfileStore.dataModel.nationalCode"
                        :label="$t('profile.national_code')"
                        :error="setProfileStore.dataError.nationalCode" />

                    <FormBaseInput type="text" v-model:model-value="setProfileStore.dataModel.birthDate"
                        :label="$t('profile.birth_date')" class="calender-box-selction-birthDate"
                        :calender="true" :error="setProfileStore.dataError.birthDate" />

                    <date-picker v-model='setProfileStore.dataModel.birthDate'
                        custom-input=".calender-box-selction-birthDate"></date-picker>
                    <div class="w-full flex flex-col gap-y-5 -mt-5 mb-1">
                        <span class="text-gray-500 ">{{ $t('profile.gender') }} *</span>
                        <div class="flex gap-x-5">
                            <FormBaseCheckBox v-model="setProfileStore.dataModel.gender" name="male"
                                :label="$t('auth.father')" value="male" />
                            <FormBaseCheckBox v-model="setProfileStore.dataModel.gender" name="female"
                                :label="$t('auth.mother')" value="female" />
                        </div>
                    </div>
                </div>

            </template>
        </NuxtLayout>
    </div>
</template>
