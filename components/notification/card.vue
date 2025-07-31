<script lang="ts" setup>
import type { DataCardNotification } from '~/types/notification'
import { limitWord } from '~/func/limitWords'
import { GenerateDate } from '~/func/GenerateDate'

const emit = defineEmits<{
    (event: 'read', value: number): void
}>();

const props = defineProps<DataCardNotification>()

const countContent = ref<number>(NaN)

const isRead = ref<boolean>(false)

onMounted(() => {
    isRead.value = props.dataList.read !== null
    countContent.value = isRead.value ? 200 : 8
})

watch(isRead, (val: boolean) => {
    countContent.value = val ? 200 : 8
})

function handleRead() {
    if (isRead.value == true) return
    else {
        isRead.value = true
        emit('read', props.dataList.ID)
    }
}
</script>

<template>
    <div class="notif-container" @click="handleRead">
        <!-- img -->
        <div class="top-section-container">
            <div class="icon-notif container-flex-center" :class="!isRead ? 'bg-orange-300 text-white' : 'bg-gray-100 text-gray-500'">
                <IconNotification />
            </div>
            <div class="w-full">
                <span>{{ props.dataList.title }}</span>
            </div>
        </div>

        <!-- content -->
        <div class="content-container  primary-gap">
            <!-- description -->
            <div>
                <p class="text-gray-300 text-sm">
                    {{ limitWord({ sentens: props.dataList.content, count: countContent }) }}
                </p>
            </div>

            <!-- time -->
            <div class="time-notif">
                <span>{{ GenerateDate({ timestamp: props.dataList.created, type: 'timeDate' }) }}</span>
                <IconCalender />
            </div>
        </div>
    </div>
</template>


<style scoped>
.notif-container {
    @apply w-full flex flex-col gap-y-5 rounded-sm px-5 py-3 bg-white shadow-primary
}

.notif-container .top-section-container {
    @apply w-full flex items-center gap-x-3
}

.notif-container .top-section-container .icon-notif {
    @apply w-[45px] h-10 rounded-primary  cursor-pointer
}

.notif-container .content-container {
    @apply w-full flex flex-col
}

.notif-container .content-container .time-notif {
    @apply text-gray-300 flex gap-x-2 w-full justify-end
}
</style>
