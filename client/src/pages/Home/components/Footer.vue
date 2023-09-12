<template>
  <section>
    <div class="max-w-screen-xl mx-auto flex gap-4 text-white py-10">
      <div class="flex-1">
        <img src="../../../assets/footerLogo.png" width="100" />
        <div class="font-semibold text-lg py-4">
          Socially and environmentally progressive outdoor footwear
        </div>
        <ul class="flex gap-8 py-2">
          <li>
            <span class="pi pi-facebook"></span>
          </li>
          <li>
            <span class="pi pi-twitter"></span>
          </li>
          <li>
            <span class="pi pi-instagram"></span>
          </li>
          <li>
            <span class="pi pi-prime"></span>
          </li>
        </ul>
      </div>
      <div class="flex-1 heading">
        <div>Our Shop</div>
        <ul class="flex gap-4 flex-col">
          <li>
            <span>All Products</span>
          </li>
          <li>
            <span>The Weekend Boot</span>
          </li>
          <li>
            <span>The Anyday Rain Boot </span>
          </li>
          <li>
            <span>The Winter Weekend Boot Z</span>
          </li>
          <li>
            <span>The Terrus Clog</span>
          </li>
          <li>
            <span>Accessories</span>
          </li>
        </ul>
      </div>
      <div class="flex-1 heading">
        <div>Help</div>
        <ul class="flex gap-4 flex-col">
          <li>
            <span>SIze guide</span>
          </li>
          <li>
            <span>Shipping Information</span>
          </li>
          <li>
            <span>Refund Policy</span>
          </li>
          <li>
            <span>Wear and Care FAQ</span>
          </li>
        </ul>
      </div>
      <div class="flex-1 heading">
        <div>About us</div>
        <ul class="flex gap-4 flex-col">
          <li>
            <span>Values</span>
          </li>
          <li>
            <span>Contact Us</span>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style scoped>
section {
  background-color: #123026;
}
.heading > div {
  font-weight: 600;
  font-size: 24px;
  margin-bottom: 16px;
}
.heading span {
  font-size: 14px;
  color: rgb(186, 199, 199);
}
.heading span:hover {
  color: #fff;
  text-decoration: underline;
  cursor: pointer;
}
</style>
