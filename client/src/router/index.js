import { createRouter, createWebHashHistory } from "vue-router";
import home from "../views/Home.vue"
import login from "../views/Login.vue"

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
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
