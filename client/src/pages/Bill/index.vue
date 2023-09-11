<script>
import axios from 'axios';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column'
import Tag from 'primevue/tag';
import ProgressSpinner from 'primevue/progressspinner';
import Paginator from 'primevue/paginator';
export default{
    components:{
        DataTable,
        Column,
        Tag,
        ProgressSpinner,
        Paginator,
    },
    data(){
        return {
            bill: [],
            billDetail: [],
            visibleDialog: false,
            isLoading: true,
            totalBill: 0,
        }
    },
    methods:{
        async getNumberPaginator(){
            const re = await axios.get('/order/numberOfBill')
            this.totalBill = re.data
        },
        checkIsBillSeen(id){
            this.isSeen = this.bill.filter(curr=>(curr._id === id))[0].isSeen
        },
        async getBill(page=0){
            let url = "/order"
            if(page){
                url = "/order"+`?page=${page-1}`
            }
            const res = await axios(url)
            this.bill = res.data
            this.isLoading = false
        },
        async openBill(id){
            const re = await axios.get(`/order/${id}`)
            this.billDetail = re.data
            this.visibleDialog = true
        },
        async setSeenBill(id){
            let isSeen = this.bill.find((curr)=>curr._id === id).isSeen
            if(!isSeen){
                const re = await axios.put(`/order/${id}`,{isSeen: true})
                this.bill = this.bill.map(curr=>{
                    if(curr._id == id)
                        curr.isSeen = true
                    return curr
                })
            }
        },
    },
    computed:{
        totalPage(){
            return (this.totalBill / 10) + 1
        }
    },
    mounted(){
        this.getBill()
        this.getNumberPaginator()
    }
}
</script>
<template>
    <div>
        <Dialog v-model:visible="visibleDialog" @after-hide="setSeenBill(this.billDetail.id)" modal :style="{ width: '60vw' }">
            <div>
                <div>
                    <h1>bill</h1>
                </div>
                <div>
                    <DataTable :value="billDetail.productBill" stripedRows tableStyle="min-width: 50rem">
                        <Column field="productName" header="Name"></Column>
                        <Column field="price" header="Price"></Column>
                        <Column field="quantity" header="Quantity"></Column>
                    </DataTable>
                </div>
            </div>
        </Dialog>
        <div v-if="isLoading" class="card flex-col justify-content-center text-center">
            <p class="text-3xl font-medium text-gray-900 dark:text-white">Waiting for load</p>
            <ProgressSpinner />
        </div>
        <div v-else class="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-menu-text-bill uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                            STT
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Customer name
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Phone
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Address
                        </th>
                        <th scope="col" class="px-1 py-3 text-center">
                            Creat at
                        </th>
                        <th scope="col" class="px-1 py-3 text-center">
                            Status
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item,index) in bill" :key="item.id" @click="openBill(item._id)" class="bg-slate-50 border-b dark:border-gray-700 hover:bg-slate-200 ">
                        <td class="px-6 py-4">
                            {{ index + 1 }}
                        </td>
                        <th scope="row" class="px-6 py-4 font-bold text-orange-800 whitespace-nowrap">
                            {{ item.customerName }}
                        </th>
                        <td class="px-6 py-4">
                            {{ item.phone }}
                        </td>
                        <td class="px-6 py-4">
                            {{ item.address }}
                        </td>
                        <td class="px-6 py-4 flex justify-center">
                            {{ new Date(item.createdAt).toDateString() }}
                        </td>
                        <td class="py-4">
                            <Tag v-if="!item.isSeen" icon="pi pi-exclamation-triangle" severity="warning" value="Not seen"></Tag>
                            <Tag v-else icon="pi pi-check" severity="success" value="Seen"></Tag>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <v-pagination prev-icon="mdi-menu-left" next-icon="mdi-menu-right" class="mt-5" @update:modelValue="getBill" :length="totalPage"></v-pagination>
    </div>
</template>