<script lang="ts" setup>
import type { DataListFaq } from '~/types/course';
import { selfCourse } from '~/stores/course/self';

const props = defineProps<DataListFaq>()
const self = selfCourse()

const active = computed(() => self.activeFaq == props.dataFaq.ID)
</script>


<template>
    <div class="container-faq">
        <!-- question -->
        <div class="container-question" @click="self.handleActiveFaq(dataFaq.ID)">
            <div class="content" :class="active ? 'text-purple-500' : 'text-gray-500'">
                <div class="flex justify-center">
                    <IconItemFaq />
                    <div class="line" :class="active ? 'bg-purple-500' : 'bg-gray-500'"></div>
                </div>
                <span>{{ dataFaq.question }}</span>
            </div>
            <div class="box-arrow"
                :class="active ? 'text-purple-500 border-purple-500 ' : 'text-gray-500 border-gray-300 '">
                <IconArrow :class="active ? 'rotate-[270deg] transition-all duration-300' : ''" />
            </div>
        </div>
        <!-- answer -->
        <transition enter-active-class="transition transform ease-in-out duration-500"
            enter-from-class="opacity-0 translate-y-6" enter-to-class="opacity-100 translate-y-0"
            leave-active-class="transition transform ease-in-out duration-500"
            leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 translate-y-6">
            <div class="container-answer p-4 rounded-lg shadow" v-if="active">
                <p>{{ dataFaq.answer }}</p>
            </div>
        </transition>
    </div>
</template>


<style scoped>
.container-faq {
    @apply w-full flex flex-col gap-y-3
}

.container-question {
    @apply w-full py-4 px-5 flex justify-between items-center rounded-sm shadow-primary cursor-pointer
}


.container-question .content {
    @apply relative flex gap-x-5
}

.container-question .content .line {
    @apply absolute content-[''] bottom-[0px] right-1 w-[14px] h-[3px] rounded-sm
}

.container-question .content span {
    @apply text-sm font-semibold
}

.box-arrow {
    @apply w-5 h-5 border flex justify-center items-center rounded-sm
}

.container-answer {
    @apply w-full h-auto min-h-[70px] flex items-center px-5 rounded-sm shadow-primary
}

.container-answer p {
    @apply text-xs font-semibold text-gray-500
}
</style>