<template lang="pug">
  .admin-container
    .admin
      header.header
        .title
          h2.title-text Панель администрирования
        .return-to-site
          a.return-to-site__link(
            href=""
            @click.prevent="returnToSite"
          ) Вернуться на сайт

      nav.tabs
        ul.tabs__list
          router-link.tabs__item(
            v-for="tab, index in tabs"
            :key="index"
            :to="`/my-site-portfolio/dist/admin/${tab.route}`"
            tag="li"
          )
            a.tabs__link(
              :class="activeTab==tab.title ? 'tabs__link--active' : ''"
            )
              span.tabs__text {{tab.title}}

      section.content
        h2.content__title Страница &laquo;{{activeTab}}&raquo;
        router-view

    admin-message(
      v-if="showMessageFlag"
    )

</template>

<script>
import adminMessage from "./adminMessage";
import { mapState, mapGetters, mapActions } from "vuex";

export default {
  components: {
    adminMessage
  },
  data() {
    return {
      activeTab: "Обо мне",
      tabs: [
        {
          title: "Обо мне",
          route: "about"
        },
        {
          title: "Блог",
          route: "blog"
        },
        {
          title: "Мои работы",
          route: "works"
        }
      ]
    };
  },
  computed: {
    ...mapState({
      userdata: state => state.user.userdata,
      showMessageFlag: state => state.message.showMessageFlag
    })
  },
  created() {
    this.getUserInfo().then(r => {
      if (this.activeTab === "Обо мне") {
        this.$router.push("/my-site-portfolio/dist/admin/about");
      }
    });
  },
  methods: {
    ...mapActions(["getUserInfo", "logout"]),
    returnToSite() {
      console.log("returnToSite");
      this.logout();
      setTimeout(() => {
        window.location.href = "/";
      }, 1000);
    }
  }
};
</script>



<style lang="scss">
.admin-container {
  width: 100vw;
  height: 100%;
  min-height: 100vh;
  background: url("../bg-phone.jpg") center no-repeat;
  background-size: cover;

  @media screen and (min-width: 425px) {
    background: url("../bg-ipad.jpg") center no-repeat;
    background-size: cover;
  }

  @media screen and (min-width: 900px) {
    background: url("../bg-1200.jpg") center no-repeat;
    background-size: cover;
  }
}
.admin {
  width: 100%;
  height: 100%;
  min-height: 100vh;
  color: #fff;
  background: rgba(255, 255, 255, 0.85);
}

.header {
  height: 80px;
  background: #0548be;
  padding: 15px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column-reverse;

  @media screen and (min-width: 551px) {
    padding: 20px 30px;
    justify-content: space-between;
    flex-flow: row nowrap;
  }

  @media screen and (min-width: 323px) {
    box-sizing: border-box;
  }

  .title-text {
    margin: 0;
    font-weight: 500;
    font-size: 21px;
    line-height: 34px;
    text-align: center;
    line-height: 1.525rem;

    @media screen and (min-width: 323px) {
      line-height: 34px;
    }

    @media screen and (min-width: 1200px) {
      font-size: 28px;
    }
  }

  .return-to-site__link {
    color: #ccd4ed;
    font-size: 14px;
    transition: all 0.3s;
    line-height: 24px;

    @media screen and (min-width: 551px) {
      font-size: 16px;
    }

    &:hover {
      color: #fff;
      text-decoration: none;
    }
  }
}

.content__title {
  font-size: 21px;
  color: #474b57;
  font-weight: 500;
}

.tabs {
  background: #f0efe9;

  @media screen and (min-width: 551px) {
    height: 60px;
  }

  &__list {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-flow: column wrap;

    @media screen and (min-width: 551px) {
      flex-flow: row nowrap;
    }
  }

  &__item {
    font-size: 16px;
    font-weight: 500;
    height: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    flex: 1;
    transition: all 0.5s;

    &:not(:last-child) {
      border-bottom: 2px solid #fff;
    }

    @media screen and (min-width: 551px) {
      min-height: 60px;

      &:not(:last-child) {
        border-right: 2px solid #fff;
      }
      border-bottom: none !important;
    }

    @media screen and (min-width: 1200px) {
      min-height: 60px;
      border-right: 2px solid #fff;
      border-bottom: none !important;
      width: 180px;
      flex: 0 auto;
    }

    &:hover,
    &.active {
      background: #fff;
    }
  }

  &__link {
    color: #74767c;
    text-decoration: none;
    text-transform: uppercase;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;

    &--active {
      color: #0548be;
      background: #fff;
    }
  }
}

.content {
  color: #74767c;
  padding: 30px 10px;

  @media screen and (min-width: 551px) {
    overflow-x: hidden;
    padding: 50px 30px;
  }
}

.admin-button {
  width: 120px;
  button {
    font-size: 14px;
    @media screen and (min-width: 768px) {
      font-size: 16px;
    }
  }
}
</style>
