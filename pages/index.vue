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

const descriptionHero = ref<string>('لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.')

const poster = ref({
    SID: "dA000000-0000-0000-0000-00000avatar1",
    duration: 0,
    extension: "png",
    fileName: "avatar1",
    fileSize: 7963,
    fileType: "image",
    fullSID: "dA000000-0000-0000-0000-00000avatar1.png",
    height: 160,
    width: 106,
})


const statictis = ref([
    {
        color: "#3c5aff",
        count: 1,
        created_at: 1732131563,
        description: "نسن کبت شسختنشپسذر",
        icon: "/img/images.jpg",
        id: 10,
        order: 1,
        title: "تست شماره اول",
        translations: [{ id: 11, home_page_statistic_id: 10, locale: "fa", title: "تست شماره اول" }]
    },
    {
        color: "#ce2424",
        count: 1,
        created_at: 1732131563,
        description: "نسن کبت شسختنشپسذر",
        icon: "/img/images.jpg",
        id: 10,
        order: 1,
        title: "تست شماره دوم",
        translations: [{ id: 11, home_page_statistic_id: 10, locale: "fa", title: "تست شماره ذوم" }]

    },
    {
        color: "#ff7037",
        count: 1,
        created_at: 1732131563,
        description: "نسن کبت شسختنشپسذر",
        icon: "/img/images.jpg",
        id: 10,
        order: 1,
        title: "تست شماره سوم",
        translations: [{ id: 11, home_page_statistic_id: 10, locale: "fa", title: "تست شماره سوم" }]

    },
])


const secendStatictis = ref([
    {
        color: "#ce2424",
        count: 1,
        created_at: 1732131563,
        description: "نسن کبت شسختنشپسذر",
        icon: "/img/images.jpg",
        id: 10,
        order: 1,
        title: "تست شماره دوم",
        translations: [{ id: 11, home_page_statistic_id: 10, locale: "fa", title: "تست شماره ذوم" }]

    },
    {
        color: "#ff7037",
        count: 1,
        created_at: 1732131563,
        description: "نسن کبت شسختنشپسذر",
        icon: "/img/images.jpg",
        id: 10,
        order: 1,
        title: "تست شماره سوم",
        translations: [{ id: 11, home_page_statistic_id: 10, locale: "fa", title: "تست شماره سوم" }]

    },
])


const listFaq = ref([
    {
        ID: 1,
        question: 'این متن برای سوال می باشد ',
        answer: 'این متن برای پاسخ می باش'
    },
    {
        ID: 2,
        question: 'این متن برای سوال می باشد ',
        answer: 'این متن برای پاسخ می باش'
    },
    {
        ID: 3,
        question: 'این متن برای سوال می باشد ',
        answer: 'این متن برای پاسخ می باش'
    },
])
const descriptionVideo = ref<string>('لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است ')

const dataListBlog = ref([
    {
        author: { id: 1020, full_name: "test" },
        author_id: 1020,
        category: { id: 1, title: "کوچ", slug: "o" },
        category_id: 1,
        content: "<p style=\"margin: 15px 0px 1.3em; padding: 0px; ",
        created_at: 1731842604,
        description: "<ul><li>جلسات کوچینگ تیمی برای دست یافتن به یک منشور تیمی استفاده شده و به تیم کمک می‌کند تا عملکرد بهتر و سریع‌تری داشت</li></ul>",
        enable_comment: 1,
        ID: 2,
        image: "/img/images.jpg",
        meta_description: null,
        slug: "mozsh-o-n-roh",
        status: "publish",
        title: "اهمیت کوچینگ تیمی",
        translations: [{
            blog_id: 2,
            content: "<p style=\"margin: 15px 0px 1.3em; padding: 0px; ",
            description: "<ul><li>جلسات کوچینگ تیمی برای دست یافتن به یک منشور تیمی استفاده شده و به تیم کمک می‌کند تا عملکرد بهتر و سریع‌تری داشت</li></ul>",
            id: 2,
            meta_description: null,
            title: "اهمیت کوچینگ تیمی",
        }],
        updated_at: 1736151305,
        visit_count: 1,
        name: 'علیرضا'
    }
])

