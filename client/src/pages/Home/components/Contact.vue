<template>
  <section class="bg-gray-200 p-20">
    <div class="max-w-screen-2xl mx-auto">
      <div class="text-center font-semibold text-4xl">
        Let’s stay in touch. Get $10 off your first purchase, early access to new releases and
        outdoor tips, trips and education.
      </div>
      <p class="text-center text-gray-500 text-lg font-normal mt-4 mb-8">
        Be the first to know about new collections and exclusive offers.
      </p>
      <form class="text-center">
        <InputText type="text" v-model="value" placeholder="Your e-mail" />
        <Button label="Sign Up" severity="secondary" />
      </form>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import InputText from "primevue/inputtext";
import Button from "primevue/button";
const value = ref("");
</script>

<style lang="scss" scoped></style>
