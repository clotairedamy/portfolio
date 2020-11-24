<template>
  <div>
    <BackgroundAnimation>
      <template v-slot:header>
        <Navigation class="bg-gray-900 z-10"/>
      </template>
      <Nuxt id="pageContent" />
      <template v-slot:footer>
        <Footer />
      </template>
    </BackgroundAnimation>
  </div>
</template>

<style>
body {
  background-color: #111827;
}
#pageContent {
  position: relative;
  z-index: 5;
  background-color: transparent;
}
</style>
