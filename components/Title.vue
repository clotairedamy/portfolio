<template>
   <div class="lg:text-left">
      <h2 class="text-base text-gray-500 font-semibold tracking-wide uppercase">{{title}}</h2>
      <h1 class="mt-2 text-7xl leading-8 font-extrabold  text-gray-700 sm:text-4xl">
        {{subtitle}}
      </h1>
      <p class="mt-20 max-w-2xl text-xl text-gray-500 lg:text-left">
        {{content}}
      </p>
    </div>
</template>

<script>
export default {
    props: {
        title: {type: String, default:"Clotaire Damy" },
        subtitle: {type: String, default:"Subtitle" },
        content: {type: String, default:"Content" },

    }
}
</script>

<style>
h1,h2 {font-family: "Track";}
</style>