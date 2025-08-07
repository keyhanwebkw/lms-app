<script setup lang="ts">
import { limitWord } from '~/func/limitWords';
import type { DataHeroHomePage } from '~/types/home';

const props = defineProps<DataHeroHomePage>()




</script>

<template>
    <div class="hero-container">
        <div>
            <BaseTitleSection :title="title" icon="../yegane.png"  />
        </div>
        <ReadMore :full-text="description" :max-words="40"/>
    </div>
</template>

<style scoped>
.hero-container {
    @apply w-full flex flex-col justify-center gap-y-5
}

.container-box {
    @apply w-full flex justify-center
}


.container-box img {
    @apply w-full h-[200px]
}

.title {
    @apply text-xl font-bold
}

.description {
    @apply text-sm text-justify leading-7 xl:leading-9
}
</style>