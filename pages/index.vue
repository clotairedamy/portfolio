<template>
  <div class="px-8">
    <Title
      title="Clotaire"
      content="Passionate about transforming complex problems into meaningful and engaging web interfaces with the help of motion and emotions."
      subtitle="front-end developer " class="mx-auto"
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
