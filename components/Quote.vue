<template>
  <div class="relative mt-64">
    <div class=" flex items-left  mb-20">
      <p
        class="flex  bg-transparent text-xl tracking-widest font-semibold text-gray-400 "
      >
        {{ quote }}
      </p>
      <p
        class="flex-shrink-0 bg-transparent text-sm tracking-wider font-semibold  text-gray-500 "
      >
        {{ author }}
      </p>
      <div class="flex-1 border-t-4 border-transparent"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    quote: {
      type: String,
      quote: "In the midst of chaos, there is also opportunity."
    },
    author: { type: String, default: "" }
  }
};
</script>

<style>
</style>
