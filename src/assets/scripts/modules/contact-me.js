import Vue from "vue";
import Api from "../api";

const WIN = window;
const DOC = document;

const contactMe = new Vue({
  el: "#contact-me-container",
  data: {
    validated: false
  },
  methods: {
    sendForm() {
      let validated = this.validateForm();
      if (!validated) return;

      Api.sendForm(validated).then(
        data => {
          console.log("data", data);
          this.showMessage(data.message);
          this.clearForm();
        },
        reason => {
          console.log("reason", reason);
          this.showMessage(reason.message);
        }
      );
    },
    showMessage(popupMessage) {
      var myEvent = new CustomEvent("showMessagePopup", {
        detail: {
          popupMessage: popupMessage
        }
      });
      WIN.dispatchEvent(myEvent);
    },
    validateForm() {
      const name = DOC.querySelector(".contact-me__name").value;
      const email = DOC.querySelector(".contact-me__email").value;
      const message = DOC.querySelector(".contact-me__message").value;

      if (!name || !email || !message) {
        this.showMessage("Не все поля формы заполнены");
        return false;
      }

      if (!/\S+@\S+\.\S+/.test(email)) {
        this.showMessage("Введите корректный е-мейл");
        return false;
      }

      return {
        name,
        email,
        message
      };
    },
    clearForm() {
      const name = (DOC.querySelector(".contact-me__name").value = "");
      const email = (DOC.querySelector(".contact-me__email").value = "");
      const message = (DOC.querySelector(".contact-me__message").value = "");
    }
  },
  template: "#contact-me"
});
