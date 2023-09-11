<template>
  <div class=" bg-menu-inside
                shadow-2xl
                border-menu-outside
                border-20">
    <h1 class="text-center mb-4 text-4xl font-extrabold leading-none tracking-tight text-menu-title :text-5xl lg:text-6xl">Wellcome, let order my delicious cookie</h1>
    <div v-if="!isFillInfor" class="flex-col justify-center">
      <v-container>
        <v-progress-circular
          color="blue-lighten-3"
          indeterminate
          :size="68"
          :width="7"
          v-if="loading"
        ></v-progress-circular>
        <v-row v-else>
          <v-col v-for="product in products" :key="product.id" sm="4">
            <productItem :product="product" @add-item="AddCart"/>
          </v-col>
        </v-row>
      </v-container>
      <div v-if="itemsChoiced.length > 0" class="border-t-4 border-slate-800 p-10">
        <productCart :product="itemsChoiced" @remove-item="removeItem" @is-order="isFillInfor = true"/>
      </div>
      <div v-else class="border-t-4 border-slate-800 mx-20">
        <h1 class="text-center">Your cart is empty now</h1>
      </div>
    </div>
    <div v-else>
      <infoForm @back-order="isFillInfor=false" :products="itemsChoiced"/>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import productCart from './components/productCart.vue'
import productItem from './components/productItem.vue'
import infoForm from './components/infoForm.vue'
export default {
  components:{
    productCart,
    productItem,
    infoForm
  },
 data() {
  return {
    products:[],
    loading: true,
    itemsChoiced: [],
    isFillInfor: false
  }
 },
 methods: {
  async getProducts(){
    try{
      const res = await axios.get('/product')
      this.products = res.data
      this.loading = false
    }
    catch(e){
      alert("something err")
      this.loading = false
    }
  },
  removeItem(idItem){
    this.itemsChoiced.forEach(element => {
      if(element.productData._id===idItem) element.quantity -= 1
    });
    this.itemsChoiced = this.itemsChoiced.filter((curr)=>curr.quantity > 0)
  },
  AddCart(product){
    let items = {
      productData: {...product},
      quantity:1}
    let found = false
    for (let index = 0; index < this.itemsChoiced.length; index++) {
      if(this.itemsChoiced[index].productData._id===product._id){
        this.itemsChoiced[index].quantity += 1
        found = true
      }
    }
    if(!found) this.itemsChoiced.push(items)
    }
  },
  computed:{
  },
  mounted() {
    this.getProducts()
  },
}
</script>

<style scoped>
.v-locale--is-ltr{
  text-align: center;
}
</style>