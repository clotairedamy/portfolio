<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <div class="sticky top-0 ">
    <div class="relative">
      <div class="max-w-7xl mx-8">
        <div
          class="flex flex-row justify-start py-8"
        >
          <div class="justify-left place-self-start">
            <n-link to="/">
              <span class="sr-only"><p class="text-white">Clotaire</p></span>
              <img
                class="h-16 w-auto sm:h-16"
                src="/clotaire-01.svg"
                height="64px"
                width="64px"
                alt="Clotaire Damy logo"
              />
            </n-link>
          </div>
          <!-- <div class="-mr-2 -my-2 ">
            <button
              type="button"
              class="bg-transparent rounded-md p-2 inline-flex items-center justify-center text-yellow-600 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              @click="mobileMenuOpen = true"
            >
              <span class="sr-only">Open menu</span>
         
              <svg
                class="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div> -->
          <nav class="flex flex-row flex-grow justify-self-center justify-center items-start space-x-16 py-8">
            <NavigationBarEntry class="sm:hidden" :displayTitle=aboutLinkData.displayTitle :to=aboutLinkData.to :subLinks=aboutLinkData.subLinks />
            <NavigationBarEntry :displayTitle=developmentLinkData.displayTitle :to=developmentLinkData.to :subLinks=developmentLinkData.subLinks />
            <NavigationBarEntry :displayTitle=marketingLinkData.displayTitle :to=marketingLinkData.to :subLinks=marketingLinkData.subLinks />
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      aboutLinkData: {
        displayTitle: "about",
        to: "/",
        subLinks: []
      },
      developmentLinkData: {
        displayTitle: "development",
        to: "/development",
        subLinks: [{displayTitle: "design", to: "/development/website-design"}, {displayTitle: "optimization", to: "/development/website-optimization"}]
      },
      marketingLinkData: {
        displayTitle: "marketing",
        to: "/marketing",
        subLinks: [{displayTitle: "SEO", to: "/marketing/search-engine-optimization"}, {displayTitle: "conversion optimization", to: "/marketing/conversion-optimization"}]
      }
    };
  },
};
</script>

<style>
.nav {
  font-family: "Track";
}
</style>
