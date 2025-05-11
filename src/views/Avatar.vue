<!--
  deprecated: 2025-05-01
  このファイルは使用していません。
  introduction-webglリポジトリで作成したもので、webglでアバターを表示します。
-->
<template>
  <div class="container">
    <div class="main">
      <iframe
        class="unity-view"
        src="https://koichiginu.github.io/introduction-webgl/index.html"
        frameborder="0"
        scrolling="no"
      ></iframe>
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  width: 80vw;
  margin: 0 auto;
  .main {
    width: 100%;
    display: flex;
    justify-content: center;
  }
  .texts {
    position: relative;
    z-index: 1;
    padding-top: 32vh;
  }
  .unity-view {
    position: fixed;
    z-index: -1;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 0) scale(1);
    display: block;
    width: 100%;
    min-width: 1024px;
    height: 79vh;
    opacity: 0;
    animation: fadeIn 1s ease 0.3s 1 normal;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
  }
}
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
