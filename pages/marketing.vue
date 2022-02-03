<template>
  <div class="mx-2 mt-20">
    <Title title="Marketing" class="" subtitle="DIGITAL">
      <p class="text-2xl leading-normal text-white sm:text-xl">
      I believe that meaningful, authentic marketing is the best way to build a brand. To connect on a human level with the right audience and to listen and respond to people’s desires and needs.
      </p>
    
      <p class="text-2xl leading-normal text-white sm:text-xl">
       Building an authentic relationship with your prospects is crucial if you want them to stick around long enough for you to make your sales pitch. While traditional methods of developing relationships have been successful for years, employing new and innovative whatnots will result in higher conversions and more future business opportunities.
      </p>
    </Title>
    <div class="mt-20 sm:mt-10 mx-16 sm:mx-8 flex flex-col items-end justify-center">
      <div class="flex flex-col items-left max-w-xl">
        <h3 class="text-gray-400 text-3xl hover:underline py-8 uppercase leading-normal font-bold">
          <nuxt-link to="/development">Search Engine Optimization</nuxt-link>
        </h3>
        <p class="text-gray-100 text-xl  leading-loose">
          A hyper-targeted SEO campaign is the surest way to bring in new customers, grow your online brand, and gain a competitive advantage on your local industry. There’s no one-size-fits-all approach to SEO, it changes all the time. Having a technical SEO expert on your side is crucial to ensure you’re always staying on top of your results and other marketing tactics.
        </p>
      </div>
      <div class="flex-grow max-w-3xl" ></div>
      <div class=" flex flex-col items-left max-w-xl mt-20">
        <h3 class="text-gray-400 text-3xl hover:underline py-8 uppercase leading-normal font-bold">
          <nuxt-link to="/marketing">Web Optimization</nuxt-link>
        </h3>
        <p class="text-gray-100 text-2xl sm:text-2xl leading-loose">
         Most successful business owners know that website speed is important for conversions and revenue. Yet many neglect this important speed element and do not optimize their site to load quickly. A top-quality website speed optimization service can balance image sizes, compress images, leverage browser caching, remove redirects that waste time, optimize page loading order and more.
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

import SubNavigationBox from "~/components/SubNavigationBox.vue";
export default {
  data() {
    return {
      logoNavigationLink: "/marketing",
      navigationLinks: [{ title: "Marketing", address: "/marketing" }]
    };
  },
  props: {
    quote: {
      type: String,
      default: '"In the midst of chaos, there is also opportunity. ~ Sun TZU"'
    }
  },
  components: { SubNavigationBox },
  head: {
    link: [{ rel: "canonical", href: "https://clotairedamy.com/marketing" }],
    title: "Digital Marketing Agency Colorado Springs",
    meta: [
      {
        hid: "description",
        name: "description",
        content: "Clotaire Damy",
        hid: "robots",
        name: "robots",
        
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
  },
  transition(to, from) {
    let transitionName = "page";
    if (from !== undefined) {
      const parts = from.path.split("/");
      if (parts[1] === "marketing") {
        transitionName = "page";
      } else {
        transitionName = "slide-left";
      }
    }
    //console.log("navigating from " + from.path + " to " + to.path + " (transition is " + transitionName + " )");
    return transitionName;
  }
};
</script>

<style scoped>
.navBox {
  position: sticky;
  bottom: 10px;
}
</style>
