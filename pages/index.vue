<template>
  <div class="container">
    <p>text deasupra</p>
    <ScrollTriggeredAnimation
      animationFile="intro.json"
      :maxScrollPercentage="0.5"
    />
    <div class="section">text dedesupt</div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.section {
  min-height: 100vh;
  background-color: black;
}
</style>
