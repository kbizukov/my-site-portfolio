import Vue from "vue";

new Vue({
  el: "#background-container",
  data: {
    allowed: false
  },
  mounted() {
    this.changeBackground();
    window.addEventListener("resize", this.changeBackground);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.changeBackground);
  },
  methods: {
    changeBackground() {
      if (screen.width > 1199) {
        this.allowed = true;
      } else {
        this.allowed = false;
        console.log("this.allowed", this.allowed);
      }
    }
  },
  template: "#background"
});
