<template>
  <div class="container">
    <h1>Skill</h1>
    <article>
      <section>
        <h2>Web App</h2>
        <h3>for Work</h3>
        <p>バックエンドアプリケーション開発が主。</p>
        <p>受賞・資格・関連リンク</p>
        <ul>
          <li>GREE -New Grad of the year- 2020 受賞</li>
          <li>Google Cloud Certified - Professional Cloud Developer取得</li>
        </ul>
        <ul class="examples">
          <li v-for="example in web.examples" :key="example.title">
            <a v-bind:href="example.path" target="_blank">
              <span>{{ example.title }}</span>
            </a>
          </li>
        </ul>
        <ul class="keywords">
          <li v-for="keyword in web.keywords" :key="keyword">
            {{ keyword }}
          </li>
        </ul>
      </section>
      <section>
        <h2>VR App</h2>
        <h3>for Research and IVRC</h3>
        <p>
          Haptic
          Interface設計・製作やUnityによるVRクライアントアプリケーション開発。
        </p>
        <p>受賞・資格・関連リンク</p>
        <ul>
          <li>一般社団法人茗渓会賞</li>
          <li>電気学会技術委員会奨励賞</li>
          <li>バーチャルリアリティ技術者（アプリケーション）取得</li>
          <li>バーチャルリアリティ技術者（セオリー）取得</li>
        </ul>
        <ul class="examples">
          <li v-for="example in vr.examples" :key="example.title">
            <a v-bind:href="example.path" target="_blank">
              <span>{{ example.title }}</span>
            </a>
          </li>
        </ul>
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
        examples: [
          {
            title: "GREE -New Grad of the year- 2020 受賞",
            path: "https://hd.gree.net/jp/ja/6degrees/2021/08/01.html",
          },
          {
            title:
              "アプリ起動時間高速化 ~推測するな、計測せよ~ (GREE TechConference 2011)",
            path: "https://techcon.gree.jp/2021/session/Session-11",
          },
          {
            title:
              "Observability強化とPerformance Tuningを行うチームの立ち上げ",
            path: "https://note.com/reality_eng/n/n304df572550e",
          },
          {
            title: "Protocol Buffersの検証と本番アプリへの導入",
            path: "https://note.com/reality_eng/n/n2223d56db125",
          },
          {
            title: "アプリ内配信サーバのマルチリージョン化",
            path: "https://note.com/reality_eng/n/nc2f16c9fbad3",
          },
          {
            title: "コーディングエージェントの導入",
            path: "https://note.com/reality_eng/n/n4ad2f2f35127",
          },
        ],
        keywords: [
          "Go",
          "TypeScript",
          "Node.js",
          "Vue.js",
          "Google Cloud",
          "RDBMS",
          "NoSQL",
          "Observability",
          "CI/CD",
          "Container Orchestration",
          "BigQuery",
          "Data Engineering",
          "Protocol Buffers",
        ],
      },
      vr: {
        examples: [
          {
            title: "電気学会平成30年電子・情報・システム部門 技術委員会奨励賞",
            path: "https://saga-lab.org/concrete/index.php/news/2019-03-04",
          },
          {
            title: "IVRC2019総合優勝",
            path: "https://ivrc.net/2019/release2/",
          },
        ],
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
