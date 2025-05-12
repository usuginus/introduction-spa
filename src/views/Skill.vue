<template>
  <div class="container">
    <h1>Skill</h1>
    <article>
      <section>
        <h2>Web App</h2>
        <h3>for Software Development</h3>
        <p>受賞・資格</p>
        <ul>
          <li v-for="award in web.awards" :key="award">{{ award }}</li>
        </ul>
        <p>関連リンク</p>
        <ul class="examples">
          <li v-for="example in web.examples" :key="example.title">
            <a v-bind:href="example.path" target="_blank">
              <span>{{ example.title }}</span>
            </a>
          </li>
        </ul>
        <p>使用技術</p>
        <div
          v-for="category in web.technologies"
          :key="category.category"
          class="technology-category"
        >
          <span>{{ category.category }}</span>
          <ul class="technology">
            <li v-for="item in category.items" :key="item.name">
              <font-awesome-icon
                v-if="item.icon"
                :icon="item.icon"
                class="tech-icon"
              />
              <span>{{ item.name }}</span>
            </li>
          </ul>
        </div>
      </section>
      <section>
        <h2>VR App</h2>
        <h3>for Research & Development</h3>
        <p>受賞・資格</p>
        <ul>
          <li v-for="award in vr.awards" :key="award">{{ award }}</li>
        </ul>
        <p>関連リンク</p>
        <ul class="examples">
          <li v-for="example in vr.examples" :key="example.title">
            <a v-bind:href="example.path" target="_blank">
              <span>{{ example.title }}</span>
            </a>
          </li>
        </ul>
        <p>使用技術</p>
        <div
          v-for="category in vr.technologies"
          :key="category.category"
          class="technology-category"
        >
          <span>{{ category.category }}</span>
          <ul class="technology">
            <li v-for="item in category.items" :key="item.name">
              <font-awesome-icon
                v-if="item.icon"
                :icon="item.icon"
                class="tech-icon"
              />
              <span>{{ item.name }}</span>
            </li>
          </ul>
        </div>
      </section>
    </article>
  </div>
</template>

<script>
export default {
  data() {
    return {
      web: {
        awards: [
          "GREE -New Grad of the year- 2020 受賞",
          "Google Cloud Certified - Professional Cloud Developer取得",
        ],
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
        technologies: [
          {
            category: "Programming Languages / Runtimes",
            items: [
              { name: "Go", icon: ["fab", "golang"] },
              { name: "TypeScript", icon: ["fas", "code"] },
              { name: "JavaScript", icon: ["fab", "js-square"] },
              { name: "Node.js", icon: ["fab", "node-js"] },
              { name: "Deno", icon: ["fas", "server"] },
              { name: "Bun", icon: ["fas", "server"] },
            ],
          },
          {
            category: "Frontend Frameworks",
            items: [
              { name: "Vue.js", icon: ["fab", "vuejs"] },
              { name: "React", icon: ["fab", "react"] },
            ],
          },
          {
            category: "Cloud Platforms (Google Cloud)",
            items: [
              { name: "GKE", icon: ["fas", "dharmachakra"] },
              { name: "BigQuery", icon: ["fas", "database"] },
              { name: "Cloud Storage", icon: ["fas", "cloud"] },
              { name: "CloudSQL", icon: ["fas", "database"] },
              { name: "Cloud Spanner", icon: ["fas", "database"] },
              { name: "Memorystore", icon: ["fas", "memory"] },
              { name: "Pub/Sub", icon: ["fas", "project-diagram"] },
              { name: "Cloud Scheduler", icon: ["fas", "clock"] },
              { name: "Cloud Tasks", icon: ["fas", "tasks"] },
            ],
          },
          {
            category: "Containers / Orchestration",
            items: [
              { name: "Docker", icon: ["fab", "docker"] },
              { name: "Kubernetes", icon: ["fas", "dharmachakra"] },
            ],
          },
          {
            category: "Databases",
            items: [
              { name: "MySQL", icon: ["fas", "database"] },
              { name: "Cloud Spanner", icon: ["fas", "database"] },
              { name: "Redis", icon: ["fas", "database"] },
              { name: "Memcached", icon: ["fas", "memory"] },
              { name: "Valkey", icon: ["fas", "database"] },
              { name: "Firestore", icon: ["fas", "fire"] },
              { name: "Firebase Realtime Database", icon: ["fas", "database"] },
            ],
          },
          {
            category: "Observability Engineering",
            items: [
              { name: "Cloud Logging", icon: ["fas", "file-alt"] },
              { name: "Cloud Monitoring", icon: ["fas", "chart-line"] },
              { name: "Cloud Trace", icon: ["fas", "sitemap"] },
              { name: "Grafana", icon: ["fas", "chart-bar"] },
              { name: "Prometheus", icon: ["fas", "fire-alt"] },
            ],
          },
          {
            category: "Data Engineering",
            items: [
              { name: "BigQuery", icon: ["fas", "database"] },
              { name: "SQL", icon: ["fas", "database"] },
              { name: "Dataform", icon: ["fas", "code-branch"] },
              { name: "Looker Studio", icon: ["fas", "chart-pie"] },
              { name: "Datastream", icon: ["fas", "stream"] },
            ],
          },
          {
            category: "Development Tools",
            items: [
              { name: "Protocol Buffers", icon: ["fas", "cubes"] },
              { name: "GitHub Actions", icon: ["fab", "github"] },
              { name: "Jenkins", icon: ["fab", "jenkins"] },
              { name: "Terraform", icon: ["fas", "layer-group"] },
              { name: "Google App Script", icon: ["fab", "google-drive"] },
            ],
          },
        ],
      },
      vr: {
        awards: [
          "一般社団法人茗渓会賞",
          "電気学会技術委員会奨励賞",
          "バーチャルリアリティ技術者（アプリケーション）取得",
          "バーチャルリアリティ技術者（セオリー）取得",
        ],
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
        technologies: [
          {
            category: "Programming Languages",
            items: [
              { name: "C++", icon: ["fas", "code"] },
              { name: "C#(Unity)", icon: ["fab", "unity"] },
              { name: "R", icon: ["fab", "r-project"] },
              { name: "Fortran", icon: ["fas", "code"] },
            ],
          },
          {
            category: "Development Tools",
            items: [
              { name: "SOLIDWORKS", icon: ["fas", "cube"] },
              { name: "ROS", icon: ["fas", "robot"] },
              { name: "Google App Script", icon: ["fab", "google-drive"] },
            ],
          },
          {
            category: "Hardware / Robotics",
            items: [
              { name: "M5Stack", icon: ["fas", "microchip"] },
              { name: "Arduino", icon: ["fas", "microchip"] },
              { name: "Raspberry Pi", icon: ["fab", "raspberry-pi"] },
              { name: "Circuit Design", icon: ["fas", "project-diagram"] },
              { name: "Mechatronics", icon: ["fas", "robot"] },
              { name: "Actuators", icon: ["fas", "cogs"] },
              { name: "Sensors", icon: ["fas", "satellite-dish"] },
              { name: "Serial Communication", icon: ["fas", "plug"] },
            ],
          },
          {
            category: "Simulation / Control",
            items: [
              {
                name: "Kinematics / Inverse Kinematics",
                icon: ["fas", "project-diagram"],
              },
              { name: "Elastic Body Simulation", icon: ["fas", "cubes"] },
            ],
          },
        ],
      },
    };
  },
};
</script>
<style scoped lang="scss">
@import "../assets/scss/common.scss";
</style>
