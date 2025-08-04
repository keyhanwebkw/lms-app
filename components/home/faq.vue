<script setup lang="ts">
import type { DataFaq } from '~/types/home';

defineProps<DataFaq>()
</script>

<template>
    <div class="w-full relative  flex flex-col gap-y-10 justify-between">
        <div class="flex flex-col gap-y-5 ">
            <!-- title -->
            <div>
                <BaseTitleSection :title="title" icon="certificate.svg" />
            </div>

            <div class="flex flex-col gap-y-5">
                <CourseSelfMainFaq :data-faq="data" v-for="data in listFaq" :key="data.ID" />
            </div>
        </div>
    </div>
</template>