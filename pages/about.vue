<template>
  <div class="text-white">
    <NuxtChild />
    <SubNavigationBox :navigationLinks="navigationLinks" />
    <!--aici intra citatul-->
  </div>
</template>

<script>
import SubNavigationBox from "~/components/SubNavigationBox.vue";
export default {
  data() {
    return {
      navigationLinks: [
        { title: "About", address: "/about" },
        {
          title: "Web Design",
          address: "/about/website-design-services-colorado"
        },
        { title: "SEO", address: "/about/search-engine-optimization-colorado" }
      ]
    };
  },
  components: { SubNavigationBox },

  head: {
    meta: [
      {
        hid: "description",
        title: "UI/UX Design and Marketing",
        name: "description",
        content: "Home page description"
      }
    ]
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
