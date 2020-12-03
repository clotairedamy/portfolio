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
        
        { title: "SEO", address: "/marketing/search-engine-optimization"},
        {
          title: "Technical SEO",
          address: "/marketing/technical-seo"
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
  },
};
</script>

<style scoped></style>
