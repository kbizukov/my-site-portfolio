import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import admin from "./components/admin.vue";
import about from "./components/about.vue";
import works from "./components/works.vue";
import blog from "./components/blog.vue";
import axios from "axios";

const routes = [
  // {
  //   path: "/admin",
  //   redirect: "/my-site-portfolio/dist/admin"
  // },
  {
    path: "/my-site-portfolio/dist/admin",
    component: admin,
    children: [
      {
        path: "/my-site-portfolio/dist/admin/about",
        component: about
      },
      {
        path: "/my-site-portfolio/dist/admin/works",
        component: works
      },
      {
        path: "/my-site-portfolio/dist/admin/blog",
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
      window.location.href = "/"; // /my-site-portfolio/dist/
    });
});

export default router;
