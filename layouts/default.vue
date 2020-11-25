<template>
  <div>
    <BackgroundAnimation>
      <template v-slot:header>
        <Navi2 class="z-10 bg-gray-900"/>
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
