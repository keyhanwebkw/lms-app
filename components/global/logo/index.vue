<script lang="ts" setup>
import type { Logo } from '~/types/global';

const props = defineProps<Logo>()
</script>

<template>

    <NuxtLink  to="/" :class="customClass">
        <NuxtImg src="/img/logo.webp" alt="logo" class="w-[200px] h-[70px]  object-cover" />
    </NuxtLink>

</template>