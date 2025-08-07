<script lang="ts" setup>
const dataList = ref([
  {
    ID: 1,
    name: "دوره جامع فرزند پروری شاه کلید ",
    teacherID: 1212,
    price: 9000000,
    studyTime: 134,
    image: "/img/course.png",
  },
  {
    ID: 1,
    name: "دوره جامع فرزند پروری شاه کلید ",
    teacherID: 1212,
    price: 9000000,
    studyTime: 134,
    image: "/img/course.png",
  },
  {
    ID: 1,
    name: "دوره جامع فرزند پروری شاه کلید ",
    teacherID: 1212,
    price: 9000000,
    studyTime: 134,
    image: "/img/course.png",
  },
  {
    ID: 1,
    name: "دوره جامع فرزند پروری شاه کلید ",
    teacherID: 1212,
    price: 9000000,
    studyTime: 134,
    image: "/img/course.png",
  },
]);

const dataTecher = ref([
  {
    ID: 1212,
    name: "علیرضا ",
    family: "زنگنه",
  },
]);
const test = ref([
  {
    ID: 1,
    title: "فعالیت های کودک",
    slug: "/",
    color: "#FC4C56",
    icon: "/img/activity.svg",
  },
  {
    ID: 2,
    title: "63 قدم طلایی",
    slug: "/",
    color: "#D07C0C",
    icon: "/img/gold.svg",
  },
  {
    ID: 3,
    title: "مقالات ",
    slug: "/blog",
    color: "#1EBFBB",
    icon: "/img/blog.svg",
  },
  {
    ID: 4,
    title: "پشتیبانی ",
    slug: "/support",
    color: "#913175",
    icon: "/img/support1.svg",
  },
  {
    ID: 5,
    title: "تکلیف ",
    slug: "/course/فرزند اوری/home-work",
    color: "#00AA58",
    icon: "/img/homework.svg",
  },
  {
    ID: 6,
    title: "آزمون ها ",
    slug: "/course/فرزند اوری/quizze",
    color: "#6100FF",
    icon: "/img/quizze.svg",
  },
  {
    ID: 7,
    title: "قوانین مقررات ",
    slug: "/",
    color: "#0071B1",
    icon: "/img/privcy.svg",
  },
  {
    ID: 8,
    title: "پرداخت  ",
    slug: "/my-account/payment-history",
    color: "#9F0303",
    icon: "/img/payment.svg",
  },
]);

const dataBanner = ref([
  {
    id: 1,
    src: "/img/banner.png",
    alt: "image",
  },
  {
    id: 1,
    src: "/img/banner.png",
    alt: "image",
  },
  {
    id: 1,
    src: "/img/banner.png",
    alt: "image",
  },
]);

const descriptionHero = ref<string>(
  "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد."
);

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
});

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
    translations: [
      {
        id: 11,
        home_page_statistic_id: 10,
        locale: "fa",
        title: "تست شماره اول",
      },
    ],
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
    translations: [
      {
        id: 11,
        home_page_statistic_id: 10,
        locale: "fa",
        title: "تست شماره ذوم",
      },
    ],
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
    translations: [
      {
        id: 11,
        home_page_statistic_id: 10,
        locale: "fa",
        title: "تست شماره سوم",
      },
    ],
  },
]);

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
    translations: [
      {
        id: 11,
        home_page_statistic_id: 10,
        locale: "fa",
        title: "تست شماره ذوم",
      },
    ],
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
    translations: [
      {
        id: 11,
        home_page_statistic_id: 10,
        locale: "fa",
        title: "تست شماره سوم",
      },
    ],
  },
]);

const listFaq = ref([
  {
    ID: 1,
    question: "این متن برای سوال می باشد ",
    answer: "این متن برای پاسخ می باش",
  },
  {
    ID: 2,
    question: "این متن برای سوال می باشد ",
    answer: "این متن برای پاسخ می باش",
  },
  {
    ID: 3,
    question: "این متن برای سوال می باشد ",
    answer: "این متن برای پاسخ می باش",
  },
]);
const descriptionVideo = ref<string>(
  "«اگر به دنبال یادگیری عمیق‌تر و هدفمند هستید، رزرو یک جلسه آموزشی می‌تواند نقطه‌ شروعی مؤثر برای شما باشد. در این جلسه، با راهنمایی تخصصی و محتوای متناسب با نیازهای شما، مسیر یادگیری‌تان شفاف‌تر و سریع‌تر خواهد شد. همین حالا زمان خود را رزرو کنید و یک گام به رشد شخصی و حرفه‌ای‌تان نزدیک‌تر شوید.» "
);

