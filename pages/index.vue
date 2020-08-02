<template>
  <div class="wrapper">
    <div class="h-screen bg-cover bg-center herobg flex justify-center items-start flex-col px-6">
      <h2 class="font-bold text-3xl text-white text-left leading-relaxed">
        Incorporate and Register your company with us today for a
        <span class="text-brick-500">hassle free experience!</span>
      </h2>
      <button class="rounded bg-brick-500 text-white p-2 mt-8 btn-min-width">
        Get Quotation Now
      </button>
      <button
        class="rounded bg-transparent text-gray-100 p-2 mt-2 border-gray-400 border-2 btn-min-width"
      >
        Learn More
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({});
</script>

<style>
.wrapper {
  @apply min-h-screen flex justify-center items-center text-center w-screen;
}

.herobg {
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url('~static/images/k8-bxkpLEyGK-s-unsplash.jpg');
}

.btn-min-width {
  min-width: 18ch;
}
</style>
