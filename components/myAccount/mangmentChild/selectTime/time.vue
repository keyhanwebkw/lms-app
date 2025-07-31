<script setup lang="ts">
import { managmentTime } from '~/stores/mangementChild/manageTime';

const timerStore = managmentTime();

const incrementHour = () => timerStore.incrementHour();
const decrementHour = () => timerStore.decrementHour();
const incrementMinute = () => timerStore.incrementMinute();
const decrementMinute = () => timerStore.decrementMinute();

const minuteTransform = ref('');
const hourTransform = ref('');
const touchStartY = ref(0);

const handleWheel = (type: 'hour' | 'minute', event: WheelEvent) => {
  const isScrollDown = event.deltaY > 0;
  if (type === 'hour') {
    hourTransform.value = isScrollDown ? 'translateY(70px)' : 'translateY(-70px)';
    isScrollDown ? incrementHour() : decrementHour();
  } else {
    minuteTransform.value = isScrollDown ? 'translateY(70px)' : 'translateY(-70px)';
    isScrollDown ? incrementMinute() : decrementMinute();
  }

  setTimeout(() => {
    minuteTransform.value = '';
    hourTransform.value = '';
  }, 300);
};

const handleTouchStart = (event: TouchEvent) => {
  touchStartY.value = event.touches[0].clientY;
};

const handleTouchMove = (type: 'hour' | 'minute', event: TouchEvent) => {
  const deltaY = event.touches[0].clientY - touchStartY.value;
  if (Math.abs(deltaY) > 20) {
    if (type === 'hour') {
      hourTransform.value = deltaY > 0 ? 'translateY(70px)' : 'translateY(-70px)';
      deltaY > 0 ? incrementHour() : decrementHour();
    } else {
      minuteTransform.value = deltaY > 0 ? 'translateY(70px)' : 'translateY(-70px)';
      deltaY > 0 ? incrementMinute() : decrementMinute();
    }
    touchStartY.value = event.touches[0].clientY;
  }

  setTimeout(() => {
    minuteTransform.value = '';
    hourTransform.value = '';
  }, 300);
};

const handleTouchEnd = () => {
  touchStartY.value = 0; 
};
</script>

<template>
  <div class="timer-container">
    <!-- min -->
    <div
      class="column"
      @wheel="handleWheel('minute', $event)"
      @touchstart="handleTouchStart"
      @touchmove="handleTouchMove('minute', $event)"
      @touchend="handleTouchEnd"
    >
      <div class="top" @click="decrementMinute">
        {{ timerStore.paddedPrevMinute }}
      </div>
      <div class="middle">
        <div class="number" :style="{ transform: minuteTransform }">
          {{ timerStore.paddedMinute }}
        </div>
      </div>
      <div class="bottom" @click="incrementMinute">
        {{ timerStore.paddedNextMinute }}
      </div>
    </div>

    <!-- line-->
    <div class="separator">:</div>

    <!-- hour -->
    <div
      class="column"
      @wheel="handleWheel('hour', $event)"
      @touchstart="handleTouchStart"
      @touchmove="handleTouchMove('hour', $event)"
      @touchend="handleTouchEnd"
    >
      <div class="top" @click="decrementHour">
        {{ timerStore.paddedPrevHour }}
      </div>
      <div class="middle">
        <div class="number" :style="{ transform: hourTransform }">
          {{ timerStore.paddedHour }}
        </div>
      </div>
      <div class="bottom" @click="incrementHour">
        {{ timerStore.paddedNextHour }}
      </div>
    </div>
  </div>
</template>



<style scoped>
.timer-container {
  @apply flex items-center justify-center  gap-x-3
}

.column {
  @apply flex flex-col items-center gap-5
}

.middle {
  @apply text-[30px] py-5 border-y border-gray-100 w-12 text-center relative overflow-hidden 
}

.number {
  @apply transition duration-300 
}

.separator {
  @apply text-2xl  py-[10px]
}

.top,
.bottom {
  @apply text-gray-300 cursor-pointer
}
</style>
