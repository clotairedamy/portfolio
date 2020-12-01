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
  background-color: #111827;
  overflow-x: hidden;
 
}
body::-webkit-scrollbar {
  width: 1em;
}
 
body::-webkit-scrollbar-track {
  box-shadow: inset 0 0 3px #F59E0B;
}
 
body::-webkit-scrollbar-thumb {
  background-color: rgb(34, 31, 31);
  outline: 20px solid #F59E0B;
}
#pageContent {
  position: relative;
  z-index: 5;
  background-color: transparent;
}
</style>
