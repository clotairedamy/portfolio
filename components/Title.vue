<template>
  <div class="md:text-center mt-10 mb-10">
    <h2
      class="text-base  clotaire text-yellow-600 font-extrabold tracking-wide uppercase "
    >
      {{ title }}
    </h2>
    <h1
      class="rotate clotaire mt-2 mb-2  leading-4  md:font-extrabold  text-gray-200 "
    >
      {{ subtitle }}
    </h1>
   
    <div class="grid mt-20 flex-row">
      
      <p class="mt-2 max-w-2xl text-lg text-gray-300 lg:text-left md:text-left">
        {{ content }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: { type: String, default: "Clotaire Damy" },
    subtitle: { type: String, default: "Subtitle" },
    content: { type: String, default: "Content" }
  }
};
</script>

<style>
.clotaire {
  font-family: "Track";

  margin: 0;
  writing-mode: vertical-lr;

  line-height: 0.9;
}

.rotate {
  transform: rotate(180deg);
}
</style>
