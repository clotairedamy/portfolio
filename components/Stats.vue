<template>
  <!--
  Tailwind UI components require Tailwind CSS v1.8 and the @tailwindcss/ui plugin.
  Read the documentation to get started: https://tailwindui.com/documentation
-->
<div class="bg-gray-900 pt-12 sm:pt-16">
  <div class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="max-w-6xl mx-auto text-center">
      <h2 class="text-3xl leading-9 font-extrabold text-gray-400 sm:text-4xl sm:leading-10">
        Bio
      </h2>
      <p class="mt-3 text-xl leading-7 text-left text-gray-500 sm:mt-4">
        A web developer who loves what he does, adding value to companies of any size. From competitive research to interactive prototypes,building engaging and simple to-use user interfaces.<br />Grew up in Petrosani, a small mining town at the heart of the Carpathian Mountains in Romania. Currently living in Colorado Springs, Colorado. Love the outdoors, Romanian food, motion & web design, data analysis, and I am a big supporter of Liverpool FC in the English Premier League. <br />I have a beautiful wife, and two daughters, Mia and Nova.
      </p>
    </div>
  </div>
  <div class="mt-10 pb-12 bg-gray-900 sm:pb-16">
    <div class="relative">
      <div class="absolute inset-0 h-1/2 bg-gray-50"></div>
      <div class="relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-4xl mx-auto">
          <dl class="rounded-lg bg-white shadow-lg sm:grid sm:grid-cols-3">
            <div class="flex flex-col border-b border-gray-100 p-6 text-center sm:border-0 sm:border-r">
              <dt class="order-2 mt-2 text-lg leading-6 font-medium text-gray-600" id="item-1">
                Years of Experience as Front-end Developer
              </dt>
              <dd class="order-1 text-5xl leading-none font-extrabold text-gray-800" aria-describedby="item-1">
                10
              </dd>
            </div>
            <div class="flex flex-col border-t border-b border-gray-100 p-6 text-center sm:border-0 sm:border-l sm:border-r">
              <dt class="order-2 mt-2 text-lg leading-6 font-medium text-gray-600">
                Years of Experience as Digital Marketer
              </dt>
              <dd class="order-1 text-5xl leading-none font-extrabold text-gray-700">
                8
              </dd>
            </div>
            <div class="flex flex-col border-t border-gray-100 p-6 text-center sm:border-0 sm:border-l">
              <dt class="order-2 mt-2 text-lg leading-6 font-medium text-gray-600">
                Years of design experience 
              </dt>
              <dd class="order-1 text-5xl leading-none font-extrabold text-gray-600">
                15
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  </div>
</div>

</template>

<script>
export default {

}
</script>

<style>

</style>