<script lang="ts" setup>
import type { DataCardPrivileges } from "~/types/home"
import { separate } from "~/func/separate";
defineProps<DataCardPrivileges>()
</script>

<template>
    <div class="w-full h-[80px] flex gap-x-3 items-center bg-red-300 shadow-primary px-3 rounded-primary">
        <div>
            <component :is="'IconScore'" v-if="type == 'score'" />
            <component :is="'IconWallet'" v-else />
        </div>
        <div class="flex flex-col gap-y-1  ">
            <span class="text-purple-500 font-semibold">{{ $t(`global.${type}`) }}</span>
            <div class="text-purple-300 text-sm">
                <span v-if="type == 'wallet'">{{ separate(price) }} {{ $t('global.unit') }}</span>
                <div v-else class="flex gap-x-1 font-semibold">
                    <span>{{ score }}</span>
                    <span>{{ $t('global.score') }}</span>
                </div>
            </div>
        </div>
    </div>
</template>