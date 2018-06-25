import Vue from "vue";

new Vue({
  el: "#background-container",
  data: {
    allowed: false
  },
  mounted() {
    this.changeBackground();
    window.addEventListener("resize", this.changeBackground);
    window.addEventListener("mousemove", this.moveLayer);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.changeBackground);
    window.removeEventListener("mousemove", this.moveLayer);
  },
  methods: {
    changeBackground() {
      if (screen.width > 1199) {
        this.allowed = true;
      } else {
        this.allowed = false;
      }
    },
    moveLayer(e) {
      const WIN = window;
      const DOC = document;
      const layer = DOC.querySelector(".background__layer");
      const initialX = WIN.innerWidth / 2 - e.pageX;
      const initialY = WIN.innerHeight / 2 - e.pageY;
      const divider = 3.5 / 100;
      const positionX = initialX * divider;
      const positionY = initialY * divider;

      layer.style.transform = `translate(${positionX}px, ${positionY}px)`;
    }
  },
  template: "#background"
});
