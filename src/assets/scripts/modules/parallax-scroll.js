const WIN = window;
const DOC = document;

const parallax = (function() {
  const bg = DOC.querySelector(".parallax-bg");
  const worksBg = DOC.querySelector(".works-background");
  const isWorksPage = bg.isEqualNode(worksBg);

  return {
    isWorksPage: isWorksPage,

    move(block, windowScroll, strafeAmount) {
      let strafe = windowScroll / -strafeAmount + "%";
      let transformString = `translate3d(0, ${strafe}, 0)`;

      let style = block.style;

      if (isWorksPage) {
        style.transform = transformString;
      } else {
        style.backgroundPositionY = strafe;
      }
    },

    init(wScroll) {
      this.move(bg, wScroll, this.isWorksPage ? 75 : 5);
    }
  };
})();

WIN.onscroll = function() {
  var wScroll = window.pageYOffset;
  parallax.init(wScroll);
};
