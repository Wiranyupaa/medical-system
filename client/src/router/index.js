import { createRouter, createWebHashHistory } from "vue-router";
import home from "../views/Home.vue"
import login from "../views/Login.vue"
import register from "../views/Register.vue"
import docInfo from "../views/docInfo.vue"

const routes = [{
        path: "/",
        name: "home",
        component: home,
    },
    {
        path: "/login",
        name: "login",
        component: login,
    },
    {
        path: "/register",
        name: "logiregistern",
        component: register,
    },
    {
        path: "/docInfo",
        name: "docInfo",
        component: docInfo,
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;