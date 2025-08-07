<script lang="ts" setup>
import type { DetailsCategory } from '~/types/global';

const emit = defineEmits<{
    (event: 'pushToAllPage'): void
}>();

const props = defineProps<{ categories: DetailsCategory[], type: 'blog' | 'courses' }>();
const route = useRoute();

const allPageRoute = computed(() => {
    return props.type == 'blog' ? 'blog___fa-IR' : 'courses___fa-IR'
})

const dynamicRoute = computed(() => {
    return props.type == 'blog' ? 'blog-category-slug___fa-IR' : 'courses-slug___fa-IR'
})


const sortedCategories = computed(() => {
    const index = props.categories.findIndex((item: DetailsCategory) =>
        route.name === dynamicRoute.value && route.params.slug === item.slug
    );

    if (index === -1) return props.categories;

    const newCategories = [...props.categories]
    const [matchedItem] = newCategories.splice(index, 1);
    newCategories.unshift(matchedItem);

    return newCategories;
});

const pushToAllPage = () => {
    navigateTo({ name: allPageRoute.value })
    emit('pushToAllPage');
}

</script>

<template>
    <div class="category-carousel-container" :class="sortedCategories.length > 3 ? 'overflow-x-scroll' : ''">
        <div class="category-item" :class="$route.name == allPageRoute ? 'active-category' : ''">
            <div @click="pushToAllPage">
                <span v-if="type == 'courses'">
                    {{ $t('course.all_courses') }}
                </span>
                <span v-else>
                    {{ $t('blog.all_blogs') }}
                </span>
            </div>
        </div>
        <div v-for="(item, index) in sortedCategories" :key="index" class="category-item"
            :class="$route.name == dynamicRoute && $route.params.slug == item.slug ? 'active-category' : ''">
            <NuxtLink :to="{ name: dynamicRoute, params: { slug: item.slug } }">
                {{ item.title }}
            </NuxtLink>
        </div>
    </div>
</template>

<style scoped>
.category-carousel-container {
  scrollbar-width: none; 
  -ms-overflow-style: none; 
}
.category-carousel-container::-webkit-scrollbar {
  display: none; 
}
</style>
