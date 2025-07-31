<script lang="ts" setup>
import { AddNewTicket } from '~/stores/support/add'

const addNewTicketStore = AddNewTicket()
AddNewTicket().getDataDepartments()

</script>

<template>
    <div class="container-new-ticket">
        <BaseTitle type="back" :title="$t('support.add_new_ticket')" />
        <div class="w-full flex flex-col rounded-sm shadow-primary py-4 px-2 gap-y-4">
            <form @submit.prevent class="w-full flex flex-col gap-y-4" v-if="!addNewTicketStore.departments.loading">
                <div class="w-full flex gap-x-4">
                    <FormBaseInput type="text" v-model:model-value="addNewTicketStore.dataModel.title" label="عنوان "
                        :mandatory="true" />
                    <FormBaseSelectBox :items="addNewTicketStore.departments.list"
                        v-model:model-value="addNewTicketStore.dataModel.departmentID" label="دپارتمان"
                        :mandatory="true" typeInput="text" :disabled="false" />
                </div>
                <div>
                    <FormBaseInput type="textarea" v-model:model-value="addNewTicketStore.dataModel.message"
                        label="متن پیام" :mandatory="true" :row="8" />
                </div>
            </form>
            <!-- <Upload /> -->
        </div>

    </div>
</template>

<style scoped>
.container-new-ticket {
    @apply w-full flex flex-col gap-y-4 justify-between items-center py-3 pb-[6rem]
}
</style>