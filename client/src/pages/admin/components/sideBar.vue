
<template>
    <div class="h-full">
        <div class="">
            <img src="../../../assets/logo.png" alt="">
        </div>
        <div class="px-2 py-3">
            <h1 class="text-xl font-semibold mb-4">Menu</h1>
            <div class="flex flex-col gap-3">
                <router-link to="/dashboard" class="hover:bg-slate-400 rounded-md p-2">Dashboard</router-link>
                <router-link to="/product" class="hover:bg-slate-400 rounded-md p-2">Product</router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    components:{
    },
    data() {
        return {
            items: [
                {
                    label: 'Dashboardd',
                    icon: 'pi pi-fw pi-list',
                    route: '/dashboard'
                },
                {
                    label: 'Product',
                    icon: 'pi pi-fw pi-box',
                    route: '/product'
                },
                {
                    label: 'Orders',
                    icon: 'pi pi-fw pi-inbox',
                    badge: 2,
                },
            ]
        };    
    },
    methods: {
        profileClick() {
            this.toast.add({ severity: 'info', summary: 'Info', detail: 'Item Selected', life: 3000 });
        }
    }
};
</script>
<style>
.p-menu{
    height: 100vh;;
}
</style>
