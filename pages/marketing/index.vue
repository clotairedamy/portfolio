<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
 <div class="py-4 bg-transparent">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <Title
      title="Marketing"
      content="Numbers and stats aren’t enough. Your landing pages have to make great first impressions, and SEO is only responsible for bringing traffic to your website; from there you should have a clear path for your visitors to follow."
      subtitle=" Digital"
    />
  </div>
 </div>
</template>
<script>
export default {
  data() {
    return {
      subpointsData: [
        {
          name: "Information Architecture",
          description: "Not too long, but longer than the title"
        },
        {
          name: "Motion Design",
          description: "This item has an inline SVG icon!",
          inlineSVG:
            "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
        },
        {
          name: "Website Optimization",
          description: "This item has an externally loaded SVG icon.",
          imgPath: "clotaire-01.svg"
        },
        {
          name: "Development",
          description: "This item has an externally loaded SVG icon.",
          imgPath: "clotaire-01.svg"
        }
      ]
    };
  }
};
</script>
<style scoped></style>
