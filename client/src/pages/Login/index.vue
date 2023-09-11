<template>
  <v-sheet width="300" class="mx-auto">
    <v-form fast-fail @submit.prevent>
      <v-text-field
        v-model="loginForm.username"
        label="Username"
        :rules="userNameRules"
      ></v-text-field>

      <v-text-field
        v-model="loginForm.password"
        label="Password"
        :rules="passwordRules"
      ></v-text-field>

      <v-btn type="primary" class="mt-2" @click="login">Loggin</v-btn>
    </v-form>
  </v-sheet>
</template>
  
  <script>
  import axios from 'axios'
    export default {
      data: () => ({
      loginForm:{
        username:"",
        password:""
      },
      userNameRules: [
        value => {
          if (value?.length > 0) return true

          return 'Please fill in username'
        },
      ],
      passwordRules: [
        value => {
          if (value?.length > 0) return true

          return 'Oh you forgot password'
        },
      ],
    }),

      methods:{
        async login(){
            const re = await axios.post("/login",this.loginForm)
            const data = re.data.token.split(" ")
            this.$store.commit("setDataLocal",{
              token : data[1],
              idUser : re.data._id
            })
            this.$store.commit("setInforUser",re.data.username)
            this.$router.push('/')
        }
      }
    }
  </script>
  