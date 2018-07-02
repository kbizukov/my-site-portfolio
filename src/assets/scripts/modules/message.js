import Vue from "vue";

const WIN = window;
const DOC = document;
const body = DOC.getElementsByTagName("body")[0];

const contactMe = new Vue({
  el: "#message-container",
  data: {
    visible: false,
    message: "Сообщение отправлено"
  },
  mounted() {
    console.log("mounted");
    this.setListeners();
  },
  methods: {
    afterEnter() {
      this.setBodyListener();
    },
    animationLeave() {
      body.removeEventListener("click", this.bodyListener);
    },

    bodyListener(e) {
      if (
        e.target.closest(".message-popup") ||
        e.target.closest(".message-popup__button")
      ) {
        return;
      }

      this.visible = false;
    },

    setBodyListener() {
      body.addEventListener("click", this.bodyListener);
    },

    setListeners() {
      WIN.addEventListener("showMessagePopup", event => {
        this.message = event.detail.popupMessage;
        this.visible = true;
      });
    },

    closePopup() {
      this.visible = false;
    }
  },
  template: "#message-popup"
});
