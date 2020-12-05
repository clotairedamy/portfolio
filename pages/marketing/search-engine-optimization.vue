<template>
  
  <div class="py-4 bg-transparent">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <Title
        title="Search Engine"
        content="A Developer and Digital Marketer based in Colorado Springs (US). I’m passionate about transforming complex problems into meaningful and engaging web interfaces."
        subtitle="Optimization"
      />
      <!-- <Subpoints :intros="subpointsData"/> -->
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      subpointsData: [
        {name: "Test item 1", description: "Not too long, but longer than the title"},
        {name: "Test item 2", description: "This item has an inline SVG icon!", inlineSVG: "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"},
        {name: "Site icon", description: "This item has an externally loaded SVG icon.", imgPath: "/clotaire-01.svg"}
      ]
    }
  }
};
</script>

<style scoped></style>
