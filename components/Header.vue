<template>
  <div
    class="mx-auto max-w-screen-6xl px-2 sm:px-6 md:mt-16 mt-10 lg:mt-20 z-20 opacity-30"
  >
    <div class="relative align-middle">
      <div class="absolute inset-0 flex flex-col" aria-hidden="true">
        <div class="flex-1 bg-gray-50"></div>
        <div class="flex-1"></div>
      </div>
      <div
        class="relative max-w-6xl mt-auto mx-auto h-auto px-2 sm:px-2 lg:px-2"
      >
        <div
          class="bg-gradient-to-r from-gray-900 to-transparent rounded-lg shadow overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4"
        >
          <div
            class="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20"
          >
            <div class="lg:self-center">
              <h2 class="text-3xl font-extrabold text-pink-600 sm:text-4xl">
                <span class="block">{{ headline }}</span>
                <span class="block text-yellow-500">{{ headlineTwo }}</span>
              </h2>
              <p class="mt-4 text-lg leading-6 text-gray-500">{{ content }}</p>
            </div>
          </div>
          <div
            class="mt-auto pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20"
          >
            <div class="lg:self-center">
              <h4 class="text-3xl font-bold text-pink-600 sm:text-4xl">
                <span class="block text-gray-600">{{ quote }}</span>
              </h4>
              <p class="mt-4 text-lg leading-6 text-blue-500">{{ name }}</p>
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
@import url("https://use.typekit.net/khk4wbb.css");
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
h4 {
  font-family: adobe-handwriting-ernie, sans-serif;
  font-style: bold;
  font-weight: 400;
  line-height: 1;
}
</style>
