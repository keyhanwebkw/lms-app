<script lang="ts" setup>
const test = ref([
    {
        ID: 1,
        title: 'فعالیت های کودک',
        slug: '/',
        color: '#FC4C56',
        icon: '/img/activity.svg'
    },
    {
        ID: 2,
        title: '63 قدم طلایی',
        slug: '/',
        color: '#D07C0C',
        icon: '/img/gold.svg'
    },
    {
        ID: 3,
        title: 'مقالات ',
        slug: '/blog',
        color: '#1EBFBB',
        icon: '/img/blog.svg'
    },
    {
        ID: 4,
        title: 'پشتیبانی ',
        slug: '/support',
        color: '#913175',
        icon: '/img/support1.svg'
    },
    {
        ID: 5,
        title: 'تکلیف ',
        slug: '/course/فرزند اوری/home-work',
        color: '#00AA58',
        icon: '/img/homework.svg'
    },
    {
        ID: 6,
        title: 'آزمون ها ',
        slug: '/course/فرزند اوری/quizze',
        color: '#6100FF',
        icon: '/img/quizze.svg'
    },
    {
        ID: 7,
        title: 'قوانین مقررات ',
        slug: '/',
        color: '#0071B1',
        icon: '/img/privcy.svg'
    },
    {
        ID: 8,
        title: 'پرداخت  ',
        slug: '/my-account/payment-history',
        color: '#9F0303',
        icon: '/img/payment.svg'
    }
])


const dataList = ref([
    {
        ID: 1,
        name: 'دوره جامع فرزند پروری شاه کلید ',
        teacherID: 1212,
        price: 9000000,
        studyTime: 134,
        image: '/img/course.png'
    },
    {
        ID: 1,
        name: 'دوره جامع فرزند پروری شاه کلید ',
        teacherID: 1212,
        price: 9000000,
        studyTime: 134,
        image: '/img/course.png'
    },
    {
        ID: 1,
        name: 'دوره جامع فرزند پروری شاه کلید ',
        teacherID: 1212,
        price: 9000000,
        studyTime: 134,
        image: '/img/course.png'
    },
    {
        ID: 1,
        name: 'دوره جامع فرزند پروری شاه کلید ',
        teacherID: 1212,
        price: 9000000,
        studyTime: 134,
        image: '/img/course.png'
    },
])


const dataTecher = ref([
    {
        ID: 1212,
        name: 'علیرضا ',
        family: 'زنگنه'
    }
])


const dataBanner = ref([
    {
        id: 1,
        src: '/img/banner.png',
        alt: 'image'
    },
    {
        id: 1,
        src: '/img/banner.png',
        alt: 'image'
    },
    {
        id: 1,
        src: '/img/banner.png',
        alt: 'image'
    },
])

</script>

<template>
    <div class="container-home-page">
        <div class="container-privigeles">
            <HomePrivigeles :score="1354" type="score" />
            <HomePrivigeles :price="25000" type="wallet" />
        </div>
        <div class="conatainer-info-child">
            <HomeManagmentChild />
        </div>
        <div class="w-full">
            <HomeInfoChild name="علیرضا" family="زنگنه" image="/img/profile1.png" />
        </div>
        <div class="conatainer-item">
            <span class="title-item">{{ $t('home.quick_access') }}</span>
            <div class="container-quick-access">
                <HomeQuickAccess :data-list="data" v-for="data in test" :key="data.ID" />
            </div>
        </div>
        <div class="conatainer-item">
            <span class="title-item ">{{ $t('home.latest_courses') }}</span>
            <!-- <HomeSliderCourse :data-list="dataList" :data-list-teacher="dataTecher" /> -->
        </div>
        <div class="w-full">
            <HomeSliderBanner :data-list="dataBanner" />
        </div>
        <div class="conatainer-item">
            <span class="title-item ">{{ $t('home.latest_articles') }}</span>
            <!-- <HomeSliderBlog :data-list="dataBlog" /> -->
        </div>
    </div>
</template>


<style scoped>
.container-home-page {
    @apply w-full flex flex-col gap-y-5 items-center
}

.container-privigeles {
    @apply w-full flex gap-x-3 justify-between items-center
}

.conatainer-info-child {
    @apply w-full mt-8 lg:mt-14
}

.conatainer-item {
    @apply w-full flex flex-col gap-y-5
}

.title-item {
    @apply text-sm text-[#505050] font-semibold
}

.container-quick-access {
    @apply w-full grid grid-cols-4 gap-y-6 px-3 py-6 bg-red-300 rounded-primary shadow-primary
}
</style>