<script>
import banner_all from "../../assets/sustainable-boots4.png"
import Dropdown from 'primevue/dropdown';
import product from './components/product.vue'
export default{
    components:{
        Dropdown,
        product
    },
    data(){
        return{
            selectedCity: null,
            cities: [
                { name: 'New York', code: 'NY' },
                { name: 'Rome', code: 'RM' },
                { name: 'London', code: 'LDN' },
                { name: 'Istanbul', code: 'IST' },
                { name: 'Paris', code: 'PRS' }
            ]
        }
    }
}
</script>
<template>
    <div class="">
        <div class="w-full h-[32rem] relative">
            <img src="/src/assets/sustainable-boots4.png" class="object-fill" alt="">
            <div class="absolute top-1/2 left-1/2 right-0 transform -translate-x-1/2 -translate-y-1/2">
                <div class="flex flex-col gap-4 items-center">
                    <h2 class="text-5xl font-bold text-white">RESTORED</h2>
                    <p class="text-2xl text-[#BBBABC]">Our bestselling Weekend Boots are back, just in time for fall!</p>
                </div>
            </div>
        </div>
        <div class="mt-8 mx-32">
            <h1 class="text-5xl text-[#123026] font-semibold pb-20">Shop All</h1>
            <div class="flex justify-between">
                <div class="flex items-center">
                    <span>Filter: </span>
                    <Dropdown 
                        v-model="selectedCity" 
                        :options="cities" 
                        optionLabel="name" 
                        placeholder="Select a City" 
                        class="w-full md:w-14rem" />
                </div>
                <div class="flex items-center">
                    <span>Filter: </span>
                    <Dropdown 
                        v-model="selectedCity" 
                        :options="cities" 
                        optionLabel="name" 
                        class="w-full md:w-14rem" />
                    <p class="text-[#8D9C97] block whitespace-nowrap ml-5">26 products</p>
                </div>
            </div>
            <div>
                <product/>
            </div>
        </div>
    </div>
</template>