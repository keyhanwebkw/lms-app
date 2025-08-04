<script setup lang="ts">
defineProps({
   error: {
      type: Object,
      required: true,
   },
})

function backToHome() {
   clearError({ redirect: '/' })
}

function goBack() {
   clearError()
   useRouter().back()
}
</script>

<template>
   <main class="container-error-page">
      <div class="text-center">
         <p class="text-base font-semibold">
            {{ error.statusCode }}
         </p>
         <h1>
            {{ error.message }}
         </h1>
         <p class="not-found-text">
            {{ $t('global.page_not_found') }}
         </p>
         <div class="btn-container">
            <BaseBtn type="button" type-design="outline-action" :text="$t('global.back_to_home')"
               customDesign=" border-blue-500 !text-blue-500 !text-sm" @click="backToHome" />
            <BaseBtn type="button" type-design="action" :text="$t('global.back')"
               customDesign="!w-max bg-blue-500 !text-sm" @click="goBack" />
         </div>
      </div>
   </main>
</template>

<style scoped>
.container-error-page {
   @apply grid w-full max-w-[480px] mx-auto min-h-screen place-items-center *:px-6 py-24 sm:py-32 lg:px-8
}

.container-error-page h1 {
   @apply mt-4 text-lg font-bold tracking-tight text-black
}

.container-error-page .not-found-text {
   @apply mt-6 text-base leading-7 text-black
}

.container-error-page .btn-container {
   @apply mt-10 flex items-center justify-center gap-x-6
}
</style>
