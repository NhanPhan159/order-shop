<script>
export default{
    props:["product"],
    methods:{
    }
}
</script>
<template>
<div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <img class="object-cover h-80 w-96 rounded-t-lg" :src="'http://127.0.0.1:4000/'+ product.image" alt="product image" />
    <div class="px-5 pb-5">

        <h5 class="text-xl font-semibold tracking-tight text-gray-900 ">{{ product.name }}</h5>

        <div class="flex items-center mt-2.5 mb-5">
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{{ product.description }}</p>
        </div>
        <div class="flex items-center justify-between">
            <span class="text-3xl font-bold text-gray-900">{{ product.price }}VND</span>
            <button type="button" @click="$emit('addItem',product)" class="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Add cart</button>
        </div>
    </div>
</div>
</template>
<style>
</style>