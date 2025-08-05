<script setup lang="ts">
import type { DetailsCourseCategory } from '~/types/course';

defineProps<{ data: DetailsCourseCategory, color: string }>()

</script>

<template>
    <NuxtLink :to="'/courses/' + data.slug" class="card-category">
        <div class="main-card-category">
            <NuxtImg :src="$config.public.storage.original + data.photoSID.fullSID" :alt="data.title" />
        <span class="font-semibold text-[14px]">
            {{ data.title }}
        </span>
        </div>
        <IconArrowLeft class="text-blue-300" />
    </NuxtLink>
</template>
