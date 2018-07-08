<template lang="pug">
  .skills-group
    h3.skills-group__title {{type.name}}
    ul.skills-group__list
      li.skills-group__item
        about-skills-group-skill(
          v-for="skill in skills"
          v-if="skill.category === type.id"
          :key="skill.id"
          :skill="skill"
          :type="type"
        )
      li.skills-group__new-skill
        input.skills-group__new-skill-input(
          v-model="newSkill.title"
          placeholder="Добавить скилл"
        )
        input.skills-group__new-skill-input.skills-group__new-skill-input--percents(
          v-model="newSkill.percents"
        )
        span.skill__percents %
        span.skill__create(
          @click="addSkill"
        ) &#10004;
</template>

<script>
import { mapActions } from "vuex";
import aboutSkillsGroupSkill from "./aboutSkillsGroupSkill";
import adminButton from "./adminButton";

export default {
  components: {
    aboutSkillsGroupSkill,
    adminButton
  },
  props: {
    skills: {
      type: Array,
      default: () => []
    },
    type: {
      type: Object,
      default: () => {}
    },
    typeId: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      newSkill: {
        title: "",
        percents: "",
        category: this.typeId
      }
    };
  },
  methods: {
    ...mapActions(["addNewSkill"]),
    addSkill() {
      // this.$store.dispatch("addNewSkill");
      this.addNewSkill(this.newSkill).then(() => {
        this.newSkill.title = "";
        this.newSkill.percents = "";
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.skills-group {
  width: 100%;

  @media screen and (min-width: 768px) {
    width: 50%;
  }

  &__title {
    font-size: 16px;
    line-height: 34px;
    font-weight: 500;
  }
}

.skills-group__list {
  list-style: none;
  padding: 0;
}

.skills-group__new-skill-input {
  margin-bottom: 10px;
  padding: 0 10px;
  margin-right: 10px;
  width: 125px;
  font-size: 14px;

  @media screen and (min-width: 425px) {
    font-size: 16px;
    width: 205px;
  }

  &--percents {
    text-align: center;
    margin-right: 10px;
    width: 46px;
    height: 32px;
    border-radius: 4px;
    border: none;
    padding: 0;
  }
}

.skill__create {
  color: #0548be;
  cursor: pointer;
  display: inline-block;
  margin-left: 10px;
}
</style>
