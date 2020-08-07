<template>
  <div>
    <hero-section img-src="images/perry-grone-lbLgFFlADrY-unsplash.jpg" title="About Us" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import HeroSection from '@/components/HeroSection.vue';

export default Vue.extend({
  components: {
    HeroSection,
  },
});
</script>
