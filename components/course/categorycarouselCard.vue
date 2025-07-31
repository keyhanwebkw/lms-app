<script setup lang="ts">
import type { DetailsCourseCategory } from '~/types/course';

defineProps<{ data: DetailsCourseCategory, color: string }>()

</script>

<template>
    <NuxtLink :to="'/courses/' + data.slug" class="card-category"
        :style="[{ backgroundColor: `${color}10` }, { borderColor: `${color}40` }]">
        <NuxtImg :src="$config.public.storage.original + data.photoSID.fullSID" :alt="data.title" />
        <span :style="{ color: `${color}` }">
            {{ data.title }}
        </span>
    </NuxtLink>
</template>
