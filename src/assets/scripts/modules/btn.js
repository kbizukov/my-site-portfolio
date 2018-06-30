import Vue from "vue";

Vue.component("anchorButton", {
  props: {
    classes: {
      type: String,
      default: "down-btn"
    },
    scrollToElem: {
      type: String,
      default: ""
    }
  },
  methods: {
    clickHandler(e) {
      const DOC = document;
      const WIN = window;
      const toElemName = e.target.attributes.scrollToElem.value;
      const scrollToElem = DOC.getElementById(toElemName);
      const btnYOffset = document.documentElement.scrollTop;
      const elemToOffsetTop = scrollToElem.offsetTop;
      let vScrollTo = elemToOffsetTop;
      if (toElemName === "top") {
        vScrollTo = btnYOffset;
      }

      function scrollTo(totalScroll, to, duration) {
        var perTick = (to / duration) * 10;
        // console.log("perTick", perTick);

        setTimeout(function() {
          if (toElemName === "top") {
            totalScroll -= perTick;
          } else {
            totalScroll += perTick;
          }
          // console.log("totalScroll", totalScroll);
          WIN.scrollTo(0, totalScroll);

          if (toElemName === "top") {
            if (WIN.pageYOffset <= elemToOffsetTop) return;
          } else {
            if (WIN.pageYOffset >= to) return;
          }
          scrollTo(totalScroll, to, duration - 10);
        }, 10);
      }

      scrollTo(btnYOffset, vScrollTo, 700);
    }
  },
  template: "#anchor-btn"
});
