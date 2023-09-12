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
  routes: [{ path: "/", name: "home", component: HomePage }],
});

/** STORE SETUP*/
const store = createStore({
  state() {
    return {
      username: "",
      isLogin: false,
      itemsChoiced: ["abc"],
    };
  },
  mutations: {
    setDataLocal(state, payload) {
      localStorage.setItem("token", payload.token);
      localStorage.setItem("ids", payload.idUser);
    },
    setInforUser(state, Username) {
      state.username = Username;
      state.isLogin = true;
    },
  },
});

/** APP SETUP */
const app = createApp(App);
app.component("Toast", Toast);
app.component("Dialog", Dialog);
app.use(store).use(vuetify).use(router).use(PrimeVue).use(ToastService).mount("#app");
