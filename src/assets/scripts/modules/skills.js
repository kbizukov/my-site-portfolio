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
    }
  },
  mounted() {
    this.drawCircle();
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
