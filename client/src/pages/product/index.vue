<script>
import InputText from "primevue/inputtext"
import Card from 'primevue/card';
import Tag from 'primevue/tag';
import axios from 'axios'
import Dialog from 'primevue/dialog'

export default{
    components:{
        InputText,
        Card,
        Tag,
        Dialog
    },
    data(){
        return {
            visible: false,
            additionProduct: {
                name: "",
                price: "",
                description: "",
                image_insite: [],
                size: 0,
                image_outside: [],
                core_feature: [],
                quantity: 0,
                category: ""
            },
            url:""
        }
    },
    methods: {
        onFileChange(e) {
      const file = e.target.files[0];
      this.url = URL.createObjectURL(file);
      console.log(this.url);
    },

        async addProduct(){
            await axios.post("")
        },
        async preViewImage(e){
            let files = e.target.files
            let data = new FormData()
            let imagePreview = []
            for(let i =0;i<files.length; i++)
               imagePreview.push(URL.createObjectURL(files[i]))
            // const re = await axios.post("/product/upload-image",data)
            console.log(imagePreview);
            this.additionProduct.image_insite = [...this.additionProduct.image_insite,...imagePreview]
            console.log(this.additionProduct.image_insite)
        },
        url(img){
            return "http://localhost:4000/upload/0545e95b5ba819f5e5bd54246d685ab8.png"
        }
    },
    computed:{
        urlPass(){
            let data = this.additionProduct.image_insite
            return data
        }
    }
}
</script>
<template>
    <div class="h-full bg-red-50">
        <div class="flex justify-between px-4">
            <h1 class="text-xl font-medium">My product</h1>            
            <span class="p-input-icon-left">
                <i class="pi pi-search" />
                <InputText v-model="value1" placeholder="Search" />
            </span>
        </div>
        <el-dialog
                v-model="visible"
                title="Tips"
                width="50%"
            >
                <el-form :model="form" label-width="120px" size="large">
                    <el-form-item label="Name product">
                        <el-input v-model="additionProduct.name" />
                    </el-form-item>
                    <el-form-item label="Caterogy">
                        <el-input v-model="additionProduct.category" />
                    </el-form-item>
                    <el-form-item label="Description">
                        <el-input v-model="additionProduct.description" type="textarea" />
                    </el-form-item>
                    <el-form-item label="Core feature">
                        <el-input v-model="additionProduct.core_feature" />
                    </el-form-item>
                    <el-form-item label="Price">
                        <el-input
                        v-model="input"
                        placeholder="Price"
                        :formatter="(value) => `VND ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')"
                        :parser="(value) => value.replace(/\$\s?|(,*)/g, '')"
                        />
                    </el-form-item>
                    <el-form-item label="size">
                        <el-input-number v-model="additionProduct.size" :min="32" :max="45" @change="" />
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="onSubmit">Create</el-button>
                        <el-button>Cancel</el-button>
                    </el-form-item>
                    <div class="flex flex-col gap-4">
                        <el-form-item label="image inside">
                            <input type="file" id="myFile" name="Upload image" @change="preViewImage" multiple >
                        </el-form-item>
                        <div class="flex gap-3 pl-28">
                            <div class="w-24 h-24 object-scale-down" v-for="img in this.additionProduct.image_insite" :key="img">
                                <img :src="img" alt="">
                            </div>
                        </div>
                    </div>
                </el-form>
        </el-dialog>
        <div class="mt-4 p-4 flex flex-wrap gap-3 items-center">
            <div @click="visible=true" class="cursor-pointer px-5 py-2 bg-white rounded-md shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" class="w-20 h-20 text-slate-300">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </div>
            <Card>
                <template #content>
                    <div class="flex flex-col items-center">
                        <div class="rounded-md border h-44 w-52">
                            <img class="object-cover" src="../../assets/logo.png" alt="">
                        </div>
                        <h3 class="text-lg">Shoe</h3>
                        <div class="flex gap-2 justify-center">
                            <p>So luong 90</p>
                            <p> - </p>
                            <p>10.000vnd</p>
                        </div>
                    </div>
                </template>
                <template #footer>
                    <Tag severity="info" value="Catogery"></Tag>
                </template>
            </Card>
        </div>
    </div>
</template>
<style>
.card{
    width: 200px;
}
.card >.p-card-body{
    width: 100%;
}
.p-card .p-card-body{
    padding: 1rem;
}
</style>