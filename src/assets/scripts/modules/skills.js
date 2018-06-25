import Vue from "vue";

const skill = {
  props: {
    skillName: String,
    skillPercents: Number
  },
  template: "#skill",
  methods: {
    drawCircle() {
      const circle = this.$refs["color-circle"];
      const dashOffset = parseInt(
        getComputedStyle(circle).getPropertyValue("stroke-dashoffset")
      );
      const percents = (dashOffset / 100) * (100 - this.skillPercents);
      const opacity = this.skillPercents / 100;

      circle.style.strokeDashoffset = percents;
      circle.style.opacity = opacity;
    },
    scrollTo() {
      const WIN = window;
      const wScroll = WIN.pageYOffset;
      const section = document.querySelector(".skills-list");
      const sectionPos = section.offsetTop * 0.75;

      if (wScroll >= sectionPos) {
        this.drawCircle();
        WIN.removeEventListener("scroll", this.scrollTo);
      }
    }
  },
  mounted() {
    window.addEventListener("scroll", this.scrollTo);
  }
};

const skillsRow = {
  template: "#skills-row",
  components: {
    skill
  },
  props: {
    skill: Object
  }
};

new Vue({
  el: "#skills-container",
  components: {
    skillsRow
  },
  data: {
    skills: {}
  },
  created() {
    const data = require("../../../data/skills.json");
    this.skills = data;
  },
  template: "#skills-list"
});
