<script lang="ts" setup></script>


<template>
    <div class="container-details-blog">
        <div class="w-full">
            <LoadingDetailsBlogSectionThumbnail />
        </div>
        <div class="w-full">
            <LoadingDetailsBlogReadMore />
        </div>
        <div class="w-full">
            <LoadingDetailsBlogReadMore />
        </div>
    </div>
</template>

<style scoped>
.container-details-blog {
    @apply w-full flex flex-col gap-y-7
}
</style>
