<template>
  <div
    class="flex rounded-lg bg-white overflow-hidden lg:flex-col lg:w-64 shadow-sm lg:shadow-md xl:w-1/4"
  >
    <img
      :src="testimonialCardData.imgSrc"
      :alt="testimonialCardData.logoAlt"
      class="hidden lg:block lg:h-64 object-cover object-center"
    />
    <div class="text-left px-4 py-6 lg:flex lg:justify-between lg:flex-col lg:flex-grow">
      <p class="text-sm text-gray-700 italic quotes pl-4 md:text-base xl:text-lg xl:pl-6 xl:pr-2">
        {{ testimonialCardData.quote }}
      </p>
      <div class="pl-4 flex items-center mt-4 xl:mt-10">
        <img
          class="w-10 h-10 rounded-full mr-4 shadow-inner"
          :src="testimonialCardData.logoSrc"
          :alt="testimonialCardData.logoAlt"
        />
        <div>
          <h4 class="font-semibold text-gray-800 xl:text-lg">{{ testimonialCardData.company }}</h4>
          <p class="text-xs text-gray-700 xl:text-sm">{{ testimonialCardData.date }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: {
    testimonialCardData: {
      type: Object,
      required: true,
    },
  },
});
</script>

<style scoped>
.quotes {
  position: relative;
}
.quotes::before {
  content: '“';
  position: absolute;
  font-weight: bold;
  font-family: serif;
  top: -1.5rem;
  left: -0.5rem;
  opacity: 0.2;
  font-size: 4em;
}
</style>
