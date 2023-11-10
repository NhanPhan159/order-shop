<script>
import axios from 'axios';
import Button from 'primevue/button';
export default{
    components:{
        Button
    },
    data(){
        return{
            loginData:{
                username:"",
                password:""
            },
            rules:{}
        }
    },
    methods:{
        async login(){
            const re = await axios.post("/account/login",this.loginData)
            console.log(re.data);
            this.$store.commit('setInforUser',re.data)
            this.$router.push("/dashboard")
        }
    }
}
</script>
<template>
    <div class="flex justify-center">
        <div class="w-1/3">
            <v-form validate-on="submit lazy" @submit.prevent="submit">
                <h1 class="text-title-login font-bold text-4xl text-center my-10">Login</h1>
                <v-text-field
                    v-model="loginData.username"
                    :rules="rules"
                    label="User name"
                    variant="outlined"
                ></v-text-field>

                <v-text-field
                    v-model="loginData.password"
                    :rules="rules"
                    label="Password"
                    variant="outlined"
                ></v-text-field>
                <span class="text-sm text-slate-500 underline underline-offset-2 hover:decoration-black decoration-2">Forgot your password</span>
                <div class="flex justify-center my-7">
                    <Button style="background-color: #123026; padding: 10px 30px;" @click="login">Sign in</Button>
                </div>
            </v-form>
        </div>
    </div>
</template>
<style></style>