<template>
   <div class="relative mx-auto">
        <div class=" flex items-center  mb-20">
          <h4
            class="flex-shrink-0 pr-20 bg-transparent text-sm tracking-wider font-semibold  text-gray-600"
          >
            {{ quote }}
          </h4>
         <h5 class="flex-shrink-0 pr-12 bg-transparent text-sm tracking-wider font-semibold  text-yellow-600 ">{{ name }}</h5> 
          <div class="flex-1 border-t-2 border-gray-600"></div>
        </div>
      </div>
</template>

<script>
export default {
 props: {
    quote: {
      type: String,
      default: "In the midst of chaos, there is also opportunity."
    },
    name: { type: String, default: "Sun Tzu" }
  }
};

</script>

<style>

</style>