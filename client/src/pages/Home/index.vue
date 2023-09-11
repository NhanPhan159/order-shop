<template>
    <div class="flex mt-20">
      <div class="grow-0 px-10 py-20">
        <h1 class="text-3xl font-bold text-slate-500">Charles kotary</h1>
        <p class="my-10 text-lg">We strike to bring people the best pies by using
        the freshest ingredients we can find</p>
        <v-btn variant="tonal"  rounded="xl" @click="Order()" class="text-orange-500">Order now</v-btn>
      </div>
      <div class="grow flex justify-center">
        <img src="../../assets/piza.jpg" class="w-1/2 h-5/6" alt="">
      </div>
    </div>
</template>

<script>
export default{
  methods:{
    Order(){
      this.$router.push('/order')
    }
  }
}
</script>

<style>

</style>
