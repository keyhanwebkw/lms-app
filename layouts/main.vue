<script setup lang="ts">

const route = useRoute()

const showHeaderAndMenu = computed(() => {
    return !String(route.name).startsWith('auth')
})

</script>

<template>
    <div class="app-layout">
        <div class="container-layout" :class="$route.name == 'blog-slug___fa-IR' ? '' : 'px-2'">
            <Header v-if="showHeaderAndMenu" />
            <NuxtPage />
            <Menu v-if="showHeaderAndMenu" />
            <ToastMessage />
        </div>
    </div>
</template>

<style>
.app-layout {
    @apply w-full flex justify-center pb-12
}

.container-layout {
    @apply w-full max-w-[480px] min-h-screen relative mt-2 pb-12
}
</style>