import $store from "../store";
import AuthService from "@/services/auth.service";
import { PURGE_AUTH } from "../store/types";

/**
 * Check authentication for routes that requires it - if not, redirect to login
 */
export function authenticate (to, from, next) {
    const { restricted } = to.meta;
    const authenticated = AuthService.isLoggedIn();

    if (restricted && !authenticated) { 
        // check if the user exists in store - if yes, destroy it
        const userEmail = $store.state.users.user.email;
        if (typeof userEmail !== 'undefined') {
            $store.dispatch(PURGE_AUTH);
        }

        // redirect to login if not authenticated
        return next({ path: '/login', query: { returnUrl: to.path } });
    }

    next();
}

/**
 * Check authorization for routes that required admin - if not, redirect to home page
 */
export function authorize (to, from, next) {
    const { requireAdmin } = to.meta;
    const isAdmin = AuthService.isAdmin();

    if (requireAdmin && !isAdmin) { 
        // role not authorised so redirect to home page
        return next({ path: '/', query: { message: 'error'} });
    }

    next();
}
