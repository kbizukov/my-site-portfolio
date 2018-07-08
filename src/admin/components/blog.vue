<template lang="pug">
  .blog-content
    h3.blog__label Добавить запись
    .article
      .article__name
        input.text-input(
          v-model="newPost.title"
          type="text"
          placeholder="Название"
        )
      .article__date
        input.text-input(
          v-model="newPost.date"
          type="date"
          placeholder="Дата"
        )
      .article__text
        textarea.text-input.text-area(
          v-model="newPost.content"
          placeholder="Содержание"
        )

    .admin-button
      admin-button(
        tab="blog"
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
      newPost: state => state.blog.newPost
    })
  },
  mounted() {
    this.$watch(
      "newPost",
      () => {
        this.fillUpNewPost(this.newPost);
      },
      { deep: true }
    );
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.$parent.activeTab = "Блог";
    });
  },
  created() {
    this.fetchPosts();
  },
  methods: {
    ...mapMutations(["fillUpNewPost"]),
    ...mapActions(["fetchPosts"])
  }
};
</script>

<style lang="scss" scoped>
.blog__label {
  font-size: 16px;
  line-height: 34px;
  color: #474b57;
}
.article {
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

  .article__date {
    .text-input {
      font-family: "Roboto", Helvetica, sans-serif;
      padding: 10px 20px;

      &:placeholder {
        color: rgba(55, 62, 66, 0.5);
      }
    }
  }

  .text-area {
    font-family: "Roboto", Helvetica, sans-serif;
    width: 100%;
    height: 166px;
    margin-bottom: 20px;
    padding: 20px 20px;
    box-sizing: border-box;
    font-size: 14px;

    @media screen and (min-width: 768px) {
      font-size: 16px;
      width: 500px;
      height: 166px;
    }

    &:placeholder {
      color: rgba(55, 62, 66, 0.5);
    }
  }
}
</style>
