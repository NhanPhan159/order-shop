<template>
    <v-row justify="end">
      <v-dialog
        v-model="dialog"
        persistent
        width="1024"
      >
        <template v-slot:activator="{ props }">
          <v-btn
            color="primary"
            variant="outlined"
            v-bind="props"
            rounded="lg"
          >
            Add product
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
                  <v-text-field
                    v-model="newProduct.name"
                    label="Name*"
                    required
                    variant="outlined"
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    v-model="newProduct.description"
                    label="Description*"
                    required
                    variant="outlined"
                  ></v-text-field>
                </v-col>
                <v-col
                  cols="12"
                  sm="6"
                >
                <v-text-field
                    v-model="newProduct.price"
                    label="Price* VND"
                    required
                    suffix="VND"
                    variant="outlined"
                  ></v-text-field>
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
              @click="addProduct"
            >
              Add
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </template>
  <script>
  import axios from 'axios';
    export default {
      data: () => ({
        dialog: false,
        newProduct:{
          name:"",
          description:"",
          price:"",
          image:""
        }
      }),
    methods:{
      upload(ev){
            const files = ev.target.files
            const data = new FormData()
            for (let i = 0; i < files.length; i++){
                data.append("photos",files[i])
            }
            axios.post("/product/upload-image",data,{
                header: {'Content-type':"multipart/form-data"}
            }).then(res=>{
                this.newProduct.image = res.data[0]
            })
        },
      
      async addProduct(){
        const re = await axios.post("/product",this.newProduct)
        this.dialog = false
        this.$emit("reloadPage") 
      }
    }
  }
  </script>
<style scoped>
.v-row{
    margin-right: 5px;
}
</style>