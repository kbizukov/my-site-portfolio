<template lang="pug">
  label.skill 
    span.skill__name {{skill.title}}
    input.skill__input(
      type="text"
      :value="skill.percents"
    )
    span.skill__percents %
    span.skill__remove(
      @click="removeSkill"
    ) X
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  props: {
    skill: {
      type: Object,
      default: function() {}
    }
  },
  data() {
    return {};
  },
  methods: {
    ...mapActions(["removeExistedSkill"]),
    removeSkill() {
      console.log("removeSkill");
      this.removeExistedSkill(this.skill.id);
    }
  }
};
</script>

<style lang="scss" scoped>
.skill {
  padding-left: 20px;
  display: inline-flex;
  margin-bottom: 10px;
  align-items: center;

  &__name {
    margin-right: 10px;
    width: 125px;
    font-size: 14px;

    @media screen and (min-width: 425px) {
      font-size: 16px;
      width: 205px;
    }
  }

  &__input {
    text-align: center;
    margin-right: 10px;
    width: 46px;
    height: 32px;
    border-radius: 4px;
    border: none;
  }

  &__remove {
    color: #0548be;
    cursor: pointer;
    display: inline-block;
    margin-left: 10px;
  }
}
</style>
