<template>
    <div>
            <slot v-if="isAdmin"></slot>
    </div>
</template>
<script>
import axios from 'axios';
import { mapState } from 'vuex';

export default{
    data(){
        return{
            isAdmin: false,
        }
    },
    computed: mapState(['isLogin']),
    methods:{
        async checkAdmin(){
            const re = await axios.get("/user/role")
            re.data == "admin"? this.isAdmin=true:null
        }
    },
    watch:{
      async isLogin(newQuestion, oldQuestion) {
        if (newQuestion) {
           await this.checkAdmin()
        }
      }
    }
}
</script>
<style>
</style>