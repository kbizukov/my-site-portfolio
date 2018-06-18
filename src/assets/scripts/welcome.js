{
  const DOC = document;

  const flipper = DOC.getElementById("welcome-turner");
  const body = DOC.getElementsByTagName("body")[0];
  const authButton = DOC.getElementById("auth-button");
  const toMainButton = DOC.getElementById("nav-to-main");

  flipper &&
    DOC.addEventListener("DOMContentLoaded", () => {
      authButton.addEventListener("click", e => {
        authButton.classList.add("auth-button--hidden");
        flipper.classList.toggle("rotate");
      });

      body.addEventListener("click", e => {
        if (
          !e.target.closest("#welcome-turner") &&
          !e.target.closest("#auth-button")
        ) {
          if (flipper.classList.contains("rotate")) {
            flipper.classList.remove("rotate");
          }
          authButton.classList.remove("auth-button--hidden");
        }
      });

      toMainButton.addEventListener("click", e => {
        e.preventDefault();
        body.click();
      });
    });
}
