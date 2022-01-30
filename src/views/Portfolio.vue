<template>
  <div class="container">
    <h1>Portfolio</h1>
    <article>
      <section>
        <h2>IVRC</h2>
        <h3>Interverse Virtual Reality Challenge</h3>
        <p>
          VR向けハードウェアの趣味開発が発展し、IVRC2017-2019に出場した。3年連続入賞。2019年には総合優勝した。
        </p>
        <p>以下、受賞</p>
        <ul>
          <li>ドスパラ賞</li>
          <li>ソリッドレイ研究所賞</li>
          <li>総合優勝</li>
          <li>チームラボ賞</li>
          <li>審査員審査賞</li>
        </ul>
        <p>以下、作品リンク</p>
        <ul class="examples">
          <li v-for="example in ivrc.examples" :key="example.title">
            <a v-bind:href="example.path" target="_blank">
              <span>{{ example.title }}</span>
            </a>
          </li>
        </ul>
        <ul class="keywords">
          <li v-for="keyword in ivrc.keywords" :key="keyword">
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
      ivrc: {
        examples: [
          {
            title: "VR消防体験 -炎舞-(2019)",
            path: "http://ivrc.net/archive/VR%E6%B6%88%E9%98%B2%E4%BD%93%E9%A8%93%20-%E7%82%8E%E8%88%9E-2019/",
          },
          {
            title: "天獄渡り(2018)",
            path: "http://ivrc.net/archive/%E5%A4%A9%E7%8D%84%E6%B8%A1%E3%82%8A2018/",
          },
          {
            title: "なんでもルービックキューブ(2017)",
            path: "http://ivrc.net/archive/rubiks-cube-transform-3-degrees-of-freedom-force-sense-presentation-device2017/",
          },
        ],
        keywords: ["Virtual Reality", "Mechatronics", "Haptics", "Unity"],
      },
    };
  },
};
</script>

<style scoped lang="scss">
@import "../assets/scss/common.scss";
</style>
