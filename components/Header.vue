<template>
  <div
    class="mx-auto max-w-screen-6xl px-6 sm:px-6 md:mt-20 mb-10 lg:mt-20 sm:mt-10 z-20 opacity-30 "
  >
    <div class="bg-transparent">
      <div
        class="max-w-6xl mx-auto py-16 px-6 sm:px-8 lg:py-24 lg:px-8 rounded shadow-lg mt-20 mb-20"
      >
        <div class="max-w-6xl mx-auto text-left">
          <h2 class="text-3xl font-extrabold text-gray-600 mb-20">
            {{ headline }}<span class="text-gray-300">{{ headlineTwo }}</span>
          </h2>
          <p class="mt-4 text-lg text-gray-500">{{ content }}</p>
        </div>
        <dl
          class="mt-12 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-3 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-3 lg:gap-x-4"
        >
          <div class="flex">
           
            <div class="ml-3 ">
              <dt class="text-lg leading-6 font-medium text-gray-600">
                {{ serviceOneTitle }}
              </dt>
              <dd class="mt-2 text-base text-gray-500">
                {{ serviceOneDescription }}
              </dd>
            </div>
          </div>

          <div class="flex">
         
            <div class="ml-3">
              <dt class="text-lg leading-6 font-medium text-gray-600">
                {{ serviceTwoTitle }}
              </dt>
              <dd class="mt-2 text-base text-gray-500">
                {{ serviceTwoDescription }}
              </dd>
            </div>
          </div>

          <div class="flex">
         
            <div class="ml-3">
              <dt class="text-lg leading-6 font-medium text-gray-600">
                {{ serviceThreeTitle }}
              </dt>
              <dd class="mt-2 text-base text-gray-500">
                {{ serviceThreeDescription }}
              </dd>
            </div>
          </div>
        </dl>
      </div>
    </div>
    <div class="relative">
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
              <h4 class="text-sm special  sm:text-2xl">
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
    name: { type: String, default: true },
    serviceOneTitle: { type: String, default: "Title" },
    serviceOneDescription: { type: String, default: "Description" },
    serviceTwoTitle: { type: String, default: "Title" },
    serviceTwoDescription: { type: String, default: "Description" },
    serviceThreeTitle: { type: String, default: "Title" },
    serviceThreeDescription: { type: String, default: "Description" }
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
