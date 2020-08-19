<template>
  <div class="flex flex-col justify-center items-center page-transition">
    <hero-section
      img-src="images/loui-kiaer-CielzQJR0SQ-unsplash.jpg"
      title="Services"
      subtitle="Getting started simplified"
    />
    <div class="content-area w-full">
      <div class="flex flex-col items-center align-center text-center text-2xl xl:text-3xl">
        <h2 class="font-bold text-navy-500">
          Registering and Incoporating a company is kind of complicated..
        </h2>
        <p class="text-navy-500 mt-8">
          but you only need to know these <span class="text-peach-500">4</span> steps.
        </p>
      </div>
      <div class="my-12">
        <timeline-component :circle-classes="['bg-peach-400', 'text-white']">
          <template v-slot:indicator>1</template>
          <template v-slot:content>
            <span class="font-semibold text-lg text-navy-500"> Think of your company name! </span>
            <span class="block text-sm text-gray-800 mt-4">
              Probably something that you are not going to regret in a week's time.
            </span>
          </template>
        </timeline-component>
        <timeline-component :circle-classes="['bg-peach-500', 'text-white']">
          <template v-slot:indicator>2</template>
          <template v-slot:content>
            <span class="font-semibold text-lg text-navy-500">Contact Us</span>
            <span class="block text-sm text-gray-800 mt-4"
              >Call our office hotline or head over to the
              <nuxt-link to="/contactus" class="underline">contact page</nuxt-link>
              to make an appointment!
            </span>
          </template>
        </timeline-component>
        <timeline-component :circle-classes="['bg-peach-600', 'text-white']">
          <template v-slot:indicator>3</template>
          <template v-slot:content>
            <span class="font-semibold text-lg text-navy-500">Prepare Information</span>
            <span class="block text-sm text-gray-800 mt-4"
              >Don't worry! We will guide you on what information is necessary to complete the
              process.
            </span>
          </template>
        </timeline-component>
        <timeline-component :circle-classes="['bg-peach-700', 'text-white']">
          <template v-slot:indicator>4</template>
          <template v-slot:content>
            <span class="font-semibold text-lg text-navy-500">
              Setup a Bank account for your business
            </span>
            <span class="block text-sm text-gray-800 mt-4">
              Choose a bank of your choice and you're ready to go.
            </span>
          </template>
        </timeline-component>
      </div>
      <div>
        <h2 class="font-bold text-navy-500 text-xl text-center lg:text-2xl xl:text-3xl">
          What you can expect at base price - <span class="text-peach-500">$678</span>
        </h2>
        <div class="grid-container mt-6 gap-8 md:mt-10 lg:mt-12">
          <template v-for="(benefit, i) in benefits">
            <div :key="i" class="flex items-center px-4 fade-in fade-transition">
              <img :src="benefit.imgSrc" alt="" class="w-10 h-10" />
              <p class="ml-8 text-navy-500 flex-grow text-center md:flex-grow-0 md:text-left">
                {{ benefit.text }}
              </p>
            </div>
          </template>
        </div>
      </div>
      <div class="mt-12 md:mt-16 lg:mt-24">
        <h2 class="font-bold text-navy-500 text-xl text-center lg:text-2xl xl:text-3xl">
          Additional add-ons<span class="text-peach-500">*</span> should you require them
        </h2>
        <div class="grid-container mt-6 gap-8 md:mt-10 lg:mt-12">
          <template v-for="(addon, i) in addons">
            <div :key="i" class="flex items-center px-4 fade-in fade-transition">
              <img :src="addon.imgSrc" alt="" class="w-10 h-10" />
              <p class="ml-8 text-navy-500 flex-grow text-center md:flex-grow-0 md:text-left">
                {{ addon.text }}
              </p>
            </div>
          </template>
        </div>
        <div class="text-navy-500 text-sm italic mt-12 md:mt-16 text-center md:text-left">
          * Subjected to additional costs
        </div>
      </div>
    </div>
    <banner-section
      button-text="Contact Us Now!"
      title-text="Any Further Questions?"
      link-path="/contactus"
      class="bg-gray-200"
    />
  </div>
</template>

<script lang="ts">
import HeroSection from '@/components/HeroSection.vue';
import BannerSection from '@/components/BannerSection.vue';
import TimelineComponent from '@/components/TimelineComponent.vue';
import mixins from 'vue-typed-mixins';
import PageTransitionMixin from '@/mixins/PageTransitionMixin';
import FadeInMixin from '~/mixins/FadeInMixin';

export default mixins(PageTransitionMixin, FadeInMixin).extend({
  components: {
    HeroSection,
    BannerSection,
    TimelineComponent,
  },
  data() {
    return {
      benefits: [
        { imgSrc: 'svg/price.svg', text: 'No Miscellaneous Fee' },
        { imgSrc: 'svg/document.svg', text: 'Incorporation Documents' },
        { imgSrc: 'svg/portfolio.svg', text: 'Working Biz Profile' },
        { imgSrc: 'svg/stamp.svg', text: 'Common Seal and Stamp' },
        { imgSrc: 'svg/bank.svg', text: 'Opening of Bank Account' },
        { imgSrc: 'svg/year.svg', text: 'Company Secretarial Services for 1 year' },
      ],
      addons: [
        { imgSrc: 'svg/user.svg', text: 'Local Director Service' },
        { imgSrc: 'svg/id-card.svg', text: 'Any form of Employment Pass' },
        { imgSrc: 'svg/address.svg', text: 'Local Address Service' },
        { imgSrc: 'svg/mail.svg', text: 'Mail Forwarding' },
      ],
    };
  },
});
</script>

<style scoped>
.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(290px, 1fr));
}
.fade-in {
  opacity: 0;
  transform: translateY(50px);
}
.fade-transition {
  transition: all 0.3s ease-out;
}
</style>
