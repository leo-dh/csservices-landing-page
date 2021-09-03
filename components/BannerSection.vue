<template>
  <div class="w-full flex justify-center items-center">
    <div class="content-area flex justify-center items-center flex-col fade-in fade-transition">
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
import mixins from 'vue-typed-mixins';
import FadeInMixin from '@/mixins/FadeInMixin';

export default mixins(FadeInMixin).extend({
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
.fade-in {
  opacity: 0;
  transform: translateY(50px);
}
.fade-transition {
  transition: all 0.3s ease-out;
}
</style>
