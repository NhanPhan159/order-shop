<script setup>
  import axios from 'axios';
  import Layout from './Layout/Layout.vue';
  import { ref, onMounted } from 'vue'
  import { useStore } from 'vuex'

  const store = useStore()

  async function getInforFromToken() {
    const ids = localStorage.getItem("ids")
    if(ids){
      const res = await axios.get(`user/${ids}`)
      store.commit("setInforUser",res.data.username)
    }
  }

  onMounted(() => {
    getInforFromToken()
  })
</script>

<template>
  <div class="">
    <Layout/>
  </div>
    
</template>

<style scoped>

</style>
