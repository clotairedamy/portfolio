<template>
  <div>
    <MultipartAnimationPlayer
      animationFile="data.json"
      :segments="segments"
      ref="map"
    />
    <slot />
  </div>
</template>

<script>
export default {
  data() {
    return {
      relativePositionCallbacks: [],
      segments: [
        {
          startFrame: 0,
          endFrame: 30,
          autoAdvanceSegmentIndex: 1,
          autoplay: true,
          registerController: callback => {}
        },
        {
          startFrame: 30 + 1,
          endFrame: 8 * 30,
          autoplay: false,

          registerController: callback => {
            this.relativePositionCallbacks.push(callback);
          }
        },
        {
          startFrame: 8 * 30 + 1,
          endFrame: 10 * 30,
          autoplay: true,
          autoAdvanceSegmentIndex: 3,
          registerController: callback => {}
        },
        {
          startFrame: 10 * 30 + 1,
          endFrame: 14 * 30,
          autoplay: false,
          registerController: callback => {
            this.relativePositionCallbacks.push(callback);
          }
        },
        {
          startFrame: 14 * 30,
          endFrame: 20 * 30 - 1,
          autoplay: false,
          registerController: callback => {
            this.relativePositionCallbacks.push(callback);
          }
        }
      ]
    };
  },
  methods: {
    changeSegment(n) {
      this.$refs.map.goToSegment(n);
    },
    relativePositionChanged(newVal) {
      for (const relativePositionCallback of this.relativePositionCallbacks) {
        relativePositionCallback(newVal / 100);
      }
    },
    redrawScroll() {
      const rawPercent = this.getScrollPercentage();
      let percent;
      if (rawPercent <= this.minScrollPercentage) {
        percent = 0;
      } else if (rawPercent >= this.maxScrollPercentage) {
        percent = 1;
      } else {
        percent =
          (rawPercent - this.minScrollPercentage) / this.maxScrollPercentage;
      }

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
      
    }
  },
  mounted() {
    window.addEventListener("scroll", () => {
        this.redrawScroll();
    });
  }
};
</script>

<style></style>
