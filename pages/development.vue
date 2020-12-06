<template>
  <div class="text-white">
    <NuxtChild />
    <SubNavigationBox class="navBox" :navigationLinks="navigationLinks" />
    <Quote
      quote="Our nature consists in motion; complete rest is death."
    class="ml-8"
      author="~ Blaise Pascal"
    />
  </div>
</template>

<script>
import SubNavigationBox from "~/components/SubNavigationBox.vue";
export default {
  data() {
    return {
      navigationLinks: [
        {
          title: "Development",
          address: "/development"
        },
        {
          title: "Design",
          address: "/development/website-design"
        },
        {
          title: "Optimization",
          address: "/development/website-optimization"
        }
      ]
    };
  },
  props: {
    quote: {
      type: String,
      default:
        '"Our nature consists in motion; complete rest is death. ~ Blaise Pascal"'
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
    let transitionName = "page";
    if (from !== undefined) {
      const parts = from.path.split("/");
      if (parts[1] === "") {
        transitionName = "slide-left";
      } else if (parts[1] === "development") {
        transitionName = "page";
      } else {
        transitionName = "slide-right";
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
  top: 0px;
}
</style>
