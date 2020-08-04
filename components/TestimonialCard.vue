<template>
  <div class="flex rounded-lg bg-white px-4 py-6">
    <img :src="testimonialCardData.imgSrc" :alt="testimonialCardData.imgAlt" class="hidden" />
    <div class="text-left">
      <p class="text-sm text-gray-700 italic quotes pl-4">{{ testimonialCardData.quote }}</p>
      <div class="pl-4 flex items-center mt-4">
        <img
          class="w-10 h-10 rounded-full mr-4 shadow-inner"
          :src="testimonialCardData.imgSrc"
          :alt="testimonialCardData.imgAlt"
        />
        <div>
          <h4 class="font-semibold text-gray-800">{{ testimonialCardData.company }}</h4>
          <p class="text-xs text-gray-700">{{ testimonialCardData.date }}</p>
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
