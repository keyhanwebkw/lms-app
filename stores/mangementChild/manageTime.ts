import { defineStore } from 'pinia';
import type { DataManageTime } from '~/types/myAccount';

export const managmentTime = defineStore('managmentTime', {
  state: () => <DataManageTime>({
    showTime: false,
    hour: 0,
    minute: 0,
  }),
  getters: {
    // change to length
    paddedHour: (state) => state.hour.toString().padStart(2, '0'),
    paddedPrevHour: (state) => ((state.hour - 1 + 24) % 24).toString().padStart(2, '0'),
    paddedNextHour: (state) => ((state.hour + 1) % 24).toString().padStart(2, '0'),
    paddedMinute: (state) => state.minute.toString().padStart(2, '0'),
    paddedPrevMinute: (state) => ((state.minute - 1 + 60) % 60).toString().padStart(2, '0'),
    paddedNextMinute: (state) => ((state.minute + 1) % 60).toString().padStart(2, '0'),
  },
  actions: {
    // show timer
    handelShowTime(event: any) {
      this.showTime = event;
    },

    // increment or decrement hour
    incrementHour() {
      this.hour = (this.hour + 1) % 24;
    },
    decrementHour() {
      this.hour = (this.hour - 1 + 24) % 24;
    },

    // increment or decrement min
    incrementMinute() {
      this.minute = (this.minute + 1) % 60;
    },
    decrementMinute() {
      this.minute = (this.minute - 1 + 60) % 60;
    },

    // set time mouse
    setHour(value: number) {
      this.hour = value % 24; // hour
    },
    setMinute(value: number) {
      this.minute = value % 60; // min 
    },
  },
});
