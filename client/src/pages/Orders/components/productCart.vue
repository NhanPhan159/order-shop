<template>
  <div>

<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-menu-text-bill uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Product name
                </th>
                <th scope="col" class="px-6 py-3">
                    Price
                </th>
                <th scope="col" class="px-6 py-3">
                    Quantity
                </th>
                <th scope="col" class="px-6 py-3">
                    Subtotal
                </th>
                <th scope="col" class="px-6 py-3">
                    
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in product" :key="item.id" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-bold text-orange-800 whitespace-nowrap">
                    {{ item.productData.name }}
                </th>
                <td class="px-6 py-4">
                    {{ item.productData.price }}VND
                </td>
                <td class="px-6 py-4">
                    {{ item.quantity }}
                </td>
                <td class="px-6 py-4">
                    {{ item.productData.price * item.quantity }}VND
                </td>
                <td class="px-6 py-4">
                    <button class="font-medium text-blue-600 dark:text-blue-500 hover:underline" @click="$emit('removeItem',item._id)">Remove</button>
                </td>
            </tr>
        </tbody>
        <tfoot>
            <tr class="font-bold text-gray-900 bg-white">
                <th scope="row" class="px-6 py-3 text-base">Total</th>
                <td class="px-6 py-3"></td>
                <td class="px-6 py-3">{{ quantityCart }}</td>
                <td class="px-6 py-3">{{ priceCart }}VND</td>
                <td class="px-6 py-3"></td>
            </tr>
        </tfoot>
    </table>
    </div>
    <div class="flex justify-center mt-3">
        <button type="button" @click="this.$emit('isOrder')" class="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700">Proces information</button> 
    </div>
</div>
</template>

<script>
export default {
    props:["product"],
    computed:{
        quantityCart(){
            const quantity = this.product.reduce((re,curr)=>re+curr.quantity,0)
            return quantity
        },
        priceCart(){
            const price = this.product.reduce((re,curr)=>re + curr.productData.price * curr.quantity,0)
            return price
        },
    }
}
</script>

<style>

</style>