function responseHandler(response) {
  if (response.status == 200) {
    return response.json();
  } else {
    return Promise.reject({ message: response.statusText });
  }
}

let realApi = {
  login(data) {
    return fetch("localhost/login", { method: "post", body: data }).then(
      responseHandler
    );
  },
  sendForm(data) {
    return fetch("localhost/sendForm", { method: "post", body: data }).then(
      responseHandler
    );
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

export default mockApi;
