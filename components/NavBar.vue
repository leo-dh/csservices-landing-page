<template>
  <header class="bg-navy-500 xl:flex xl:items-center xl:justify-center">
    <div
      class="sm:flex sm:justify-between sm:items-center sm:px-4 sm:py-4 lg:px-8 xl:max-w-screen-xl xl:w-full"
    >
      <div class="flex justify-between items-center px-4 py-4 sm:p-0">
        <h1 class="uppercase font-bold text-xl text-white">CSServices</h1>
        <button class="text-gray-500 sm:hidden" @click="drawerOpen = !drawerOpen">
          <svg v-if="!drawerOpen" class="h-6 w-6 fill-current" viewBox="0 0 20 20">
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            />
          </svg>
          <svg v-else class="h-6 w-6 fill-current" viewBox="0 0 20 20">
            <path
              fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </div>
      <div :class="drawerOpen ? 'block' : 'hidden'" class="px-2 pb-2 sm:block sm:p-0">
        <template v-for="(route, i) in routes">
          <nuxt-link
            :key="i"
            :to="route.to"
            class="block px-2 py-1 my-1 hover:bg-brick-500 text-white font-semibold sm:inline-block sm:my-0 rounded lg:text-lg lg:px-4 lg:py-2"
            exact-active-class="activeLink"
            >{{ route.title }}</nuxt-link
          >
        </template>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data() {
    return {
      drawerOpen: false,
      routes: [
        { to: '/', title: 'Home' },
        { to: '/services', title: 'Services' },
        { to: '/aboutus', title: 'About Us' },
        { to: '/contactus', title: 'Contact Us' },
      ],
    };
  },
});
</script>

<style scoped>
.activeLink {
  @apply text-brick-500;
}
.activeLink:hover {
  @apply bg-transparent;
}
</style>
