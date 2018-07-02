import Vue from "vue";
import Api from "./api";

const WIN = window;
const DOC = document;
const BODY = DOC.getElementsByTagName("body")[0];

const welcome = {
  template: "#welcome"
};

const login = {
  template: "#login",
  data() {
    return {
      confirmHuman: false
    };
  },
  methods: {
    toMainHandler() {
      BODY.click();
    },
    submitForm() {
      let validated = this.validateForm();
      if (!validated) return;

      console.log("validated", validated);
      Api.login(validated).then(
        data => {
          console.log("data", data);
          this.showMessage(data.message);
        },
        reason => {
          console.log("reason", reason);
          this.showMessage(reason.message);
        }
      );
    },
    showMessage(popupMessage) {
      console.log("popupMessage", popupMessage);
      var myEvent = new CustomEvent("showMessagePopup", {
        detail: {
          popupMessage: popupMessage
        }
      });
      WIN.dispatchEvent(myEvent);
    },
    validateForm() {
      const login = DOC.querySelector(".login__input--login").value;
      const password = DOC.querySelector(".login__input--password").value;
      const isHuman = DOC.querySelector(".login__confirm-input--check-human")
        .checked;
      const humanConfirmed = DOC.querySelector(
        ".login__confirm-input--humanConfirmed"
      ).checked;

      if (!login || !password) {
        this.showMessage("Не верный логин или пароль");
        return false;
      }

      if (!isHuman || !humanConfirmed) {
        this.showMessage("Роботам тут не место");
        return false;
      }

      return {
        login,
        password,
        isHuman: isHuman,
        confirmHuman: humanConfirmed
      };
    }
  }
};

var turner = new Vue({
  el: "#welcome-turner",
  components: {
    welcome,
    login
  },
  data: {
    animationDirection: "flip",
    compToShow: "welcome"
  },
  mounted() {
    const DOC = document;
    const flipper = DOC.getElementById("welcome-turner");
    BODY.classList.add("welcome--no-overflow");

    BODY.addEventListener("click", e => {
      const authButton = DOC.getElementById("auth-button");

      if (
        !e.target.closest(".welcome-turner") &&
        !e.target.closest("#auth-button") &&
        !e.target.closest(".message-popup") &&
        !e.target.closest(".message-popup__button")
      ) {
        if (this.compToShow === "login") {
          // this.animationDirection = "flip-reverse";
          this.compToShow = "welcome";
        }
        authButton.classList.remove("auth-button--hidden");
      }
    });
  },
  template: "#turner"
});

var authBlock = new Vue({
  el: "#auth-container",
  methods: {
    switchComponents() {
      const authButton = document.getElementById("auth-button");
      authButton.classList.add("auth-button--hidden");
      // this.animationDirection =
      //   this.animationDirection === "flip" ? "flip-reverse" : "flip";
      turner.compToShow = turner.compToShow === "welcome" ? "login" : "welcome";
    }
  },
  template: "#auth-block"
});
