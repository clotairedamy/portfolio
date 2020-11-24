<template>
  <div >
    <Navigation />
    <MultipartAnimationPlayer
      id="map"
      animationFile="clotaire.json"
      :segments="segments"
      :timeSpeedRatio="1"
      :maxTime="3"
      :maxSpeed="5"
      ref="map"
    />
    <slot />
    <SplitSection content="A web developer who loves what he does, adding value to companies of any
        size. From competitive research to interactive prototypes,building
        engaging and simple to-use user interfaces. Grew up in Petrosani,
        a small mining town at the heart of the Carpathian Mountains in Romania.
        Currently living in Colorado Springs, Colorado. Love the outdoors,
        Romanian food, motion &amp; web design, data analysis, and I am a big
        supporter of Liverpool FC in the English Premier League.
        I have a beautiful wife, and two daughters, Mia and Nova." />
      
  </div>
</template>

<script>
export default {
  data() {
    return {
      relativePositionCallbacks: [],
      pageSegmentMap: {
        index: 0,
        development: 2,
        marketing: 4,
      },
      segments: [
        {
          startFrame: 0,
          endFrame: 30,
          autoAdvanceSegmentIndex: 1,
          autoplay: true,
          registerController: (callback) => {},
        },
        {
          startFrame: 30 + 1,
          endFrame: 8 * 30,
          autoplay: false,

          registerController: (callback) => {
            this.relativePositionCallbacks.push(callback);
          },
        },
        {
          startFrame: 8 * 30 + 1,
          endFrame: 10 * 30,
          autoplay: true,
          autoAdvanceSegmentIndex: 3,
          registerController: (callback) => {},
        },
        {
          startFrame: 10 * 30 + 1,
          endFrame: 14 * 30,
          autoplay: false,
          registerController: (callback) => {
            this.relativePositionCallbacks.push(callback);
          },
        },
        {
          startFrame: 14 * 30,
          endFrame: 20 * 30 - 1,
          autoplay: false,
          registerController: (callback) => {
            this.relativePositionCallbacks.push(callback);
          },
        },
      ],
    };
  },
  methods: {
    changeSegment(n) {
      this.$refs.map.goToSegment(n);
    },
    relativePositionChanged(newVal) {
      for (const relativePositionCallback of this.relativePositionCallbacks) {
        relativePositionCallback(newVal);
      }
    },
    redrawScroll() {
      const rawPercent = this.getScrollPercentage();
      let percent = rawPercent;

      this.relativePositionChanged(percent);
    },
    getScrollPercentage() {
      const h = document.documentElement,
        b = document.body,
        st = "scrollTop",
        sh = "scrollHeight";
      let p = (h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight);
      if (p < 0) {
        p = 0;
      }
      if (p > 1) {
        p = 1;
      }
      return p;
    },
  },
  mounted() {
    window.addEventListener("scroll", () => {
      this.redrawScroll();
    });
  },
  watch: {
    $route(to, from) {
      if (this.pageSegmentMap[to.name] !== undefined) {
        const targetSegmentID = this.pageSegmentMap[to.name];
        this.$refs.map.goToSegment(targetSegmentID);
      }
    },
  },
};
</script>

<style>
#map {
  position: fixed;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  transform: translate(-50%, -50%);
  z-index: -10;
  background-color: #111827;

}
</style>
