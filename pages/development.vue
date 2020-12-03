<template>
  <div class="text-white">
    <NuxtChild />
    <SubNavigationBox
      :navigationLinks="navigationLinks"
      :logoNavigationLink="logoNavigationLink"
      iconSrc="development-01.svg"
    />
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
          address: "/development/website-design",
        },
        {
          title: "Website Optimization",
          address: "/development/website-optimization",
        },
        {
          title: "Motion Design",
          address: "/development/motion-design",
        },
      ],
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
        content: "noindex",
      },
    ],

    metaInfo: {
      script: [
        {
          type: "application/ld+json",
          json: {
            "@context": "http://schema.org",
            "@type": "Organization",
            name: "Clotaire Damy",
          },
        },
      ],
    },
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
  },
};
</script>

<style scoped></style>
