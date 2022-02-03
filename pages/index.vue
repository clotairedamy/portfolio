<template>
  <div class="mx-2 mt-20">
    <Title title="ClotaireDamy" class="" subtitle="studio ">
      <p class="text-2xl leading-normal text-white sm:text-xl">
        I love to make things interactive, and accesible. Web it’s the opportunity of our lifetime. It has the
        potential to communicate ideas, spread knowledge, bring us together, and
        unlock our collective talents.
      </p>
    
      <p class="text-2xl leading-normal text-white sm:text-xl">
        I’m an experienced and creative tech specialist with a strong understanding of current trends, methods and best practices. I love finding and implementing solutions for varying levels of business needs. I excel at designing, developing, creating and optimizing websites and digital products
      </p>
    </Title>
    <div class="mt-20 sm:mt-10 mx-16 sm:mx-8 flex flex-col items-end justify-center">
      <div class="flex flex-col items-left max-w-xl">
        <h3 class="text-gray-400 text-3xl hover:underline py-8 uppercase leading-normal font-bold">
          <nuxt-link to="/development">Frontend development</nuxt-link>
        </h3>
        <p class="text-gray-100 text-xl  leading-loose">
          Using the latest standards and technologies to create engaging,
          dynamic and innovative websites and browser-based user interfaces.
        </p>
      </div>
      <div class="flex-grow max-w-3xl" ></div>
      <div class=" flex flex-col items-left max-w-xl mt-20">
        <h3 class="text-gray-400 text-3xl hover:underline py-8 uppercase leading-normal font-bold">
          <nuxt-link to="/marketing">Digital marketing</nuxt-link>
        </h3>
        <p class="text-gray-100 text-xl  leading-loose">
          Search engine optimization and intent-based marketing: improving
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
  head: {
    link: [{ rel: "canonical", href: "https://clotairedamy.com" }],
    title: "Clotaire Damy & Radu A - 1918Studio",
    meta: [
      {
        hid: "description",
        name: "description",
        content:
          "Romanian UI/UX design, algorithms, integrations and digital marketing agency, based in Colorado Springs and Constanta, Romania.",
        hid: "robots",
        name: "robots"
      }
    ],

    metaInfo: {
      script: [
        {
          type: "application/ld+json",
          json: {
            "@context": "http://schema.org",
            "@type": "Organization",
            name: "Clotaire Damy"
          }
        }
      ]
    }
  }
};
</script>
<style scoped>
a::after {
  content: " →";
}
</style>
