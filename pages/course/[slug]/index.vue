<script lang="ts" setup>
import { convertToPersianSection } from "~/func/convertToPersianSection";
import { menuDetailsCourse } from "~/static/dataMenu";
import { selfCourse } from "~/stores/course/self";
import { useComments } from "~/stores/global/comment";
import { useFaqs } from "~/stores/global/faq"
import { scrollToSection } from '~/composables/scrollTo';

const route = useRoute();
const dataComment = useComments();
const dataCourse = selfCourse();
const dataFaq = useFaqs()
const replySection = ref();
const observerTargetFaq = ref<HTMLElement | null>(null)
const observerTargetComment = ref<HTMLElement | null>(null)
const observerTargetRelated = ref<HTMLElement | null>(null)
const slug = computed(() => route.params.slug.toString())

onMounted(async () => {
  dataCourse.clearDataCourse()
  dataComment.handleclearData()
  dataFaq.handleclearData()
  await dataCourse.getDataSelfCourse(slug.value);
});

function handleSwitchSection(parentID: number, parentContent: string, parentAuthor: string) {
  dataComment.setDataReplyComment(parentID, parentContent, parentAuthor)
  scrollToSection(replySection.value, 100);
}

async function handleListFaq() {
  if (dataFaq.isFetch) return
  await dataFaq.prepareForFaq({ type: 'Course', ID: dataCourse.detailsCourse.ID })
}

async function handleListComment() {
  if (dataComment.isFetch) return
  await dataComment.prepareForComment({ type: "Course", ID: dataCourse.detailsCourse.ID })
}

async function handleListRelated() {
  if (dataCourse.isFetchRelated) return
  await dataCourse.getRelatedCourse(slug.value)
}

useInfiniteScrollObserver(observerTargetFaq, handleListFaq)
useInfiniteScrollObserver(observerTargetComment, handleListComment)
useInfiniteScrollObserver(observerTargetRelated, handleListRelated)

</script>


