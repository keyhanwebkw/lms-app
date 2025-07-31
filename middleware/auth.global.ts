import { CheckUserAuth } from "~/stores/auth/checkAuth";

export default defineNuxtRouteMiddleware(to => {
    if (to.path == '/auth/enter-phone' || to.path == '/auth/validation' || to.path == '/auth/enter-password') return;
    CheckUserAuth().checkUserHasToken()
})