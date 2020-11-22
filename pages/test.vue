<template>
  <div>
    <MultipartAnimationPlayer
      animationFile="data.json"
      :segments="segments"
      ref="map"
    />
    <div>
      <button @click="changeSegment(0)" class="bg-gray-300">S1</button>
      <button @click="changeSegment(1)" class="bg-gray-300">S2</button>
      <button @click="changeSegment(2)" class="bg-gray-300">S3</button>
      <button @click="changeSegment(3)" class="bg-gray-300">S4</button>
      <button @click="changeSegment(4)" class="bg-gray-300">S5</button>
      <b-slider :min="0" :max="100" @change="relativePositionChanged" />
    </div>
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
        relativePositionCallback(newVal/100);
      }
    }
  }
};
</script>
