import Vue3PersianDatetimePicker from 'vue3-persian-datetime-picker'

export default defineNuxtPlugin((nuxtApp) => {
        nuxtApp.vueApp.use(Vue3PersianDatetimePicker, {
            name: 'DatePicker',
            props: {
                inputClass: 'date-picker-shop',
                color: "#913175",
                autoSubmit: false,
            }
        })
})