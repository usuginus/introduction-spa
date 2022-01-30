<template>
  <div class="container">
    <h1>Skill</h1>
    <article>
      <section>
        <h2>Google Cloud Platform</h2>
        <h3>for Web server</h3>
        <p>Google Cloud Certified - Professional Cloud Developer認定</p>
        <ul class="keywords">
          <li v-for="keyword in gcp.keywords" :key="keyword">
            {{ keyword }}
          </li>
        </ul>
      </section>
      <section>
        <h2>Golang</h2>
        <h3>for Web server</h3>
        <p>Google Cloud Certified - Professional Cloud Developer認定</p>
        <ul class="keywords">
          <li v-for="keyword in golang.keywords" :key="keyword">
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
      gcp: {
        keywords: ["Server"],
      },
      golang: {
        keywords: ["Server"],
      },
    };
  },
};
</script>
<style scoped lang="scss">
@import "../assets/scss/common.scss";
</style>
