const blog = {
  state: {
    posts: [],
    newPost: {
      title: "",
      date: "",
      content: ""
    }
  },
  mutations: {
    fillUpPosts(state, posts) {
      state.posts = posts;
    },
    addPost(state, post) {
      state.posts.push(post);
    },
    removePost(state, postId) {
      state.posts = state.posts.filter(item => item.id !== postId);
    },
    fillUpNewPost(state, newPost) {
      state.newPost = newPost;
    },
    clearFilledPostFields(state) {
      state.newPost = {
        title: "",
        date: "",
        content: ""
      };
    }
  },
  getters: {
    newPost: state => state.newPost
  },
  actions: {
    addNewPost({ commit }, post) {
      console.log("post", post);
      return this.$axios
        .post("/posts", post)
        .then(response => {
          console.log("response", response);
          if (response.status >= 200 && response.status <= 300) {
            var text = "Новая статья успешно создана";
          } else {
            text = response.statusText;
          }

          commit("showMessagePopup", text);
          commit("addPost", response.data);
          commit("showMessagePopup", `Пост ${post.title} успешно добавлен`);
        })
        .catch(e => {
          commit("showMessagePopup", e.message);
        });
    },
    removeExistedPost({ commit }, postId) {
      return this.$axios
        .delete(`/posts/${postId}`)
        .then(response => {
          commit("removePost", postId);
          commit("showMessagePopup", response.message);
        })
        .catch(e => {
          commit("showMessagePopup", e.message);
        });
    },
    fetchPosts({ commit, getters }) {
      return this.$axios
        .get(`/posts/${getters.userId}`)
        .then(response => {
          commit("fillUpPosts", response.data);
        })
        .catch(e => {
          commit("showMessagePopup", e.message);
        });
    }
  }
};

export default blog;
