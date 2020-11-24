<template>
  <div class="max-w-7xl mx-auto mt-4 py-16 px-4 sm:py-24 sm:px-6 lg:px-8 ">
    <div class="text-left">
      <p class="max-w-xl mx-auto mt-5 text-xl text-gray-500">
     {{content}}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    content: { type: String, required: true }
  
  }
};
</script>

<style></style>
