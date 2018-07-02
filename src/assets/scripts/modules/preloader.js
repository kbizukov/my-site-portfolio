import Vue from "vue";

const WIN = window;
const DOC = document;
const SCR = screen;

const preloader = Vue.component("preloader", {
  data() {
    return {
      loaded: false,
      percents: 0
    };
  },
  watch: {
    percents: function(newValue) {
      if (this.percents >= 100) {
        // this.percents = 100;
        // WIN.percents = 100;
        setTimeout(() => {
          this.loaded = true;
        }, 1000);
      } else if (this.percents === 0) {
        this.loaded = false;
      }
      this.fillStatusCircle();
    }
  },
  mounted() {
    if (this.loaded) return;

    if (!WIN.isWelcomePage || (WIN.isWelcomePage && SCR.width < 1200)) {
      this.initPreloader();
    }
    this.setListener();
    this.getStrokeDashOffset();
  },
  methods: {
    initPreloader() {
      console.log("---initPreloader");
      let imgPath = $("*").map((index, element) => {
        let bg = $(element).css("background-image"); // url('/images/1.png')
        let img = $(element).is("img"); //true или false
        let path;

        if (bg !== "none") {
          path = bg.replace('url("', "").replace('")', "");
        }

        if (img) {
          path = $(element).attr("src");
        }
        return path;
      });

      let imgs = imgPath.toArray();
      // console.log("imgs", imgs);
      this.loadImages(imgs);
    },
    loadImages(images) {
      if (!images.length) {
        this.percents = 100;
        this.loaded = true;
      } else {
        let percentTotal = 0;
        images.forEach(img => {
          let fakeImg = $("<img>", { attr: { src: img } });

          fakeImg.on("load error", () => {
            percentTotal++;
            this.setPercent(images.length, percentTotal);
          });
        });
      }
    },
    setPercent(total, current) {
      let percents = Math.ceil((current / total) * 100);
      this.percents = percents;
    },
    setListener() {
      WIN.addEventListener("updatePercents", event => {
        this.percents = WIN.percents;
      });
    },
    getStrokeDashOffset() {
      const circle = DOC.querySelector(".preloader__circle");
      this.dashOffset = parseInt(
        getComputedStyle(circle).getPropertyValue("stroke-dashoffset")
      );
    },
    fillStatusCircle() {
      // console.log("this.dashOffset", this.dashOffset);
      const circle = DOC.querySelector(".preloader__circle");
      if (!circle) return;

      const percents = (this.dashOffset / 100) * (100 - this.percents);
      // console.log("percents", percents);
      circle.style.strokeDashoffset = percents;
    }
  },
  template: "#preloader"
});

export default preloader;
