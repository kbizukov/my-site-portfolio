const fs = require("fs");
const webdriverio = require("webdriverio");
const options = require("../wdio.conf");
const client = webdriverio.multiremote(options);

jest.setTimeout(30000);

beforeAll(() => {
  return client.init().url("http://localhost:3000");
});

test('на странице есть кнопка "Авторизоваться"', () => {
  return client.isExisting("#auth-button").then(browsers => {
    for (const browserName in browsers) {
      expect(browsers[browserName]).toBe(true);
    }
  });
  /* .screenshot()
    .then(browsers => {
      for (const browserName in browsers) {
        fs.writeFileSync(
          `./screenshots/authorization_${browserName}_has_auth_button.png`,
          browsers[browserName].value,
          "base64"
        );
      }
    }) */
});

// test('при нажатии на "Авторизоваться" появляется форма', () => {
//   return client
//     .isExisting(".preloader")
//     .then(browsers => {
//       console.log("browsers", browsers);
//       for (const browserName in browsers) {
//         expect(browsers[browserName]).toBe(true);
//       }
//     })
//     .click("#auth-button")
//     .isVisible("form.login")
//     .then(browsers => {
//       for (const browserName in browsers) {
//         expect(browsers[browserName]).toBe(true);
//       }
//     });
//   /* .screenshot()
//     .then(screenshots => {
//       for (const browserName in screenshots) {
//         fs.writeFileSync(
//           `./screenshots/authorization_${browserName}_has_login-form.png`,
//           screenshots[browserName].value,
//           "base64"
//         );
//       }
//     }) */
// });

// test("в форме есть все необходимые поля", () => {
//   return client
//     .isExisting("input.login__input--login")
//     .isExisting("input.login__input--password")
//     .isExisting("input.login__confirm-input--check-human")
//     .isExisting("input.login__confirm-input--humanConfirmed")
//     .isExisting("input.login__confirm-input--humanNotConfirmed")
//     .then(browsers => {
//       console.log("browsers", browsers);
//       for (const browserName in browsers) {
//         expect(browsers[browserName]).toBe(true);
//       }
//     })
//     .screenshot()
//     .then(browsers => {
//       for (const browserName in browsers) {
//         fs.writeFileSync(
//           `./screenshots/authorization_${browserName}_has_auth_button.png`,
//           browsers[browserName].value,
//           "base64"
//         );
//       }
//     });
// });

afterAll(() => {
  return client.end();
});
