<template>
  <div>
    <label class="block text-gray-700 text-sm font-bold mb-2 xl:text-base" :for="inputFieldId">{{
      label
    }}</label>
    <input
      :id="inputFieldId"
      class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm xl:text-base"
      :type="fieldType"
      :placeholder="placeholder"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: {
    inputFieldId: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    fieldType: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      default: '',
    },
  },
});
</script>
