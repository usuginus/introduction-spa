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
    path: "/avatar",
    name: "Avatar",
    component: () =>
      import(/* webpackChunkName: "cordings" */ "../views/Avatar.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.onReady(() => {
  const redirectPath = sessionStorage.getItem("redirectPath");
  if (redirectPath) {
    sessionStorage.removeItem("redirectPath");
    router.replace(redirectPath).catch((err) => {
      if (
        err.name !== "NavigationDuplicated" &&
        !err.message.includes(
          "Avoided redundant navigation to current location"
        )
      ) {
        console.error("Router redirect error:", err);
      }
    });
  }
});

export default router;
