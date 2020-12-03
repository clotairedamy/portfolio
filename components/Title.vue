<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
<div class="flex justify-start mt-20">
  

    <div class="max-w-7xl mx-auto  sm:px-6 lg:px-8">
      <div class="title">
        <h3 class="text-xl text-gray-500 font-extrabold tracking-tighter">{{ title }}</h3>
          <h2 class="text-5xl font-black tracking-widest">{{ subtitle }}</h2>
      </div>
      <div class="lg:text-left">
        <p
          class="mt-20 text-sm leading-8  text-gray-500 sm:text-2xl"
        >
          {{ content }}
        </p>
      </div>
    </div>
  </div>
 
</template>

<script>
export default {
  props: {
    title: { type: String, default: "Clotaire Damy" },
    subtitle: { type: String, default: "Subtitle" },
    content: { type: String, default: "Content" }
  }
};
</script>

<style>
.clotaire {
  font-family: "Track";

  margin: 0;
  writing-mode: vertical-lr;

  line-height: 1.5;
}

.rotate {
  transform: rotate(180deg);
}

.title {
	
	
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 15vh;
	font-family: "Track";
 
}

h1,h2 {
  
	background-image: url('/text.gif');
	background-size: cover;
	color: transparent;
	-moz-background-clip: text;
	-webkit-background-clip: text;
	text-transform: uppercase;
	line-height: 1.2;

}
  

</style>
