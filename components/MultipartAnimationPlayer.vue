<template>
  <LottieAnimationPlayer
    @lottie-loaded="lottieLoaded"
    :animationFile="animationFile"
    :loopAnimation="false"
    :autoplay="false"
  >
  </LottieAnimationPlayer>
</template>

<script>
export default {
  /*
    segment structure:
    {
        startFrame: number,
        endFrame: number,
        autoAdvanceSegmentIndex: number|undefined,
        autoplay: boolean,

        // function is called by the player (this component)
        // argument is supplied by the player (this component) and should be called to set the relative position (0-100%) of the current segment
        registerController((positionInSegment: number) => {...}) 
    }
    */
  data() {
    return {
      lottieInstance: null,
      currentSegment: 0,
      cachedOperations: [],
    };
  },
  props: {
    animationFile: { type: String, required: true },
    fps: { type: Number, default: 30 },
    segments: { required: true },
    timeSpeedRatio: { type: Number, default: 0.5 }, // 0=constant time, 1=constant speed
    maxTime: { type: Number, default: 5 }, //seconds
    maxSpeed: { type: Number, default: 5 }, //default speed multiplier
  },
  methods: {
    lottieLoaded(lottieInstance) {
      this.lottieInstance = lottieInstance;
      let segmentIndex = 0;
      for (const segment of this.segments) {
        if (segment.registerController) {
          segment.registerController((positionInSegment) => {
            if (this.currentSegment !== segmentIndex) {
              return;
            } else {
              this._setPositionInSegment(positionInSegment);
            }
          });
        }
        segmentIndex += 1;
      }
      for (const cachedOperation of this.cachedOperations) {
        cachedOperation();
      }
    },
    goToSegment(segmentNumber) {
      if (this.lottieInstance === null) {
        this.cachedOperations.push(() => {
          this.goToSegment(segmentNumber);
        });
        return;
      }
    },
    _setPositionInSegment(positionInSegment) {
      if (this.lottieInstance === null) {
        this.cachedOperations.push(() => {
          this._setPositionInSegment(positionInSegment);
        });
        return;
      }
    },
  },
};
</script>