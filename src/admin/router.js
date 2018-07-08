import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import admin from "./components/admin.vue";
import about from "./components/about.vue";
import works from "./components/works.vue";
import blog from "./components/blog.vue";
import axios from "axios";

const routes = [
  {
    path: "/",
    redirect: "/admin"
  },
  {
    path: "/admin",
    component: admin,
    children: [
      {
        path: "/admin/about",
        component: about
      },
      {
        path: "/admin/works",
        component: works
      },
      {
        path: "/admin/blog",
        component: blog
      }
    ]
  }
];

const router = new VueRouter({ routes, mode: "history" });

const guard = axios.create({
  baseURL: "http://webdev-api.loftschool.com/"
});

router.beforeEach((to, from, next) => {
  guard
    .get("/user", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    })
    .then(response => {
      next();
    })
    .catch(error => {
      console.log("error in router");
      localStorage.removeItem("token");
      window.location.href = "/";
    });
});

export default router;
