<template>
  <div class="wrapper bg-gray-100">
    <main-hero />
    <testimonials />
    <main-contact-form />

    <div class="w-screen bg-gray-100 flex justify-center items-center lg:my-16 xl:my-24">
      <div class="content-area flex justify-center items-center flex-col">
        <h1 class="text-2xl lg:text-3xl xl:text-4xl font-bold">
          Need more information on incorporation?
        </h1>
        <nuxt-link
          to="/services"
          class="mt-4 lg:mt-10 border-brick-500 border-2 rounded-lg lg:px-8 lg:py-4 text-lg px-4 py-2"
          >Click here to find out!</nuxt-link
        >
      </div>
    </div>
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
