const skills = {
  state: {
    data: []
  },
  mutations: {
    fillUpSkills(state, skills) {
      state.data = skills;
    },
    addSkill(state, skill) {
      state.data.push(skill);
    },
    removeSkill(state, skillId) {
      state.data = state.data.filter(item => item.id !== skillId);
    }
  },
  actions: {
    addNewSkill({ commit }, skill) {
      return this.$axios
        .post("/skills", skill)
        .then(response => {
          commit("addSkill", response.data);
          commit("showMessagePopup", `Навык ${skill.title} успешно добавлен`);
        })
        .catch(e => {
          commit("showMessagePopup", e.message);
        });
    },
    removeExistedSkill({ commit }, skillId) {
      return this.$axios
        .delete(`/skills/${skillId}`)
        .then(response => {
          commit("removeSkill", skillId);
          commit("showMessagePopup", "Навык успешно удален");
        })
        .catch(e => {
          commit("showMessagePopup", e.message);
        });
    },
    fetchSkills({ commit, getters }) {
      return this.$axios
        .get(`/skills/${getters.userId}`)
        .then(response => {
          commit("fillUpSkills", response.data);
        })
        .catch(e => {
          commit("showMessagePopup", e.message);
        });
    }
  }
};

export default skills;
