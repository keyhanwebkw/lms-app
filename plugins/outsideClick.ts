import ClickOutside from "../func/outside-click";

export default defineNuxtPlugin((nuxtApp) => {
    if (process.client) {
        nuxtApp.vueApp.directive("click-outside", ClickOutside)
    }
})