<template>
<div>
  <Header
            headline= 'Web Development'
            headlineTwo="Services"
            quote="The details are not the details, they make the design.
'~C.Eames'"
          />
 <ScrollTriggeredAnimation
            animationFile="intro.json"
            :maxScrollPercentage="1"
          /></div>
</template>

<script>
export default {
  head: {
    title: 'Web Development Services Colorado Springs',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'App Store Optimization and Search Engine Optimization Services in Colorado Springs, CO.'
      }
    ],
  }
}
</script>

<style>

</style>