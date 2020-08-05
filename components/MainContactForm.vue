<template>
  <div id="contactsection" class="py-10 bg-blue-100 section-container">
    <div class="text-left">
      <h2 class="text-2xl font-bold text-navy-500">Send us an enquiry now!</h2>
      <p class="text-sm text-gray-700 mt-4">
        Our consultants will contact you within an hour of your submission. If your submission is
        made outside of office hours, our consultants will contact you on the next working day.
      </p>
    </div>
    <form action="" class="mt-6 flex flex-col text-left">
      <form-input-field
        class="mt-6"
        label="Name"
        input-field-id="name"
        placeholder="Name*"
        field-type="text"
      />
      <form-input-field
        class="mt-6"
        label="Email"
        input-field-id="email"
        placeholder="Email*"
        field-type="email"
      />
      <form-input-field
        class="mt-6"
        label="Contact No."
        input-field-id="contactno"
        placeholder="Contact Number"
        field-type="tel"
      />
      <form-select-field
        class="mt-6"
        label="Enquiry Category"
        select-field-id="enquirycategory"
        :options="options"
      />

      <div class="mt-6">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="comments"
          >Additional Comments</label
        >
        <textarea
          id="comments"
          rows="3"
          resize
          placeholder="E.g. Please contact me after 1500H."
          class="w-full shadow border focus:shadow-outline focus:outline-none px-3 py-2 text-sm"
        />
        <p class="text-xs italic text-gray-500">
          You can indicate your preferred mode of contact and when you want to be contacted.
        </p>
      </div>
      <button class="mt-6 bg-brick-500 text-white rounded font-bold px-4 py-2">SUBMIT</button>
    </form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import FormInputField from '@/components/FormInputField.vue';
import FormSelectField from '@/components/FormSelectField.vue';

export default Vue.extend({
  components: {
    FormInputField,
    FormSelectField,
  },
  data() {
    return {
      options: [
        { value: 'Company Incorporation', text: 'Company Incorporation' },
        { value: 'Company Secretarial Services', text: 'Company Secretarial Services' },
        { value: 'Company Accounting Services', text: 'Company Accounting Services' },
        { value: 'Others', text: 'Others' },
      ],
    };
  },
});
</script>

<style scoped></style>
