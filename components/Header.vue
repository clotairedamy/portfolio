<template>
  <div>
    <div>
      <!-- Split brand panel -->
      <div class="relative bg-transparent">
        <div class="absolute inset-0" aria-hidden="true">
          <div
            class="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-r from-cyan-600 to-green-400"
          ></div>
        </div>
        <div class="relative max-w-7xl mx-auto lg:grid lg:grid-cols-2 lg:px-4">
          <div
            class="bg-transparent py-16 px-4 sm:py-24 sm:px-6 lg:px-0 lg:pr-4"
          >
            <div class="max-w-lg mx-auto lg:mx-0">
              <h2
                class="text-3xl font-extrabold text-gray-600 sm:text-4xl lg:text-5xl mb-10"
              >
                {{ headline
                }}<span class="text-gray-300">{{ headlineTwo }}</span>
              </h2>

              <dl class="mt-2 space-y-10">
                <div class="flex">
                  <div class="ml-2">
                    <dd class="mt-2 text-base text-gray-300">
                      {{ content }}
                    </dd>
                  </div>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>

    
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentDescription: null,
      descriptions: {
        bio: {
          title: "UIUX title",
          content:
            "A Developer and Digital Marketer based in Colorado Springs (US). I’m passionate about transforming complex problems into meaningful and engaging web interfaces.",
          bgClass: "bg-yellow-500"
        },
        design: {
          title: " Design",
          content: "Design content",
          bgClass: "bg-green-600"
        },
        marketing: {
          title: "Marketing title",
          content: "Marketing content",
          bgClass: "bg-red-400"
        }
      }
    };
  },
  props: {
    headline: { type: String, required: true },
    headlineTwo: { type: String, required: true },
    content: { type: String, required: true },
    quote: { type: String, default: true },
    name: { type: String, default: true }
  },
  mounted() {
    this.currentDescription = this.descriptions.uiux;
  },
  methods: {
    changeCurrentBox(newBox) {
      if (newBox === this.currentDescription) {
        this.currentDescription = null;
      } else {
        this.currentDescription = newBox;
      }
    }
  },
  computed: {
    descriptionBoxColorClass() {
      if (this.currentDescription === null) {
        return "bg-black-500";
      } else {
        return this.currentDescription.bgClass;
      }
    }
  }
};
</script>

<style>
.home-enter-active,
.home-leave-active {
  transition: slide-in 0.5s;
}
.home-enter,
.home-leave-active {
  opacity: 0;
}
h2,
h1 {
  font-family: "Track";
}
.special {
  line-height: 150%;
}
.pointer {
  cursor: pointer;
}
</style>
