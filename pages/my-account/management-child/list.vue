<script setup lang="ts">
import { ChildList } from '~/stores/mangementChild/childList';

const childListStore = ChildList()

onMounted(() => {
    childListStore.getChildList()
})

const removeChild = (() => { })
const editChild = ((id: number) => {
    navigateTo(`/my-account/management-child/edit/${id}`)
})

</script>

<template>
    <div class="container-child-list">
        <BaseTitle type="back" :title="$t('my_account.manage_child.list_title')" />
        <div v-if="childListStore.loading">
            <div class="container-list">
                <LoadingChildCard v-for="item in 6" :key="item" />
            </div>
        </div>
        <div v-else>
            <div class="container-list" v-if="childListStore.list.length > 0">
                <div class="w-full" v-for="(data, index) in childListStore.list" :key="index">
                    <MyAccountMangmentChildListCard :data="data" @remove="removeChild()" @edit="editChild(data.ID)" />
                </div>
            </div>
            <EmptyList v-else icon="IconChilds" :text="$t('my_account.manage_child.empty_list')"
                style-container="shadow-primary rounded-primary" />
        </div>
        <BaseBtnAddnew :title="$t('my_account.manage_child.add_new')" link="/my-account/management-child/add" />
    </div>
</template>

<style scoped>
.container-child-list {
    @apply w-full flex flex-col gap-y-4
}

.container-list {
    @apply w-full flex flex-col gap-y-4
}
</style>