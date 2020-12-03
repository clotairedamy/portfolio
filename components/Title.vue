<template>
 <!-- This example requires Tailwind CSS v2.0+ -->
<div class="py-16 bg-transparent  ">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="lg:text-left">
      <h2 class="text-base text-gray-600 font-semibold tracking-wide uppercase">{{title}}</h2>
      <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-500 sm:text-4xl">
        {{subtitle}}
      </p>
      <p class="mt-20 max-w-2xl text-xl text-gray-500 text-left">
        {{content}}
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
.h1,h2 {font-family: "Track";}

</style>
