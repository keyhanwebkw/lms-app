<script lang="ts" setup>
import { GenerateDate } from '~/func/GenerateDate';
import type { DataCardComment } from '~/types/comment';
import { limitWord } from '~/func/limitWords';

const props = defineProps<DataCardComment>()

const emit = defineEmits<{
  (event: 'replyToComment', value: number, content: string,author:string): void;
}>();

const limitword = computed(() => props.parentText ? limitWord({ count: 5, sentens: props.parentText }) : '')

const cardBg = computed(() => {
  return props.depth === 0 ? 'bg-white' : 'bg-[#f3f3f3e1]'
})

function handleSendParentID(id: number, content: string,author:string) {
  emit('replyToComment', id, content,author)
}
</script>

<template>
  <div class="comment-wrapper">
    <div class="comment-card" :class="[cardBg, depth > 0 ? 'comment-card--child' : '']">
      <div class="w-full flex justify-between" v-if="depth > 0 && parentText">
        <div class="comment-parent-preview">
          <IconReply class="w-5 h-5" />
          <p class="text-xs">{{ limitword }}</p>
        </div>
        <div class="comment-actions">
          <div v-if="isAdmin" class="comment-admin-label bg-turquoise-500">{{ $t('global.manager') }}</div>
          <div class="comment-admin-label bg-purple-500 cursor-pointer"
            @click="handleSendParentID(dataList.ID, dataList.content,dataList.author)">{{ $t('global.answer') }}</div>
        </div>
      </div>
      <div class="comment-header">
        <div class="comment-header-content">
          <div class="comment-author">
            <div class="flex gap-x-2">
              <div class="comment-avatar">
                <div class="" v-if="dataList.isAdmin">
                  <NuxtImg src="/img/admin.png" alt="" class="rounded-full" />
                </div>
                <div v-else class="w-full h-full p-px">
                  <NuxtImg :src="`${$config.public.storage.thumbnail}${dataList.avatar.fullSID}`" alt=""
                    v-if="dataList.avatar !== null" class="w-full h-full rounded-full" />
                  <NuxtImg src="/img/user.jpg" alt="" v-else class="w-full h-full rounded-full" />

                </div>
              </div>
              <div class="comment-author-info">
                <span class="comment-author-name">
                  {{ dataList.author }}
                </span>
                <span class="comment-date">
                  {{ GenerateDate({ timestamp: dataList.created, type: 'lastDate' }) }}
                </span>
              </div>
            </div>
            <div class="comment-actions !-mt-4" v-if="depth == 0">
              <div v-if="isAdmin" class="comment-admin-label bg-turquoise-500">{{ $t('global.manager') }}</div>
              <div class="comment-admin-label bg-purple-500 cursor-pointer"
                @click="handleSendParentID(dataList.ID, dataList.content,dataList.author)">{{ $t('global.answer') }}</div>
            </div>
          </div>
        </div>
      </div>

      <div class="comment-content">
        {{ dataList.content }}
      </div>
    </div>

    <div v-if="dataList.hasReply" class="comment-replies">
      <CommentCard v-for="data in dataList.replies" :key="data.ID" :data-list="data" 
        :depth="depth + 1" :parent-text="dataList.content" :is-admin="data.isAdmin" :parent-id="data.ID"
        @replyToComment="handleSendParentID" :author="author"/>
    </div>
  </div>
</template>

<style scoped>
.comment-wrapper {
  @apply flex flex-col gap-y-4;
}

.comment-card {
  @apply w-full flex flex-col rounded-sm px-3 py-3 shadow-primary gap-3;
}

.comment-card--child {
  @apply w-[95%] mr-[22px];
}

.comment-parent-preview {
  @apply flex gap-x-1 items-center text-[#b5b5b5];
}


.comment-header {
  @apply w-full flex justify-between items-center;
}

.comment-header-content {
  @apply w-full flex justify-between items-center;
}

.comment-author {
  @apply w-full flex items-center justify-between;
}

.comment-avatar {
  @apply w-10 h-10 rounded-full border border-red-500;
}

.comment-author-info {
  @apply flex flex-col gap-y-1;
}

.comment-author-name {
  @apply text-red-500 font-semibold text-xs;
}

.comment-date {
  @apply text-xs text-gray-500;
}

.comment-actions {
  @apply flex items-center gap-x-2 justify-end 
}

.comment-admin-label {
  @apply px-3 pt-px pb-1 rounded-[3px] text-white text-[10px] font-bold;
}


.comment-content {
  @apply text-sm text-gray-700 leading-5 font-semibold;
}

.comment-replies {
  @apply flex flex-col gap-y-4;
}
</style>
