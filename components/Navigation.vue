<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <div class="sticky top-0 ">
    <div class="relative">
      <div class="max-w-7xl mx-2">
        <div
          class="flex flex-row justify-start py-8"
        >
          <div class="justify-left place-self-start">
            <n-link to="/">
              <img
                class="ml-6 h-16 w-auto sm:h-10"
                src="/clotaire-01.svg"
                height="128"
                width="128"
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
          <nav class="flex flex-row flex-grow justify-self-center justify-center items-start space-x-8 py-4 sm:py-2">
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
        subLinks: []
      },
      marketingLinkData: {
        displayTitle: "marketing",
        to: "/marketing",
        subLinks: []
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
