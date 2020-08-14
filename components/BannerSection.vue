<template>
  <div class="w-screen flex justify-center items-center">
    <div class="content-area flex justify-center items-center flex-col">
      <h1 class="text-2xl lg:text-3xl xl:text-4xl font-bold text-center">
        {{ titleText }}
      </h1>
      <nuxt-link
        :to="linkPath"
        class="text-sm mt-8 lg:mt-10 border-peach-600 border-2 rounded-lg lg:px-8 lg:py-4 lg:text-lg px-4 py-2 banner-btn"
        >{{ buttonText }}</nuxt-link
      >
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: {
    titleText: {
      type: String,
      required: true,
    },
    buttonText: {
      type: String,
      required: true,
    },
    linkPath: {
      type: String,
      default: '/',
    },
  },
});
</script>

<style scoped>
.banner-btn {
  transition: all 0.3s ease-in-out;
}
.banner-btn:hover {
  @apply bg-peach-600 text-white;
}
</style>
