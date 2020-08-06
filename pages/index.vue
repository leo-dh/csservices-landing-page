<template>
  <div class="wrapper bg-gray-300">
    <main-hero-section />
    <testimonial-section />
    <main-contact-form-section />
    <banner-section
      title-text="Need more information on incorporation?"
      button-text="Click here to find out!"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import MainHeroSection from '@/components/MainHeroSection.vue';
import TestimonialSection from '@/components/TestimonialSection.vue';
import MainContactFormSection from '@/components/MainContactFormSection.vue';
import BannerSection from '@/components/BannerSection.vue';

export default Vue.extend({
  components: {
    MainHeroSection,
    TestimonialSection,
    MainContactFormSection,
    BannerSection,
  },
});
</script>

<style>
.wrapper {
  @apply min-h-screen flex flex-col justify-center items-center text-center w-screen;
}
</style>
