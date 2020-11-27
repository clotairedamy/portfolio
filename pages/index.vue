<template>
  <div>
    <Header
      headline="Clotaire"
      headlineTwo="Damy"
      content="A Developer and Digital Marketer based in Colorado Springs (US). I’m passionate about transforming complex problems into meaningful and engaging web interfaces. User Interfaces are driven by extensive research, motion and emotions. Motion design is giving users a sense of wonder, pleasure, the animation is acting as support for explaining complex benefits and features."
      quote="The details are not the details, they make the design."
      name="~C Eames"
    />
  </div>
</template>

<script>
export default {
  head: {
    link: [{ rel: "canonical", href: "https://interfacedesign.dev" }],
    title: "UI/UX Design and Marketing",
    meta: [
      {
        hid: "description",
        name: "description",
        content: "Clotaire Damy",
        hid: "robots",
        name: "robots",
        content: "noindex"
      }
    ],

    metaInfo: {
      script: [
        {
          type: "application/ld+json",
          json: {
            "@context": "http://schema.org",
            "@type": "Organization",
            name: "Clotaire Damy"
          }
        }
      ]
    }
  },
  transition(to, from) {
    if (from === undefined) {
      return "page";
    }
    return "slide-right";
  }
};
</script>

<style scoped></style>
