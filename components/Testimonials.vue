<template>
  <div class="bg-gray-200 py-10 section-container">
    <h1 class="font-bold text-navy-500 text-3xl mb-4">Testimonials</h1>
    <template v-for="(testimonialCard, i) in testimonialCards">
      <testimonial-card :key="i" :testimonial-card-data="testimonialCard" class="my-6" />
    </template>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import TestimonialCard from '@/components/TestimonialCard.vue';

export default Vue.extend({
  components: {
    TestimonialCard,
  },
  data() {
    return {
      testimonialCards: [
        {
          imgSrc: 'logos/novasolutions200x200.png',
          imgAlt: 'Nova Solutions Logo',
          company: 'Nova Solutions',
          date: 'Jun 18',
          quote:
            "Your after sales support team is fast and efficient. We didn't expect our request to be fulfilled to within the same day.",
        },
        {
          imgSrc: 'logos/jansdental200x200.png',
          imgAlt: "Jan's Dental Logo",
          company: "Jan's Dental",
          date: 'Sep 18',
          quote:
            "You guys really made the proces simple! We can't believe that the process was finished within a day.",
        },
        {
          imgSrc: 'logos/xcellencecenter200x200.png',
          imgAlt: 'Xcellence Center Logo',
          company: 'Xcellence Center',
          date: 'Nov 18',
          quote:
            'We consulted multiple different firms prior to this and you are the most sincere of all.',
        },
      ],
    };
  },
});
</script>

<style scoped></style>
