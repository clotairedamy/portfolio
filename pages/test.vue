<template>
  <div>
    <MultipartAnimationPlayer animationFile="data.json" :fps="fps" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      fps: 30,
      segments: [
        {
          startFrame: 0,
          endFrame: 30,
          autoAdvanceSegmentIndex: 1,
          autoplay: true,
          registerController: callback => {}
        },
        {
          startFrame: 30,
          endFrame: 8 * 30,
          autoplay: false,
          registerController: callback => {}
        },
        {
          startFrame: 8 * 30,
          endFrame: 10 * 30,
          autoplay: true,
          autoAdvanceSegmentIndex: 3,
          registerController: callback => {}
        },
        {
          startFrame: 10 * 30,
          endFrame: 14 * 30,
          autoplay: false,
          registerController: callback => {}
        },
        {
          startFrame: 14 * 30,
          endFrame: 20 * 30,
          autoplay: false,
          registerController: callback => {}
        }
      ]
    };
  }
};
</script>
