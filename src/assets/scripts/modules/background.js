import Vue from "vue";

const WIN = window;
const DOC = document;
const SCR = screen;

const background = {
  mounted() {
    setTimeout(() => {
      // if (WIN.isWelcomePage && SCR.width > 1199) {
      this.mountBackground();
      // } else {
      //   this.loadImages();
      // }
      WIN.addEventListener("mousemove", this.moveLayer);
    }, 500);
  },
  beforeDestroy() {
    WIN.removeEventListener("mousemove", this.moveLayer);
  },
  methods: {
    downloadFile(url) {
      let loadPercentage = 0;
      var promise = new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", url);
        xhr.responseType = "blob";

        xhr.onprogress = event => {
          let progress = parseInt((event.loaded / event.total) * 50);
          WIN.percents += progress - loadPercentage;
          // console.log("WIN.percents", WIN.percents);
          var myEvent = new CustomEvent("updatePercents", {
            detail: {
              percents: WIN.percents
            }
          });

          WIN.dispatchEvent(myEvent);
          loadPercentage = progress;
        };

        xhr.send(null);
        xhr.onload = function() {
          if (xhr.status === 200) {
            resolve(xhr.response);
          } else {
            reject(
              new Error(
                `Картинка не загрузилась. error code:
                ${request.statusText}`
              )
            );
          }
        };

        xhr.onerror = function() {
          reject(new Error("Ошибка сети."));
        };
      });

      return promise;
    },
    mountBackground() {
      // const background = DOC.querySelector(".background");
      const backgroundLayer = DOC.querySelector(".background__layer");
      // const video = DOC.createElement("video");
      const mountains = new Image();

      mountains.classList.add("background__img");
      mountains.alt = "Горы";
      mountains.crossOrigin = "anonymous";

      this.downloadFile("./assets/images/mountains-bg.png").then(
        function(response) {
          var blob = new Blob([response]);
          mountains.src = window.URL.createObjectURL(blob);
          backgroundLayer.appendChild(mountains);
          console.log("картинка загружена");
        },
        function(Error) {
          console.log(Error);
        }
      );

      // video.classList.add("background__video");
      // video.src = "./assets/images/night.mp4";
      // video.setAttribute("autoplay", "");
      // video.setAttribute("muted", "");
      // video.setAttribute("loop", "");
      // background.appendChild(video);
      // console.log("video", video);
      const vid = DOC.querySelector(".background__video");
      // console.log("vid", vid);
      // vid.onprogress = function(e) {
      //   console.log("e", e);
      //   console.log("Downloading video");
      // };
      if (vid) {
        WIN.percents += 50;
      }

      // vid.onloadeddata = () => {
      //   console.log("onloadeddata");
      //   // vid.play();
      // WIN.percents += 50;
      //   var myEvent = new CustomEvent("updatePercents", {
      //     detail: {
      //       percents: WIN.percents
      //     }
      //   });
      //   WIN.dispatchEvent(myEvent);
      //   console.log("видео загружено");
      // };

      // this.downloadFile("./assets/images/night.mp4").then(
      //   function(response) {
      //     var blob = new Blob([response]);
      //     video.src = window.URL.createObjectURL(blob);
      //     background.appendChild(video);
      //     console.log("видео загружено");
      //   },
      //   function(Error) {
      //     console.log(Error);
      //   }
      // );

      // const avatarContainer = DOC.querySelector(".avatar");
      // const avatar = DOC.createElement("img");
      // avatar.classList.add("avatar__img");
      // avatar.src = "./assets/images/me.jpg";
      // avatarContainer.appendChild(avatar);
      // avatar.addEventListener("load", function() {
      //   console.log("avatar загружена");
      // });
    },
    moveLayer(e) {
      const layer = DOC.querySelector(".background__layer");
      const initialX = WIN.innerWidth / 2 - e.pageX;
      const initialY = WIN.innerHeight / 2 - e.pageY;
      const divider = 3.5 / 100;
      const positionX = initialX * divider;
      const positionY = initialY * divider;

      layer.style.transform = `translate(${positionX}px, ${positionY}px)`;
    }
  },
  template: "#background"
};

export default background;
