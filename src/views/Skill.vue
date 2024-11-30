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
            title: "グリー新卒MVP紹介記事",
            path: "https://corp.gree.net/jp/ja/6degrees/2021/08/01.html",
          },
          {
            title:
              "アプリ起動時間高速化 ~推測するな、計測せよ~ (GREE TechConference 2011)",
            path: "https://techcon.gree.jp/2021/session/Session-11",
          },
          {
            title: "機械学習 in REALITY - REALITY Advent Calendar #09",
            path: "https://note.com/reality_eng/n/n35a8074466a7",
          },
          {
            title: "アプリ起動時間を最大60%カット！？",
            path: "https://note.com/reality_eng/n/nf5636c210682",
          },
          {
            title: "REALITYの配信音量分析 -快適な配信環境を作っていく-",
            path: "https://note.com/reality_eng/n/n457e4e9a03f7",
          },
        ],
        keywords: [
          "Google Cloud Platform",
          "Golang",
          "Node.js",
          "TypeScript",
          "Vue.js",
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
