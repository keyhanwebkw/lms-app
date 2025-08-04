<script lang="ts" setup>
import { dataSortList, sortCourses } from '~/services/constants/sortCourses'
import { CoursesList } from '~/stores/course/list'

const coursesListStore = CoursesList()

const dataSort = ref(dataSortList)
const activeValue = ref('')
const sortBy = ref<HTMLElement | null>(null);
const showSortFilter = ref(false)

const changeValue = (val: string) => {
    coursesListStore.getCoursesList({ sort: sortCourses[val], page: 1 })
    activeValue.value = val
    setTimeout(() => {
        showSortFilter.value = false;
    }, 300);
}

useClickOutside(sortBy, () => {
    showSortFilter.value = false;
});

</script>

<template>
    <div class="container-sort">
        <!-- sort by -->
        <div class="sort-filter" ref="sortBy">
            <div class="sort-filter-button" @click="showSortFilter = !showSortFilter">
                <IconFilter />
                <span class="sort-filte-text">
                    <div v-if="activeValue">
                        {{dataSort.find(item => item.value === activeValue)?.label}}
                    </div>
                    <div v-else>
                        {{ $t('global.sort') }}
                    </div>
                </span>
            </div>
            <div v-if="showSortFilter" class="sort-filter-dropdown">
                <ul class="sort-filter-list">
                    <li v-for="item in dataSort" :key="item.value" class="sort-filter-item"
                        :class="activeValue === item.value ? 'sort-filter-item-active' : 'sort-filter-item-inactive'"
                        @click="changeValue(item.value)">
                        <span>{{ item.label }}</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style scoped>
.container-sort {
    @apply flex gap-x-2 w-full;
}

.sort-filter {
    @apply relative;
}

.sort-filter-button {
    @apply px-4 py-2 text-gray-300 border border-gray-300 text-sm rounded-full flex gap-x-1 cursor-pointer;
}

.sort-filter-dropdown {
    @apply absolute top-[calc(100%+5px)] right-0 min-w-[140px] p-2 bg-white shadow-primary rounded-primary;
}

.sort-filter-list {
    @apply flex flex-col gap-y-2;
}

.sort-filter-item {
    @apply flex items-center gap-x-2 text-sm p-1 rounded-sm cursor-pointer;
}

.sort-filter-item-active {
    @apply bg-blue-500 text-white;
}

.sort-filter-item-inactive {
    @apply bg-gray-50 text-black;
}
</style>
