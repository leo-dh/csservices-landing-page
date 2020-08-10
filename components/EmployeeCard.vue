<template>
  <div
    class="rounded-lg overflow-hidden card-container cursor-pointer"
    @click="showDescription = !showDescription"
  >
    <div
      v-if="!showDescription"
      class="front bg-cover bg-center flex items-end justify-end w-full h-full"
      :style="style"
    >
      <div class="p-4 text-right">
        <h3 class="font-bold text-lg text-white">{{ name }}</h3>
        <p class="text-sm text-gray-200">{{ position }}</p>
      </div>
    </div>
    <div v-else class="back flex items-center justify-center w-full h-full bg-gray-900 text-white">
      {{ jobDescription }}
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: {
    name: {
      type: String,
      default: 'Name',
    },
    position: {
      type: String,
      default: 'Position',
    },
    imgSrc: {
      type: String,
      default: 'faces/MjIyNTUuanBn.jpg',
    },
    jobDescription: {
      type: String,
      default: 'Description',
    },
  },
  data() {
    return {
      style: `background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('${this.imgSrc}');`,
      showDescription: false,
    };
  },
});
</script>

<style scoped></style>
