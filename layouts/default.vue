<template>
  <div>
    <BackgroundAnimation>
      <template v-slot:header>
        <Navigation/>
      </template>
      <Nuxt />
      <template v-slot:footer>
        <h1>Page footer</h1>
      </template>
    </BackgroundAnimation>
  </div>
</template>

<style>
/*  */
</style>
