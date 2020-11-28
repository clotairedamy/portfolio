<template>
  <div
    class="mx-auto max-w-screen-6xl px-6 sm:px-6 md:mt-16 mt-10 lg:mt-20 sm:mt-10 z-20 opacity-30 overscroll-auto"
  >
    <div class="relative h-auto">
      <div class="absolute inset-0 flex flex-col" aria-hidden="true">
        <div class="flex-1 "></div>
        <div class="flex-1"></div>
      </div>
      <div
        class="relative max-w-6xl  mx-auto h-auto px-2 sm:px-2 lg:px-2"
      >
        <div
          class="md:bg-gradient-to-r from-gray-900 to-transparent rounded-lg shadow-md overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4 mt-auto"
        >
          <div
            class=" pb-12 px-6 sm:pt-10 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20"
          >
            <div class="lg:self-center">
              <h2 class="text-9xl font-extrabold text-gray-300 sm:text-4xl mb-20">
                <span >{{ headline }}</span>
                <span class=" text-gray-600">{{ headlineTwo }}</span>
              </h2>
              <p class="mt-4 text-lg leading-6 text-gray-200">{{ content }}</p>
            </div>
          </div>
          <div
            class="mt-auto pb-12 px-6 font-bold sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20"
          >
            <div class="lg:self-center">
              <h4 class="text-2xl special text-pink-600 sm:text-4xl">
                <span class="block text-gray-400">{{ quote }}</span>
              </h4>
              <p class="mt-4 text-lg leading-6 text-gray-600">{{ name }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    headline: { type: String, required: true },
    headlineTwo: { type: String, required: true },
    content: { type: String, required: true },
    quote: { type: String, default: true },
    name: { type: String, default: true }
  }
};
</script>

<style>

.home-enter-active,
.home-leave-active {
  transition: slide-in 0.5s;
}
.home-enter,
.home-leave-active {
  opacity: 0;
}
h2,
h1 {
  font-family: "Track";
}
.special {
  font-family: "Autography";
  
  line-height: 1;
}
</style>
