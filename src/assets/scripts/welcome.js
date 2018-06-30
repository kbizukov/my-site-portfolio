import Vue from "vue";

const welcome = {
  template: "#welcome"
};

const login = {
  template: "#login",
  methods: {
    toMainHandler() {
      const body = document.getElementsByTagName("body")[0];
      body.click();
    },
    submitForm(e) {
      console.log("e", e);
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
    const body = DOC.getElementsByTagName("body")[0];
    const flipper = DOC.getElementById("welcome-turner");
    body.classList.add("welcome--no-overflow");

    body.addEventListener("click", e => {
      const authButton = DOC.getElementById("auth-button");

      if (
        !e.target.closest(".welcome-turner") &&
        !e.target.closest("#auth-button")
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
