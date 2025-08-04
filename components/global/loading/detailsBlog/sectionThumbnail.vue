<script lang="ts" setup>

</script>

<template>
    <div class="container-blog-thumbnail">
        <div class="title card_box_loading">
        </div>
        <div class="card-thumbnail card_box_loading">
            
        </div>
    </div>
</template>


<style scoped>
.container-blog-thumbnail {
    @apply w-full flex flex-col gap-y-4 px-4 pt-6 pb-8 bg-blue-500
}

.card-thumbnail{
    @apply w-full h-[178px] rounded-primary
}

.title {
    @apply w-[200px] h-[25px] rounded-sm 
}
</style>