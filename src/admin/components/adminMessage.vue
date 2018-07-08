<template lang="pug">
  transition(
    name="fade-popup"
    @after-enter="afterEnter"
    @leave="animationLeave"
    )
    template(v-if="visible")
      .message-popup-wrapper(:key="messageText")
        .message-popup
          p.message-popup__text {{messageText}}
          .message-popup__button-container
            button.message-popup__button(
              @click="closePopup"
            ) Закрыть
</template>

<script>
const body = document.getElementsByTagName("body")[0];

import { mapMutations, mapGetters, mapActions, mapState } from "vuex";

export default {
  computed: {
    ...mapState({
      visible: state => state.message.visible,
      showMessageFlag: state => state.message.showMessageFlag,
      messageText: state => state.message.messageText
    })
  },
  methods: {
    ...mapMutations(["hideMessagePopup"]),
    afterEnter() {
      this.setBodyListener();
    },
    animationLeave() {
      body.removeEventListener("click", this.bodyListener);
    },

    bodyListener(e) {
      if (
        e.target.closest(".message-popup") ||
        e.target.closest(".message-popup__button")
      ) {
        return;
      }

      this.hideMessagePopup();
    },

    setBodyListener() {
      body.addEventListener("click", this.bodyListener);
    },

    closePopup() {
      this.hideMessagePopup();
    }
  }
};
</script>

<style lang="scss" scoped>
.message-popup-wrapper {
  position: fixed;
  z-index: 50;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.message-popup {
  min-width: 280px;
  min-height: 112px;
  background: #fff;
  border-radius: 5px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
  font-size: 14px;
  padding: 20px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }

  &__text {
    color: rgba(71, 75, 87, 0.8);
    margin-bottom: 20px;
    text-align: center;
  }

  &__button {
    width: 104px;
    height: 40px;
    background: #0548be;
    color: #fff;
    border-radius: 5px;
    margin: auto;
    display: block;
  }
}

.fade-popup-enter-active,
.fade-popup-leave-active {
  transition: 0.5s;
}

.fade-popup-leave {
  opacity: 1;
}

.fade-popup-leave-to {
  opacity: 0;
}

.fade-popup-enter {
  opacity: 0;
}

.fade-popup-enter-to {
  opacity: 1;
}
</style>
