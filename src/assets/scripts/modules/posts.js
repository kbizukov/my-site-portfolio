import Vue from "vue";
import Api from "../api";

const asideItem = {
  props: {
    post: {
      type: Object,
      default: () => {}
    }
  },
  mounted() {
    var myEvent = new CustomEvent("positionAsideNav", {
      detail: {}
    });
    window.dispatchEvent(myEvent);
  },
  template: "#aside-item"
};

const blogPost = {
  props: {
    post: {
      type: Object,
      default: () => {}
    }
  },
  template: "#blog-post"
};

const posts = new Vue({
  el: "#blog-container",
  components: {
    asideItem,
    blogPost
  },
  data: {
    posts: [] /* ,
    articles: [
      ["Самое важное в SASS"],
      ["Приёмы в вёрстке, без которых не обходится ни один сайт"],
      ["Самый необходимый набор Gulp плагинов"],
      ["Почему я выбрал Pug"]
    ] */
  },
  created() {
    this.getPosts();
  },
  methods: {
    getPosts() {
      Api.fetchPosts().then(response => {
        let raw = response.data;
        raw.forEach(post => (post.date = this.formatDate(+post.date)));
        this.posts = raw;
      });
    },
    formatDate(time) {
      let myTime = new Date(time * 1000).toLocaleDateString("ru", {
        year: "numeric",
        month: "long",
        day: "2-digit"
      });
      return myTime;
    }
  },
  template: "#posts-container"
});
