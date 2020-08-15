<template>
  <div
    class="min-h-screen w-screen bg-cover bg-center herobg flex justify-center items-center h-auto"
  >
    <div class="flex justify-center items-start flex-col content-area">
      <h2
        class="font-bold text-3xl text-white text-left leading-relaxed md:w-3/5 lg:w-3/5 lg:text-5xl lg:leading-snug"
      >
        Register and Incorporate <span class="text-peach-500">your company</span> with us today!
      </h2>
      <p class="hidden lg:block lg:w-3/5 text-gray-400 text-left mt-8">
        Our experienced consultants will guide you along the incorportion procedure, ensuring a
        hassle-free experience for you.
      </p>
      <div class="mt-6 flex flex-wrap">
        <button
          class="rounded bg-peach-600 text-white p-2 mt-2 btn-min-width mr-2 primary-btn"
          @click="scrollToView"
        >
          <span class="font-bold">Get Quotation Now</span>
        </button>
        <button
          class="rounded bg-transparent text-gray-100 p-2 mt-2 border-gray-400 border-2 btn-min-width secondary-btn"
        >
          Learn More
          <svg class="h-4 w-4 fill-current inline-block ml-2" viewBox="0 0 20 20">
            <path
              fill-rule="evenodd"
              d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  methods: {
    scrollToView(): void {
      const el = document.getElementById('contactsection');
      el?.scrollIntoView({ behavior: 'smooth' });
    },
  },
});
</script>

<style scoped>
.herobg {
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url('~static/images/k8-bxkpLEyGK-s-unsplash.jpg');
}

.btn-min-width {
  min-width: 19ch;
}

.primary-btn {
  transition: all 0.3s ease-in-out;
}
.primary-btn:hover {
  @apply bg-gray-700;
}

.secondary-btn {
  transition: all 0.3s ease-in-out;
}
.secondary-btn:hover {
  @apply border-peach-500;
}

.secondary-btn:hover > svg {
  transform: translateX(10px);
  transition: all 0.3s ease-out;
}
</style>
