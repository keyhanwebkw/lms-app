<script setup lang="ts">

defineProps<{ title: string, link: string }>()

</script>

<template>
    <div class="add-new-btn-container">
        <div class="add-new-box">
            <BaseBtn type="button" type-design="action" :text="'+ ' + title"
                customDesign="bg-purple-500 !text-sm !rounded-full" @click="navigateTo(link)" />
        </div>
    </div>
</template>

<style scoped>
.add-new-btn-container {
    @apply w-full fixed bottom-[86px] mx-auto
}

.add-new-btn-container .add-new-box {
    @apply w-full max-w-[480px] flex justify-center
}
</style>