import Vue from "vue";
import preloader from "./preloader";

const app = new Vue({
  el: "#main-app",
  components: {
    preloader
  },
  beforeMount() {
    window.isWelcomePage = false;
  },
  mounted() {
    console.log("main-app mounted");
  }
});
