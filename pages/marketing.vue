<template>
  <div class="text-white">
    <NuxtChild />
    <SubNavigationBox :navigationLinks="navigationLinks" :logoNavigationLink="logoNavigationLink" />
    <!--aici intra citatul-->
  </div>
</template>

<script>
import SubNavigationBox from "~/components/SubNavigationBox.vue";
export default {
  data() {
    return {
      logoNavigationLink: "/marketing",
      navigationLinks: [
        
        { title: "SEO", address: "/marketing/seo" },
        {
          title: "Technical SEO",
          address: "/marketing/technical-seo-services"
        },
        {
          title: "Conversion Optimization",
          address: "/marketing/conversion-optimization"
        }
      ]
    };
  },
  components: { SubNavigationBox },
  head: {
    link: [{ rel: "canonical", href: "https://interfacedesign.dev/marketing" }],
    title: "Digital Marketing Agency Colorado Springs",
    meta: [
      {
        hid: "description",
        name: "description",
        content: "Clotaire Damy",
        hid: "robots",
        name: "robots",
        content: "noindex"
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
    /*if (from === undefined) {
      return "page";
    }
    return "slide-right";*/
  }
};
</script>

<style scoped></style>
