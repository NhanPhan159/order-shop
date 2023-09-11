<script>
import axios from 'axios'
import addProduct from './components/addProduct.vue'
import editProduct from'./components/editProduct.vue'
import ProgressSpinner from 'primevue/progressspinner'
import Paginator from 'primevue/paginator'

export default{
    components:{
        addProduct,
        editProduct,
        ProgressSpinner,
        Paginator
    },
    data(){
        return{
            loading: true,
            products: null
        }
    },
    methods:{
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
        async delProduct(id){
            const res = await axios.delete(`/product/${id}`)
            this.products = this.products.filter(i=>i._id !== id)
            this.$toast.add({ severity: 'warning', summary: 'Deleted', detail: 'Da xoa', life: 3000 });
        },
        async reloadPageEdit() {
            await this.getProducts()
            this.$toast.add({ severity: 'success', summary: 'Success Message', detail: 'Edit done', life: 3000 });
        }

    },
    mounted(){
        this.getProducts()
    }
    
}
</script>

<template>
    <div>
        <Toast/>
        <div class="flex justify-end mb-6">
            <addProduct @reload-page="getProducts"/>
        </div>
        <div v-if="loading" class="card flex-col justify-content-center text-center">
            <p class="text-3xl font-medium text-gray-900 dark:text-white">Waiting for load</p>
            <ProgressSpinner />
        </div>
        <div v-else class="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-menu-text-bill uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                            Image
                        </th>
                        <th scope="col" class="px-3 py-3">
                            Product name
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Price
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Description
                        </th>
                        <th scope="col" class="px-1 py-3 text-center">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in products" :key="item.id" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <td class="w-32 p-4">
                            <img :src="'http://127.0.0.1:4000/'+ item.image" alt="Apple Watch">
                        </td>
                        <th scope="row" class="px-3 py-4 font-bold text-orange-800 whitespace-nowrap">
                            {{ item.name }}
                        </th>
                        <td class="px-6 py-4">
                            {{ item.price }}VND
                        </td>
                        <td class="px-6 py-4">
                            {{ item.description }}
                        </td>
                        <td class="py-4 flex justify-center">
                            <div class="flex gap-10 justify-center items-center">
                                <v-btn icon="mdi-delete" @click="delProduct(item._id)"></v-btn>
                                <editProduct :itemProduct="item" @reload-page-edit="reloadPageEdit"/>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <Paginator :rows="10" :totalRecords="120"></Paginator>
        </div>
    </div>
</template>

<style>
</style>