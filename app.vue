<script setup lang="ts">

const locale = useI18n()

useHead({
  titleTemplate: (titleChunk: string | undefined) => {
    return titleChunk
      ? `${titleChunk} - ${locale.t("site_name")}`
      : `${locale.t("site_name")}`;
  },
});
</script>

<template>
  <div>
    <NuxtLayout name="main">
    </NuxtLayout>
  </div>
</template>
