<template>
<div >
  <Header 
            headline= 'Design &amp; Branding '
            headlineTwo="Services"
            quote="The details are not the details, they make the design.
'~C.Eames'"
          />
 <ScrollTriggeredAnimation
            animationFile="intro.json"
            :maxScrollPercentage="1"
          />
          </div>
</template>

<script>
export default {
  head: {
    title: 'Design and Branding Services Colorado Springs',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Motion Design &amp;animated web interfaces. Design and Branding Services in Colorado Springs, CO.'
      }
    ],
  }
}
</script>

<style>

</style>