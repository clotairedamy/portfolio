<template>
  <div>
    <MultipartAnimationPlayer
      headline="About"
      headlineTwo="Page"
      quote="The details are not the details, they make the design.
'~C.Eames'"
    />
    <ScrollTriggeredAnimation
      animationFile="data.json"
      :maxScrollPercentage="0.5"
    />
  </div>
</template>

<script>
export default {
  head: {
    link: [{ rel: "canonical", href: "https://clotairedamy.com" }],
    title: "Clotaire Damy - Web Design &amp; Digital Marketing",
    meta: [
      {
        hid: "description",
        name: "description",
        content: "Clotaire Damy",
        hid: "robots",
        name: "robots",
        content: "noindex",
      },
    ],
  },
};
</script>

<style scoped>
body {
  background-color: #1d1d23;
}
</style>>

</style>
