<template>
  <div class="w-screen bg-cover bg-center flex flex-col justify-center py-16 px-8" :style="style">
    <h1 class="text-white text-3xl font-bold">{{ title }}</h1>
    <p class="text-gray-500 text-sm mt-2">{{ subtitle }}</p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: {
    imgSrc: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      default: 'Title',
    },
    subtitle: {
      type: String,
      default: 'Subtitle',
    },
  },
  data() {
    return {
      style: `background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('${this.imgSrc}');`,
    };
  },
});
</script>

<style scoped></style>
