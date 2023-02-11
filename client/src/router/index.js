import {createRouter,createWebHashHistory} from "vue-router";

const About = { template: "<div>About</div>" };

const routes = [
  {
    path: "/",
    component: () => {
      import("../views/HomeView.vue");
    },
  },
  {
    path: "/login",
    component: () => {
      import("../views/LoginView.vue");
    },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
