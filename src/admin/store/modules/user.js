const user = {
  state: {
    userdata: {}
  },
  mutations: {
    fillUpUserData(state, user) {
      state.userdata = user;
    },
    clearUserData(state) {
      state.userdata = {};
    }
  },
  getters: {
    userId: state => state.userdata.id
  },
  actions: {
    getUserInfo({ commit, state }) {
      return this.$axios
        .get("/user")
        .then(
          response => {
            commit("fillUpUserData", response.data.user);
          },
          function error(e) {
            commit("showMessagePopup", "getUserInfo: " + e.message);
          }
        )
        .catch(e => {
          commit("showMessagePopup", "getUserInfo: " + e.message);
        });
    },
    logout({ commit }) {
      return this.$axios
        .post("/logout")
        .then(response => {
          console.log("logout response", response);
          localStorage.removeItem("token");
          commit("clearUserData");
          commit("showMessagePopup", "Вы успешно вышли");
        })
        .catch(e => {
          commit("showMessagePopup", "logout: " + e.message);
        });
    }
  }
};

export default user;
