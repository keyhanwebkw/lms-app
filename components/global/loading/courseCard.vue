<template>
   <!-- کارت لودینگ برای گرید -->

  <div
    class="w-full h-auto flex flex-col items-center rounded-primary bg-white shadow-[0px_2px_8px_0px_#0000001A]"
  >
    <!-- تصویر -->
    <div class="w-full h-[150px]">
      <div class="w-full h-full rounded-primary card_box_loading"></div>
    </div>

    <!-- محتوا -->
    <div class="w-full flex flex-col gap-y-3 py-3 pl-2 p-2">
      <!-- نام دوره -->
      <div class="w-[70%] h-5 card_box_loading rounded-sm"></div>

      <!-- مدرس و مدت -->
      <div class="flex justify-between items-center">
        <div class="w-[40%] h-4 card_box_loading rounded-sm"></div>
        <div class="w-[30%] h-4 card_box_loading rounded-sm"></div>
      </div>

      <!-- قیمت -->
      <div class="flex justify-center border border-gray-50 rounded-full py-1">
        <div class="w-[50%] h-5 card_box_loading rounded-full"></div>
      </div>
    </div>
  </div>

</template>