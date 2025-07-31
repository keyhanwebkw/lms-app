<script lang="ts" setup>
import type { DetailsCardTicket } from '~/types/support';

const dataList = ref([
    {
        id: 1,
        title: 'درحال بررسی ',
        icon: '/img/filter1.svg',
        status: 'pending'
    },
    {
        id: 2,
        title: 'پاسخ داده شده',
        icon: '/img/answeredSupport.svg',
        status: 'answered'
    },
    {
        id: 3,
        title: 'بسته شده',
        icon: '/img/closedSupport.svg',
        status: 'closed'
    },
])

const dataListTicket = ref<DetailsCardTicket[]>([
    {
        ID: 1,
        title: 'فرزند جدید اضافه  شد ',
        description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک استلورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است',
        created: 177774554,
        status: 'rejected'
    },
    {
        ID: 1,
        title: 'فرزند جدید اضافه  شد ',
        description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک استلورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است',
        created: 177774554,
        status: 'accepted'
    },
])
</script>

<template>
    <div class="container-support gap-y-5">
        <BaseTitle type="back" :title="$t('support.title_list_page')" />
        <SupportListStatus :data-list="dataList" />
        <div class="container-support  gap-y-5 mt-5 ">
            <SupportCard :dataList="data" v-for="data in dataListTicket" :key="data.ID" />
        </div>
    </div>
</template>

<style scoped>
.container-support {
    @apply flex flex-col
}
</style>