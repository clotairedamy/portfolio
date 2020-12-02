<template>
  <div class="mt-10 sm:mt-10 ">
    <div
      class=" py-2 px-4 sm:py-24 sm:px-6 lg:bg-none lg:flex lg:items-center lg:justify-end lg:px-0 lg:pl-2"
    >
      <div class="max-w-xl mx-auto w-full space-y-2 lg:mx-0">
        <ul class="bg-transparent bg-opacity-10  sm:grid sm:grid-flow-col">
          <div
            class="col-span-1 flex justify-center md:col-span-2 lg:col-span-1"
          >
            <img class="h-12" src="marketing-logo-01.svg" alt="Tuple" />
          </div>
          <li
            class="border-t border-gray-800  py-4 px-4 flex items-center text-base text-white"
            v-for="link in navigationLinks"
            :key="link.title"
          >
            <!-- Heroicon name: check 
              <svg class="h-6 w-6 text-cyan-200" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>-->
            <nuxt-link
              :to="link.address"
              class="ml-3 text-gray-50 text-center"
              >{{ link.title }}</nuxt-link
            >
          </li>
        </ul>
      </div>
    </div>
    <div class="relative mx-auto">
      <div class="flex items-center">
      <h4
        class="flex-shrink-0 pr-8 bg-transparent text-sm tracking-wider font-semibold  text-gray-700"
      >
        {{quote}}<span class="bg-yellow-600">{{name}}</span>
      </h4>
      <div class="flex-1 border-t-2 border-gray-800"></div>
    </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    navigationLinks: {
      default: () => [
        { title: "Sub-link 1", address: "/does/not/exist" },
        { title: "Sub-link 2", address: "/does/not/exist" },
        { title: "Sub-link 3", address: "/does/not/exist" }
      ]
    },
     quote: { type: String, default: "In the midst of chaos, there is also opportunity." },
     name: { type: String, default: "Sun Tzu" }

    }
 
};
</script>
<style scoped></style>
