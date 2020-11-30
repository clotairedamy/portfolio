<template>
  <div class="mt-10 sm:mt-20">
    <div
      class="bg-transparent py-2 px-4 sm:py-24 sm:px-6 lg:bg-none lg:flex lg:items-center lg:justify-end lg:px-0 lg:pl-2"
    >
      <div class="max-w-xl mx-auto w-full space-y-2 lg:mx-0">
        <ul
          class="bg-yellow-600 rounded sm:grid sm:grid-flow-col"
        >
          <li
            class="border-t border-gray-300 border-opacity-25 py-4 px-4 flex items-center text-base text-white"
            v-for="link in navigationLinks" :key="link.title"
          >
            <!-- Heroicon name: check 
              <svg class="h-6 w-6 text-cyan-200" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>-->
            <nuxt-link :to="link.address" class="ml-3 text-gray-700 text-center">{{link.title}}</nuxt-link>
          </li>
        </ul>
      </div>
    </div>
    <!--<div class="relative mx-auto">
      <div
        class="bg-transparent rounded-lg overflow-hidden lg:grid lg:grid-cols-2 lg:gap-2 mt-auto"
      >
        <div
          class="mt-auto px-16 font-bold sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20"
        >
          <div class="lg:self-left">
            <h4 class="text-lg sm:text-lg">
              <span class="block special text-pink-600">{{ quote }}</span>
            </h4>
            <p class="mt-4 text-lg leading-6 text-yellow-400">{{ name }}</p>
          </div>
        </div>
      </div>
    </div>-->
  </div>
</template>
<script>
export default {
  props: {
    navigationLinks: {default: () => [
      { title: "Sub-link 1", address: "/does/not/exist" },
      { title: "Sub-link 2", address: "/does/not/exist" },
    ]},
  },
};
</script>
<style scoped>
</style>