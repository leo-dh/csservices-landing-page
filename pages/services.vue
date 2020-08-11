<template>
  <div>
    <hero-section
      img-src="images/loui-kiaer-CielzQJR0SQ-unsplash.jpg"
      title="Services"
      subtitle="Getting started simplified"
    />
    <div class="content-area">
      <div class="flex flex-col items-center align-center text-center text-2xl">
        <h2 class="font-bold text-navy-500">
          Registering and Incoporating a company is kind of complicated..
        </h2>
        <p class="text-navy-500 mt-8">
          but you only need to know these <span class="text-brick-500">4</span> steps.
        </p>
      </div>
      <div class="my-12">
        <template v-for="(step, i) in steps">
          <timeline-component :key="i" :text="step" :step-num="i + 1" />
        </template>
      </div>
      <div>
        <h2 class="font-bold text-navy-500 text-xl">
          What you can expect at base price - <span class="text-brick-500">$678</span>
        </h2>
        <div></div>
      </div>
      <div>
        <h2 class="font-bold text-navy-500 text-xl">
          Addtional add-ons<span class="text-brick-500">*</span> should you require them
        </h2>
        <div></div>
      </div>
    </div>
    <banner-section
      button-text="Contact Us Now!"
      title-text="Any Further Questions?"
      link-path="/contactus"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import HeroSection from '@/components/HeroSection.vue';
import BannerSection from '@/components/BannerSection.vue';
import TimelineComponent from '@/components/TimelineComponent.vue';

export default Vue.extend({
  components: {
    HeroSection,
    BannerSection,
    TimelineComponent,
  },
  data() {
    return {
      steps: [
        'Think of your company name!',
        'Contact Us',
        'Prepare Information',
        'Setup a Bank account for your business',
      ],
    };
  },
});
</script>
