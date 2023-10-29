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
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
