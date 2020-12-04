<template>
  <div class="text-white">
    <NuxtChild />
    <SubNavigationBox
      :navigationLinks="navigationLinks"
  
   
    />
    <div class="relative mx-auto  ">
      <div
        class="bg-transparent rounded-lg  overflow-hidden lg:grid lg:grid-cols-2 lg:gap-2 mt-auto"
      >
        <div
          class="mt-20  px-16 font-bold sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20"
        >
          <div class="lg:self-left">
            <h4 class="text-lg   sm:text-lg">
              <span class="block special text-gray-400">{{ quote }}</span>
            </h4>
         
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SubNavigationBox from "~/components/SubNavigationBox.vue";
export default {
  data() {
    return {
  
      navigationLinks: [
         {
          title: "back",
          address: "/development/website-design",
        },
        {
          title: "Design",
          address: "/development/website-design",
        },
        {
          title: "Optimization",
          address: "/development/website-optimization",
        },
      
      ],
    };
  },
  props: {
    quote: {
      type: String,
      default: '"Our nature consists in motion; complete rest is death. ~ Blaise Pascal"'
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
