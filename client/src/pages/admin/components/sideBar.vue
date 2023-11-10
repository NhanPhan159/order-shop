
<template>
    <div class="h-full">
        <Menu :model="items">
            <template #start>
                <div class="flex pl-2">
                    <img src="../../../assets/logo.png" alt="">
                </div>
                <div>
                    <h1 class="font-sans font-medium text-2xl ml-2 mt-5 mb-3">Quick menu</h1>
                </div>
            </template>
            <template #item="{ item, label, props }">
                <router-link v-if="item.route" v-slot="routerProps" :to="item.route" custom>
                    <a :href="routerProps.href" v-bind="props.action">
                        <span v-bind="props.icon" />
                        <span v-bind="props.label">{{ label }}</span>
                    </a>
                </router-link>
            </template>
            <template #end>
                
            </template>
        </Menu>
        <Toast />
    </div>
</template>

<script>
import Menu from 'primevue/menu';
export default {
    components:{
        Menu
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
