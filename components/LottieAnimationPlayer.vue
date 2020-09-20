<template>
    <div class="lottie-animation-player" ref="player"><slot /></div>
</template>
<script>
import lottie from "lottie-web/build/player/lottie";
let lottieInstance = null;
export default {
    props: {
        animationFile: {type:String, required:true},
        loopAnimation: {type:Boolean, default:false},
        autoplay: {type:Boolean, default:true}
    },
    mounted() {
        lottieInstance = lottie.loadAnimation({
            container: this.$refs.player,
            renderer: 'svg',
            loop: this.loopAnimation,
            autoplay: this.autoplay,
            path: this.animationFile
        });
    }
}
export { lottieInstance }
</script>
<style scoped>

</style>