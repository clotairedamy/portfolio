<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <div class="flex justify-start mt-20 sm:mt-4">
    <div class="max-w-7xl mx-auto  sm:px-2 lg:px-4">
      <div class="leading-10 text-center">
        <h1
          class="sm:text-2xl text-yellow-600 text-lg  md:tracking-tighter text-center"
        >
          {{ subtitle }}<br /> <span class="title text-clotaire sm:text-4xl font-bold tracking-wide py-2">{{title}}</span>
        </h1>
       
      </div>
      <div class="lg:text-left max-w-4xl mb-20 mt-10">
        <slot/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: { type: String, default: "Clotaire Damy" },
    subtitle: { type: String, default: "Subtitle" },
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
