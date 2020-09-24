<template>
  <div class="section>">
    <div class="container">
      <ScrollTriggeredAnimation
        animationFile="intro.json"
        :maxScrollPercentage="1"
      />
      <div class="section">text dedesupt</div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.section {
  min-height: 100vh;
  background-color: #1d1d23;
}
</style>
