<template>
    <v-row justify="start">
      <v-dialog
        v-model="dialog"
        persistent
        width="1024"
      >
        <template v-slot:activator="{ props }">
          <v-btn
            icon="mdi-pencil-outline"
            v-bind="props"
          >
          </v-btn>
        </template>
        <v-card>
          <v-card-title>
            <span class="text-h5">New product</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12">
                  <input
                  :value="itemProduct.name"
                  @input="setProductName"
                  type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  " placeholder="John" required>
                </v-col>
                <v-col cols="12">
                  <input
                  :value="itemProduct.description"
                  @input="setProductDescription"
                  type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  " placeholder="John" required>
                </v-col>
                <v-col
                  cols="12"
                  sm="6"
                >
                <input
                  :value="itemProduct.price"
                  @input="setProductPrice"
                  type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  " placeholder="John" required>
                </v-col>
                <v-col
                  cols="12"
                  sm="6"
                >
                <v-file-input
                    label="Upload image"
                    prepend-icon="mdi-camera"
                    @change="upload"
                    variant="outlined"
                ></v-file-input>
                </v-col>
              </v-row>
            </v-container>
            <small>*indicates required field</small>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="blue-darken-1"
              variant="text"
              @click="dialog = false"
            >
              Close
            </v-btn>
            <v-btn
              color="blue-darken-1"
              variant="text"
              @click="editProduct"
            >
              Edit
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
</template>
  <script>
  import axios from 'axios';
    export default {
      props:["itemProduct"],
      data: () => ({
        dialog: false,
        updateProduct:{}
      }),
    methods:{
      setProductName(e){
        this.updateProduct.name = e.target.value
      },
      setProductDescription(e){
        this.updateProduct.description = e.target.value
      },
      setProductPrice(e){
        this.updateProduct.price = e.target.value
      },
      upload(ev){
            const files = ev.target.files
            const data = new FormData()
            for (let i = 0; i < files.length; i++){
                data.append("photos",files[i])
            }
            axios.post("/product/upload-image",data,{
                header: {'Content-type':"multipart/form-data"}
            }).then(res=>{
                this.updateProduct.image = res.data[0]
            })
        },
        async editProduct(){
        const re = await axios.put(`/product/${this.itemProduct._id}`,this.updateProduct)
        this.dialog = false
        this.$emit("reloadPageEdit") 
      }
    },
  }
  </script>
<style scoped>
.v-row{
    margin-right: 5px;
}
</style>