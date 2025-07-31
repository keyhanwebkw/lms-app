<script lang="ts" setup>
import { managmentTime } from '~/stores/mangementChild/manageTime';

const manageTime =  managmentTime()
</script>

<template>
    <div class="flex flex-col  gap-y-7">
        <MyAccountMangmentChildSelectTimeChangeStatusTime :checked="manageTime.showTime" @update:checked="manageTime.handelShowTime"/>
        <div class="pb-5 border-b-[2px] border-gray-100 ">
            <p class="text-gray-500 text-sm leading-6">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای
                شرایط فعلی تکنولوژی م</p>
        </div>
        <div v-if="manageTime.showTime">
            <MyAccountMangmentChildSelectTime />
            <div class="w-full flex justify-center mt-16">
                <BaseBtn type="button" type-design="action" :text="$t('my_account.manage_child.confirm_time')" customDesign="bg-purple-500 !text-sm" />
            </div>
        </div>
      
    </div>
</template>