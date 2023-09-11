<template>
<header>
    <div class="flex justify-between bg-header-nav px-5 py-5">
        <div class="flex">
            <div class="text-xl font-extrabold text-red-400 border-r-4 border-solid border-orange-300 pr-5">
                Charlotte <br>
                Bakery <br>
            </div>
            <div class="flex gap-12 text-lg font-bold text-center ml-15 items-center">
                <router-link to="/" class="inline-block px-4 py-2 rounded-xl text-orange-300 hover:text-white hover:bg-blue-600  dark:hover:text-white">About us</router-link>
                <restrict class="flex gap-12">
                    <router-link to="/product" class="inline-block px-4 py-2 rounded-xl text-orange-300 hover:text-white hover:bg-blue-600  dark:hover:text-white">Product</router-link>
                    <router-link to="/bill" class="inline-block px-4 py-2 rounded-xl text-orange-300 hover:text-white hover:bg-blue-600  dark:hover:text-white">Bill</router-link>
                </restrict>
            </div>
        </div>
        <div >
            <v-btn
                    prepend-icon="mdi-account"
                    append-icon="mdi-menu"
                    rounded="xl"
                    size="large"
                    @click="toggle"
                    > 
                    {{ username }}
                    </v-btn>
            <Menu ref="menu" :model="items" :popup="true">
                <template #item="{ item, label, props }">
                    <h1 v-if="username && label==='Logout'">{{ label }}</h1>
                    <h1 v-if="!username && label==='Login'">{{ label }}</h1>
                </template>
            </Menu>
        </div>
    </div>
</header>
  
</template>

<script>
import restrict from '../components/restrict.vue';
import Menu from 'primevue/menu';
import Button from 'primevue/button';

export default {
    data(){
        return {
            items: [
                {
                    label: 'Action',
                    items: [
                        {
                            label: 'Login',
                            command: () => {
                                this.$router.push("/login")
                            }
                        },
                        {
                            label: 'Logout',
                            command: () =>{
                                localStorage.removeItem("ids")
                                localStorage.removeItem("token")
                                window.location.href="/"
                            }
                        }
                    ]
                }
            ]
        }
    },
    components:{
        restrict,
        Menu,
        Button
    },
    methods : {
        toggle(event) {
            this.$refs.menu.toggle(event);
        },
    },
    computed:{
        username(){
            return this.$store.state.username
        }
    }
}
</script>

<style>

</style>