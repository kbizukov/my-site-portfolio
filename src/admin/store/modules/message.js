const message = {
  state: {
    showMessageFlag: false,
    messageText: "",
    visible: false
  },
  mutations: {
    showMessagePopup(state, text) {
      state.showMessageFlag = true;
      state.messageText = text;
      state.visible = true;
    },
    hideMessagePopup(state) {
      state.showMessageFlag = false;
      state.messageText = "";
      state.visible = false;
    }
  }
};

export default message;
