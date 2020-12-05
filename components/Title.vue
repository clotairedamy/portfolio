<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <div class="flex justify-start mt-10">
    <div class="max-w-4xl mx-auto  sm:px-6 lg:px-8">
      <div class="title">
        <h1
          class="sm:text-xl text-gray-500 text-4xl leading-10 font-bold md:tracking-widest text-center"
        >
          {{ subtitle }}
        </h1>
        <h2
          class="text-5xl text-gray-500 text-center font-bold tracking-tighter"
        >
          {{ title }}
        </h2>
      </div>
      <div class="lg:text-left max-w-2xl">
        <p class="mt-20 text-sm leading-8  text-gray-300 sm:text-2xl">
          {{ content }}
        </p>
      </div>
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

  line-height: 1.5;
}

.rotate {
  transform: rotate(180deg);
}

.title {
  height: 15vh;
  font-family: "Track";
}
</style>
