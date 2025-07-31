<script lang='ts' setup>

const route = useRoute()

const countInput = computed(() => route.name == "my-account-management-child-edit-id___fa-IR" ? 3 : 6)
</script>

<template>

    <div class="container-loading-profile">
        <div class="wrraper-profile ">
            <div class="avatar-box card_box_loading">

            </div>
            <div class="container-inputs" v-for="_ in countInput" :key="_">
                <div class="w-[50px] h-[20px] card_box_loading">

                </div>
                <div class=" items-input card_box_loading">

                </div>
            </div>
            <div class="btn-submit card_box_loading"></div>
        </div>
    </div>

</template>

<style scoped>
.container-loading-profile {
    @apply w-full flex justify-center mt-4
}

.wrraper-profile {
    @apply w-full flex flex-col items-center max-w-[350px] gap-y-5
}

.btn-submit {
    @apply w-[110px] h-10 rounded-primary
}

.container-inputs {
    @apply w-full flex flex-col gap-y-3
}

.items-input {
    @apply w-full h-[42px] rounded-primary
}

.avatar-box {
    @apply relative w-[110px] h-[110px] rounded-full
}
</style>