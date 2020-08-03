<template>
  <div class="bg-gray-300 min-h-screen w-screen">
    <testimonial-card :testimonial-card-data="testimonialCard" />
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
      testimonialCard: {
        imgSrc: 'logos/5d14fcfc-885b-49a4-8004-ac834ebbc284_200x200.png',
        imgAlt: 'Nova Solutions Logo',
        company: 'Nova Solutions',
        quote:
          ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae saepe voluptate quam illo accusamus fugit autem, non laboriosam libero natus! ',
      },
    };
  },
});
</script>

<style scoped></style>
