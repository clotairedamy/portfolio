<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <div class=" sticky top-0">
    <div class="relative">
      <div class="max-w-7xl mx-auto px-4 sm:px-6">
        <div
          class="flex justify-between items-center py-6 md:justify-start md:space-x-10"
        >
          <div class="flex justify-start lg:w-0 lg:flex-1">
            <n-link to="/">
              <span class="sr-only">Clotaire</span>
              <img
                class="h-8 w-auto sm:h-10"
                src="clotaire-01.svg"
                alt="Clotaire Damy logo"
              />
            </n-link>
          </div>
          <div class="-mr-2 -my-2 md:hidden">
            <button
              type="button"
              class="bg-transparent rounded-md p-2 inline-flex items-center justify-center text-yellow-600 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              @click="mobileMenuOpen = true"
            >
              <span class="sr-only">Open menu</span>
              <!-- Heroicon name: menu -->
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
          </div>
          <nav class="hidden md:flex space-x-10">
            <n-link
              to="/"
              class="text-base font-medium text-gray-500 hover:text-yellow-500"
            >
              About
            </n-link>
            <n-link
              to="/development"
              class="text-base font-medium text-gray-500 hover:text-yellow-500"
            >
              Development
            </n-link>
            <n-link
              to="/marketing"
              class="text-base font-medium text-gray-500 hover:text-yellow-500"
            >
              Marketing
            </n-link>
          </nav>
          <div
            class="hidden md:flex items-center justify-end space-x-8 md:flex-1 lg:w-0"
          >
           
          </div>
        </div>
      </div>

      <!--
      Mobile menu, show/hide based on mobile menu state.

      Entering: "duration-200 ease-out"
        From: "opacity-0 scale-95"
        To: "opacity-100 scale-100"
      Leaving: "duration-100 ease-in"
        From: "opacity-100 scale-100"
        To: "opacity-0 scale-95"
    -->
      <div
        class="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden z-10"
        v-if="mobileMenuOpen"
      >
        <div
          class="rounded-lg  ring-1 ring-black ring-opacity-5 bg-yellow-500 divide-y-2 divide-gray-50"
        >
          <div class="pt-5 pb-6 px-5">
            <div class="flex items-center justify-between">
              <div>
                <img class="h-8 w-auto" src="clotaire-01.svg" alt="UX Design" />
              </div>
              <div class="-mr-2">
                <button
                  type="button"
                  class="bg-gray-800 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
                  @click="mobileMenuOpen = false"
                >
                  <span class="sr-only">Close menu</span>
                  <!-- Heroicon name: x -->
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
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div class="mt-6">
              <nav class="grid gap-y-2">
                <n-link
                  to="/"
                  class="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                >
               
                  <span class="ml-3 text-base font-medium text-gray-900">
                    About
                  </span>
                </n-link>

                <n-link
                  to="/development"
                  class="-m-3 p-3 flex items-center rounded-md hover:bg-orange-500"
                >
                 
                  <span class="ml-3 text-base font-medium text-gray-900">
                    Development
                  </span>
                </n-link>

                <n-link
                  to="/marketing"
                  class="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                >
              
                  <span class="ml-3 text-base font-medium text-gray-900">
                    Marketing
                  </span>
                </n-link>
              </nav>
            </div>
          </div>
          <!-- <div class="py-6 px-5 space-y-6">
            <div class="grid grid-cols-2 gap-y-4 gap-x-8"></div>
            <div>
              <a
                href="#"
                class="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700"
              >
                Sign up
              </a>
              <p class="mt-6 text-center text-base font-medium text-gray-500">
                Existing customer?
                <a href="#" class="text-blue-600 hover:text-blue-500">
                  Sign in
                </a>
              </p>
            </div>
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mobileMenuOpen: false,
    };
  },
  watch: {
    $route(to, from) {
      this.mobileMenuOpen = false;
    },
  },
};
</script>

<style></style>
