<template>
  <div class="wrapper">
    <main-hero />
    <testimonials />
    <main-contact-form />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import MainHero from '@/components/MainHero.vue';
import Testimonials from '@/components/Testimonials.vue';
import MainContactForm from '@/components/MainContactForm.vue';

export default Vue.extend({
  components: {
    MainHero,
    Testimonials,
    MainContactForm,
  },
});
</script>

<style>
.wrapper {
  @apply min-h-screen flex flex-col justify-center items-center text-center w-screen;
}
</style>
