<template>
  <div class="relative mx-auto mt-20">
    <div class=" flex items-right  mb-20">
      <h4
        class="flex pr-10 bg-transparent text-sm tracking-widest font-semibold  text-clotaire"
      >
        {{ quote }}
      </h4>
      <h5
        class="flex-shrink-0 pr-12 bg-transparent text-sm tracking-wider font-semibold  text-yellow-500 "
      >
        {{ author }}
      </h5>
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

<style>.text-clotaire {
  color:#eae0c4 ;
}</style>
