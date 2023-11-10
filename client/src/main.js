/** Plugin */
import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import { createStore } from "vuex";
import axios from "axios";
import App from "./App.vue";
import "primeicons/primeicons.css";

/** UI */
import { createVuetify } from "vuetify";
import "./style.css";
import "vuetify/styles";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import "@mdi/font/css/materialdesignicons.css";
import PrimeVue from "primevue/config";
import "primevue/resources/themes/lara-light-indigo/theme.css";
import ToastService from "primevue/toastservice";
import Toast from "primevue/toast";
import Dialog from "primevue/dialog";

/** self define */
import HomePage from "./pages/Home/index.vue";
import LoginPage from "./pages/Login/index.vue"
import ShopIndex from "./pages/Shop/index.vue"
import ProductIndex from"./pages/product/index.vue"
import DashboardIndex from"./pages/dashboard/index.vue"


const vuetify = createVuetify({
  components,
  directives,
});

/** AXIOS SETUP */
axios.defaults.baseURL = "http://127.0.0.1:4000";
axios.interceptors.request.use(
  function (config) {
    localStorage.getItem("token")
      ? (config.headers.Authorization = "Bearer " + localStorage.getItem("token"))
      : null;
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

/** ROUTER SETUP */
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: "home", component: HomePage },
    { path: "/account/login", name: "login", component: LoginPage },
    { path: "/collection/all", name: "shop_all", component: ShopIndex },
    { path: "/product", name: "product", component: ProductIndex },
    { path: "/dashboard", name: "dashboard", component: DashboardIndex },
  ],
});

/** STORE SETUP*/
const store = createStore({
  state: {
      user: null
  },
  getters: {
    getRole(state){
      return state.user ? state.user.role : 'normal user'
    }
  },
  mutations: {
    setInforUser(state, user) {
      state.user = user
    },
  },
});

/** APP SETUP */
const app = createApp(App);
app.component("Toast", Toast);
app.component("Dialog", Dialog);
app.use(store).use(vuetify).use(router).use(PrimeVue).use(ToastService).mount("#app");
