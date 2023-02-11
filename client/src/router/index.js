import { createRouter, createWebHashHistory } from "vue-router";
import LoginVue from "../views/LoginVue.vue";

const routes = [{
        path: "/",
        name: "Home",
        component: () =>
            import ("../views/HomeViews.vue"),


    }, {
        path: "/login",
        name: "login",
        component: LoginVue,


    },
    {
        path: "/register",
        name: "register",
        component: () =>
            import ("../views/RegisterVue.vue"),
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;