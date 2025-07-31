<script lang="ts" setup>
import { ref, computed } from 'vue';
import type { ReadMore } from '~/types/global';

const props = defineProps<ReadMore>()

const isExpanded = ref(false);
const countWord = ref<number>(0);

function countLengthWord(text: string): number {
  const words = text.trim().split(/\s+/); 
  countWord.value = words.length;
  return countWord.value;
}

countLengthWord(props.fullText);

const showBtn = computed(() => countWord.value > props.maxWords);

const getWords = (text: string, maxWords: number): string => {
  const words = text.trim().split(/\s+/);
  const limitWord = words.slice(0, maxWords).join(' ');
  return limitWord;
};

const displayedText = ref<string>(
  showBtn.value ? getWords(props.fullText, props.maxWords) : props.fullText
);

const toggleText = () => {
  isExpanded.value = !isExpanded.value;
  displayedText.value = isExpanded.value ? props.fullText : getWords(props.fullText, props.maxWords);
};
</script>

<template>
  <div class="container-read-more">
    <div>
      <BaseTitle type="icon" :icon="icon" :title="title" />
    </div>

    <div class="container-item !justify-start">
      <p
        v-html="displayedText"
        :class="[
          'text-sm leading-7 text-justify',
          !isExpanded && showBtn ? 'text-gradient' : 'text-gray-300'
        ]"
      ></p>
    </div>

    <div class="container-item" v-if="showBtn">
      <BaseBtn
        @click="toggleText"
        type="button"
        type-design="action"
        custom-design="bg-purple-100 !text-purple-500"
        :text="isExpanded ? $t('global.close') : $t('global.read_more')"
      />
    </div>
  </div>
</template>

<style scoped>
.container-read-more {
  @apply w-full flex flex-col gap-y-6;
}

.container-item {
  @apply flex justify-center items-center;
}

.text-gradient {
  background: linear-gradient(to top, #f1eaea, #666666);
  background-clip: text;
  color: transparent;
}
</style>
