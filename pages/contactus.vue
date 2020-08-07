<template>
  <div class="flex flex-col justify-center items-center">
    <hero-section
      img-src="images/sean-pollock-PhYq704ffdA-unsplash.jpg"
      title="Contact Us"
      subtitle="Drop us a message, or give us a heads up if you plan on meeting us in person. "
    />
    <div
      class="content-area flex flex-col lg:flex-row divide-y-2 lg:divide-x-2 lg:divide-y-0 w-full"
    >
      <div
        class="flex flex-col items-center justify-center text-navy-500 text-center pb-8 lg:w-2/5"
      >
        <h1 class="font-bold text-lg">Corporate Secretarial Services</h1>
        <div class="mt-6">
          <span class="block">+65 6123 4567</span>
          <span class="block">support@csservices.com.sg </span>
        </div>
        <div class="mt-6">
          <span class="block">01 Anson Road </span>
          <span class="block"># 01-01 International Plaza</span>
          <span class="block">Singapore 123456</span>
        </div>
      </div>
      <div class="lg:w-3/5 lg:px-12 xl:px-20">
        <h1 class="font-bold text-xl text-navy-500 text-center mt-8">Leave Us A Message</h1>
        <contact-form class="flex flex-col mt-8" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import HeroSection from '@/components/HeroSection.vue';
import ContactForm from '@/components/ContactForm.vue';

export default Vue.extend({
  components: {
    HeroSection,
    ContactForm,
  },
});
</script>
