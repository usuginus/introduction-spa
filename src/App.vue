<template>
  <div id="app">
    <div v-if="isRouterReady">
      <menu-list></menu-list>
      <transition name="page">
        <router-view />
      </transition>
    </div>
  </div>
</template>

<script>
import "normalize.css";
import menuList from "@/components/menuList";
export default {
  name: "App",
  components: {
    menuList,
  },
  data() {
    return {
      isRouterReady: false,
    };
  },
  created() {
    this.$router.onReady(
      () => {
        this.isRouterReady = true;
      },
      (error) => {
        console.error("Router failed to ready:", error);
        this.isRouterReady = true;
      }
    );
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}
#app {
  font-family: "Heebo", "Noto Sans JP", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
a {
  -webkit-tap-highlight-color: transparent;
}
.page-enter-active {
  position: relative;
  transition: all 0.5s ease-out;
}
.page-enter-to,
.page-leave {
  left: 0;
}
.page-enter,
.page-leave-to {
  opacity: 0;
}
.page-enter {
  left: -10px;
}
.page-enter .mv {
  left: 0px;
}
</style>
