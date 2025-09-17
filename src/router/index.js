import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/portfolio",
    name: "Portfolio",
    component: () =>
      import(/* webpackChunkName: "designs" */ "../views/Portfolio.vue"),
  },
  {
    path: "/skill",
    name: "Skill",
    component: () =>
      import(/* webpackChunkName: "cordings" */ "../views/Skill.vue"),
  },
  {
    path: "/resume",
    name: "Resume",
    component: () =>
      import(/* webpackChunkName: "resume" */ "../views/Resume.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  const redirectPath = sessionStorage.getItem("redirectPath");
  if (redirectPath && to.path === router.options.base) {
    sessionStorage.removeItem("redirectPath");
    next(redirectPath);
  } else {
    next();
  }
});

export default router;
