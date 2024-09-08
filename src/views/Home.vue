<template>
  <div class="container">
    <div class="main">
      <div class="texts">
        <h1>
          {{ title }}
        </h1>
        <p style="white-space: pre-wrap; word-wrap: break-word">
          {{ description }}
        </p>
      </div>
      <img class="top-img" src="../assets/img/avatar_img.png" />
    </div>
  </div>
</template>

<script>
export default {
  name: "top",
  data() {
    return {
      title: "Introduction about Usuginu",
      description: `Application Engineer`,
    };
  },
};
</script>

<style scoped lang="scss">
h1 {
  font-weight: 900;
  font-size: 13.5vh;
  color: black;
  letter-spacing: 0.4vw;
  margin: 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
p {
  text-align: left;
  font-size: 0.8rem;
  letter-spacing: 1.5px;
  line-height: 1.5;
}
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
  .top-img {
    position: fixed;
    z-index: -1;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 0) scale(1);
    display: block;
    width: auto;
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
@media (max-width: 768px) {
  h1 {
    font-size: 10vw;
  }
  p {
    font-size: 5vw;
  }
  .texts {
    padding-top: 15vh;
  }
}
@media (max-width: 480px) {
  h1 {
    font-size: 12vw;
  }
  p {
    font-size: 6vw;
  }
}
</style>