import axios from "axios";

function responseHandler(response) {
  if (response.status == 200) {
    return response.json();
  } else {
    return Promise.reject({ message: response.statusText });
  }
}

// axios.defaults.baseURL = "/";

let realApi = {
  login(user) {
    return axios.post("/login", user);
  },
  sendForm(data) {
    return fetch("localhost/sendForm", { method: "post", body: data }).then(
      responseHandler
    );
  },
  fetchWorks() {
    // return axios.get("/works/8");
    const worksData = require("../../data/works.json");

    return new Promise((resolve, reject) => {
      if (worksData) {
        resolve({ data: worksData });
      } else {
        reject({ status: "Error", message: "Нет работ" });
      }
    });
  },
  fetchPosts() {
    // return axios.get("/posts/8");
    const postsData = require("../../data/posts.json");

    return new Promise((resolve, reject) => {
      if (postsData) {
        resolve({ data: postsData });
      } else {
        reject({ status: "Error", message: "Нет постов" });
      }
    });
  },
  fetchSkills() {
    // return axios.get("/skills/8");
    const skillsData = require("../../data/skills.json");

    return new Promise((resolve, reject) => {
      if (skillsData) {
        resolve({ data: skillsData });
      } else {
        reject({ status: "Error", message: "Нет скилов" });
      }
    });
  }
};

let mockApi = {
  login(data) {
    return new Promise((resolve, reject) => {
      if (data) {
        resolve({ status: "Ok", message: "Вы успешно вошли" });
      } else {
        reject({ status: "Error", message: "Ошибка при входе в ваш аккаунт" });
      }
    });
  },
  sendForm(data) {
    return new Promise((resolve, reject) => {
      if (data) {
        resolve({ status: "Ok", message: "Сообщение отправлено" });
      } else {
        reject({ status: "Error", message: "Нет данных для отправки" });
      }
    });
  }
};

export default realApi;
