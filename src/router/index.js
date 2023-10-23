import { createRouter, createWebHashHistory } from "vue-router";
import loginView from "../views/loginView";
import homeView from "../views/homeView";

const routes = [
  {
    path: "/",
    name: "login",
    component: loginView,
  },
  {
    path: "/home",
    name: "Home",
    component: homeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
