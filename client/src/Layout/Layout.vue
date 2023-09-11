<template>
    <div>
        <Header />
        <router-view class="m-10 p-10"></router-view>
    </div>
</template>

<script>
import Header from './Header.vue';
export default {
components: {
    Header,
  }
}
</script>

<style>

</style>