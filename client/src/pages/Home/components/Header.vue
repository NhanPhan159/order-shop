<template>
  <div class="flex text-white items-center bg-teal-950 justify-center p-2">
    <p class="font-semibold text-sm">Free shipping. Easy returns. Pay in 4 installments.</p>
  </div>
  <div class="sticky">
    <div class="max-w-screen-xl px-4 py-2 flex m-auto items-center text-slate-500">
      <div>
        <img src="../../../assets/logo.png" alt="logo" />
      </div>
      <ul class="flex ml-10 items-center gap-6">
        <li class="hover:underline underline-offset-4 hover:cursor-pointer">Bestsellers</li>
        <li class="hover:underline underline-offset-4 hover:cursor-pointer">Rain Boots</li>
        <li class="hover:underline underline-offset-4 hover:cursor-pointer">Weekend Boots</li>
        <li class="hover:underline underline-offset-4 hover:cursor-pointer">Terrus Clogs</li>
        <li class="hover:underline underline-offset-4 hover:cursor-pointer">Shop All</li>
        <li class="hover:underline underline-offset-4 hover:cursor-pointer">Values</li>
      </ul>
      <div class="flex-1"></div>
      <div class="flex items-center gap-6">
        <div class="hover:underline underline-offset-4 hover:cursor-pointer">VND₫ | Vietnam</div>
        <span
          style="font-size: 1.3rem"
          class="hover:scale-105 hover:cursor-pointer pi pi-search"
        ></span>
        <span
          style="font-size: 1.3rem"
          class="hover:scale-105 hover:cursor-pointer pi pi-user"
        ></span>
        <span
          style="font-size: 1.3rem"
          class="hover:scale-105 hover:cursor-pointer pi pi-shopping-bag"
        ></span>
      </div>
    </div>
  </div>
</template>

<script setup>
const isSticky = ref(false);
import { ref, onMounted } from "vue";

const handleScroll = () => {
  if (window.scrollY > 0) {
    isSticky.value = true;
  } else {
    isSticky.value = false;
  }
};
</script>

<style scoped>
.sticky {
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 10;
  background-color: #fff;
}
</style>
