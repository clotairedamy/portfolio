<template>
  <div>
    <BackgroundAnimation>
      <template v-slot:header>
        <Navigation/>
      </template>
      <Nuxt />
      <template v-slot:footer>
        <Footer />
      </template>
    </BackgroundAnimation>
  </div>
</template>

<style>
/*  */
</style>
