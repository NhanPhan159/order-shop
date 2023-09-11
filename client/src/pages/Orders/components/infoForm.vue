<template>
  <div class="mb-20">
    <div class="flex justify-normal gap-96 items-center">
      <v-btn class="mx-20" icon="mdi-arrow-left-circle" @click="$emit('backOrder')"></v-btn>
      <p class="text-3xl text-slate-500 text-center">Fill information to form</p>
    </div>
    <div class="px-60 pt-10">
      <v-form @submit.prevent ref="info_form" validate-on="submit">
        <div class="flex gap-20 mb-4" >
          <v-text-field v-model="infoForm.firstName" :rules="[rules.firstName]" label="First name" variant="solo"></v-text-field>
  
          <v-text-field v-model="infoForm.lastName" :rules="[rules.lastName]" label="Last name" variant="solo"></v-text-field>
        </div>

        <v-text-field v-model="infoForm.phone" :rules="rules.phone" class="mb-4" label="Phone" variant="solo"></v-text-field>

        <v-text-field v-model="infoForm.address" :rules="[rules.address]" label="Address" variant="solo"></v-text-field>
        <Divider class="border-2 border-dashed border-slate-800"/>
        <div class="mt-10">
        <p class="text-center">Your order</p>  
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg w-3/4 left-3/25 top-8">
          <table class="w-full text-sm text-left text-gray-500">
              <thead class="text-xs text-red uppercase bg-white">
                  <tr>
                      <th scope="col" class="px-6 py-3">
                          Product name
                      </th>
                      <th scope="col" class="px-6 py-3">
                          Price
                      </th>
                  </tr>
              </thead>
              <tbody>
                  <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700" v-for="item in itemBill" :key="item">
                      <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                          {{ item.items }}
                      </th>
                      <td class="px-6 py-4">
                          {{ item.subtotal }}VND
                      </td>
                  </tr>         
              </tbody>
              <tfoot>
                  <tr class="font-bold text-gray-900 bg-white">
                      <th scope="row" class="px-6 py-3 text-base">Total</th>
                      <td class="px-6 py-3">{{ totalBill }}VND</td>
                  </tr>
              </tfoot>
          </table>
      </div>
    </div>
    <div class="flex justify-center mt-20">
      <v-btn type="submit" @click="submitInfoForm" class="mt-2">Submit</v-btn>
    </div>
      </v-form>
      </div>
  </div>
    
</template>
<script>
import axios from 'axios'
import Divider from 'primevue/divider';

  export default {
    components:{
      Divider
    },
    props:["products"],
    data(){
      return{
        infoForm:{
          firstName:'',
          lastName:'',
          phone: null,
          address:''
        },
        bill:{

        },
        rules:{
          firstName: value => !!value || 'required',
          lastName: value => !!value || 'required',
          phone: [value => /[0-9]/.test(value) || 'phone do not contain character',
                  value => value.length >= 10 || 'invalid phone'],
          address: value => value.length > 5 || 'required'
        }
      }
    },
    computed:{
      itemBill(){
        const itembill = this.products.map((curr)=>({
          items: curr.productData.name + "  x" + curr.quantity,
          subtotal: curr.quantity * curr.productData.price
          })
        )
        return itembill
      },
      totalBill(){
            const price = this.products.reduce((re,curr)=>re+curr.productData.price * curr.quantity,0)
            return price
        },
    },
    methods:{
      async submitInfoForm(){
           const {valid} = await this.$refs.info_form.validate()
           if(valid){
              this.bill.products = this.products
              this.bill.contact = this.infoForm
              const re = await axios.post("/order",this.bill)
           }
        }
    }
  }
</script>
<style>
</style>