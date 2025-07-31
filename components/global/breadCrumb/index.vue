<script lang="ts" setup>
import type { Breadcrumbs } from '~/types/global';
const props = defineProps<Breadcrumbs>()
</script>
<template>
    <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
            <li v-for="(crumb, index) in crumbs" :key="index" class="breadcrumb-item ">
                <NuxtLink v-if="index !== crumbs.length - 1" :to="crumb.to">
                    {{ crumb.label }}
                </NuxtLink>
                <span v-else>
                    {{ crumb.label }}
                </span>
            </li>
        </ol>
    </nav>
</template>

<style scoped>
.breadcrumb {
    @apply flex flex-wrap gap-x-1
}

.breadcrumb-item {
    @apply text-gray-300 text-sm
}

.breadcrumb-item+.breadcrumb-item::before {
    @apply content-['/']
}

.breadcrumb-item a,
.breadcrumb-item span {
    @apply pr-1
}
</style>