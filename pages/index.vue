<template>
  <div class="mt-20 bg-transparent mb-20">
    
      <Title
        title="Clotaire"
        content="Passionate about transforming complex problems into meaningful and engaging web interfaces with the help of motion and emotions."
      
        subtitle="front-end developer "
      />
      <div class="mt-20">
      <Quote
        quote="The details are not the details, they make the design."
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
      default: ''
    }
  }
};
</script>
<style scoped></style>
