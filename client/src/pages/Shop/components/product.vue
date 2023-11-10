<script>
import Dropdown from 'primevue/dropdown';
export default{
    components: {
        Dropdown
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
    <div class="w-80">
        <div class="bg-[url('/src/assets/boots.png')] h-80 w-80 bg-cover hover:bg-[url('/src/assets/foot_boot.png')]">
        </div>
        <div>
            <p class="mb-2">Anyday Rain Boot In Black</p>
            <p class="mb-5">5.000.000 VND</p>
            <Dropdown 
                v-model="selectedCity" 
                :options="cities" 
                optionLabel="name" 
                placeholder="Select a City" 
                class="w-full md:w-14rem mb-2" />
            <button class="w-full rounded-xl bg-[#253c36] text-white font-semibold py-1 px-4">Add to cart</button>
        </div>
    </div>
</template>