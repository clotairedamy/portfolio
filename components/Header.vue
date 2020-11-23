<template>
  <div class="mt-10 mx-auto max-w-screen-6xl px-24 sm:px-6 md:mt-16 lg:mt-20">
        <div class="text-center">
          <h2 class="text-4xl home tracking-tight leading-10 font-extrabold text-pink-700 sm:text-5xl sm:leading-none md:text-6xl">
            {{headline}}
            <br>
            <span class="text-yellow-600">{{headlineTwo}}</span>
          </h2>
          <p class="mt-3 max-w-md mx-auto text-bold text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
           {{quote}}
          </p>
        </div>
      </div>
</template>

<script>
export default {
  
  props: {
    headline: { type: String, required: true },
    headlineTwo: { type: String, required: true },
    quote: { type: String, default: true }
  }
}
</script>

<style>
.home-enter-active, .home-leave-active { transition: slide-in .5s; }
  .home-enter, .home-leave-active { opacity: 0; }
</style>