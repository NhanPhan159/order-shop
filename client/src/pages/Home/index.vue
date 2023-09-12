<template>
  <div>
    <Header />
    <div>
      <Banner />
      <Product />
      <Bestsellers />
      <Pages />
      <Contact />
    </div>
    <Footer />
  </div>
</template>

<script setup>
import Header from "./components/Header.vue";
import Banner from "./components/Banner.vue";
import Product from "./components/Product.vue";
import Bestsellers from "./components/Bestsellers.vue";
import Pages from "./components/Pages.vue";
import Contact from "./components/Contact.vue";
import Footer from "./components/Footer.vue";
</script>

<style scoped>
.height {
  height: 3000px;
}
</style>
