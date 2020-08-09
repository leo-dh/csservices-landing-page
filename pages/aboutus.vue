<template>
  <div class="flex flex-col justify-center items-center">
    <hero-section
      img-src="images/perry-grone-lbLgFFlADrY-unsplash.jpg"
      title="About Us"
      subtitle="Get to know the team"
    />
    <div class="content-area divide-y-2 w-full">
      <div class="flex flex-col lg:flex-row pb-12 lg:pb-16">
        <template v-for="(section, i) in sections">
          <div :key="i" class="text-center mt-10 lg:w-1/3 lg:px-6 lg:mt-0 first:mt-0">
            <h2 class="font-bold text-xl text-brick-500 lg:text-2xl">{{ section.title }}</h2>
            <p class="text-sm lg:text-base mt-2 lg:mt-6">{{ section.text }}</p>
          </div>
        </template>
      </div>
      <div class="pt-12 lg:pb-16">
        <h1 class="text-2xl font-bold text-navy-500 text-center">
          Meet The Team
        </h1>
        <div class="mt-6 grid-container lg:mt-12 gap-4">
          <employee-card />
          <employee-card />
          <employee-card />
          <employee-card />
          <employee-card />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import HeroSection from '@/components/HeroSection.vue';
import EmployeeCard from '@/components/EmployeeCard.vue';

export default Vue.extend({
  components: {
    HeroSection,
    EmployeeCard,
  },
  data() {
    return {
      sections: [
        {
          title: 'Our Vision',
          text:
            'To be the company that is able to understand and fulfil the requests of the customer.',
        },
        {
          title: 'Our Promise',
          text: 'Hassle-free experience for the customer. ',
        },
        {
          title: 'Our Values',
          text: 'Commitment. Quality. Respect',
        },
      ],
    };
  },
});
</script>

<style scoped>
.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-auto-rows: 1fr;
}
.grid-container::before {
  content: '';
  width: 0;
  padding-bottom: 100%;
  grid-row: 1 / 1;
  grid-column: 1 / 1;
}
.grid-container > *:first-child {
  grid-row: 1 / 1;
  grid-column: 1 / 1;
}
</style>
