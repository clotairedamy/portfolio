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
        autoAdvanceSegmentIndex: number
    }
    */ 
    data() {
        return {
            lottieInstance: null,
            currentSegment: 0,
            cachedOperations: []
        }
    },
    props: {
        animationFile: { type: String, required: true },
        fps: {type: Number, default: 30},
        segments: {required: true},
        timeSpeedRatio : {type: Number, default: 0.5}, // 0=constant time, 1=constant speed
        maxTime: {type: Number, default: 5}, //seconds
        maxSpeed: {type:Number, default: 5} //default speed multiplier
    },
    methods: {
        lottieLoaded(lottieInstance) {
            this.lottieInstance = lottieInstance;
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

        }
    }
}
</script>