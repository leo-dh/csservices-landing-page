<template>
  <div>
    <hero-section
      img-src="images/loui-kiaer-CielzQJR0SQ-unsplash.jpg"
      title="Services"
      subtitle="Getting started simplified"
    />
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
