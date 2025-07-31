<script lang="ts" setup>
import { DataNotificationList } from '~/stores/notification/list';

const notificationList = DataNotificationList()

onMounted(() => {
    notificationList.handleListNotification()
})
const observerTarget = ref<HTMLElement | null>(null)

useInfiniteScrollObserver(observerTarget, notificationList.loadNextPage)
</script>

<template>
    <div class="container-notif gap-y-5">
        <BaseTitle type="back" :title="$t('my_account.notification.title')" />
        <div class="container-notif gap-y-3" v-if="notificationList.loading">
            <LoadingNotificationCard v-for="_ in 3" :key="_" />
        </div>
        <div class="container-notif  gap-y-3" v-else>
            <div>
                <EmptyList v-if="notificationList.listNotification.length === 0" icon="IconCourses"
                    :text="$t('my_account.notification.empty_list')" />
                <div v-else class="container-notif gap-y-4">
                    <NotificationCard :dataList="data" v-for="data in notificationList.listNotification" :key="data.ID"
                        @read="notificationList.handleReadNotif" />
                </div>
            </div>
            <div ref="observerTarget"
                v-if="notificationList.pagination.hasNextPage && !notificationList.pagination.loading"
                class="container-card">
                <LoadingNotificationCard v-for="_ in 2" :key="_" />
                
            </div>
        </div>
    </div>
</template>

<style scoped>
.container-notif {
    @apply w-full flex flex-col
}
</style>