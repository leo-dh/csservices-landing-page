<template>
  <div class="w-screen bg-blue-100 flex justify-center items-center">
    <div class="content-area flex flex-row items-center lg:-my-20 xl:-my-32">
      <div class="hidden lg:block w-3/4 lg:px-10 xl:px-16">
        <h2 class="text-2xl font-bold text-navy-500 lg:text-3xl xl:text-4xl">
          Send us an enquiry now!
        </h2>
        <p class="text-sm text-gray-700 mt-8 textWidth lg:text-base">
          Our consultants will contact you within an hour of your submission. If your submission is
          made outside of office hours, our consultants will contact you on the next working day.
        </p>
      </div>

      <div
        class="flex justify-center items-center lg:bg-white lg:px-12 lg:py-12 lg:rounded-lg lg:shadow-xl"
      >
        <div id="contactsection">
          <div class="text-left lg:hidden">
            <h2 class="text-2xl font-bold text-navy-500">Send us an enquiry now!</h2>
            <p class="text-sm text-gray-700 mt-4">
              Our consultants will contact you within an hour of your submission. If your submission
              is made outside of office hours, our consultants will contact you on the next working
              day.
            </p>
          </div>
          <contact-form class="mt-10 flex flex-col text-left lg:mt-0" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import ContactForm from '@/components/ContactForm.vue';

export default Vue.extend({
  components: {
    ContactForm,
  },
  data() {
    return {};
  },
});
</script>

<style scoped>
.textWidth {
  max-width: 55ch;
}
</style>
