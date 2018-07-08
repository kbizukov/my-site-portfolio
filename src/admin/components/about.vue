<template lang="pug">
  .about-content
    .skills
      about-skills-group(
        v-for="type in types"
        :key="type.id"
        :skills="skills"
        :type="type"
        :typeId="type.id"
      )

    // .admin-button
    //   admin-button(
    //     tab="about"
    //   )
    
</template>

<script>
import aboutSkillsGroup from "./aboutSkillsGroup";
import adminButton from "./adminButton";

import { mapState, mapGetters, mapActions } from "vuex";

export default {
  components: {
    aboutSkillsGroup,
    adminButton
  },
  data() {
    return {
      types: [
        { id: 0, name: "Frontend" },
        { id: 1, name: "Backend" },
        { id: 2, name: "Workflow" }
      ]
    };
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.$parent.activeTab = "Обо мне";
    });
  },
  computed: {
    ...mapState({
      skills: state => state.skills.data
    })
  },
  created() {
    this.fetchSkills();
  },
  methods: {
    ...mapActions(["fetchSkills"])
  }
};
</script>

<style lang="scss" scoped>
.skills {
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
}
</style>
