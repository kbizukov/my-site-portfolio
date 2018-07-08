import Vue from "vue";
import Api from "../api";

const info = {
  template: "#slider-info",
  props: {
    work: {
      type: Object,
      default: {
        id: 0,
        title: "Проект",
        photo: "",
        link: ""
      }
    }
  },
  methods: {
    enterHandler(el, done) {
      const sentence = el.innerText.trim();
      const wrapped = sentence
        .split("")
        .map((item, index, list) => {
          var startWord = "<div class='lettersWrapper'>",
            endWord = "</div>",
            span = `<span class="${
              item === " " ? "transparent whitespace" : "transparent"
            }">${item}</span>`,
            between = `${
              item === " " ? `${endWord}${span}${startWord}` : `${span}`
            }`;

          if (index == 0) {
            var row = startWord + between;
          } else if (index == list.length - 1) {
            row = between + endWord;
          } else {
            row = between;
          }

          return row;
        })
        .join("");

      el.innerHTML = wrapped;

      const words = Array.from(el.querySelectorAll("span.transparent"));

      let i = 0;
      function animate(words) {
        const currentLetter = words[i];

        let timer = setTimeout(() => {
          animate(words);
        }, 20);

        currentLetter.classList.remove("transparent");
        currentLetter.classList.add("bounceIn");

        i++;

        if (i >= words.length) {
          clearTimeout(timer);
          done();
        }
      }

      animate(words);
    },
    enterTitleHandler(el, done) {
      // this.enterHandler(el, done);
    }
  }
};

const display = {
  template: "#slider-display",
  props: {
    work: Object,
    default: {
      id: 0,
      title: "Проект",
      photo: "",
      link: ""
    }
  }
};

const buttons = {
  template: "#slider-buttons",
  props: {
    works: {
      work: Array,
      default: [
        {
          id: 0,
          title: "Проект",
          photo: "",
          link: ""
        }
      ]
    },
    currentIndex: {
      type: Number,
      default: 0
    }
  },
  methods: {
    slide(direction) {
      this.$emit("slide", direction);
    },
    getReqImage(direction) {
      const worksArray = [...this.works];

      switch (direction) {
        case "prev":
          const lastItem = worksArray[worksArray.length - 1];
          worksArray.unshift(lastItem);
          worksArray.pop();
          break;

        case "next":
          worksArray.push(worksArray[0]);
          worksArray.shift();
          break;
      }

      return worksArray[this.currentIndex];
    }
  }
};

new Vue({
  el: "#slider-component",
  components: {
    info,
    display,
    buttons
  },
  data: {
    works: [
      {
        id: 0,
        title: "Проект",
        photo: "",
        link: ""
      }
    ],
    currentWork: {},
    currentIndex: 0
  },
  watch: {
    currentIndex(value) {
      const worksAmount = this.works.length - 1;
      if (value > worksAmount) this.currentIndex = 0;
      if (value < 0) this.currentIndex = worksAmount;

      this.currentWork = this.works[value];
    }
  },
  created() {
    // this.works = require("../../../data/works.json");
    this.getWorks();
  },
  methods: {
    handleSlide(direction) {
      switch (direction) {
        case "next":
          this.currentIndex++;
          break;

        case "prev":
          this.currentIndex--;
          break;
      }
    },
    getWorks() {
      Api.fetchWorks().then(response => {
        console.log("response", response);
        const baseURL = "http://webdev-api.loftschool.com/";
        let raw = response.data;
        raw.forEach(work => (work.photo = baseURL + work.photo));
        this.works = raw;
        this.currentWork = this.works[0];
      });
    }
  },
  template: "#slider"
});