const dataListBlog = ref([
  {
    ID: 1,
    name: "اهمیت کوچینگ تیمی",
    author: {
      id: 1,
      full_name: "علیرضا زنگنه",
    },
    created_at: 1732131563,
    slug: "ahmiyat-koching-timi",
    image: "/public/img/banner.webp",
    enable_comment: 1,
    translations: [
      {
        title: "اهمیت کوچینگ تیمی",
        description:
          "جلسات کوچینگ تیمی برای دست یافتن به یک منشور تیمی استفاده شده و به تیم کمک می‌کند تا عملکرد بهتر و سریع‌تری داشت",
      },
    ],
  },
  {
    ID: 2,
    name: "اهمیت کوچینگ تیمی",
    author: {
      id: 1,
      full_name: "علیرضا زنگنه",
    },
    created_at: 1732131563,
    slug: "ahmiyat-koching-timi",
    image: "/public/img/banner.webp",
    enable_comment: 1,
    translations: [
      {
        title: "اهمیت کوچینگ تیمی",
        description:
          "جلسات کوچینگ تیمی برای دست یافتن به یک منشور تیمی استفاده شده و به تیم کمک می‌کند تا عملکرد بهتر و سریع‌تری داشت",
      },
    ],
  },
  {
    ID: 3,
    name: "اهمیت کوچینگ تیمی",
    author: {
      id: 1,
      full_name: "علیرضا زنگنه",
    },
    created_at: 1732131563,
    slug: "ahmiyat-koching-timi",
    image: "/public/img/banner.webp",
    enable_comment: 1,
    translations: [
      {
        title: "اهمیت کوچینگ تیمی",
        description:
          "جلسات کوچینگ تیمی برای دست یافتن به یک منشور تیمی استفاده شده و به تیم کمک می‌کند تا عملکرد بهتر و سریع‌تری داشت",
      },
    ],
  },
])


const categoryBlog = ref([
  {
    id: 1,
    title: "اموزشی",
    slug: "/",
  },
  {
    id: 1,
    title: "اموزشی",
    slug: "/",
  },
]);
const DataListCourse = ref([
  {
    name: "علیرضا زنگنه",
    ID: 1,
    image_cover: "/img/banner3.webp",
    title: "دوره آموزش امنبت وب ",
    description:
      "این متن  متن توضیحات برای تست این بخش نوشته شده است  و لطفا جدی نگیرین",
    type: "course",
    teacher: {
      full_name: "علیرضا زنگنه",
      id: 1,
      family: "زنگنه",
      name: "علیرضا زنگنه",
    },
    duration: 20,
    points: 50,
    capacity: 20,
    price: 253000,
    thumbnail: "/img/images.jpg",
    slug: "/",
  },
  {
    name: "علیرضا زنگنه",
    ID: 2,
    image_cover: "/img/banner3.webp",
    title: "دوره آموزش امنبت وب ",
    description:
      "این متن  متن توضیحات برای تست این بخش نوشته شده است  و لطفا جدی نگیرین",
    type: "course",
    teacher: {
      full_name: "علیرضا زنگنه",
      id: 1,
      family: "زنگنه",
      name: "علیرضا زنگنه",
    },
    duration: 20,
    points: 50,
    capacity: 20,
    price: 253000,
    thumbnail: "/img/images.jpg",
    slug: "/",
  },
  {
    name: "علیرضا زنگنه",
    ID: 3,
    image_cover: "/img/banner3.webp",
    title: "دوره آموزش امنبت وب ",
    description:
      "این متن  متن توضیحات برای تست این بخش نوشته شده است  و لطفا جدی نگیرین",
    type: "course",
    teacher: {
      full_name: "علیرضا زنگنه",
      id: 1,
      family: "زنگنه",
      name: "علیرضا زنگنه",
    },
    duration: 20,
    points: 50,
    capacity: 20,
    price: 253000,
    thumbnail: "/img/images.jpg",
    slug: "/",
  },
]);

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

    link: "https://jsonformatter.org/json-pretty-print",
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

    link: "https://jsonformatter.org/json-pretty-print",
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

    link: "https://jsonformatter.org/json-pretty-print",
  },
]);
</script>

