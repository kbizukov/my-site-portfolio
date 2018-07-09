import Vue from "vue";
import Api from "../api";

const swipeItem = {
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
  template: "#swipe-item"
};

const swipeMenu = new Vue({
  el: "#swipe-menu-container",
  components: {
    swipeItem
  },
  data: {
    posts: []
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
  template: "#swipe-menu"
});
