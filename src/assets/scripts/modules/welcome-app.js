import Vue from "vue";
import preloader from "./preloader";
import background from "./background";

const WIN = window;
const SCR = screen;

const app = new Vue({
  el: "#welcome-app",
  components: {
    preloader,
    background
  },
  data: {
    allowBigBG: false
  },
  beforeMount() {
    WIN.isWelcomePage = true;
    WIN.percents = 0;
  },
  mounted() {
    console.log("mounted app");
    this.changeBackground();
    WIN.addEventListener("resize", this.changeBackground);
  },
  beforeDestroy() {
    WIN.removeEventListener("resize", this.changeBackground);
  },
  methods: {
    changeBackground() {
      this.allowBigBG = SCR.width > 1199;
      // if (this.allowBigBG) {
      //   WIN.percents = 0;
      //   var myEvent = new CustomEvent("updatePercents", {
      //     detail: {
      //       percents: WIN.percents
      //     }
      //   });
      //   WIN.dispatchEvent(myEvent);
      // }
    }
  }
});
