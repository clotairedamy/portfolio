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
      <div class="mt-10 flex flex-row md:flex-col items-center justify-center">
        <div class="p-6 flex flex-col items-center">
          <nuxt-link class="text-yellow-200 text-lg" to="/development"><h3>Frontend development</h3></nuxt-link>
          <p class="text-gray-100 text-justify">Using the latest standards and technologies to create engaging, dynamic and innovative websites and browser-based user interfaces.</p>
        </div>
        <div class="p-6 flex flex-col items-center">
          <nuxt-link class="text-yellow-200 text-lg" to="/marketing"><h3>Digital marketing</h3></nuxt-link>
          <p class="text-gray-100 text-justify">Search engine optimisation and intent-based marketing: improving business awareness through audience insight, increasing sales.</p>
        </div>
      </div>
    </Title>

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
<style scoped></style>
