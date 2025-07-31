<script lang="ts" setup>
import type { Status } from '~/types/global'
import { handelStatus } from '~/services/constants/dataStatus'

const props = defineProps<Status>()
</script>

<template>
  <div class="container-status container-flex-center" :class="handelStatus[props.status].styleData">
    <component :is="handelStatus[props.status].imgData" />
    <span class="text-[11px]">{{ $t(`status.${props.status}`) }}</span>
  </div>
</template>

<style scoped>
.container-status {
  @apply h-4 px-4 text-white items-center  rounded-full gap-x-1 py-4
}
</style>