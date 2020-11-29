<template>
  <div>
    <div>
      <!-- Split brand panel -->
      <div class="relative bg-transparent">
        <div class="absolute inset-0" aria-hidden="true">
          <div
            class="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-r from-cyan-600 to-green-400"
          ></div>
        </div>
        <div class="relative max-w-7xl mx-auto lg:grid lg:grid-cols-2 lg:px-4">
          <div
            class="bg-transparent py-16 px-4 sm:py-24 sm:px-6 lg:px-0 lg:pr-4"
          >
            <div class="max-w-lg mx-auto lg:mx-0">
              <h2
                class="text-3xl font-extrabold text-gray-600 sm:text-4xl lg:text-5xl mb-10"
              >
                {{ headline
                }}<span class="text-gray-300">{{ headlineTwo }}</span>
              </h2>

              <dl class="mt-2 space-y-10">
                <div class="flex">
                  <div class="ml-2">
                    
                    <dd class="mt-2 text-base text-gray-300">
                     {{content}}
                    </dd>
                  </div>
                </div>
              </dl>
            </div>
          </div>
          <div
            class="bg-transparent py-2 px-4 sm:py-24 sm:px-6 lg:bg-none lg:flex lg:items-center lg:justify-end lg:px-0 lg:pl-2"
          >
            <div class="max-w-xl mx-auto w-full space-y-8 lg:mx-0">
              <ul class="bg-yellow-600  rounded sm:grid sm:grid-cols-3 sm:grid-rows-1 sm:grid-flow-col">
            <li class="border-t border-gray-300 border-opacity-25 py-4 px-4 flex items-center text-base text-white">
              <!-- Heroicon name: check 
              <svg class="h-6 w-6 text-cyan-200" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>-->
              <span class="ml-3 text-gray-700">Bio</span>
            </li>
            <li class="border-t border-gray-300 border-opacity-25 py-4 px-4 flex items-center text-base text-white">
              <!-- Heroicon name: check 
              <svg class="h-6 w-6 text-cyan-200" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>-->
              <span class="ml-3">Design</span>
            </li>
            <li class="border-t border-gray-300 border-opacity-25 py-4 px-4 flex items-center text-base text-white">
              <!-- Heroicon name: check 
              <svg class="h-6 w-6 text-cyan-200" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>-->
              <span class="ml-3">Development</span>
            </li>
          
           
          
          </ul>
             
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="relative mt-10 sm:mt-20">
      <div class="absolute inset-0 flex flex-col " aria-hidden="true">
        <div class="flex-1"></div>
      </div>
      <div class="relative max-w-7xl  mx-auto  ">
        <div
          class="bg-transparent rounded-lg  overflow-hidden lg:grid lg:grid-cols-2 lg:gap-2 mt-auto"
        >
          <div
            class="mt-auto pb-2 px-16 font-bold sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20"
          >
            <div class="lg:self-left">
              <h4 class="text-sm   sm:text-md">
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
  
  line-height: 150%;
}
</style>
