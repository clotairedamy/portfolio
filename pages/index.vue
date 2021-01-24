<template>
  <div class="mx-4">
    <Title
      title="Clotaire"
      class=""
      content="Passionate about transforming complex problems into meaningful and engaging web interfaces while building unique and memorable product experiences and design systems"
      subtitle="front-end developer " 
    />

    <Quote class="ml-10" quote="The details are not the details, they make the design."
    author="~ C. Eames" />
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
      default: ""
    }
  }
};
</script>
<style scoped></style>
