<template lang="pug">
  .works-content
    h3.work__label Добавить работу
    .work
      .work__name
        input.text-input(
          v-model="newProject.title"
          type="text"
          placeholder="Название проекта"
        )
      .work__date
        input.text-input(
          v-model="newProject.techs"
          type="text"
          placeholder="Технологии"
        )
      .work__link
        input.text-input(
          v-model="newProject.link"
          type="text"
          placeholder="Сылка на сайт"
        )
      .work__photo
        input#load-file-input.text-input.work__add-file(
          @change="setImage"
          type="file"
        )
        svg.work__image(xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="35px" height="34px" viewbox="0 0 35 34")
          image#Vector_Smart_Object.cls-1(data-name="Vector Smart Object" width="35px" height="34px" xlink:href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAiCAMAAADiW5DOAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAABLFBMVEUFSL7///8FSL4FSL4FSL4FSL4FSL4FSL4FSL4FSL4FSL4FSL4FSL4FSL4FSL4FSL4FSL4FSL4FSL4FSL4FSL4FSL4FSL4FSL4FSL4FSL4FSL4FSL4FSL4FSL4FSL4FSL4FSL4FSL4FSL4FSL4FSL4FSL4FSL4FSL4FSL4FSL4FSL4FSL4FSL4FSL4FSL4FSL4FSL4FSL4FSL4FSL4FSL4FSL4FSL4FSL4FSL4FSL4FSL4FSL4FSL4FSL4FSL4FSL4FSL4FSL4FSL4FSL4FSL4FSL4FSL4FSL4FSL4FSL4FSL4FSL4FSL4FSL4FSL4FSL4FSL4FSL4FSL4FSL4FSL4FSL4FSL4FSL4FSL4FSL4FSL4FSL4FSL4FSL4FSL4FSL4FSL4FSL4FSL4AAAB/PYzmAAAAY3RSTlMAAJGzb5KpmHwiAlGJhUNuVA6ypxsEAZyGEAMln5QXd00FJyQ3DQqgZmqxHTVKFj+AcqQ0XUZPL7CoBhQLKi0Tk6aHra9fEq6qq6OlQHCiYp1snjFVQVo4m2GhEX88OilzllvVrIleAAAAAWJLR0RjXL4tqgAAAAlwSFlzAAALEgAACxIB0t1+/AAAAAd0SU1FB+IHCA4LMsFxQZcAAAFNSURBVDjLhdPrVoJAEADgpckoykpI7GaZXSwrNSsKLY3AIEuzG5Xde/+HiCVFXAeaH7DnzHeYWWaXDEFgDBMnOI4jwQQiPTMSwYLvM6MEizHGCOMT0cl/zBStPh1qYiI1UqiZ+dtGPMzICUpm3dQcH51H+1lYBEguuallgBRqyEp6VXAza7SxddR0YyNDq26Gmi23+ew2buSd3RzJdwZVQI28ByAWvWnuY+agf+J8fNAcssdCGTBHx6xRS6wpDByvbJk1J6cVJqq01pnsGe0cC143DD1Ruwg5z6Z1SV91NR9o9KvOQtSuA4yo0WelQZdWFTcGeAaaN7iRfAZa5Ba5W3cZSCqKUr5XlAfno+jdemwBb9t27sm2a0Em3fTXekaNoIm+nl9QQ1Lt3t7VV9wIb/Xun5LeOdyQUkOzKGmrH1yQIeTzq2ia3z8xZ6a/nsEyth7BwrcAAAAASUVORK5CYII=")

        label.work__photo-label(for="load-file-input") Загрузить картинку

    
    .admin-button
      admin-button(
        tab="works"
      )
    
</template>

<script>
import adminButton from "./adminButton";
import { mapMutations, mapGetters, mapActions, mapState } from "vuex";

export default {
  components: {
    adminButton
  },
  computed: {
    ...mapState({
      newProject: state => state.works.newProject
    }),
    ...mapGetters(["userId"])
  },
  mounted() {
    this.$watch(
      "newProject",
      () => {
        this.fillUpNewProject(this.newProject);
      },
      { deep: true }
    );
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.$parent.activeTab = "Мои работы";
    });
  },
  created() {
    this.fetchWorks(this.userId);
  },
  methods: {
    ...mapMutations(["fillUpNewProject", "addNewProjectPhoto"]),
    ...mapActions(["fetchWorks"]),

    setImage(e) {
      const file = e.target.files[0];
      if (!file) return;

      this.addNewProjectPhoto(file);
    }
  }
};
</script>

<style lang="scss" scoped>
.work__label {
  font-size: 16px;
  line-height: 34px;
  color: #474b57;
}
.work {
  font-family: "Roboto", Helvetica, sans-serif;

  .text-input {
    width: 100%;
    height: 45px;
    margin-bottom: 20px;
    padding: 0 20px;
    box-sizing: border-box;
    font-size: 14px;

    @media screen and (min-width: 768px) {
      width: 300px;
      font-size: 16px;
    }

    &:placeholder {
      color: rgba(55, 62, 66, 0.5);
    }
  }

  &__photo {
    display: inline-flex;
    width: 200px;
    justify-content: space-between;
    margin-bottom: 20px;
    position: relative;
  }

  &__add-file {
    width: 200px;
    height: 33px;
    opacity: 0;
    cursor: pointer;
    margin-bottom: 0 !important;
    z-index: 1;
  }

  &__image {
    position: absolute;
    cursor: pointer;

    &:hover {
      opacity: 0.85;
    }
  }

  &__photo-label {
    color: #0548be;
    position: absolute;
    left: 50px;
    cursor: pointer;

    &:hover {
      opacity: 0.85;
    }
  }
}
</style>
