export default [
    {
        path: '/',
        name: 'home',
        component: () => import("../../views/Home.vue")
    },
    {
        path: '/404',
        name: '404',
        component: () => import("../../views/NotFound.vue"),
        meta: {
            mainOnly: true
        }
    },
    {
        path: '/network-issue',
        name: 'network-issue',
        component: () => import("../../views/NetworkIssue.vue"),
        meta: {
            mainOnly: true
        }
    },
    {
        path: '*',
        redirect: { name: '404', params: { resource: 'page' } }
    }
];