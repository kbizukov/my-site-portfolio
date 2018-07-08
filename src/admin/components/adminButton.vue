<template lang="pug">
  button.button(
    type="button"
    @click="requestHandler"
  ) {{text}}
</template>

<script>
import { mapGetters, mapActions, mapMutations } from "vuex";

export default {
  props: {
    tab: {
      type: String,
      default: "about"
    },
    text: {
      type: String,
      default: "Сохранить"
    }
  },
  computed: {
    ...mapGetters(["newPost", "newProject"])
  },
  methods: {
    ...mapMutations(["clearFilledWorkFields", "clearFilledPostFields"]),
    ...mapActions(["addNewPost", "addNewProject"]),

    requestHandler() {
      if (this.tab === "blog") {
        this.addNewPost(this.newPost).then(() => {
          this.clearFilledPostFields();
          this.newPost.title = "";
          this.newPost.date = "";
          this.newPost.content = "";
        });
      } else if (this.tab === "works") {
        const formData = new FormData();

        Object.keys(this.newProject).forEach(prop => {
          formData.append(prop, this.newProject[prop]);
        });

        this.addNewProject(formData).then(() => {
          this.clearFilledWorkFields();

          this.newProject.title = "";
          this.newProject.techs = "";
          this.newProject.photo = "";
          this.newProject.link = "";
        });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.button {
  width: 120px;
  height: 45px;
  background: #0548be;
  color: #fff;
  border-radius: 5px;
  display: block;
  box-shadow: none;
  padding: 0;
  border: none;
}
</style>
