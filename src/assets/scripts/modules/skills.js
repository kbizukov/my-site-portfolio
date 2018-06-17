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

      circle.style.strokeDashoffset = percents;
      console.log("circle", circle);
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
  comments: {
    skillsRow
  },
  data: {
    skills: {}
  },
  created() {
    const data = require("../../../data/skills.json");
    this.skills = data;
    console.log(data);
  },
  template: "#skills-list"
});
