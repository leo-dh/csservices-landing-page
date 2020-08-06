<template>
  <div>
    <nav-bar-component />
    <Nuxt />
    <footer-component />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import NavBarComponent from '@/components/NavBarComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';
export default Vue.extend({
  components: {
    NavBarComponent,
    FooterComponent,
  },
});
</script>
