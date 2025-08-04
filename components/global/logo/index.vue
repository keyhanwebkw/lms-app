<script lang="ts" setup>
import type { Logo } from '~/types/global';

const props = defineProps<Logo>()
</script>

<template>

    <NuxtLink  to="/" :class="customClass">
        <NuxtImg src="/img/logokw.png" alt="logo" class="w-[150px] h-[50px]  object-cover" />
    </NuxtLink>

</template>