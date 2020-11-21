<template>
  <div>
    <MultipartAnimationPlayer animationFile="data.json" :segments="segments" />
  </div>
</template>

<script>

export default {
  data() {
    return {
      segments: [
        {
          startFrame: 0,
          endFrame: 30,
          autoAdvanceSegmentIndex: 1,
          autoplay: true,
          registerController: callback => {}
        },
        {
          startFrame: 30+1,
          endFrame: 8 * 30,
          autoplay: false,
          registerController: callback => {}
        },
        {
          startFrame: 8 * 30+1,
          endFrame: 10 * 30,
          autoplay: true,
          autoAdvanceSegmentIndex: 3,
          registerController: callback => {}
        },
        {
          startFrame: 10 * 30+1,
          endFrame: 14 * 30,
          autoplay: false,
          registerController: callback => {}
        },
        {
          startFrame: 14 * 30,
          endFrame: 20 * 30-1,
          autoplay: false,
          registerController: callback => {}
        }
      ]
    };
  }
};
</script>