<template>
  <div>
    <div v-if="dataCourse.loading">
      <LoadingDetailsCourse />
    </div>
    <div v-else>
      <!-- info -->
      <div class="container-box-info-details-course">
         <!-- details above video -->
        <div class="w-full -mb-5  flex gap-x-4 justify-end ">
          <div class=" bg-white text-blue-300  border-blue-300 justify-center text-center rounded-full text-xs ">
            <span>{{ dataCourse.detailsCourse.category.title }}</span>
          </div>
          <div class="p-1 px-3 bg-white text-blue-300 border border-blue-300 justify-center text-center rounded-full text-xs ">

            <span>{{ $t(`course.detailsCourse.${dataCourse.detailsCourse.status}`) }}</span>
          </div>
        </div>
        <!-- video -->
        <div class="container-center-item">
          <CourseSelfInfoVideo />
        </div>
        <!-- details -->
        <div class="w-full">
            <span class="font-bold text-base">{{ $t(`${dataCourse.detailsCourse.name}`) }}</span>
        </div>
        <!-- read more -->
        <div id="description_course">
          <ReadMore :full-text="dataCourse.detailsCourse.description"  :max-words="90" />
        </div>

        <!-- price -->
        <div class="container-center-item border-t-2 border-blue-300">
          <CourseSelfInfoPrice :discountAmount="dataCourse.detailsCourse.discountAmount"
            :discount-percentage="dataCourse.detailsCourse.discountPercentage"
            :price="dataCourse.detailsCourse.price" />
        </div>
        <!-- add to cart -->
        <div class="container-add-to-cart">
          <div class="box-price">
            {{ $t("global.add_to_cart") }}
          </div>
        </div>
      </div>
      <!-- Features -->
       <div class="w-full">
        <BaseTitle class="my-5" type="icon" icon="Course" :title="$t('ویژگی های دوره')" />
        <CourseSelfInfoDetails 
            :duration="dataCourse.detailsCourse.duration"
            :type="dataCourse.detailsCourse.type"
            :teacher="dataCourse.detailsCourse.teacher" />
       </div>
      <!-- main -->
      <div class="container-main-course-details">
        <!-- menu -->
        <!-- <div class="menu-main">
          <NuxtLink :to="data.slug" v-for="data in menuDetailsCourse" :key="data.ID">
            {{ $t(`course.detailsCourse.${data.title}`) }}
          </NuxtLink>
        </div> -->
        <!-- item course  -->
        <div class="container-course" id="headline_course">
          <BaseTitle type="icon" icon="Course" :title="$t('course.detailsCourse.headline_course')" />
          <CourseSelfMainSection v-for="(section, index) in dataCourse.detailsCourse.courseSection"
            :list-section="section" :active-section="dataCourse.activeEpisode" :key="section.ID"
            @get-episode="dataCourse.getEpisodeSection" :list-episode="dataCourse.filteredEpisodes"
            :loading-episode="dataCourse.loadingEpisode" :count-section="convertToPersianSection(index + 1)"
            @open-episode="dataCourse.handleOpenEpisode" />
        </div>

        <!-- faq  -->
        <div id="faq" ref="observerTargetFaq">
          <div v-if="dataFaq.loading">
            <LoadingDetailsCourseFaq />
          </div>
          <div class="flex flex-col gap-y-4" v-else>
            <BaseTitle type="icon" icon="Faq" :title="$t('course.detailsCourse.faq')" />
            <CourseSelfMainFaq :data-faq="data" v-for="data in dataFaq.listFaq" :key="data.ID" />
          </div>
        </div>

        <!-- Related content -->

        <div class="w-full" ref="observerTargetRelated">
          <div v-if="dataCourse.loadingRelated" class="container-card">
            <BaseTitle type="icon" icon="CustomerComment" :title="$t('course.detailsCourse.related_courses')" />
            <LoadingCourseCard v-for="(_, index) in 3" :key="index" />
          </div>
          <div class="container-related-course" v-else-if="dataCourse.lisRelated.length > 0">
            <BaseTitle type="icon" icon="Related" :title="$t('course.detailsCourse.related_courses')" />
            <CourseSelfMainRelated :data-list="dataCourse.lisRelated" />
          </div>
        </div>

        <!-- confirm comment -->
        <div class="flex flex-col gap-y-6">
            <BaseTitle type="icon" icon="CustomerComment" :title="$t('course.detailsCourse.customer_commnet')" />
          <CommentPreviewReply @close="dataComment.handleCloseReplyComment" :author="dataComment.parentAuthor"
            :content="dataComment.parentContent" v-if="dataComment.isReplying" />
          <CommentConfirm :loading="dataComment.loadingBtn" @submit="dataComment.handleSendComment"
            :clear-input-trigger="dataComment.clearInput" />
        </div>

        <!-- comment card   -->
        <div id="customer_commnet" ref="observerTargetComment">
          <div v-if="dataComment.loading">
            <LoadingComment />
          </div>
          <div v-else class="flex flex-col gap-y-4">
            <EmptyList v-if="dataComment.listComment.length === 0" icon="IconCourses"
              :text="$t('course.detailsCourse.empty_list_comment')" />

            <div v-else class="flex flex-col gap-y-4">
              <CommentCard :data-list="data" v-for="data in dataComment.listComment" :key="data.ID" :depth="0"
                :is-admin="data.isAdmin" @replyToComment="handleSwitchSection" :author="data.author" />

              <div class="w-full flex justify-center">
                <BaseBtn @click="dataComment.handleShowComment()" type="button" type-design="action"
                  custom-design="bg-blue-100 !text-blue-500 !w-auto"
                  :text="dataComment.showAllCommentOriginal ? $t('global.view_more') : $t('global.view_less')"
                  v-if="dataComment.allComment.length > 3" />
              </div>
            </div>
          </div>
        </div>

        
      </div>
    </div>
  </div>
</template>

<style scoped>
.container-box-info-details-course {
  @apply w-full px-4 py-5  flex flex-col gap-y-5 mt-3;
}

.container-box-info-details-course .container-center-item {
  @apply w-full flex justify-start mt-2;
}

.container-add-to-cart .box-price {
  @apply w-full py-3 font-semibold rounded-full flex items-center justify-center text-sm  bg-[#2980B9] text-white;
}

.container-box-info-details-course .container-add-to-cart {
  @apply w-full flex justify-center;
}

.container-main-course-details {
  @apply flex flex-col gap-y-12 mt-6;
}

.container-main-course-details .menu-main {
  @apply w-full h-[50px] flex justify-between items-center shadow-primary rounded-sm px-5 sticky top-3 bg-white z-[99];
}

.container-main-course-details .menu-main a {
  @apply text-xs sm:text-sm text-gray-300;
}

.container-main-course-details .container-course {
  @apply w-full flex flex-col gap-y-5;
}

.container-main-course-details .container-related-course {
  @apply w-full flex flex-col gap-y-6;
}
</style>