const categoryBlog = ref([
    {
        id: 1,
        title: 'اموزشی',
        slug: '/'
    },
    {
        id: 1,
        title: 'اموزشی',
        slug: '/'
    },
])
const DataListCourse = ref([
    {
        ID: 1,
        image_cover: '/img/images.jpg',
        title: 'دوره آموزش امنبت وب ',
        description: 'این متن  متن توضیحات برای تست این بخش نوشته شده است  و لطفا جدی نگیرین',
        type: "course",
        teacher: {
            full_name: 'علیرضا زنگنه',
            id: 1
        },
        duration: 20,
        points: 50,
        capacity: 20,
        price: 253000,
        thumbnail: '/img/images.jpg',
        slug: '/'
    }, {
        ID: 1,
        image_cover: '/img/images.jpg',
        title: 'دوره آموزش امنبت وب ',
        description: 'این متن  متن توضیحات برای تست این بخش نوشته شده است  و لطفا جدی نگیرین',
        type: "course",
        teacher: {
            full_name: 'علیرضا زنگنه',
            id: 1
        },
        duration: 20,
        points: 50,
        capacity: 20,
        price: 253000,
        thumbnail: '/img/images.jpg',
        slug: '/'
    }, {
        ID: 1,
        image_cover: '/img/images.jpg',
        title: 'دوره آموزش امنبت وب ',
        description: 'این متن  متن توضیحات برای تست این بخش نوشته شده است  و لطفا جدی نگیرین',
        type: "course",
        teacher: {
            full_name: 'علیرضا زنگنه',
            id: 1
        },
        duration: 20,
        points: 50,
        capacity: 20,
        price: 253000,
        thumbnail: '/img/images.jpg',
        slug: '/'
    },

])


const dataListBanner = ref([
    {
        banner: {
            SID: "d10232e8-0e18-4c06-b3ab-ab95d33a9851",
            duration: 0,
            extension: "webp",
            fileName: "Screen Shot 1404-05-04 at 10.15.11 AM",
            fileSize: 394917,
            fileType: "image",
            fullSID: "/img/banner.webp",
            height: 1416,
            width: 2492,
        },

        link: "https://jsonformatter.org/json-pretty-print"
    },
    {
        banner: {
            SID: "d10232e8-0e18-4c06-b3ab-ab95d33a9851",
            duration: 0,
            extension: "webp",
            fileName: "Screen Shot 1404-05-04 at 10.15.11 AM",
            fileSize: 394917,
            fileType: "image",
            fullSID: "/img/banner2.webp",
            height: 1416,
            width: 2492,
        },

        link: "https://jsonformatter.org/json-pretty-print"
    },
    {
        banner: {
            SID: "d10232e8-0e18-4c06-b3ab-ab95d33a9851",
            duration: 0,
            extension: "webp",
            fileName: "Screen Shot 1404-05-04 at 10.15.11 AM",
            fileSize: 394917,
            fileType: "image",
            fullSID: "/img/banner3.webp",
            height: 1416,
            width: 2492,
        },

        link: "https://jsonformatter.org/json-pretty-print"
    },
])
</script>

<template>
    <div class="container-home-page">
        <div class="w-full">
            <HomeSliderBanner :data-list="dataListBanner" />
        </div>
        <div class="container-privigeles">
            <HomeHero title="علیرضا زنگنه بایگی " :description="descriptionHero" :poster-s-i-d="poster" />
        </div>
        <div class="w-full">
            <HomeSliderFeature :data-list-feature="statictis" />
        </div>
        <div class="w-full">
            <HomeVideo title="تست ویدیو" :description="descriptionVideo" hero_vector="/video/test.mp4"
                :feature="secendStatictis" />
        </div>
        <div class="w-full">
            <HomeFaq title="سوالات کاربران" :list-faq="listFaq" />
        </div>
        <div class="w-full">
            <HomeLatestCourse page-title="دوره های آموزشی" :data-list="DataListCourse" />
        </div>
        <div class="w-full">
            <HomeBookMeeting title="رزرو جلسه آموزشی" background="/img/images.jpg" link="/"
                :description="descriptionVideo" />
        </div>
        <div class="w-full">
            <HomeLatestBlog :data-list="dataListBlog" :data-list-category="categoryBlog" />
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