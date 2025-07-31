<script lang="ts" setup>
</script>

<template>
    <div class="w-full max-w-[480px] flex flex-col gap-y-4 px-3 py-5 rounded-sm shadow-primary">
        <!-- back to course -->
        <div class="flex gap-x-2 items-center text-gray-300 cursor-pointer" @click="navigateTo({
            name: 'course-slug___fa-IR',
            params: {
                slug: $route.params.slug
            }
        })">
            <IconBack />
            <span class="text-sm">{{ $t('course.quizze.back_to_course') }}</span>
        </div>
        <slot name="info"></slot>
    </div>
</template>