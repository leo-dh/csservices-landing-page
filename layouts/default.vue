<template>
  <div>
    <nav-bar />
    <Nuxt />
    <footer-component />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import NavBar from '@/components/NavBar.vue';
import FooterComponent from '@/components/FooterComponent.vue';
export default Vue.extend({
  components: {
    NavBar,
    FooterComponent,
  },
});
</script>
