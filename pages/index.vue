<template>
  <div>
    <Header
      headline="Web Design"
      headlineTwo="&amp; Digital Marketing"
      quote="The details are not the details, they make the design.
'~C.Eames'"
    />
    <ScrollTriggeredAnimation
      animationFile="intro.json"
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

<style>
.bg {
  background-color: #1d1d23;
}
</style>
