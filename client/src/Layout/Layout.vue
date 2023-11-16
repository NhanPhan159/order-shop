<template>
  <div v-if="role == 'admin'">
    <AdminPage/>
  </div>
  <div v-else>
    <Header/>
    <div>
      <router-view></router-view>
    </div>
    <Footer/>
  </div>
</template>

<script>
import AdminPage from "../pages/admin/index.vue"
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import axios from "axios";
export default {
  components: {
    Header,
    Footer,
    AdminPage
  },
  computed: {
  role () {
    return this.$store.getters.getRole
  },
},
beforeMount(){
    axios.get("/account/user/role",{
      withCredentials: true
    })
    .then((re)=> this.$store.commit("setRoleUser",re.data))
    .catch((e)=>console.log(e))
  }
};
</script>

<style></style>