<template>
  <div class="container-home-page">
    <!-- hero section -->
    <div class="flex flex-col justify-center items-center w-full">
      <div class="text-[20px] text-blue-500 font-bold ">
        <span>هر جایی که هستی،</span>
        <span class="text-blue-300"> یادگیری </span>
        <span>متوقف نکن!</span>
        <img src="../public/img/under-title.png" alt="" class="mr-40" />
      </div>
      <div class="justify-center items-center">
        <img src="../public/img/homepage.gif" alt="" class="" />
      </div>
    </div>

    <!-- introduction -->
    <div class="gap-y-0">
      <span class="text-lg font-bold mb-3"
        >یگانه فیاضی، کارشناسی ارشد روانشناسی
      </span>
      <p class="text-gray-700 text-base mt-3">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده
        از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
        سطرآنچنان که لازم است...
      </p>
      <div class="flex flex-row">
        <p class="text-gray-700 text-base mt-2 text-justify pl-3">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است... لورم ایپسوم متن ساختگی با تولید سادگی
          نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است...
        </p>
        <img
          src="../public/img/yegane.png"
          alt="یگانه فیاضی"
          class="rounded-full w-43 h-43 object-cover shadow-lg -mt-4"
        />
      </div>
    </div>

    <!-- video -->
    <div class="w-full">
      <HomeVideo
        title="سرعت یادگیری دوبرابر با دوره های من"
        :description="descriptionVideo"
        hero_vector="/video/test.mp4"
        :feature="secendStatictis"
      />
    </div>
    
    <!-- quick_access -->

    <!-- <div class="conatainer-item">
                    <span class="title-item">{{ $t('home.quick_access') }}</span>
                    <div class="container-quick-access">
                        <HomeQuickAccess :datalist="homePage.dataQuickAccesses"
                            :data-list-current="dataCurrentQuickAccess" />
                    </div>
                </div> -->

    <!-- mycourses -->
    <div class="conatainer-item">
      <BaseTitle
        class="my-5 font-bold text-lg"
        type="icon"
        icon="Course"
        :title="$t('دوره های من')"
      />
      <div class="w-full">
        <HomeLatestCourse
          page-title=""
          :data-list="DataListCourse"
        />
      </div>
    </div>

    <div class="w-full">
      <BaseTitle class="my-5 font-bold text-lg" type="icon" icon="Course" :title="$t('سمینار های برگزار شده با حضور شما')" />
      <HomeSliderBanner :data-list="dataListBanner" />
    </div>

    <!-- <div class="w-full">
      <HomeSliderFeature :data-list-feature="statictis" />
    </div> -->
<!-- 
    <div class="w-full">
      <BaseTitle class="my-5 font-bold text-lg" type="icon" icon="Course" :title="$t('رزرو جلسه آموزشی')" />
      <HomeBookMeeting
        title=""  background="/img/images.jpg"  link="/" :description="descriptionVideo"/>
    </div> -->

    <div class="w-full">
      <BaseTitle class="my-5 font-bold text-lg" type="icon" icon="Course" :title="$t('سوالات متداول')" />
      <HomeFaq title="" :list-faq="listFaq" />
    </div>


    <div class="conatainer-item">
            <BaseTitle class="my-5 font-bold text-lg" type="icon" icon="Course" :title="$t('وبلاگ و مجله')" />
            <div class="w-full">
        <HomeSliderBlog
          page-title=""
          :data-list="dataListBlog"
          :dataListCategory="[]"
        />
      </div>
        </div>

    
  </div>
</template>

<style scoped>
.container-home-page {
  @apply w-full flex flex-col gap-y-5 items-center;
}

.container-privigeles {
  @apply w-full flex gap-x-3 justify-between items-center;
}

.conatainer-info-child {
  @apply w-full mt-8 lg:mt-14;
}

.conatainer-item {
  @apply w-full flex flex-col ;
}

.title-item {
  @apply text-sm text-[#505050] font-semibold;
}

.container-quick-access {
  @apply w-full grid grid-cols-4 gap-y-6 px-3 py-6 bg-red-300 rounded-primary shadow-primary;
}
</style>
