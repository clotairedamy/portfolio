<template>
  <div class="mx-4">
    <Title title="Clotaire" class="" subtitle="front-end developer ">
      <p class="text-xl leading-8 text-white sm:text-xl">
        We love the web. It’s the opportunity of our lifetime. It has the
        potential to communicate ideas, spread knowledge, bring us together, and
        unlock our collective talents.
      </p>
      <br />
      <p class="text-xl leading-8 text-white sm:text-xl">
        We are a Romanian team doing UI/UX design and development with a focus
        on web standards, optimisation and accessibility. We are passionate
        about transforming complex problems into meaningful and engaging web
        interfaces while building unique and memorable product experiences and
        design systems.
      </p>
    </Title>
    <div class="mt-10 mx-8 flex flex-row md:flex-col items-center justify-center">
      <div class="p-4 flex flex-col items-center max-w-xl">
        <h3 class="text-yellow-200 text-lg hover:underline">
          <nuxt-link to="/development">Frontend development</nuxt-link>
        </h3>
        <p class="text-gray-100 text-justify">
          Using the latest standards and technologies to create engaging,
          dynamic and innovative websites and browser-based user interfaces.
        </p>
      </div>
      <div class="flex-grow max-w-xs"></div>
      <div class="p-4 flex flex-col items-center max-w-xl">
        <h3 class="text-yellow-200 text-lg hover:underline">
          <nuxt-link to="/marketing">Digital marketing</nuxt-link>
        </h3>
        <p class="text-gray-100 text-justify">
          Search engine optimisation and intent-based marketing: improving
          business awareness through audience insight, increasing sales.
        </p>
      </div>
    </div>
    <Quote
      class="ml-10"
      quote="The details are not the details, they make the design."
      author="~ C. Eames"
    />
  </div>
</template>
<script>
export default {
  transition(to, from) {
    return "slide-right";
  },
  props: {
    quote: {
      type: String,
      default: "",
    },
  },
};
</script>
<style scoped>
a::after {
  content: " →";
}
</style>
