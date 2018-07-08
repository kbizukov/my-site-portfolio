import Vue from "vue";
import Api from "./api";
import axios from "axios";

const WIN = window;
const DOC = document;
const BODY = DOC.getElementsByTagName("body")[0];
let firstRender = true;

const welcome = {
  template: "#welcome",
  data() {
    return {
      firstRender: firstRender
    };
  },
  mounted() {
    console.log("mounted! firstRender", firstRender);
    if (firstRender) {
      WIN.addEventListener("showWelcomeFlipper", this.showWelcomeFlipper);
    }
  },
  methods: {
    showWelcomeFlipper(event) {
      const welcomeFlipper = DOC.querySelector(".welcome");
      this.firstRender = false;
      firstRender = false;
      WIN.removeEventListener("showWelcomeFlipper", this.showWelcomeFlipper);
    }
  }
};

const login = {
  template: "#login",
  data() {
    return {
      confirmHuman: false,
      user: {
        name: "admin-062018",
        password: "admin-062018"
      }
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

      Api.login(this.user)
        .then(
          response => {
            if (response.status == 200) {
              console.log("response", response);
              this.showMessage("Вы успешно вошли");
              const ttl = Math.floor(Date.now() / 1000 + response.data.ttl);
              localStorage.setItem("token", response.data.token);
              localStorage.setItem("ttl", ttl);
              WIN.location.href = "/admin";
            }
          },
          reason => {
            console.log("reason.error", reason.error);
            this.showMessage(reason.message);
          }
        )
        .catch(e => console.error(e));
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
