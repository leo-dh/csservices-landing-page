<template>
  <div class="flex rounded-lg bg-white px-4 py-6">
    <img :src="testimonialCardData.imgSrc" :alt="testimonialCardData.imgAlt" class="hidden" />
    <div>
      <p class="text-sm text-gray-700 italic quotes">{{ testimonialCardData.quote }}</p>
      <h4 class="font-semibold mt-2">{{ testimonialCardData.company }}</h4>
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
