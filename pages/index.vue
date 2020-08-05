<template>
  <div class="wrapper bg-gray-200">
    <main-hero />
    <testimonials />
    <main-contact-form />

    <div class="w-screen bg-gray-200 flex justify-center items-center lg:my-16 xl:my-24">
      <div class="content-area">
        <h1>Placeholder Section</h1>
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
