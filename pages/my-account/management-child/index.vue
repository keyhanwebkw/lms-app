<script lang="ts" setup>
import { dataMenu } from '~/static/dataManagementChild';
</script>

<template>
    <div class="container-card gap-y-5 ">
        <BaseTitle type="back" :title="$t('my_account.manage_child.title')" />
        <div class="container-card  gap-y-3">
            <MyAccountCard :data-list="data" v-for="data in dataMenu" :key="data.id" />
        </div>
    </div>
</template>

<style scoped>
.container-card {
    @apply flex flex-col
}
</style>