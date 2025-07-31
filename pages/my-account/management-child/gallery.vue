<script lang="ts" setup>
const dataGallery = ref([
    {
        id: 1,
        src: '/img/gallery1.svg',
        name: '1'
    },
    {
        id: 2,
        src: '/img/gallery2.svg',
        name: '1'
    },
    {
        id: 3,
        src: '/img/gallery3.svg',
        name: '1'
    },
    {
        id: 4,
        src: '/img/gallery3.svg',
        name: '1'
    },
])
</script>

<template>
    <div class="container-gallery">
        <!-- info user -->
        <MyAccountMangmentChildGalleryInfoUser avatar="/img/profile1.png" name="علیرضا" family="زنگنه"
            name_child="شهرزاد" />

        <!-- gallery -->
        <div class="container-img">
            <div class="item-img" v-for="data in dataGallery" :key="data.id">
                <NuxtImg :src="data.src" :alt="data.name"  />
            </div>
        </div>
    </div>

</template>

<style scoped>
.container-gallery {
    @apply w-full flex flex-col gap-y-10
}

.container-img{
    @apply w-full shadow-primary rounded-sm grid grid-cols-3 
}

.container-img .item-img{
    @apply col-span-1 h-[131px]
}
.container-img .item-img img{
    @apply h-full w-full object-cover
}
</style>