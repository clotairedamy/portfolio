<template>
  <!--
        Mobile menu, show/hide based on mobile menu state.

        Entering: "duration-200 ease-out"
          From: "opacity-0 scale-95"
          To: "opacity-100 scale-100"
        Leaving: "duration-100 ease-in"
          From: "opacity-100 scale-100"
          To: "opacity-0 scale-95"
      -->
  <div
    class=" inset-x-0 p-2  md:hidden"
  >
    <div class="rounded-lg shadow-lg">
      <div
        class="bg-transparent rounded-lg shadow-xs divide-y-2 divide-gray-50"
      >
        <div class="pt-5 pb-6 px-5 space-y-6">
          <div class="flex items-center justify-between">
            <div><n-link
                to="/">
              <img
                class="h-8 w-auto"
                src="clotaire-01.svg"
                alt="Clotaire Damy"
              /></n-link>
            </div>
            <div class="-mr-2"></div>
          </div>
          <div>
            <nav class="grid gap-y-8">
          
              <n-link
                to="development"
                class="-m-3 rounded-md p-3 flex items-center space-x-3 hover:bg-gray-50 "
              >
               
                <div class="text-base leading-6 font-medium text-white">
                  Development
                </div>
              </n-link>
              <n-link
                to="marketing"
                class="-m-3 rounded-md p-3 flex items-center space-x-3 hover:bg-gray-50 "
              >
                
                <div class="text-base leading-6 font-medium text-white">
                  Marketing
                </div>
              </n-link>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
