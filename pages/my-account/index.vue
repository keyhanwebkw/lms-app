<script lang="ts" setup>
import { dataMenu } from '~/static/dataMyAccount';
import { LogoutUser } from "~/stores/auth/logout";
import LogoutPopup from '~/components/myAccount/logoutPopup/index.vue'

const logoutData = LogoutUser()
</script>


<template>
    <div class="container-card gap-y-5 ">
        <BaseTitle type="back" :title="$t('my_account.title')" />
        <div class="container-card  gap-y-3">
            <MyAccountCard :data-list="data" v-for="data in dataMenu" :key="data.id" />
            <Logout @logoutAccount="logoutData.showPopup = true" />

        </div>
        <LogoutPopup v-if="logoutData.showPopup" />
    </div>
</template>

<style scoped>
.container-card {
    @apply flex flex-col 
}
</style>