<script>
import sideBarVue from './components/sideBar.vue';
export default {
    components:{
        sideBarVue
    }
}
</script>
<template>
    <div class="flex">
        <div class="flex-0">
            <sideBarVue/>
        </div>
        <div class="flex-1">
            <router-view></router-view>
        </div>
    </div>
</template>