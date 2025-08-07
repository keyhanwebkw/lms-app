<script lang="ts" setup>
import type { Logo } from '~/types/global';

const props = defineProps<Logo>()
</script>

<template>

    <NuxtLink  to="/" :class="customClass">
        <NuxtImg src="/img/logokw.png" alt="logo" class="w-[100px] h-[30px]  object-cover" />
    </NuxtLink>

</template>