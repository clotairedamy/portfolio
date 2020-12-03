<template>
  <div class="text-white">
    <NuxtChild />
    <SubNavigationBox :navigationLinks="navigationLinks" :logoNavigationLink="logoNavigationLink" iconSrc="development-01.svg" />
    <!--aici intra citatul-->
  </div>
</template>

<script>
import SubNavigationBox from "~/components/SubNavigationBox.vue";
export default {
  data() {
    return {
      logoNavigationLink: "/development",
      navigationLinks: [
        {
          title: "Web Design",
          address: "/development/website-design"
        },
        {
          title: "Website Optimization",
          address: "/development/website-optimization"
        },
        {
          title: "Motion Design",
          address: "/development/motion-design"
        }
      ]
    };
  },
  components: { SubNavigationBox },
  head: {
    link: [{ rel: "canonical", href: "https://interfacedesign.dev" }],
    title: "UI/UX Design and Marketing",
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
