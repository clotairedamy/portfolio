<template>
  <div class="relative px-8 mt-64">
    <div class=" flex items-left  mb-20">
      <p
        class="flex pr-8 bg-transparent text-xl tracking-widest font-semibold text-green-500 "
      >
        {{ quote }}
      </p>
      <p
        class="flex-shrink-0 pr-6 bg-transparent text-sm tracking-wider font-semibold  text-yellow-500 "
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
