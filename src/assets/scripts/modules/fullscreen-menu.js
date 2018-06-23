import Vue from "vue";

new Vue({
  el: "#fullscreen-menu-container",
  data: {
    visible: false
  },
  methods: {
    closeHandler() {
      this.visible = false;
    }
  },
  template: "#fullscreen-menu"
});
