<template>
  <div class="container">
    <h1>Skill</h1>
    <article>
      <section>
        <h2>Web App</h2>
        <h3>for REALITY</h3>
        <ul class="keywords">
          <li v-for="keyword in web.keywords" :key="keyword">
            {{ keyword }}
          </li>
        </ul>
      </section>
      <section>
        <h2>VR App</h2>
        <h3>for Research and IVRC</h3>
        <ul class="keywords">
          <li v-for="keyword in vr.keywords" :key="keyword">
            {{ keyword }}
          </li>
        </ul>
      </section>
    </article>
  </div>
</template>

<script>
export default {
  data() {
    return {
      web: {
        keywords: [
          "REALITY",
          "Google Cloud Platform",
          "Golang",
          "Node.js",
          "Cloud Development",
        ],
      },
      vr: {
        keywords: [
          "IVRC",
          "Virtual Reality",
          "Mechatronics",
          "Unity",
          "ROS",
          "M5Stack",
          "RaspberryPi",
        ],
      },
    };
  },
};
</script>
<style scoped lang="scss">
@import "../assets/scss/common.scss";
</style>
