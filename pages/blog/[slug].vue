<script lang="ts" setup>
import { DetailsBlog } from '~/stores/blog/get';
import { useComments } from "~/stores/global/comment";

const dataBlog = DetailsBlog()
const route = useRoute()
const dataComment = useComments();
const replySection = ref();
const observerTargetComment = ref<HTMLElement | null>(null)
const observerTargetRelated = ref<HTMLElement | null>(null)
const slug = route.params.slug.toString()


onMounted(async () => {
    dataComment.handleclearData()
    await dataBlog.getDataBlog(slug)
})

function handleSwitchSection(parentID: number, parentContent: string, parentAuthor: string) {
    dataComment.setDataReplyComment(parentID, parentContent, parentAuthor)
    scrollToSection(replySection.value, 100);
}

async function handleListComment() {
    if (dataComment.isFetch) return
    await dataComment.prepareForComment({ type: "Article", ID: dataBlog.dataGet.ID })
}

async function handleListRelated() {
    if (dataBlog.isFetch) return
    await dataBlog.getRelatedBlog(slug)
}

useInfiniteScrollObserver(observerTargetComment, handleListComment)
useInfiniteScrollObserver(observerTargetRelated, handleListRelated)

</script>

<template>
    <div v-if="dataBlog.loading">
        <LoadingDetailsBlog />
    </div>
    <div v-else>
        <div class="w-full" v-if="dataBlog.pageNotFound">
            <PageNotFound />
        </div>
        <div class="container-details-blog" v-else>
            <div class="w-full">
                <BlogSectionThumbnail :title="dataBlog.dataGet.title" :posterSID="dataBlog.dataGet.posterSID"
                    :created="dataBlog.dataGet.created" :readingTime="dataBlog.dataGet.readingTime" />
            </div>
            <div class="container-details-blog px-2">
                <div>
                    <ReadMore :full-text="dataBlog.dataGet.introduction" icon="Description"
                        :title="$t('blog.title_introduction')" :max-words="60" />
                </div>
                <div class="flex flex-col gap-y-6">
                    <BaseTitle type="icon" icon="Description" :title="$t('blog.title_details')" />
                    <div>
                        <p v-html="dataBlog.dataGet.content"
                            class=" text-gray-500 font-bold text-justify text-sm leading-7"></p>
                    </div>

                </div>
                <div>
                    <!-- <BlogCardAuthor /> -->
                </div>
                <!-- confirm comment -->
                <div class="flex flex-col gap-y-6" ref="observerTargetComment">
                    <BaseTitle type="icon" icon="CustomerComment"
                        :title="$t('course.detailsCourse.customer_commnet')" />
                    <CommentPreviewReply @close="dataComment.handleCloseReplyComment" :author="dataComment.parentAuthor"
                        :content="dataComment.parentContent" v-if="dataComment.isReplying" />
                    <CommentConfirm :loading="dataComment.loadingBtn" @submit="dataComment.handleSendComment"
                        :clear-input-trigger="dataComment.clearInput" />
                </div>

                <!-- comment card   -->
                <div id="customer_commnet">
                    <div v-if="dataComment.loading">
                        <LoadingComment />
                    </div>
                    <div class="flex flex-col gap-y-4" v-else>
                        <EmptyList v-if="dataComment.listComment.length === 0" icon="IconCourses"
                            :text="$t('course.detailsCourse.empty_list_comment')" />

                        <div v-else class="flex flex-col gap-y-4">
                            <CommentCard :data-list="data" v-for="data in dataComment.listComment" :key="data.ID"
                                :depth="0" :is-admin="data.isAdmin" @replyToComment="handleSwitchSection"
                                :author="data.author" />

                            <div class="w-full flex justify-center">
                                <BaseBtn @click="dataComment.handleShowComment()" type="button" type-design="action"
                                    custom-design="bg-purple-100 !text-purple-500 !w-auto"
                                    :text="dataComment.showAllCommentOriginal ? $t('global.view_more') : $t('global.view_less')"
                                    v-if="dataComment.allComment.length > 3" />
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Related content -->

                <div class="w-full" ref="observerTargetRelated">
                    <div v-if="dataBlog.loadingRelated" class="container-card">
                        <BaseTitle type="icon" icon="CustomerComment" :title="$t('blog.title_related')" />
                        <LoadingCourseCard v-for="(_, index) in 3" :key="index" />
                    </div>
                    <div class="container-details-blog" v-else-if="dataBlog.listRelated.length > 0">
                        <BaseTitle type="icon" icon="Related" :title="$t('blog.title_related')" />
                        <div class="container-details-blog !gap-y-4 ">
                            <BlogCard :data="data" v-for="data in dataBlog.listRelated" :key="data.ID" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<style scoped>
.container-details-blog {
    @apply w-full flex flex-col gap-y-6
}
</style>
