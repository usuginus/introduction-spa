<template>
  <div class="container">
    <h1>Portfolio</h1>
    <article>
      <section>
        <h2>VR消防体験 -炎舞-</h2>
        <h3>Team CyberSpaceLab</h3>
        <p>IVRC2019の総合優勝作品</p>
        <p>
          消防隊員の視点から消火活動の体験が可能であるVRアトラクション。
          体験者は、火災現場を再現した映像を提示され、ホース型コントローラを操作することで消火活動を行う。
          システムは映像提示装置と大風力を知覚させる風覚提示装置、水噴流反力を提示する力覚提示装置から構成される。
          風覚は温冷覚、聴覚、皮膚感覚、深部感覚を刺激することで知覚させ、水噴流反力は牽引力及びジャイロモーメントを用いて再現する．
        </p>
        <img src="../assets/img/portfolio/ivrc2019.jpeg" width="256" />
        <p>受賞・関連リンク</p>
        <ul>
          <li>ドスパラ賞</li>
          <li>ソリッドレイ研究所賞</li>
          <li>総合優勝</li>
          <li>一般社団法人茗渓会賞</li>
        </ul>
        <ul class="examples">
          <li v-for="example in ivrc2019.examples" :key="example.title">
            <a v-bind:href="example.path" target="_blank">
              <span>{{ example.title }}</span>
            </a>
          </li>
        </ul>
        <ul class="keywords">
          <li v-for="keyword in ivrc2019.keywords" :key="keyword">
            {{ keyword }}
          </li>
        </ul>
      </section>
      <section>
        <h2>Multitouch Haptic Interface with Movable Touch Screen</h2>
        <h3>Research on Haptic Interface</h3>
        <p>大学院の研究テーマ</p>
        <p>
          タブレットディスプレイを動作させ、指先にせん断力を与えることでバーチャル物体の形状や重さをユーザに知覚させるハプティックディスプレイです。
        </p>
        <img src="../assets/img/portfolio/research.jpeg" width="256" />
        <p>受賞・関連リンク</p>
        <ul>
          <li>一般社団法人茗渓会賞</li>
          <li>電気学会技術委員会奨励賞</li>
        </ul>
        <ul class="examples">
          <li v-for="example in research.examples" :key="example.title">
            <a v-bind:href="example.path" target="_blank">
              <span>{{ example.title }}</span>
            </a>
          </li>
        </ul>
        <ul class="keywords">
          <li v-for="keyword in research.keywords" :key="keyword">
            {{ keyword }}
          </li>
        </ul>
      </section>
      <section>
        <h2>天獄渡り</h2>
        <h3>Team 暗黒メガコーポ 極</h3>
        <p>IVRC2018の決勝大会進出作品</p>
        <p>
          セグウェイに乗って高所に架けられた橋を渡るスリリングな体験ができるVRアトラクション。
          人間は強い恐怖を感じたとき膝が痙攣する。
          この現象を逆手に取り、外部から膝の振動を与え、疑似的に膝を痙攣させることでユーザに恐怖感を錯覚させる。
          膝を振動させる膝振動デバイスのみではなく、HMD、モーションプラットフォームを用いることで、ユーザに恐怖感を与える。
        </p>
        <img src="../assets/img/portfolio/ivrc2018.jpeg" width="256" />
        <p>受賞・関連リンク</p>
        <ul>
          <li>チームラボ賞</li>
        </ul>
        <ul class="examples">
          <li v-for="example in ivrc2018.examples" :key="example.title">
            <a v-bind:href="example.path" target="_blank">
              <span>{{ example.title }}</span>
            </a>
          </li>
        </ul>
        <ul class="keywords">
          <li v-for="keyword in ivrc2018.keywords" :key="keyword">
            {{ keyword }}
          </li>
        </ul>
      </section>
      <section>
        <h2>なんでもルービックキューブ</h2>
        <h3>Team ファルシオン幻樂団.tkb</h3>
        <p>IVRC2017の決勝大会進出作品</p>
        <p>
          ルービックキューブ外付型力覚提示デバイスと4面ホログラフィックディスプレイを用いた力覚提示装置。
          物体識別装置の中に入れた物体をルービックキューブ外付型力覚提示デバイスによってねじる様子を表示し，その力覚をユーザに提示する.
        </p>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/344g8o2PicA"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <p>関連リンク</p>
        <ul class="examples">
          <li v-for="example in ivrc2017.examples" :key="example.title">
            <a v-bind:href="example.path" target="_blank">
              <span>{{ example.title }}</span>
            </a>
          </li>
        </ul>
        <ul class="keywords">
          <li v-for="keyword in ivrc2017.keywords" :key="keyword">
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
      ivrc2019: {
        examples: [
          {
            title: "VR消防体験 -炎舞-(2019)",
            path: "http://ivrc.net/archive/VR%E6%B6%88%E9%98%B2%E4%BD%93%E9%A8%93%20-%E7%82%8E%E8%88%9E-2019/",
          },
          {
            title: "VR学会予稿",
            path: "http://conference.vrsj.org/ac2019/program/common/doc/pdf/1A-08.pdf",
          },
        ],
        keywords: ["Virtual Reality", "Mechatronics", "Haptics", "Unity"],
      },
      research: {
        examples: [
          {
            title: "Multitouch Haptic Interface with Movable Touch Screen",
            path: "https://www.vrlab.esys.tsukuba.ac.jp/projects/haptics/multitouch-haptic-interface-with-movable-touch-screen",
          },
          {
            title: "バーチャルな物体に触る -VRの研究から力覚提示装置まで-",
            path: "https://laborify.net/2019/12/07/ito-vr-hapticdevices/",
          },
        ],
        keywords: ["Virtual Reality", "Mechatronics", "Haptics", "Unity"],
      },
      ivrc2018: {
        examples: [
          {
            title: "天獄渡り(2018)",
            path: "http://ivrc.net/archive/%E5%A4%A9%E7%8D%84%E6%B8%A1%E3%82%8A2018/",
          },
        ],
        keywords: ["Virtual Reality", "Mechatronics", "Haptics", "Unity"],
      },
      ivrc2017: {
        examples: [
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
