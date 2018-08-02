import Vue from "vue";
import Api from "../api";

const DOC = document;
const WIN = window;

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
  methods: {
    scrollToPost(e) {
      const toElemName = e.target.attributes.postId.value;

      const scrollToElem = DOC.getElementById(toElemName);
      const articleYOffset = DOC.documentElement.scrollTop;
      const elemToOffsetTop = scrollToElem.offsetTop;

      console.log("articleYOffset", articleYOffset);
      console.log("elemToOffsetTop", elemToOffsetTop);
      let vScrollTo = elemToOffsetTop;
      if (elemToOffsetTop < articleYOffset) {
        vScrollTo = articleYOffset;
      }

      this.scrollTo(
        elemToOffsetTop,
        toElemName,
        articleYOffset,
        vScrollTo,
        100
      );
    },
    scrollTo(elemToOffsetTop, toElemName, totalScroll, to, duration) {
      console.log("to", to);
      var perTick = (to / duration) * 10;

      setTimeout(() => {
        if (elemToOffsetTop < totalScroll) {
          totalScroll -= perTick;
        } else {
          totalScroll += perTick;
        }
        console.log("totalScroll", totalScroll);
        WIN.scrollTo(0, totalScroll);

        if (toElemName === "top") {
          if (WIN.pageYOffset <= elemToOffsetTop) return;
        } else {
          if (WIN.pageYOffset >= to) return;
        }
        this.scrollTo(
          elemToOffsetTop,
          toElemName,
          totalScroll,
          to,
          duration - 10
        );
      }, 10);
    }
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
    posts: []
  },
  created() {
    this.getPosts();
  },
  methods: {
    getPosts() {
      Api.fetchPosts().then(response => {
        let raw = response.data;
        // raw.forEach(post => (post.date = this.formatDate(+post.date)));
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
