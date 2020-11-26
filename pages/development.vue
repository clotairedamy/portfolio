<template>
  <div>
    <Header
      headline="Web"
      headlineTwo="Development"
      quote="Our nature consists in motion; complete rest is death.
'~Blaise Pascal'"
    />
    <SplitSection
      content="I look at what everyone else is doing and strive to do something completely new, building lightweight and high-quality interfaces that make brands memorable. Websites should have pleasing aesthetics; but most importantly, websites should be easy to use, fast, secure, relevant and increase sales."
    />
  </div>
</template>

<script>
export default {
  head: {
    link: [
      {
        rel: "canonical",
        href: "https://interfacedesign.dev/development"
      }
    ],
    title: "Web Development",
    meta: [
      {
        hid: "description",
        name: "description",
        content:
          "Motion Design &amp; animated web interfaces. Design and Branding Services in Colorado Springs, CO.",
        hid: "robots",
        name: "robots",
        content: "noindex"
      }
    ]
  },
  transition(to, from) {
    if (from === undefined) {
      return 'page';
    }
    if (from.name === 'index') {
      return 'slide-left'
    } else {
      return 'slide-right'
    }
  }
};
</script>

<style></style>
