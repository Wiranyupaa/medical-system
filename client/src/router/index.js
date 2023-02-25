import { createRouter, createWebHashHistory } from "vue-router";
import home from "../views/Home.vue"
import login from "../views/Login.vue"
import register from "../views/Register.vue"

const routes = [
  {
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
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
