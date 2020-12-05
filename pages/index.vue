<template>
  <div class="mt-20 bg-transparent">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 sm:mt-4">
      <Title
        title="Clotaire"
        content="Passionate about transforming complex problems into meaningful and engaging web interfaces with the help of motion and emotions. Motion design is giving users a sense of wonder, pleasure while the animation is acting as support for explaining complex benefits and features"
        subtitle="digital designer "
      />
       <Quote quote="The details are not the details, they make the design."
        author="C. Eames"
    />
     
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
      default:
        '""'
    }
  }
};
</script>
<style scoped></style>
