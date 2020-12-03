<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
<div class="flex justify-start mt-20">
  

    <div class="max-w-7xl mx-auto  sm:px-6 lg:px-8">
      <div class="title">
        <h1 class="text-5xl font-extrabold ">{{ title }}</h1>
          <h2 class="text-3xl font-extrabold ">{{ subtitle }}</h2>
      </div>
      <div class="lg:text-left">
        <p
          class="mt-2 text-xl leading-8  text-gray-500 sm:text-2xl"
        >
          {{ content }}
        </p>
      </div>
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
	
	color: #FFF;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 30vh;
	letter-spacing: 10px;  font-family: "Track";
 
}

h1,h2 {
  
	background-image: url('/text.gif');
	background-size: cover;
	color: transparent;
	-moz-background-clip: text;
	-webkit-background-clip: text;
	text-transform: uppercase;
	line-height: 1.5;
	margin: 10px 0;
}
  

</style>
