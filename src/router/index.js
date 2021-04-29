import Vue from "vue";
import Router from "vue-router";

import publicRoutes from "./routes/public.routes";
//import { authenticate, authorize } from "./middlewares";

Vue.use(Router);

const router = new Router({
    mode: 'history',
    routes: [
        ...publicRoutes,
    ]
})

//router.beforeEach(authenticate);
//router.beforeEach(authorize);

export default router;