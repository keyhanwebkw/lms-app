<script lang="ts" setup>

const t = ref<any>()
    const selectedOption = ref('');
</script>


<template>
    <div class="w-full flex flex-col items-center gap-y-5">
        <NuxtLayout name="auth" :description="$t('auth.description_set_profile_child')" :loading="false" @submitForm="$router.push('/')">
            <template #form>
                <div class="w-full flex flex-col  gap-y-5">
                    <FormBaseInput type="text" v-model:model-value="t" :label="$t('auth.full_name')"
                        :mandatory="true" />
                    <FormBaseInput type="number" v-model:model-value="t" :label="$t('auth.national_code')"
                        :mandatory="true" />
                    <FormBaseInput type="text" v-model:model-value="t" :label="$t('auth.birth_date')"
                        :mandatory="true" class="calender-box-selction-birthDate" :calender="true" />
                    <date-picker v-model='t'
                        custom-input=".calender-box-selction-birthDate"></date-picker>
                    <div class="flex flex-col gap-y-5 -mt-5">
                        <span class="text-gray-500 ">{{$t('auth.gender')}} :</span>
                        <div class="flex gap-x-5">
                        <FormBaseCheckBox v-model="selectedOption" name="example" :label="$t('auth.girl')" value="girl" />
                        <FormBaseCheckBox v-model="selectedOption" name="example" :label="$t('auth.boy')" value="boy"/>
                    </div>
                    </div>
                  
                </div>
 
            </template>
        </NuxtLayout>
    </div>
</template>
