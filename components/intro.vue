<template>
  <div class="animation1" ref="animone"></div>
</template>
<script>
import lottie from "lottie-web/build/player/lottie";
let lottieInstance = null;
export default {
  mounted() {
    lottieInstance = lottie.loadAnimation({
      container: this.$refs.animone,
      renderer: "svg",
      loop: false,
      autoplay: false,
      path: "intro.json",
    });
  },
};
</script>
<style scoped>
.animation1 {
  background-color: #1d1d23;
  min-height: 100vh;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>