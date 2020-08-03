<template>
  <div class="wrapper">
    <main-hero />
    <testimonials />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import MainHero from '@/components/MainHero.vue';
import Testimonials from '@/components/Testimonials.vue';

export default Vue.extend({
  components: {
    MainHero,
    Testimonials,
  },
});
</script>

<style>
.wrapper {
  @apply min-h-screen flex flex-col justify-center items-center text-center w-screen;
}
</style>
