<template>
   <div class="relative mx-auto mt-20">
        <div class=" flex items-center  mb-20">
          <h4
            class="flex-shrink-0 pr-10 bg-transparent text-sm tracking-wider font-semibold  text-pink-600"
          >
            {{ quote }}
          </h4>
         <h5 class="flex-shrink-0 pr-12 bg-transparent text-sm tracking-wider font-semibold  text-yellow-600 ">{{ name }}</h5> 
          <div class="flex-1 border-t-1 border-gray-900"></div>
        </div>
      </div>
</template>

<script>
export default {
 props: {
    quote: {
      type: String,
      quote: ""
    },
    author: { type: String, default: "Sun Tzu" }
  }
};

</script>

<style>

</style>