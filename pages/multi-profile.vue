<script lang="ts" setup>

</script>

<template>

    <div class=" gap-y-10 container-flex-col-items-center">
        <div class=" gap-y-3 container-flex-col-items-center ">
            <span>{{ $t('multi_profile.login_to_panel') }}</span>
            <p >{{ $t('multi_profile.select_panel') }}</p>
        </div>

        <div class="container-flex-col-items-center gap-y-5">
            <!-- <MultiProfileCard /> -->
        </div>
    </div>

</template>

<style scoped>

.container-info span {
    @apply text-purple-500 font-bold
}

.container-info p {
    @apply text-gray-300 text-sm leading-6
}
</style>