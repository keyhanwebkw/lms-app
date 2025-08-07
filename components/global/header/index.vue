<script lang="ts" setup>
import { CheckUserAuth } from '@/stores/auth/checkAuth';

const userAuth = CheckUserAuth()

const handleSwitchUser = computed(() => userAuth.hasToken ? '/my-account' : '/auth/enter-phone')


</script>

<template>
    <div class="container-header">
        <div v-if="$route.name !== 'index___fa-IR'" class="item-back " @click="$router.back()">
            <IconBack />
        </div>
        <div>
            <Logo />
        </div>
        <div class="flex gap-x-4">
            <!-- <BaseBtn type="button" type-design="icon" icon="/img/userProfile.svg" :loading="false" class="m-1"
                @click="$router.push(handleSwitchUser)" /> -->
                
                 <BaseBtn
                type="button"
                type-design="icon"
                icon="/img/notif.svg"
                :loading="false"
                class="m-1"
                @click="$router.push('/my-account/notification')"
            />
            <!-- logout -->
            <!-- <BaseBtn type="button" type-design="icon" icon="/img/logout~.png" :loading="false"  @click="$router.push('/')"/> -->
        </div>
    </div>
</template>

<style scoped>
.container-header {
    @apply w-full h-[70px] flex justify-between items-center mb-4
}

.item-back {
    @apply text-blue-500 w-10 h-10 flex justify-center items-center cursor-pointer rounded-sm shadow-primary
}
</style>
