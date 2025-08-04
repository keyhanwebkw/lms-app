<script setup lang="ts">
import { LogoutUser } from "~/stores/auth/logout";

defineEmits<{
  (event: "close"): void;
}>();

const logoutData = LogoutUser()

</script>
<template>

  <BaseModal 
    :title="$t('auth.logout')" 
    :subtitle="$t('auth.are_you_logout')" 
    :status="logoutData.showPopup"
    titleClass="lg:text-lg font-bold text-center text-blue-500"
    subtitleClass="lg:text-[14px]  text-center text-gray-500"
    v-if="logoutData.showPopup" 
    @close="logoutData.showPopup = false">
    <template #header>
    <IconWarning />
  </template>
    <template v-slot:form>
      <form @submit.prevent="logoutData.UserLogout()" class="w-full flex flex-col gap-y-8">

        <div class="w-full flex gap-4 justify-evenly">
          <BaseBtn :loading="logoutData.loading" :status="logoutData.loading" type="submit" typeDesign="submit" :text="$t('global.confirm')"  />
          <BaseBtn  @click="logoutData.showPopup = false" type="button" typeDesign="cancle" :text="$t('global.optout') "

            styleBtn="btn-gray-100" />
        </div>
      </form>
    </template>
  </BaseModal>
</template>