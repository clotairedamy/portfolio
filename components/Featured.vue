<template>
  <div class="mt-8 bg-transparent pb-16 sm:mt-12 sm:pb-20 lg:pb-28">
    <div class="relative ">
      <div class="absolute inset-0  bg-transparent"></div>
      <div class="relative max-w-6xl mx-auto  sm:px-6 lg:px-8">
        <div class="max-w-lg mx-auto  overflow-hidden lg:max-w-none lg:flex">
          <div class="flex-1 bg-gray-50  px-6 py-8 lg:p-12 ">
            <h3 class="text-2xl font-extrabold text-gray-400 sm:text-3xl">
              {{ headline }}
            </h3>
            <p class="mt-6 text-base text-gray-500">
              {{ content }}
            </p>
            <div class="mt-8">
              <div class="flex items-center">
                <h4
                  class="flex-shrink-0 pr-4 bg-transparent text-sm tracking-wider font-semibold uppercase text-white"
                >
                  Capabilities
                </h4>
                <div class="flex-1 border-t-2 border-gray-200"></div>
              </div>
              <ul
                class="mt-8 space-y-5 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-5"
              >
                <li class="flex items-start lg:col-span-1 pointer" @click="changeCurrentBox(descriptions.uiux)">
                  <div class="flex-shrink-0">
                    <!-- Heroicon name: check-circle -->
                    <svg
                      class="h-5 w-5 text-yellow-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                  <p class="ml-3 text-sm text-yellow-500">
                    UI/UX Prototyping
                  </p>
                </li>

                <li class="flex items-start pointer" @click="changeCurrentBox(descriptions.information_architecture)">
                  <div class="flex-shrink-0">
                    <!-- Heroicon name: check-circle -->
                    <svg
                      class="h-5 w-5 text-gray-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                  <p class="ml-3 text-sm text-gray-500">
                    Information Architecture
                  </p>
                </li>

                <li class="flex items-start lg:col-span-1 pointer" @click="changeCurrentBox(descriptions.motion_design)">
                  <div class="flex-shrink-0">
                    <!-- Heroicon name: check-circle -->
                    <svg
                      class="h-5 w-5 text-gray-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                  <p class="ml-3 text-sm text-gray-500">
                    Motion Design
                  </p>
                </li>

                <li class="flex items-start lg:col-span-1 pointer" @click="changeCurrentBox(descriptions.web_design)">
                  <div class="flex-shrink-0">
                    <!-- Heroicon name: check-circle -->
                    <svg
                      class="h-5 w-5 text-gray-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                  <p class="ml-3 text-sm text-gray-500">
                    Website Design &amp; Optimization
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <FooterContentBox v-if="currentDescription !== null" :class="descriptionBoxColorClass" :title="currentDescription.title" :content="currentDescription.content"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentDescription: null,
      descriptions: {
        uiux: {title: "UIUX title", content: "uiux content", bgClass: "bg-yellow-500"},
        information_architecture: {title: "IA route", content: "IA content", bgClass: "bg-blue-300"},
        motion_design: {title: "Motion design", content: "MD content", bgClass: "bg-green-600"},
        web_design: {title: "Web title", content: "web content", bgClass: "bg-red-400"}
      }
    }
  },
  props: {
    headline: { type: String, default: "Web Development" },
    headlineTwo: { type: String, required: false },
    content: {
      type: String,
      default: "A brand can be recognized in particular by its visual identity."
    }
  },
  mounted() {
    this.currentDescription = this.descriptions.uiux;
  },
  methods: {
    changeCurrentBox(newBox) {
      if (newBox === this.currentDescription) {
        this.currentDescription = null;
      } else {
        this.currentDescription = newBox;
      }
    }
  },
  computed: {
    descriptionBoxColorClass() {
      if (this.currentDescription === null) {
        return "bg-black-500"
      } else {
        return this.currentDescription.bgClass;
      }
    }
  }
};
</script>

<style scoped>
.pointer {
  cursor:pointer;
}
</style>
