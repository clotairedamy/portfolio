<template>
  <div class="text-white">
    <div class="mx-4">
      <Title
        title="Marketing"
        class=""
        content="An Intent-based Marketing process of improving business awarness through audience insight, relevance, guidelines and value, in order to drive more quality traffic, and increase sales. We’ll cwork with your teams, communicate often, and then present you with a custom strategy tied to your business KPIs."
        subtitle="Digital"
      />

      <Quote
        quote="In the midst of chaos, there is also opportunity. "
        class="ml-4"
        author="~ Sun TZU."
      />
    </div>
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
  }
};
</script>

<style scoped>
.navBox {
  position: sticky;
  bottom: 10px;
}
</style>
