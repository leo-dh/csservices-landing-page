<template>
  <div class="flex py-4">
    <div
      class="rounded-full bg-green-300 h-16 w-16 flex items-center justify-center flex-shrink-0 circle"
    >
      {{ stepNum }}
    </div>
    <div class="speech-bubble ml-4 px-4 py-2 bg-green-300 w-full">{{ text }}</div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: {
    stepNum: {
      type: Number,
      default: 1,
    },
    text: {
      type: String,
      default: 'Hello World',
    },
  },
});
</script>

<style scoped>
.speech-bubble {
  position: relative;
  border-radius: 0.4em;
}

.speech-bubble::after {
  content: '';
  position: absolute;
  left: 0;
  top: 2rem;
  width: 0;
  height: 0;
  border: 0.625em solid transparent;
  border-right-color: theme('colors.green.300');
  border-left: 0;
  margin-top: -0.625em;
  margin-left: -0.625em;
}

.circle {
  position: relative;
}
.circle::after {
  position: absolute;
  content: '';
  left: 50%;
  width: 2px;
  height: calc(100% + 2rem);
  top: -1rem;
  @apply bg-gray-500;
  z-index: -1;
}
</style>
