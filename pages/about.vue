<template>
  <div class="text-white">
    <NuxtChild/>
    <SubNavigationBox :navigationLinks="navigationLinks"/>
    <!--aici intra citatul-->
  </div>
</template>

<script>
import SubNavigationBox from '~/components/SubNavigationBox.vue';
export default {
  data() {
    return {
      navigationLinks: [{title: "About", address: "/about"},
      {title: "About sub-page", address: "/about/nested"},
      {title: "Second nested", address: "/about/nested2"}]
    }
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
