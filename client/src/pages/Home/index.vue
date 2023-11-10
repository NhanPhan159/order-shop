<template>
  <div>
      <Banner />
      <Product />
      <Bestsellers />
      <Pages />
      <Contact />
  </div>
</template>

<script setup>
import Banner from "./components/Banner.vue";
import Product from "./components/Product.vue";
import Bestsellers from "./components/Bestsellers.vue";
import Pages from "./components/Pages.vue";
import Contact from "./components/Contact.vue";
</script>

<style scoped>
.height {
  height: 3000px;
}
</style>
