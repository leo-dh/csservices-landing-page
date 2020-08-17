<template>
  <div class="container">
    <div
      class="card rounded-lg cursor-pointer shadow-md h-full w-full"
      :class="showDescription ? 'flipped' : ''"
      @click="showDescription = !showDescription"
    >
      <div
        class="card__face card__face--front bg-cover bg-center flex items-end justify-end rounded-lg overflow-hidden"
        :style="style"
      >
        <div class="p-4 text-right flex flex-col justify-end bg-black bg-opacity-50 w-full h-full">
          <h3 class="font-bold text-lg text-white">{{ name }}</h3>
          <p class="text-sm text-gray-200">{{ position }}</p>
        </div>
      </div>
      <div
        class="card__face card__face--back flex items-center justify-center bg-gray-900 text-white rounded-lg"
      >
        {{ jobDescription }}
      </div>
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
      // style: `background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('${this.imgSrc}');`,
      style: `background-image: url('${this.imgSrc}');`,
      showDescription: false,
    };
  },
});
</script>

<style scoped>
.container {
  perspective: 1000px;
}
.card {
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.7s;
}
.card.flipped {
  transform: rotateY(-180deg);
}
.card__face {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
}
.card__face--back {
  transform: rotateY(180deg);
}
</style>
