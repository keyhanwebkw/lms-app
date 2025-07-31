<template>
    <div class="flex flex-col gap-y-5">
        <div class="title">
            <div class="w-6 h-6 card_box_loading"> </div>
            <div class="w-20 h-3 card_box_loading"></div>
        </div>
        <div class="comment-card" v-for="_ in 2" :key="_">
            <div class="comment-header">
                <div class="comment-header-content">
                    <div class="comment-author">
                        <div class="flex gap-x-2">
                            <div class="comment-avatar">
                                <div class="w-8 h-8 rounded-full  card_box_loading">

                                </div>
                            </div>
                            <div class="comment-author-info">
                                <span class=" data-info  card_box_loading">

                                </span>
                                <span class="data-info  card_box_loading">

                                </span>
                            </div>
                        </div>
                        <div class="comment-actions !-mt-4">
                            <div class="lable-admin card_box_loading ">
                            </div>
                            <div class="lable-admin card_box_loading ">
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class=" flex flex-col gap-y-3">
                <div class="w-full h-[13px] card_box_loading" v-for="_ in 3" :key="_">

                </div>
            </div>
        </div>
    </div>
</template>


<style scoped>
.title {
    @apply flex gap-x-3 border-b-2 pb-2 items-center border-purple-500
}

.comment-card {
    @apply w-full flex flex-col rounded-sm px-3 py-3 shadow-primary gap-3 bg-white;
}

.comment-header,
.comment-header-content {
    @apply w-full flex justify-between items-center;
}

.comment-author {
    @apply w-full flex items-center justify-between;
}

.comment-author-info {
    @apply flex flex-col gap-y-1;
}

.comment-actions {
    @apply flex items-center gap-x-2 justify-end
}

.comment-admin-label {
    @apply px-3 pt-px pb-1 rounded-[3px]
}

.data-info {
    @apply w-[60px] h-[11px]
}

.lable-admin {
    @apply w-[46px] h-5 rounded-sm
}
</style>