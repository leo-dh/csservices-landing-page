<template>
  <div class="w-screen flex items-center justify-center">
    <div class="content-area w-full">
      <h1 class="font-bold text-navy-500 text-3xl mb-4 xl:text-4xl">Testimonials</h1>
      <div class="flex flex-col lg:flex-row lg:justify-around">
        <template v-for="(testimonialCard, i) in testimonialCards">
          <testimonial-card
            :key="i"
            :testimonial-card-data="testimonialCard"
            class="my-6 fade-in fade-transition"
          />
        </template>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import TestimonialCard from '@/components/TestimonialCard.vue';
import mixins from 'vue-typed-mixins';
import FadeInMixin from '@/mixins/FadeInMixin';

export default mixins(FadeInMixin).extend({
  components: {
    TestimonialCard,
  },
  data() {
    return {
      testimonialCards: [
        {
          imgSrc: 'images/dylan-gillis-KdeqA3aTnBY-unsplash.jpg',
          logoSrc: 'logos/novasolutions200x200.png',
          logoAlt: 'Nova Solutions Logo',
          company: 'Nova Solutions',
          date: 'Jun 18',
          quote:
            "Your after sales support team is fast and efficient. We didn't expect our request to be fulfilled to within the same day.",
        },
        {
          imgSrc: 'images/dylan-gillis-KdeqA3aTnBY-unsplash.jpg',
          logoSrc: 'logos/jansdental200x200.png',
          logoAlt: "Jan's Dental Logo",
          company: "Jan's Dental",
          date: 'Sep 18',
          quote:
            "You guys really made the process simple! We can't believe that the process was finished within a day.",
        },
        {
          imgSrc: 'images/dylan-gillis-KdeqA3aTnBY-unsplash.jpg',
          logoSrc: 'logos/xcellencecenter200x200.png',
          logoAlt: 'Xcellence Center Logo',
          company: 'Xcellence Center',
          date: 'Nov 18',
          quote:
            'We consulted multiple different firms prior to this and we felt that CSServices provided the best service. Clear explanation and meticulous guidance made the process felt like a breeze.',
        },
      ],
    };
  },
});
</script>

<style scoped>
.fade-in {
  opacity: 0;
  transform: translateY(50px);
}
.fade-transition {
  transition: all 0.3s ease-out;
}
</style>
