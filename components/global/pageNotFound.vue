<script lang="ts" setup>

</script>

<template>
    <div class="w-full h-[70vh] justify-center flex flex-col items-center ">
        <NuxtImg src="/img/page-not-found.png" alt="img-not-foung" />
        <span>
            {{ $t('global.page_not_found') }}
        </span>
        <div class="mt-7">
            <BaseBtn type="button" :text="$t('global.back')" custom-design="bg-blue-500 text-white"
                type-design="action" @click="$router.back()" />
        </div>
    </div>
</template>

<style scoped>
.container-error-page {
    @apply w-full flex flex-col items-center
}

.container-error-page h1 {
    @apply mt-4 text-lg font-bold tracking-tight text-black
}
</style>