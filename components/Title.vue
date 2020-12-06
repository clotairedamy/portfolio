<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <div class="flex justify-start mt-20">
    <div class="max-w-7xl mx-auto  sm:px-6 lg:px-8">
      <div class="leading-8 text-center">
        <h1
          class="sm:text-lg text-yellow-600 text-xl  md:tracking-tighter text-center"
        >
          {{ subtitle }}
        </h1>
        <h2
          class="title text-clotaire font-bold tracking-wide"
        >
          {{ title }}
        </h2>
      </div>
      <div class="lg:text-left max-w-4xl mb-10">
        <p class="text-lg leading-8  text-gray-300 sm:text-2xl">
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
  height: 25vh;
  font-family: "Track";
}
.text-clotaire {
  color:#eae0c4 ;
  font-size: 45px;
}
</style>
