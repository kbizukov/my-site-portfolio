webpackJsonp([4],{10:function(module,exports,__webpack_require__){"use strict";eval("\n\n__webpack_require__(11);\n__webpack_require__(12);\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvYXV0aC5qcz84MWYyIl0sIm5hbWVzIjpbInJlcXVpcmUiXSwibWFwcGluZ3MiOiI7O0FBQUEsbUJBQUFBLENBQVEsRUFBUjtBQUNBLG1CQUFBQSxDQUFRLEVBQVIiLCJmaWxlIjoiMTAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJyZXF1aXJlKFwiLi93ZWxjb21lXCIpO1xyXG5yZXF1aXJlKFwiLi9tb2R1bGVzL2JhY2tncm91bmRcIik7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hc3NldHMvc2NyaXB0cy9hdXRoLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///10\n")},11:function(module,exports,__webpack_require__){"use strict";eval('\n\n{\n  var DOC = document;\n\n  var flipper = DOC.getElementById("welcome-turner");\n  var body = DOC.getElementsByTagName("body")[0];\n  var authButton = DOC.getElementById("auth-button");\n  var toMainButton = DOC.getElementById("nav-to-main");\n\n  flipper && DOC.addEventListener("DOMContentLoaded", function () {\n    body.classList.add("welcome--no-overflow");\n\n    authButton.addEventListener("click", function (e) {\n      authButton.classList.add("auth-button--hidden");\n      flipper.classList.toggle("rotate");\n    });\n\n    body.addEventListener("click", function (e) {\n      if (!e.target.closest("#welcome-turner") && !e.target.closest("#auth-button")) {\n        if (flipper.classList.contains("rotate")) {\n          flipper.classList.remove("rotate");\n        }\n        authButton.classList.remove("auth-button--hidden");\n      }\n    });\n\n    toMainButton.addEventListener("click", function (e) {\n      e.preventDefault();\n      body.click();\n    });\n  });\n}\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvd2VsY29tZS5qcz9kOGEyIl0sIm5hbWVzIjpbIkRPQyIsImRvY3VtZW50IiwiZmxpcHBlciIsImdldEVsZW1lbnRCeUlkIiwiYm9keSIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwiYXV0aEJ1dHRvbiIsInRvTWFpbkJ1dHRvbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJjbGFzc0xpc3QiLCJhZGQiLCJ0b2dnbGUiLCJlIiwidGFyZ2V0IiwiY2xvc2VzdCIsImNvbnRhaW5zIiwicmVtb3ZlIiwicHJldmVudERlZmF1bHQiLCJjbGljayJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNFLE1BQU1BLE1BQU1DLFFBQVo7O0FBRUEsTUFBTUMsVUFBVUYsSUFBSUcsY0FBSixDQUFtQixnQkFBbkIsQ0FBaEI7QUFDQSxNQUFNQyxPQUFPSixJQUFJSyxvQkFBSixDQUF5QixNQUF6QixFQUFpQyxDQUFqQyxDQUFiO0FBQ0EsTUFBTUMsYUFBYU4sSUFBSUcsY0FBSixDQUFtQixhQUFuQixDQUFuQjtBQUNBLE1BQU1JLGVBQWVQLElBQUlHLGNBQUosQ0FBbUIsYUFBbkIsQ0FBckI7O0FBRUFELGFBQ0VGLElBQUlRLGdCQUFKLENBQXFCLGtCQUFyQixFQUF5QyxZQUFNO0FBQzdDSixTQUFLSyxTQUFMLENBQWVDLEdBQWYsQ0FBbUIsc0JBQW5COztBQUVBSixlQUFXRSxnQkFBWCxDQUE0QixPQUE1QixFQUFxQyxhQUFLO0FBQ3hDRixpQkFBV0csU0FBWCxDQUFxQkMsR0FBckIsQ0FBeUIscUJBQXpCO0FBQ0FSLGNBQVFPLFNBQVIsQ0FBa0JFLE1BQWxCLENBQXlCLFFBQXpCO0FBQ0QsS0FIRDs7QUFLQVAsU0FBS0ksZ0JBQUwsQ0FBc0IsT0FBdEIsRUFBK0IsYUFBSztBQUNsQyxVQUNFLENBQUNJLEVBQUVDLE1BQUYsQ0FBU0MsT0FBVCxDQUFpQixpQkFBakIsQ0FBRCxJQUNBLENBQUNGLEVBQUVDLE1BQUYsQ0FBU0MsT0FBVCxDQUFpQixjQUFqQixDQUZILEVBR0U7QUFDQSxZQUFJWixRQUFRTyxTQUFSLENBQWtCTSxRQUFsQixDQUEyQixRQUEzQixDQUFKLEVBQTBDO0FBQ3hDYixrQkFBUU8sU0FBUixDQUFrQk8sTUFBbEIsQ0FBeUIsUUFBekI7QUFDRDtBQUNEVixtQkFBV0csU0FBWCxDQUFxQk8sTUFBckIsQ0FBNEIscUJBQTVCO0FBQ0Q7QUFDRixLQVZEOztBQVlBVCxpQkFBYUMsZ0JBQWIsQ0FBOEIsT0FBOUIsRUFBdUMsYUFBSztBQUMxQ0ksUUFBRUssY0FBRjtBQUNBYixXQUFLYyxLQUFMO0FBQ0QsS0FIRDtBQUlELEdBeEJELENBREY7QUEwQkQiLCJmaWxlIjoiMTEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ7XHJcbiAgY29uc3QgRE9DID0gZG9jdW1lbnQ7XHJcblxyXG4gIGNvbnN0IGZsaXBwZXIgPSBET0MuZ2V0RWxlbWVudEJ5SWQoXCJ3ZWxjb21lLXR1cm5lclwiKTtcclxuICBjb25zdCBib2R5ID0gRE9DLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiYm9keVwiKVswXTtcclxuICBjb25zdCBhdXRoQnV0dG9uID0gRE9DLmdldEVsZW1lbnRCeUlkKFwiYXV0aC1idXR0b25cIik7XHJcbiAgY29uc3QgdG9NYWluQnV0dG9uID0gRE9DLmdldEVsZW1lbnRCeUlkKFwibmF2LXRvLW1haW5cIik7XHJcblxyXG4gIGZsaXBwZXIgJiZcclxuICAgIERPQy5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XHJcbiAgICAgIGJvZHkuY2xhc3NMaXN0LmFkZChcIndlbGNvbWUtLW5vLW92ZXJmbG93XCIpO1xyXG5cclxuICAgICAgYXV0aEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZSA9PiB7XHJcbiAgICAgICAgYXV0aEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiYXV0aC1idXR0b24tLWhpZGRlblwiKTtcclxuICAgICAgICBmbGlwcGVyLmNsYXNzTGlzdC50b2dnbGUoXCJyb3RhdGVcIik7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgYm9keS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZSA9PiB7XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgIWUudGFyZ2V0LmNsb3Nlc3QoXCIjd2VsY29tZS10dXJuZXJcIikgJiZcclxuICAgICAgICAgICFlLnRhcmdldC5jbG9zZXN0KFwiI2F1dGgtYnV0dG9uXCIpXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICBpZiAoZmxpcHBlci5jbGFzc0xpc3QuY29udGFpbnMoXCJyb3RhdGVcIikpIHtcclxuICAgICAgICAgICAgZmxpcHBlci5jbGFzc0xpc3QucmVtb3ZlKFwicm90YXRlXCIpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgYXV0aEJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKFwiYXV0aC1idXR0b24tLWhpZGRlblwiKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgdG9NYWluQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgYm9keS5jbGljaygpO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hc3NldHMvc2NyaXB0cy93ZWxjb21lLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///11\n')},12:function(module,exports,__webpack_require__){"use strict";eval('\n\nvar _vue = __webpack_require__(2);\n\nvar _vue2 = _interopRequireDefault(_vue);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nnew _vue2.default({\n  el: "#background-container",\n  data: {\n    allowed: false\n  },\n  mounted: function mounted() {\n    this.changeBackground();\n    window.addEventListener("resize", this.changeBackground);\n  },\n  beforeDestroy: function beforeDestroy() {\n    window.removeEventListener("resize", this.changeBackground);\n  },\n\n  methods: {\n    changeBackground: function changeBackground() {\n      if (screen.width > 1199) {\n        this.allowed = true;\n      } else {\n        this.allowed = false;\n      }\n    }\n  },\n  template: "#background"\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy9iYWNrZ3JvdW5kLmpzPzQwZmQiXSwibmFtZXMiOlsiVnVlIiwiZWwiLCJkYXRhIiwiYWxsb3dlZCIsIm1vdW50ZWQiLCJjaGFuZ2VCYWNrZ3JvdW5kIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImJlZm9yZURlc3Ryb3kiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwibWV0aG9kcyIsInNjcmVlbiIsIndpZHRoIiwidGVtcGxhdGUiXSwibWFwcGluZ3MiOiI7O0FBQUE7Ozs7OztBQUVBLElBQUlBLGFBQUosQ0FBUTtBQUNOQyxNQUFJLHVCQURFO0FBRU5DLFFBQU07QUFDSkMsYUFBUztBQURMLEdBRkE7QUFLTkMsU0FMTSxxQkFLSTtBQUNSLFNBQUtDLGdCQUFMO0FBQ0FDLFdBQU9DLGdCQUFQLENBQXdCLFFBQXhCLEVBQWtDLEtBQUtGLGdCQUF2QztBQUNELEdBUks7QUFTTkcsZUFUTSwyQkFTVTtBQUNkRixXQUFPRyxtQkFBUCxDQUEyQixRQUEzQixFQUFxQyxLQUFLSixnQkFBMUM7QUFDRCxHQVhLOztBQVlOSyxXQUFTO0FBQ1BMLG9CQURPLDhCQUNZO0FBQ2pCLFVBQUlNLE9BQU9DLEtBQVAsR0FBZSxJQUFuQixFQUF5QjtBQUN2QixhQUFLVCxPQUFMLEdBQWUsSUFBZjtBQUNELE9BRkQsTUFFTztBQUNMLGFBQUtBLE9BQUwsR0FBZSxLQUFmO0FBQ0Q7QUFDRjtBQVBNLEdBWkg7QUFxQk5VLFlBQVU7QUFyQkosQ0FBUiIsImZpbGUiOiIxMi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBWdWUgZnJvbSBcInZ1ZVwiO1xyXG5cclxubmV3IFZ1ZSh7XHJcbiAgZWw6IFwiI2JhY2tncm91bmQtY29udGFpbmVyXCIsXHJcbiAgZGF0YToge1xyXG4gICAgYWxsb3dlZDogZmFsc2VcclxuICB9LFxyXG4gIG1vdW50ZWQoKSB7XHJcbiAgICB0aGlzLmNoYW5nZUJhY2tncm91bmQoKTtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHRoaXMuY2hhbmdlQmFja2dyb3VuZCk7XHJcbiAgfSxcclxuICBiZWZvcmVEZXN0cm95KCkge1xyXG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgdGhpcy5jaGFuZ2VCYWNrZ3JvdW5kKTtcclxuICB9LFxyXG4gIG1ldGhvZHM6IHtcclxuICAgIGNoYW5nZUJhY2tncm91bmQoKSB7XHJcbiAgICAgIGlmIChzY3JlZW4ud2lkdGggPiAxMTk5KSB7XHJcbiAgICAgICAgdGhpcy5hbGxvd2VkID0gdHJ1ZTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmFsbG93ZWQgPSBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgdGVtcGxhdGU6IFwiI2JhY2tncm91bmRcIlxyXG59KTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2Fzc2V0cy9zY3JpcHRzL21vZHVsZXMvYmFja2dyb3VuZC5qcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///12\n')}},[10]);