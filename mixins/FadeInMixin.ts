import Vue from 'vue';

export default Vue.extend({
  data() {
    return {
      fadeInElements: [] as Element[],
    };
  },
  mounted() {
    this.fadeInElements = Array.from(this.$el.getElementsByClassName('fade-in'));
    document.addEventListener('scroll', this.scrollCallback);
  },
  destroyed() {
    document.removeEventListener('scroll', this.scrollCallback);
  },
  methods: {
    scrollCallback(): void {
      this.fadeInElements.forEach((el: Element, i: number): void => {
        if (this.isElemVisible(el)) {
          el.classList.remove('fade-in');
          this.$data.fadeInElements.splice(i, 1);
        }
      });
    },
    isElemVisible(el: Element): boolean {
      const buffer = 50;
      const rect = el.getBoundingClientRect();
      const elemTop = rect.top + buffer;
      const elemBottom = rect.bottom;
      return elemTop < window.innerHeight && elemBottom >= 0;
    },
  },
});
