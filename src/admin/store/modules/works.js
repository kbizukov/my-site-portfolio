const works = {
  state: {
    works: [],
    newProject: {
      title: "",
      techs: "",
      photo: "",
      link: ""
    }
  },
  mutations: {
    fillUpWorks(state, works) {
      state.works = works;
    },
    addProject(state, work) {
      state.works.push(work);
    },
    removeProject(state, workId) {
      state.works = state.works.filter(item => item.id !== workId);
    },
    fillUpNewProject(state, newProject) {
      state.newProject = newProject;
    },
    addNewProjectPhoto(state, photo) {
      console.log("addNewProjectPhoto photo", photo);
      state.newProject.photo = photo;
    },
    clearFilledWorkFields(state) {
      state.newProject = {
        title: "",
        techs: "",
        photo: "",
        link: ""
      };
    }
  },
  getters: {
    newProject: state => state.newProject
  },
  actions: {
    addNewProject({ commit }, work) {
      return this.$axios
        .post("/works", work)
        .then(response => {
          commit("addProject", response.data);
          commit(
            "showMessagePopup",
            `Проект ${response.data.title} успешно добавлен`
          );
        })
        .catch(e => {
          commit("showMessagePopup", e.message);
        });
    },
    removeExistedProject({ commit }, workId) {
      return this.$axios
        .delete(`/works/${workId}`)
        .then(response => {
          commit("removeProject", workId);
          commit("showMessagePopup", response.message);
        })
        .catch(e => {
          commit("showMessagePopup", e.message);
        });
    },
    fetchWorks({ commit, getters }, userId) {
      return this.$axios
        .get(`/works/${getters.userId}`)
        .then(response => {
          commit("fillUpWorks", response.data);
        })
        .catch(e => {
          commit("showMessagePopup", e.message);
        });
    }
  }
};

export default works;
