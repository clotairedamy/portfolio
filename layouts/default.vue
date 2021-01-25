<template>
  <div>
    <BackgroundAnimation>
      <template>
        <Navigation class="z-10 " />
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
  background-color: #1a1f2c;
  overflow-x: hidden;
}
body::-webkit-scrollbar {
  width: 0.25em;
}

body::-webkit-scrollbar-track {
  box-shadow: inset 0 0;
}

body::-webkit-scrollbar-thumb {
  background-color: transparent;
  outline: 1px solid #f59e0b;
}
#pageContent {
  position: relative;
  z-index: 5;
  background-color: transparent;
}
</style>
