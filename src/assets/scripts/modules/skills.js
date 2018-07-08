import Vue from "vue";
import Api from "../api";

const skill = {
  props: {
    skill: Object
  },
  template: "#skill",
  methods: {
    drawCircle() {
      const circle = this.$refs["color-circle"];
      const dashOffset = parseInt(
        getComputedStyle(circle).getPropertyValue("stroke-dashoffset")
      );
      const percents = (dashOffset / 100) * (100 - this.skill.percents);
      const opacity = this.skill.percents / 100;

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

const skillsGroup = {
  template: "#skills-group",
  components: {
    skill
  },
  props: {
    skills: {
      type: Array,
      default: () => []
    },
    type: {
      type: Object,
      default: () => {}
    }
  }
};

new Vue({
  el: "#skills-container",
  components: {
    skillsGroup
  },
  data: {
    skills: [],
    types: [
      { id: 0, name: "Frontend" },
      { id: 1, name: "Backend" },
      { id: 2, name: "Workflow" }
    ]
  },
  created() {
    this.getSkills();
  },
  methods: {
    getSkills() {
      Api.fetchSkills().then(response => {
        this.skills = response.data;
      });
    }
  },
  template: "#skills-list"
});
