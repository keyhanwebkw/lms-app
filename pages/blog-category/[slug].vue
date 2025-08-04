<script lang="ts" setup>
import { BlogList } from '~/stores/blog/list'

const route = useRoute()
const observerTarget = ref<HTMLElement | null>(null)
const slug = computed(() => route.params.slug || "")

const dataBlog = BlogList()

onMounted(async () => {
    await dataBlog.resetBlogList()
    await dataBlog.getBlogList({
        title: route.query.search ? String(route.query.search) : '',
        categorySlug: typeof slug.value === 'string' ? slug.value : '',
        page: 1
    })
})

watch(
    slug,
    async (value: string | string[]) => {
        if (!value || typeof value !== 'string') return

        dataBlog.resetBlogList()
        await dataBlog.getBlogList({
            categorySlug: value,
            page: 1,
        })
    },
    { immediate: false }
)


useInfiniteScrollObserver(observerTarget, dataBlog.loadNextPage)
</script>

<template>
    <NuxtLayout name="blog">
        <EmptyList v-if="dataBlog.list.length === 0" icon="IconCourses" :text="$t('blog.empty_list')" />
        <div v-else>
            <div class="container-blog">
                <h1 class="text-lg text-blue-500 font-semibold">
                    {{ dataBlog.category.details.title || $t('my_account.blog.title') }}
                </h1>
                <div class="container-blog  gap-y-3">
                    <BlogCard v-for="(data, index) in dataBlog.list" :key="index" :data="data" />
                </div>
            </div>
            <div ref="observerTarget" v-if="dataBlog.pagination.hasNextPage && !dataBlog.pagination.loading"
                class="container-card">
                <LoadingCourseCard v-for="(_, index) in 3" :key="index" />
            </div>
        </div>
    </NuxtLayout>
</template>