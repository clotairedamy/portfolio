<template>
<div>
  <div >
  <div class="pt-12 sm:pt-16 lg:pt-20">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-left mt-20">
        <h2 class="text-3xl font-extrabold text-gray-600 sm:text-4xl lg:text-5xl mb-20">
          {{ headline }}<span class="text-gray-300">{{ headlineTwo }}</span>
        </h2>
        <p class="mt-4 text-xl text-gray-200 text-left">
         I place great importance on the things that influences human emotions and actions, rewarding the visitors visually and making brands stand out.
        </p>
      </div>
    </div>
  </div>
 
</div>
 
    <div class="relative mt-20">
      <div class="absolute inset-0 flex flex-col" aria-hidden="true">
        <div class="flex-1"></div>
      </div>
      <div class="relative max-w-6xl  mx-auto  px-2 sm:px-2 lg:px-2">
        <div
          class="bg-transparent rounded-lg  overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4 mt-auto"
        >
          <div
            class="mt-auto pb-2 px-6 font-bold sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20"
          >
            <div class="lg:self-center">
              <h4 class="text-lg   sm:text-4xl">
                <span class="block special text-gray-400">{{ quote }}</span>
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
