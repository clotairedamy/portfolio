<template>
  <div>
    <Header
      headline="Digital"
      headlineTwo="Marketing"
      quote="“In the midst of chaos, there is also opportunity.”
'~Sun Tzu'"
    />
<SplitSection content="Numbers and stats aren’t enough. Your landing pages have to make great first impressions, and SEO is only responsible for bringing traffic to your website; from there you should have a clear path for your visitors to follow." />
  </div>
</template>

<script>
export default {
  head: {
    link: [
      {
        rel: "canonical",
        href: "https://interfacedesign.dev/marketing"
      }
    ],
    title: "Marketing Route",
    meta: [
      {
        hid: "description",
        name: "description",
        content:
          "Motion Design &amp;animated web interfaces. Design and Branding Services in Colorado Springs, CO.",
        hid: "robots",
        name: "robots",
        content: "noindex"
      }
    ]
  },
  transition(to, from) {
    if (from === undefined) {
      return 'page'
    }
    return 'slide-left'
  }
};
</script>

<style></style>
