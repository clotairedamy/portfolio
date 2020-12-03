<template>
  <div class="py-4 bg-transparent">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 sm:mt-4">
      <Title
        title=""
        content="Based in Colorado Springs, passionate about transforming complex problems into meaningful and engaging web interfaces."
        subtitle="Clotaire"
      />
      <div class="relative mx-auto mt-20">
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
  </div>
</template>
<script>
export default {
  transition(to, from) {
    return "slide-right";
  },
  props: {
    quote: {
      type: String,
      default: '"The details are not the details, they make the design. ~ Charles Eames"'
    }
  }
};
</script>
<style scoped></style>
