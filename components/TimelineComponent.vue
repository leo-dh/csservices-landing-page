<template>
  <div class="flex py-8 line">
    <div
      class="rounded-full h-16 w-16 flex items-center justify-center flex-shrink-0 circle font-bold text-lg"
      :class="circleClasses"
    >
      <slot name="indicator"> </slot>
    </div>
    <div class="speech-bubble ml-4 px-4 py-4 w-full" :class="speechBubbleClasses">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: {
    circleClasses: {
      type: Array as () => Array<String>,
      default: () => ['bg-gray-300'],
    },
    speechBubbleClasses: {
      type: Array as () => Array<String>,
      default: () => ['bg-gray-300', 'border-gray-300'],
    },
  },
});
</script>

<style scoped>
.speech-bubble {
  position: relative;
  border-radius: 0.4em;
  border-width: 0px;
}

.speech-bubble::after {
  content: '';
  position: absolute;
  left: 0;
  top: 2rem;
  width: 0;
  height: 0;
  border: 0.625em solid transparent;
  border-right-color: inherit;
  border-left: 0;
  margin-top: -0.625em;
  margin-left: -0.625em;
}

.circle {
  position: relative;
}
.line {
  position: relative;
}
.line::after {
  position: absolute;
  content: '';
  left: 2rem;
  width: 2px;
  height: 100%;
  top: 0px;
  @apply bg-gray-400;
  z-index: -1;
}
</style>
