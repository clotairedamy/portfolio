<template>
  <div class="mt-30 sm:mt-20">
    <div
      class="py-4 px-4 sm:py-4 sm:px-16 lg:bg-none lg:flex lg:items-center lg:justify-end lg:px-0 lg:pl-2"
    >
      <div class="max-w-sm mx-auto w-full space-y-2 md:mx-0">
        <ul class="bg-gray-800 sm:grid sm:grid-flow-col">
          <li
            class="track border-b border-transparent py-4 px-2 flex items-right text-gray-200 rounded"
            v-for="link in navigationLinks"
            :key="link.title"
            :class="{ 'bg-yellow-500': currentPath === link.address }"
          >
            <!-- Heroicon name: check 
              <svg class="h-6 w-6 text-cyan-200" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>-->
            <nuxt-link
              :to="link.address"
              class="ml-3 text-gray-50 text-center text-xs"
              >{{ link.title }}</nuxt-link
            >
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      currentPath: "/",
    };
  },
  mounted() {
    this.currentPath = this.$route.path;
  },
  props: {
    // iconSrc: {
    //   default: "development-01.svg"
    // },
    logoNavigationLink: undefined,
    navigationLinks: {
      default: () => [
        { title: "Sub-link 1", address: "/does/not/exist" },
        { title: "Sub-link 2", address: "/does/not/exist" },
        { title: "Sub-link 3", address: "/does/not/exist" },
      ],
    },
    quote: {
      type: String,
      default: "In the midst of chaos, there is also opportunity.",
    },
    name: { type: String, default: "Sun Tzu" },
  },
  watch: {
    $route(to, from) {
      this.currentPath = to.path;
    },
  },
};
</script>
<style scoped>
.track {
  font-family: "Track";
}
</style>
