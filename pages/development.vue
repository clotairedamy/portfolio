<template>
  <div class="text-white mt-10">
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
      navigationLinks: [
      {title: "UI/UX", address: "/development/ui-ux-design-services-colorado"},
      {title: "Optimization", address: "/development/website-optimization-services"},
      {title: "Motion Design", address: "/development/motion-design-services-colorado"},]
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
