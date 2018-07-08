import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import axios from "./requests";

store.$axios = axios;

new Vue({
  el: "#admin-app",
  router,
  store,
  render: h => h(App)
});
