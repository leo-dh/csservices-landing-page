<template>
  <div class="wrapper bg-gray-300 page-transition">
    <main-hero-section />
    <testimonial-section />
    <main-contact-form-section />
    <banner-section
      title-text="Need more information on incorporation?"
      button-text="Click here to find out!"
      link-path="/services"
      class="lg: my-16 xl:my-24"
    />
  </div>
</template>

<script lang="ts">
import MainHeroSection from '@/components/MainHeroSection.vue';
import TestimonialSection from '@/components/TestimonialSection.vue';
import MainContactFormSection from '@/components/MainContactFormSection.vue';
import BannerSection from '@/components/BannerSection.vue';
import mixins from 'vue-typed-mixins';
import PageTransitionMixin from '@/mixins/PageTransitionMixin';

export default mixins(PageTransitionMixin).extend({
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
  @apply flex flex-col justify-center items-center text-center w-full;
}
</style>
