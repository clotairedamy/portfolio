<template>
  <div class="mt-8">
    <dl
      class="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-32 md:gap-y-20"
    >
      <div class="flex" v-for="intro in intros" :key="intro.name">
        <div class="flex-shrink-0">
          <div
            class="flex items-center justify-center h-12 w-12 rounded-md bg-yellow-500 text-white"
          >
            <!-- Heroicon name: globe-alt -->
            <svg
              v-if="intro.inlineSVG"
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
                :d="intro.inlineSVG"
              />
            </svg>
            <img class="h-6 w-6" v-else-if="intro.imgPath" :src="intro.imgPath" />
            <p v-else >NI</p>
          </div>
        </div>
        <div class="ml-4">
          <dt class="text-lg leading-6 font-medium text-yellow-500">
            {{ intro.name }}
          </dt>
          <dd class="mt-2 text-base text-gray-500">
            {{ intro.description }}
          </dd>
        </div>
      </div>
    </dl>
  </div>
</template>
<script>
export default {
  props: {
    intros: {
      default: () => [
        {
          name: "UI/UX",
          description:
            "It’s about organizing the content and flow of a website based on research and planning. ",
          imgPath: null,
          inlineSVG:
            "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9",
        },
        {
          name: "Web Design",
          description:
            "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
          imgPath: null,
          inlineSVG:
            "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9",
        },
        {
          name: "Motion Design",
          description: "lorem ipsum two",
          imgPath: null,
          inlineSVG:
            "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9",
        },
        {
          name: "Information Architecture",
          description: "top",
          imgPath: null,
          inlineSVG:
            "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9",
        },
      ],
    },
  },
};
</script>
<style scoped>
</style>