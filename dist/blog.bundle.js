webpackJsonp([3],{1:function(module,exports,__webpack_require__){"use strict";eval('\n\nvar _vue = __webpack_require__(0);\n\nvar _vue2 = _interopRequireDefault(_vue);\n\nvar _preloader = __webpack_require__(7);\n\nvar _preloader2 = _interopRequireDefault(_preloader);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar app = new _vue2.default({\n  el: "#main-app",\n  components: {\n    preloader: _preloader2.default\n  },\n  beforeMount: function beforeMount() {\n    window.isWelcomePage = false;\n  },\n  mounted: function mounted() {\n    console.log("main-app mounted");\n  }\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy9tYWluLWFwcC5qcz9iOWY5Il0sIm5hbWVzIjpbImFwcCIsIlZ1ZSIsImVsIiwiY29tcG9uZW50cyIsInByZWxvYWRlciIsImJlZm9yZU1vdW50Iiwid2luZG93IiwiaXNXZWxjb21lUGFnZSIsIm1vdW50ZWQiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOztBQUFBOzs7O0FBQ0E7Ozs7OztBQUVBLElBQU1BLE1BQU0sSUFBSUMsYUFBSixDQUFRO0FBQ2xCQyxNQUFJLFdBRGM7QUFFbEJDLGNBQVk7QUFDVkM7QUFEVSxHQUZNO0FBS2xCQyxhQUxrQix5QkFLSjtBQUNaQyxXQUFPQyxhQUFQLEdBQXVCLEtBQXZCO0FBQ0QsR0FQaUI7QUFRbEJDLFNBUmtCLHFCQVFSO0FBQ1JDLFlBQVFDLEdBQVIsQ0FBWSxrQkFBWjtBQUNEO0FBVmlCLENBQVIsQ0FBWiIsImZpbGUiOiIxLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFZ1ZSBmcm9tIFwidnVlXCI7XHJcbmltcG9ydCBwcmVsb2FkZXIgZnJvbSBcIi4vcHJlbG9hZGVyXCI7XHJcblxyXG5jb25zdCBhcHAgPSBuZXcgVnVlKHtcclxuICBlbDogXCIjbWFpbi1hcHBcIixcclxuICBjb21wb25lbnRzOiB7XHJcbiAgICBwcmVsb2FkZXJcclxuICB9LFxyXG4gIGJlZm9yZU1vdW50KCkge1xyXG4gICAgd2luZG93LmlzV2VsY29tZVBhZ2UgPSBmYWxzZTtcclxuICB9LFxyXG4gIG1vdW50ZWQoKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcIm1haW4tYXBwIG1vdW50ZWRcIik7XHJcbiAgfVxyXG59KTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2Fzc2V0cy9zY3JpcHRzL21vZHVsZXMvbWFpbi1hcHAuanMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///1\n')},26:function(module,exports,__webpack_require__){"use strict";eval('/* WEBPACK VAR INJECTION */(function($) {\n\n__webpack_require__(1);\n\n__webpack_require__(3);\n\n__webpack_require__(4);\n\n__webpack_require__(5);\n\n__webpack_require__(6);\n\n$(function () {\n  var WIN = window;\n  var DOC = document;\n  var SCR = screen;\n  var $articles = $(".blog__article"); // статьи справа\n  var articles = $articles.toArray(); // []\n  var $nav = $(".nav--blog");\n  // const $footer = $(".footer");\n  var $articlesList = $(".nav__list"); // ul со списком статей слева\n  var $articleTitles = $(".blog__nav"); // aside\n  var $navItem = $(".nav__item");\n  var $swipeNavLink = $(".swipe-nav__link");\n  var wrapper = $(".wrapper")[0];\n  var $swipeTouch = $(".swipe-touch");\n  var $swipeMenu = $(".swipe-menu");\n  var $body = $("body");\n\n  var activeArticleId = null;\n\n  function getCoords(elem) {\n    var box = elem.getBoundingClientRect(); // {top: 123, left: 123}\n\n    return {\n      top: box.top + WIN.pageYOffset,\n      left: box.left + WIN.pageXOffset\n    };\n  }\n\n  function setArticleActive() {\n    var initialOffset = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;\n\n    function setActive(artcl) {\n      if (artcl.dataset.idtitle !== activeArticleId) {\n        activeArticleId = artcl.dataset.idtitle;\n\n        $navItem.removeClass("nav__item--active");\n        $swipeNavLink.removeClass("swipe-nav__link--active");\n        $("[name=" + activeArticleId + "]").addClass("nav__item--active");\n\n        $swipeMenu.find("[name=" + activeArticleId + "]").addClass("swipe-nav__link--active");\n      }\n    }\n\n    if (WIN.pageYOffset < getCoords(articles[0]).top) {\n      setActive(articles[0]);\n    } else if (WIN.pageYOffset + WIN.innerHeight === wrapper.offsetHeight - initialOffset) {\n      setActive(articles[articles.length - 1]);\n    } else {\n      articles.forEach(function (article) {\n        var elemTop = getCoords(article).top;\n        if (WIN.pageYOffset > elemTop - 150) {\n          setActive(article);\n        }\n      });\n    }\n  }\n\n  function setArticleChords() {\n    // в elemChords получаем объект с координатами aside\n    var elemChords = getCoords($articleTitles[0]);\n    // const footerChords = $footer.offset();\n\n    if (WIN.pageYOffset >= elemChords.top - 30) {\n      $articlesList.css({\n        position: "fixed",\n        top: 30 + "px"\n        // \'left\': elemChords.left + \'px\'\n      });\n    } else {\n      $articlesList.css({\n        position: "static"\n      });\n    }\n  }\n\n  function setArticlesWidth() {\n    if (SCR.availWidth > 767) {\n      $articlesList.css({\n        width: $nav.innerWidth()\n      });\n    } else {\n      $articlesList.removeAttr("style");\n    }\n  }\n\n  if ($articlesList.length && $articles.length) {\n    setArticlesWidth();\n\n    // выполниться только тогда когда будет действия скроллинг\n    $(WIN).scroll(function () {\n      setArticleChords();\n      setArticleActive();\n    });\n\n    // выполниться при загрузке кода\n    setArticleChords();\n    setArticleActive(41);\n\n    $(WIN).resize(function () {\n      setArticlesWidth();\n    });\n  }\n\n  /** swipe menu **/\n\n  $swipeMenu.on("click", function (e) {\n    var target = $(e.target);\n    if (target.is(".swipe-nav__link")) {\n      target.addClass("swipe-nav__link--active");\n    }\n\n    if ($swipeMenu.hasClass("swipe-menu--opened")) {\n      $swipeMenu.removeClass("swipe-menu--opened");\n    } else {\n      $swipeMenu.addClass("swipe-menu--opened");\n    }\n  });\n\n  $body.on("click", function (e) {\n    var target = $(e.target);\n\n    if (target.is($swipeMenu) || target.is($swipeTouch)) return;\n\n    if ($swipeMenu.hasClass("swipe-menu--opened")) {\n      $swipeMenu.removeClass("swipe-menu--opened");\n    }\n  });\n});\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvYmxvZy5qcz9kODVhIl0sIm5hbWVzIjpbIiQiLCJXSU4iLCJ3aW5kb3ciLCJET0MiLCJkb2N1bWVudCIsIlNDUiIsInNjcmVlbiIsIiRhcnRpY2xlcyIsImFydGljbGVzIiwidG9BcnJheSIsIiRuYXYiLCIkYXJ0aWNsZXNMaXN0IiwiJGFydGljbGVUaXRsZXMiLCIkbmF2SXRlbSIsIiRzd2lwZU5hdkxpbmsiLCJ3cmFwcGVyIiwiJHN3aXBlVG91Y2giLCIkc3dpcGVNZW51IiwiJGJvZHkiLCJhY3RpdmVBcnRpY2xlSWQiLCJnZXRDb29yZHMiLCJlbGVtIiwiYm94IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwidG9wIiwicGFnZVlPZmZzZXQiLCJsZWZ0IiwicGFnZVhPZmZzZXQiLCJzZXRBcnRpY2xlQWN0aXZlIiwiaW5pdGlhbE9mZnNldCIsInNldEFjdGl2ZSIsImFydGNsIiwiZGF0YXNldCIsImlkdGl0bGUiLCJyZW1vdmVDbGFzcyIsImFkZENsYXNzIiwiZmluZCIsImlubmVySGVpZ2h0Iiwib2Zmc2V0SGVpZ2h0IiwibGVuZ3RoIiwiZm9yRWFjaCIsImVsZW1Ub3AiLCJhcnRpY2xlIiwic2V0QXJ0aWNsZUNob3JkcyIsImVsZW1DaG9yZHMiLCJjc3MiLCJwb3NpdGlvbiIsInNldEFydGljbGVzV2lkdGgiLCJhdmFpbFdpZHRoIiwid2lkdGgiLCJpbm5lcldpZHRoIiwicmVtb3ZlQXR0ciIsInNjcm9sbCIsInJlc2l6ZSIsIm9uIiwidGFyZ2V0IiwiZSIsImlzIiwiaGFzQ2xhc3MiXSwibWFwcGluZ3MiOiI7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUFBLEVBQUUsWUFBVztBQUNYLE1BQU1DLE1BQU1DLE1BQVo7QUFDQSxNQUFNQyxNQUFNQyxRQUFaO0FBQ0EsTUFBTUMsTUFBTUMsTUFBWjtBQUNBLE1BQU1DLFlBQVlQLEVBQUUsZ0JBQUYsQ0FBbEIsQ0FKVyxDQUk0QjtBQUN2QyxNQUFNUSxXQUFXRCxVQUFVRSxPQUFWLEVBQWpCLENBTFcsQ0FLMkI7QUFDdEMsTUFBTUMsT0FBT1YsRUFBRSxZQUFGLENBQWI7QUFDQTtBQUNBLE1BQU1XLGdCQUFnQlgsRUFBRSxZQUFGLENBQXRCLENBUlcsQ0FRNEI7QUFDdkMsTUFBTVksaUJBQWlCWixFQUFFLFlBQUYsQ0FBdkIsQ0FUVyxDQVM2QjtBQUN4QyxNQUFNYSxXQUFXYixFQUFFLFlBQUYsQ0FBakI7QUFDQSxNQUFNYyxnQkFBZ0JkLEVBQUUsa0JBQUYsQ0FBdEI7QUFDQSxNQUFNZSxVQUFVZixFQUFFLFVBQUYsRUFBYyxDQUFkLENBQWhCO0FBQ0EsTUFBTWdCLGNBQWNoQixFQUFFLGNBQUYsQ0FBcEI7QUFDQSxNQUFNaUIsYUFBYWpCLEVBQUUsYUFBRixDQUFuQjtBQUNBLE1BQU1rQixRQUFRbEIsRUFBRSxNQUFGLENBQWQ7O0FBRUEsTUFBSW1CLGtCQUFrQixJQUF0Qjs7QUFFQSxXQUFTQyxTQUFULENBQW1CQyxJQUFuQixFQUF5QjtBQUN2QixRQUFNQyxNQUFNRCxLQUFLRSxxQkFBTCxFQUFaLENBRHVCLENBQ21COztBQUUxQyxXQUFPO0FBQ0xDLFdBQUtGLElBQUlFLEdBQUosR0FBVXZCLElBQUl3QixXQURkO0FBRUxDLFlBQU1KLElBQUlJLElBQUosR0FBV3pCLElBQUkwQjtBQUZoQixLQUFQO0FBSUQ7O0FBRUQsV0FBU0MsZ0JBQVQsR0FBNkM7QUFBQSxRQUFuQkMsYUFBbUIsdUVBQUgsQ0FBRzs7QUFDM0MsYUFBU0MsU0FBVCxDQUFtQkMsS0FBbkIsRUFBMEI7QUFDeEIsVUFBSUEsTUFBTUMsT0FBTixDQUFjQyxPQUFkLEtBQTBCZCxlQUE5QixFQUErQztBQUM3Q0EsMEJBQWtCWSxNQUFNQyxPQUFOLENBQWNDLE9BQWhDOztBQUVBcEIsaUJBQVNxQixXQUFULENBQXFCLG1CQUFyQjtBQUNBcEIsc0JBQWNvQixXQUFkLENBQTBCLHlCQUExQjtBQUNBbEMscUJBQVdtQixlQUFYLFFBQStCZ0IsUUFBL0IsQ0FBd0MsbUJBQXhDOztBQUVBbEIsbUJBQ0dtQixJQURILFlBQ2lCakIsZUFEakIsUUFFR2dCLFFBRkgsQ0FFWSx5QkFGWjtBQUdEO0FBQ0Y7O0FBRUQsUUFBSWxDLElBQUl3QixXQUFKLEdBQWtCTCxVQUFVWixTQUFTLENBQVQsQ0FBVixFQUF1QmdCLEdBQTdDLEVBQWtEO0FBQ2hETSxnQkFBVXRCLFNBQVMsQ0FBVCxDQUFWO0FBQ0QsS0FGRCxNQUVPLElBQ0xQLElBQUl3QixXQUFKLEdBQWtCeEIsSUFBSW9DLFdBQXRCLEtBQ0F0QixRQUFRdUIsWUFBUixHQUF1QlQsYUFGbEIsRUFHTDtBQUNBQyxnQkFBVXRCLFNBQVNBLFNBQVMrQixNQUFULEdBQWtCLENBQTNCLENBQVY7QUFDRCxLQUxNLE1BS0E7QUFDTC9CLGVBQVNnQyxPQUFULENBQWlCLG1CQUFXO0FBQzFCLFlBQU1DLFVBQVVyQixVQUFVc0IsT0FBVixFQUFtQmxCLEdBQW5DO0FBQ0EsWUFBSXZCLElBQUl3QixXQUFKLEdBQWtCZ0IsVUFBVSxHQUFoQyxFQUFxQztBQUNuQ1gsb0JBQVVZLE9BQVY7QUFDRDtBQUNGLE9BTEQ7QUFNRDtBQUNGOztBQUVELFdBQVNDLGdCQUFULEdBQTRCO0FBQzFCO0FBQ0EsUUFBTUMsYUFBYXhCLFVBQVVSLGVBQWUsQ0FBZixDQUFWLENBQW5CO0FBQ0E7O0FBRUEsUUFBSVgsSUFBSXdCLFdBQUosSUFBbUJtQixXQUFXcEIsR0FBWCxHQUFpQixFQUF4QyxFQUE0QztBQUMxQ2Isb0JBQWNrQyxHQUFkLENBQWtCO0FBQ2hCQyxrQkFBVSxPQURNO0FBRWhCdEIsYUFBSyxLQUFLO0FBQ1Y7QUFIZ0IsT0FBbEI7QUFLRCxLQU5ELE1BTU87QUFDTGIsb0JBQWNrQyxHQUFkLENBQWtCO0FBQ2hCQyxrQkFBVTtBQURNLE9BQWxCO0FBR0Q7QUFDRjs7QUFFRCxXQUFTQyxnQkFBVCxHQUE0QjtBQUMxQixRQUFJMUMsSUFBSTJDLFVBQUosR0FBaUIsR0FBckIsRUFBMEI7QUFDeEJyQyxvQkFBY2tDLEdBQWQsQ0FBa0I7QUFDaEJJLGVBQU92QyxLQUFLd0MsVUFBTDtBQURTLE9BQWxCO0FBR0QsS0FKRCxNQUlPO0FBQ0x2QyxvQkFBY3dDLFVBQWQsQ0FBeUIsT0FBekI7QUFDRDtBQUNGOztBQUVELE1BQUl4QyxjQUFjNEIsTUFBZCxJQUF3QmhDLFVBQVVnQyxNQUF0QyxFQUE4QztBQUM1Q1E7O0FBRUE7QUFDQS9DLE1BQUVDLEdBQUYsRUFBT21ELE1BQVAsQ0FBYyxZQUFNO0FBQ2xCVDtBQUNBZjtBQUNELEtBSEQ7O0FBS0E7QUFDQWU7QUFDQWYscUJBQWlCLEVBQWpCOztBQUVBNUIsTUFBRUMsR0FBRixFQUFPb0QsTUFBUCxDQUFjLFlBQU07QUFDbEJOO0FBQ0QsS0FGRDtBQUdEOztBQUVEOztBQUVBOUIsYUFBV3FDLEVBQVgsQ0FBYyxPQUFkLEVBQXVCLGFBQUs7QUFDMUIsUUFBSUMsU0FBU3ZELEVBQUV3RCxFQUFFRCxNQUFKLENBQWI7QUFDQSxRQUFJQSxPQUFPRSxFQUFQLENBQVUsa0JBQVYsQ0FBSixFQUFtQztBQUNqQ0YsYUFBT3BCLFFBQVAsQ0FBZ0IseUJBQWhCO0FBQ0Q7O0FBRUQsUUFBSWxCLFdBQVd5QyxRQUFYLENBQW9CLG9CQUFwQixDQUFKLEVBQStDO0FBQzdDekMsaUJBQVdpQixXQUFYLENBQXVCLG9CQUF2QjtBQUNELEtBRkQsTUFFTztBQUNMakIsaUJBQVdrQixRQUFYLENBQW9CLG9CQUFwQjtBQUNEO0FBQ0YsR0FYRDs7QUFhQWpCLFFBQU1vQyxFQUFOLENBQVMsT0FBVCxFQUFrQixhQUFLO0FBQ3JCLFFBQUlDLFNBQVN2RCxFQUFFd0QsRUFBRUQsTUFBSixDQUFiOztBQUVBLFFBQUlBLE9BQU9FLEVBQVAsQ0FBVXhDLFVBQVYsS0FBeUJzQyxPQUFPRSxFQUFQLENBQVV6QyxXQUFWLENBQTdCLEVBQXFEOztBQUVyRCxRQUFJQyxXQUFXeUMsUUFBWCxDQUFvQixvQkFBcEIsQ0FBSixFQUErQztBQUM3Q3pDLGlCQUFXaUIsV0FBWCxDQUF1QixvQkFBdkI7QUFDRDtBQUNGLEdBUkQ7QUFTRCxDQWxJRCxFIiwiZmlsZSI6IjI2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiLi9tb2R1bGVzL21haW4tYXBwXCI7XHJcbmltcG9ydCBcIi4vbW9kdWxlcy9mdWxsc2NyZWVuLW1lbnVcIjtcclxuaW1wb3J0IFwiLi9tb2R1bGVzL3BhcmFsbGF4LXNjcm9sbFwiO1xyXG5pbXBvcnQgXCIuL21vZHVsZXMvYnRuXCI7XHJcbmltcG9ydCBcIi4vbW9kdWxlcy9kb3duLWJ0blwiO1xyXG5cclxuJChmdW5jdGlvbigpIHtcclxuICBjb25zdCBXSU4gPSB3aW5kb3c7XHJcbiAgY29uc3QgRE9DID0gZG9jdW1lbnQ7XHJcbiAgY29uc3QgU0NSID0gc2NyZWVuO1xyXG4gIGNvbnN0ICRhcnRpY2xlcyA9ICQoXCIuYmxvZ19fYXJ0aWNsZVwiKTsgLy8g0YHRgtCw0YLRjNC4INGB0L/RgNCw0LLQsFxyXG4gIGNvbnN0IGFydGljbGVzID0gJGFydGljbGVzLnRvQXJyYXkoKTsgLy8gW11cclxuICBjb25zdCAkbmF2ID0gJChcIi5uYXYtLWJsb2dcIik7XHJcbiAgLy8gY29uc3QgJGZvb3RlciA9ICQoXCIuZm9vdGVyXCIpO1xyXG4gIGNvbnN0ICRhcnRpY2xlc0xpc3QgPSAkKFwiLm5hdl9fbGlzdFwiKTsgLy8gdWwg0YHQviDRgdC/0LjRgdC60L7QvCDRgdGC0LDRgtC10Lkg0YHQu9C10LLQsFxyXG4gIGNvbnN0ICRhcnRpY2xlVGl0bGVzID0gJChcIi5ibG9nX19uYXZcIik7IC8vIGFzaWRlXHJcbiAgY29uc3QgJG5hdkl0ZW0gPSAkKFwiLm5hdl9faXRlbVwiKTtcclxuICBjb25zdCAkc3dpcGVOYXZMaW5rID0gJChcIi5zd2lwZS1uYXZfX2xpbmtcIik7XHJcbiAgY29uc3Qgd3JhcHBlciA9ICQoXCIud3JhcHBlclwiKVswXTtcclxuICBjb25zdCAkc3dpcGVUb3VjaCA9ICQoXCIuc3dpcGUtdG91Y2hcIik7XHJcbiAgY29uc3QgJHN3aXBlTWVudSA9ICQoXCIuc3dpcGUtbWVudVwiKTtcclxuICBjb25zdCAkYm9keSA9ICQoXCJib2R5XCIpO1xyXG5cclxuICBsZXQgYWN0aXZlQXJ0aWNsZUlkID0gbnVsbDtcclxuXHJcbiAgZnVuY3Rpb24gZ2V0Q29vcmRzKGVsZW0pIHtcclxuICAgIGNvbnN0IGJveCA9IGVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7IC8vIHt0b3A6IDEyMywgbGVmdDogMTIzfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIHRvcDogYm94LnRvcCArIFdJTi5wYWdlWU9mZnNldCxcclxuICAgICAgbGVmdDogYm94LmxlZnQgKyBXSU4ucGFnZVhPZmZzZXRcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBzZXRBcnRpY2xlQWN0aXZlKGluaXRpYWxPZmZzZXQgPSAwKSB7XHJcbiAgICBmdW5jdGlvbiBzZXRBY3RpdmUoYXJ0Y2wpIHtcclxuICAgICAgaWYgKGFydGNsLmRhdGFzZXQuaWR0aXRsZSAhPT0gYWN0aXZlQXJ0aWNsZUlkKSB7XHJcbiAgICAgICAgYWN0aXZlQXJ0aWNsZUlkID0gYXJ0Y2wuZGF0YXNldC5pZHRpdGxlO1xyXG5cclxuICAgICAgICAkbmF2SXRlbS5yZW1vdmVDbGFzcyhcIm5hdl9faXRlbS0tYWN0aXZlXCIpO1xyXG4gICAgICAgICRzd2lwZU5hdkxpbmsucmVtb3ZlQ2xhc3MoXCJzd2lwZS1uYXZfX2xpbmstLWFjdGl2ZVwiKTtcclxuICAgICAgICAkKGBbbmFtZT0ke2FjdGl2ZUFydGljbGVJZH1dYCkuYWRkQ2xhc3MoXCJuYXZfX2l0ZW0tLWFjdGl2ZVwiKTtcclxuXHJcbiAgICAgICAgJHN3aXBlTWVudVxyXG4gICAgICAgICAgLmZpbmQoYFtuYW1lPSR7YWN0aXZlQXJ0aWNsZUlkfV1gKVxyXG4gICAgICAgICAgLmFkZENsYXNzKFwic3dpcGUtbmF2X19saW5rLS1hY3RpdmVcIik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAoV0lOLnBhZ2VZT2Zmc2V0IDwgZ2V0Q29vcmRzKGFydGljbGVzWzBdKS50b3ApIHtcclxuICAgICAgc2V0QWN0aXZlKGFydGljbGVzWzBdKTtcclxuICAgIH0gZWxzZSBpZiAoXHJcbiAgICAgIFdJTi5wYWdlWU9mZnNldCArIFdJTi5pbm5lckhlaWdodCA9PT1cclxuICAgICAgd3JhcHBlci5vZmZzZXRIZWlnaHQgLSBpbml0aWFsT2Zmc2V0XHJcbiAgICApIHtcclxuICAgICAgc2V0QWN0aXZlKGFydGljbGVzW2FydGljbGVzLmxlbmd0aCAtIDFdKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGFydGljbGVzLmZvckVhY2goYXJ0aWNsZSA9PiB7XHJcbiAgICAgICAgY29uc3QgZWxlbVRvcCA9IGdldENvb3JkcyhhcnRpY2xlKS50b3A7XHJcbiAgICAgICAgaWYgKFdJTi5wYWdlWU9mZnNldCA+IGVsZW1Ub3AgLSAxNTApIHtcclxuICAgICAgICAgIHNldEFjdGl2ZShhcnRpY2xlKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gc2V0QXJ0aWNsZUNob3JkcygpIHtcclxuICAgIC8vINCyIGVsZW1DaG9yZHMg0L/QvtC70YPRh9Cw0LXQvCDQvtCx0YrQtdC60YIg0YEg0LrQvtC+0YDQtNC40L3QsNGC0LDQvNC4IGFzaWRlXHJcbiAgICBjb25zdCBlbGVtQ2hvcmRzID0gZ2V0Q29vcmRzKCRhcnRpY2xlVGl0bGVzWzBdKTtcclxuICAgIC8vIGNvbnN0IGZvb3RlckNob3JkcyA9ICRmb290ZXIub2Zmc2V0KCk7XHJcblxyXG4gICAgaWYgKFdJTi5wYWdlWU9mZnNldCA+PSBlbGVtQ2hvcmRzLnRvcCAtIDMwKSB7XHJcbiAgICAgICRhcnRpY2xlc0xpc3QuY3NzKHtcclxuICAgICAgICBwb3NpdGlvbjogXCJmaXhlZFwiLFxyXG4gICAgICAgIHRvcDogMzAgKyBcInB4XCJcclxuICAgICAgICAvLyAnbGVmdCc6IGVsZW1DaG9yZHMubGVmdCArICdweCdcclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAkYXJ0aWNsZXNMaXN0LmNzcyh7XHJcbiAgICAgICAgcG9zaXRpb246IFwic3RhdGljXCJcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBzZXRBcnRpY2xlc1dpZHRoKCkge1xyXG4gICAgaWYgKFNDUi5hdmFpbFdpZHRoID4gNzY3KSB7XHJcbiAgICAgICRhcnRpY2xlc0xpc3QuY3NzKHtcclxuICAgICAgICB3aWR0aDogJG5hdi5pbm5lcldpZHRoKClcclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAkYXJ0aWNsZXNMaXN0LnJlbW92ZUF0dHIoXCJzdHlsZVwiKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlmICgkYXJ0aWNsZXNMaXN0Lmxlbmd0aCAmJiAkYXJ0aWNsZXMubGVuZ3RoKSB7XHJcbiAgICBzZXRBcnRpY2xlc1dpZHRoKCk7XHJcblxyXG4gICAgLy8g0LLRi9C/0L7Qu9C90LjRgtGM0YHRjyDRgtC+0LvRjNC60L4g0YLQvtCz0LTQsCDQutC+0LPQtNCwINCx0YPQtNC10YIg0LTQtdC50YHRgtCy0LjRjyDRgdC60YDQvtC70LvQuNC90LNcclxuICAgICQoV0lOKS5zY3JvbGwoKCkgPT4ge1xyXG4gICAgICBzZXRBcnRpY2xlQ2hvcmRzKCk7XHJcbiAgICAgIHNldEFydGljbGVBY3RpdmUoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vINCy0YvQv9C+0LvQvdC40YLRjNGB0Y8g0L/RgNC4INC30LDQs9GA0YPQt9C60LUg0LrQvtC00LBcclxuICAgIHNldEFydGljbGVDaG9yZHMoKTtcclxuICAgIHNldEFydGljbGVBY3RpdmUoNDEpO1xyXG5cclxuICAgICQoV0lOKS5yZXNpemUoKCkgPT4ge1xyXG4gICAgICBzZXRBcnRpY2xlc1dpZHRoKCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKiBzd2lwZSBtZW51ICoqL1xyXG5cclxuICAkc3dpcGVNZW51Lm9uKFwiY2xpY2tcIiwgZSA9PiB7XHJcbiAgICBsZXQgdGFyZ2V0ID0gJChlLnRhcmdldCk7XHJcbiAgICBpZiAodGFyZ2V0LmlzKFwiLnN3aXBlLW5hdl9fbGlua1wiKSkge1xyXG4gICAgICB0YXJnZXQuYWRkQ2xhc3MoXCJzd2lwZS1uYXZfX2xpbmstLWFjdGl2ZVwiKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoJHN3aXBlTWVudS5oYXNDbGFzcyhcInN3aXBlLW1lbnUtLW9wZW5lZFwiKSkge1xyXG4gICAgICAkc3dpcGVNZW51LnJlbW92ZUNsYXNzKFwic3dpcGUtbWVudS0tb3BlbmVkXCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgJHN3aXBlTWVudS5hZGRDbGFzcyhcInN3aXBlLW1lbnUtLW9wZW5lZFwiKTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgJGJvZHkub24oXCJjbGlja1wiLCBlID0+IHtcclxuICAgIGxldCB0YXJnZXQgPSAkKGUudGFyZ2V0KTtcclxuXHJcbiAgICBpZiAodGFyZ2V0LmlzKCRzd2lwZU1lbnUpIHx8IHRhcmdldC5pcygkc3dpcGVUb3VjaCkpIHJldHVybjtcclxuXHJcbiAgICBpZiAoJHN3aXBlTWVudS5oYXNDbGFzcyhcInN3aXBlLW1lbnUtLW9wZW5lZFwiKSkge1xyXG4gICAgICAkc3dpcGVNZW51LnJlbW92ZUNsYXNzKFwic3dpcGUtbWVudS0tb3BlbmVkXCIpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59KTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2Fzc2V0cy9zY3JpcHRzL2Jsb2cuanMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///26\n')},3:function(module,exports,__webpack_require__){"use strict";eval('/* WEBPACK VAR INJECTION */(function($) {\n\n$(function () {\n  var $hamburger = $(".hamburger");\n  var $fullscreenMenu = $(".fullscreen-menu");\n  var $fullscreenMenuBg = $(".fullscreen-menu-bg");\n  var $fullscreenMenuLink = $(".fullscreen-menu__link");\n\n  $hamburger.on("click", function (e) {\n    $hamburger.toggleClass("hamburger--close-btn");\n    $fullscreenMenu.toggleClass("fullscreen-menu--opened");\n    $fullscreenMenuBg.toggleClass("fullscreen-menu-bg--opened");\n  });\n\n  $fullscreenMenu.on("click", function (e) {\n    var target = $(e.target);\n    if (target.is($fullscreenMenuLink)) return;\n    $hamburger.trigger("click");\n  });\n});\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy9mdWxsc2NyZWVuLW1lbnUuanM/ODAyNSJdLCJuYW1lcyI6WyIkIiwiJGhhbWJ1cmdlciIsIiRmdWxsc2NyZWVuTWVudSIsIiRmdWxsc2NyZWVuTWVudUJnIiwiJGZ1bGxzY3JlZW5NZW51TGluayIsIm9uIiwidG9nZ2xlQ2xhc3MiLCJ0YXJnZXQiLCJlIiwiaXMiLCJ0cmlnZ2VyIl0sIm1hcHBpbmdzIjoiOztBQUFBQSxFQUFFLFlBQVc7QUFDWCxNQUFNQyxhQUFhRCxFQUFFLFlBQUYsQ0FBbkI7QUFDQSxNQUFNRSxrQkFBa0JGLEVBQUUsa0JBQUYsQ0FBeEI7QUFDQSxNQUFNRyxvQkFBb0JILEVBQUUscUJBQUYsQ0FBMUI7QUFDQSxNQUFNSSxzQkFBc0JKLEVBQUUsd0JBQUYsQ0FBNUI7O0FBRUFDLGFBQVdJLEVBQVgsQ0FBYyxPQUFkLEVBQXVCLGFBQUs7QUFDMUJKLGVBQVdLLFdBQVgsQ0FBdUIsc0JBQXZCO0FBQ0FKLG9CQUFnQkksV0FBaEIsQ0FBNEIseUJBQTVCO0FBQ0FILHNCQUFrQkcsV0FBbEIsQ0FBOEIsNEJBQTlCO0FBQ0QsR0FKRDs7QUFNQUosa0JBQWdCRyxFQUFoQixDQUFtQixPQUFuQixFQUE0QixhQUFLO0FBQy9CLFFBQUlFLFNBQVNQLEVBQUVRLEVBQUVELE1BQUosQ0FBYjtBQUNBLFFBQUlBLE9BQU9FLEVBQVAsQ0FBVUwsbUJBQVYsQ0FBSixFQUFvQztBQUNwQ0gsZUFBV1MsT0FBWCxDQUFtQixPQUFuQjtBQUNELEdBSkQ7QUFLRCxDQWpCRCxFIiwiZmlsZSI6IjMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIkKGZ1bmN0aW9uKCkge1xyXG4gIGNvbnN0ICRoYW1idXJnZXIgPSAkKFwiLmhhbWJ1cmdlclwiKTtcclxuICBjb25zdCAkZnVsbHNjcmVlbk1lbnUgPSAkKFwiLmZ1bGxzY3JlZW4tbWVudVwiKTtcclxuICBjb25zdCAkZnVsbHNjcmVlbk1lbnVCZyA9ICQoXCIuZnVsbHNjcmVlbi1tZW51LWJnXCIpO1xyXG4gIGNvbnN0ICRmdWxsc2NyZWVuTWVudUxpbmsgPSAkKFwiLmZ1bGxzY3JlZW4tbWVudV9fbGlua1wiKTtcclxuXHJcbiAgJGhhbWJ1cmdlci5vbihcImNsaWNrXCIsIGUgPT4ge1xyXG4gICAgJGhhbWJ1cmdlci50b2dnbGVDbGFzcyhcImhhbWJ1cmdlci0tY2xvc2UtYnRuXCIpO1xyXG4gICAgJGZ1bGxzY3JlZW5NZW51LnRvZ2dsZUNsYXNzKFwiZnVsbHNjcmVlbi1tZW51LS1vcGVuZWRcIik7XHJcbiAgICAkZnVsbHNjcmVlbk1lbnVCZy50b2dnbGVDbGFzcyhcImZ1bGxzY3JlZW4tbWVudS1iZy0tb3BlbmVkXCIpO1xyXG4gIH0pO1xyXG5cclxuICAkZnVsbHNjcmVlbk1lbnUub24oXCJjbGlja1wiLCBlID0+IHtcclxuICAgIGxldCB0YXJnZXQgPSAkKGUudGFyZ2V0KTtcclxuICAgIGlmICh0YXJnZXQuaXMoJGZ1bGxzY3JlZW5NZW51TGluaykpIHJldHVybjtcclxuICAgICRoYW1idXJnZXIudHJpZ2dlcihcImNsaWNrXCIpO1xyXG4gIH0pO1xyXG59KTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2Fzc2V0cy9zY3JpcHRzL21vZHVsZXMvZnVsbHNjcmVlbi1tZW51LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///3\n')},4:function(module,exports,__webpack_require__){"use strict";eval('\n\nvar WIN = window;\nvar DOC = document;\n\nvar parallax = function () {\n  var bg = DOC.querySelector(".parallax-bg");\n  var worksBg = DOC.querySelector(".works-background");\n  var isWorksPage = bg.isEqualNode(worksBg);\n\n  return {\n    isWorksPage: isWorksPage,\n\n    move: function move(block, windowScroll, strafeAmount) {\n      var strafe = windowScroll / -strafeAmount + "%";\n      var transformString = "translate3d(0, " + strafe + ", 0)";\n\n      var style = block.style;\n\n      if (isWorksPage) {\n        style.transform = transformString;\n      } else {\n        style.backgroundPositionY = strafe;\n      }\n    },\n    init: function init(wScroll) {\n      this.move(bg, wScroll, this.isWorksPage ? 75 : 5);\n    }\n  };\n}();\n\nwindow.addEventListener("scroll", function () {\n  var wScroll = window.pageYOffset;\n  parallax.init(wScroll);\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy9wYXJhbGxheC1zY3JvbGwuanM/ZjRkYiJdLCJuYW1lcyI6WyJXSU4iLCJ3aW5kb3ciLCJET0MiLCJkb2N1bWVudCIsInBhcmFsbGF4IiwiYmciLCJxdWVyeVNlbGVjdG9yIiwid29ya3NCZyIsImlzV29ya3NQYWdlIiwiaXNFcXVhbE5vZGUiLCJtb3ZlIiwiYmxvY2siLCJ3aW5kb3dTY3JvbGwiLCJzdHJhZmVBbW91bnQiLCJzdHJhZmUiLCJ0cmFuc2Zvcm1TdHJpbmciLCJzdHlsZSIsInRyYW5zZm9ybSIsImJhY2tncm91bmRQb3NpdGlvblkiLCJpbml0Iiwid1Njcm9sbCIsImFkZEV2ZW50TGlzdGVuZXIiLCJwYWdlWU9mZnNldCJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFNQSxNQUFNQyxNQUFaO0FBQ0EsSUFBTUMsTUFBTUMsUUFBWjs7QUFFQSxJQUFNQyxXQUFZLFlBQVc7QUFDM0IsTUFBTUMsS0FBS0gsSUFBSUksYUFBSixDQUFrQixjQUFsQixDQUFYO0FBQ0EsTUFBTUMsVUFBVUwsSUFBSUksYUFBSixDQUFrQixtQkFBbEIsQ0FBaEI7QUFDQSxNQUFNRSxjQUFjSCxHQUFHSSxXQUFILENBQWVGLE9BQWYsQ0FBcEI7O0FBRUEsU0FBTztBQUNMQyxpQkFBYUEsV0FEUjs7QUFHTEUsUUFISyxnQkFHQUMsS0FIQSxFQUdPQyxZQUhQLEVBR3FCQyxZQUhyQixFQUdtQztBQUN0QyxVQUFJQyxTQUFTRixlQUFlLENBQUNDLFlBQWhCLEdBQStCLEdBQTVDO0FBQ0EsVUFBSUUsc0NBQW9DRCxNQUFwQyxTQUFKOztBQUVBLFVBQUlFLFFBQVFMLE1BQU1LLEtBQWxCOztBQUVBLFVBQUlSLFdBQUosRUFBaUI7QUFDZlEsY0FBTUMsU0FBTixHQUFrQkYsZUFBbEI7QUFDRCxPQUZELE1BRU87QUFDTEMsY0FBTUUsbUJBQU4sR0FBNEJKLE1BQTVCO0FBQ0Q7QUFDRixLQWRJO0FBZ0JMSyxRQWhCSyxnQkFnQkFDLE9BaEJBLEVBZ0JTO0FBQ1osV0FBS1YsSUFBTCxDQUFVTCxFQUFWLEVBQWNlLE9BQWQsRUFBdUIsS0FBS1osV0FBTCxHQUFtQixFQUFuQixHQUF3QixDQUEvQztBQUNEO0FBbEJJLEdBQVA7QUFvQkQsQ0F6QmdCLEVBQWpCOztBQTJCQVAsT0FBT29CLGdCQUFQLENBQXdCLFFBQXhCLEVBQWtDLFlBQVc7QUFDM0MsTUFBSUQsVUFBVW5CLE9BQU9xQixXQUFyQjtBQUNBbEIsV0FBU2UsSUFBVCxDQUFjQyxPQUFkO0FBQ0QsQ0FIRCIsImZpbGUiOiI0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgV0lOID0gd2luZG93O1xyXG5jb25zdCBET0MgPSBkb2N1bWVudDtcclxuXHJcbmNvbnN0IHBhcmFsbGF4ID0gKGZ1bmN0aW9uKCkge1xyXG4gIGNvbnN0IGJnID0gRE9DLnF1ZXJ5U2VsZWN0b3IoXCIucGFyYWxsYXgtYmdcIik7XHJcbiAgY29uc3Qgd29ya3NCZyA9IERPQy5xdWVyeVNlbGVjdG9yKFwiLndvcmtzLWJhY2tncm91bmRcIik7XHJcbiAgY29uc3QgaXNXb3Jrc1BhZ2UgPSBiZy5pc0VxdWFsTm9kZSh3b3Jrc0JnKTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIGlzV29ya3NQYWdlOiBpc1dvcmtzUGFnZSxcclxuXHJcbiAgICBtb3ZlKGJsb2NrLCB3aW5kb3dTY3JvbGwsIHN0cmFmZUFtb3VudCkge1xyXG4gICAgICBsZXQgc3RyYWZlID0gd2luZG93U2Nyb2xsIC8gLXN0cmFmZUFtb3VudCArIFwiJVwiO1xyXG4gICAgICBsZXQgdHJhbnNmb3JtU3RyaW5nID0gYHRyYW5zbGF0ZTNkKDAsICR7c3RyYWZlfSwgMClgO1xyXG5cclxuICAgICAgbGV0IHN0eWxlID0gYmxvY2suc3R5bGU7XHJcblxyXG4gICAgICBpZiAoaXNXb3Jrc1BhZ2UpIHtcclxuICAgICAgICBzdHlsZS50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1TdHJpbmc7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc3R5bGUuYmFja2dyb3VuZFBvc2l0aW9uWSA9IHN0cmFmZTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBpbml0KHdTY3JvbGwpIHtcclxuICAgICAgdGhpcy5tb3ZlKGJnLCB3U2Nyb2xsLCB0aGlzLmlzV29ya3NQYWdlID8gNzUgOiA1KTtcclxuICAgIH1cclxuICB9O1xyXG59KSgpO1xyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgZnVuY3Rpb24oKSB7XHJcbiAgdmFyIHdTY3JvbGwgPSB3aW5kb3cucGFnZVlPZmZzZXQ7XHJcbiAgcGFyYWxsYXguaW5pdCh3U2Nyb2xsKTtcclxufSk7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hc3NldHMvc2NyaXB0cy9tb2R1bGVzL3BhcmFsbGF4LXNjcm9sbC5qcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///4\n')},5:function(module,exports,__webpack_require__){"use strict";eval('\n\nvar _vue = __webpack_require__(0);\n\nvar _vue2 = _interopRequireDefault(_vue);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n_vue2.default.component("anchorButton", {\n  props: {\n    classes: {\n      type: String,\n      default: "down-btn"\n    },\n    scrollToElem: {\n      type: String,\n      default: ""\n    }\n  },\n  methods: {\n    clickHandler: function clickHandler(e) {\n      var DOC = document;\n      var WIN = window;\n      var toElemName = e.target.attributes.scrollToElem.value;\n      var scrollToElem = DOC.getElementById(toElemName);\n      var btnYOffset = document.documentElement.scrollTop;\n      var elemToOffsetTop = scrollToElem.offsetTop;\n      var vScrollTo = elemToOffsetTop;\n      if (toElemName === "top") {\n        vScrollTo = btnYOffset;\n      }\n\n      function scrollTo(totalScroll, to, duration) {\n        var perTick = to / duration * 10;\n        // console.log("perTick", perTick);\n\n        setTimeout(function () {\n          if (toElemName === "top") {\n            totalScroll -= perTick;\n          } else {\n            totalScroll += perTick;\n          }\n          // console.log("totalScroll", totalScroll);\n          WIN.scrollTo(0, totalScroll);\n\n          if (toElemName === "top") {\n            if (WIN.pageYOffset <= elemToOffsetTop) return;\n          } else {\n            if (WIN.pageYOffset >= to) return;\n          }\n          scrollTo(totalScroll, to, duration - 10);\n        }, 10);\n      }\n\n      scrollTo(btnYOffset, vScrollTo, 700);\n    }\n  },\n  template: "#anchor-btn"\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy9idG4uanM/Yjc5YSJdLCJuYW1lcyI6WyJWdWUiLCJjb21wb25lbnQiLCJwcm9wcyIsImNsYXNzZXMiLCJ0eXBlIiwiU3RyaW5nIiwiZGVmYXVsdCIsInNjcm9sbFRvRWxlbSIsIm1ldGhvZHMiLCJjbGlja0hhbmRsZXIiLCJlIiwiRE9DIiwiZG9jdW1lbnQiLCJXSU4iLCJ3aW5kb3ciLCJ0b0VsZW1OYW1lIiwidGFyZ2V0IiwiYXR0cmlidXRlcyIsInZhbHVlIiwiZ2V0RWxlbWVudEJ5SWQiLCJidG5ZT2Zmc2V0IiwiZG9jdW1lbnRFbGVtZW50Iiwic2Nyb2xsVG9wIiwiZWxlbVRvT2Zmc2V0VG9wIiwib2Zmc2V0VG9wIiwidlNjcm9sbFRvIiwic2Nyb2xsVG8iLCJ0b3RhbFNjcm9sbCIsInRvIiwiZHVyYXRpb24iLCJwZXJUaWNrIiwic2V0VGltZW91dCIsInBhZ2VZT2Zmc2V0IiwidGVtcGxhdGUiXSwibWFwcGluZ3MiOiI7O0FBQUE7Ozs7OztBQUVBQSxjQUFJQyxTQUFKLENBQWMsY0FBZCxFQUE4QjtBQUM1QkMsU0FBTztBQUNMQyxhQUFTO0FBQ1BDLFlBQU1DLE1BREM7QUFFUEMsZUFBUztBQUZGLEtBREo7QUFLTEMsa0JBQWM7QUFDWkgsWUFBTUMsTUFETTtBQUVaQyxlQUFTO0FBRkc7QUFMVCxHQURxQjtBQVc1QkUsV0FBUztBQUNQQyxnQkFETyx3QkFDTUMsQ0FETixFQUNTO0FBQ2QsVUFBTUMsTUFBTUMsUUFBWjtBQUNBLFVBQU1DLE1BQU1DLE1BQVo7QUFDQSxVQUFNQyxhQUFhTCxFQUFFTSxNQUFGLENBQVNDLFVBQVQsQ0FBb0JWLFlBQXBCLENBQWlDVyxLQUFwRDtBQUNBLFVBQU1YLGVBQWVJLElBQUlRLGNBQUosQ0FBbUJKLFVBQW5CLENBQXJCO0FBQ0EsVUFBTUssYUFBYVIsU0FBU1MsZUFBVCxDQUF5QkMsU0FBNUM7QUFDQSxVQUFNQyxrQkFBa0JoQixhQUFhaUIsU0FBckM7QUFDQSxVQUFJQyxZQUFZRixlQUFoQjtBQUNBLFVBQUlSLGVBQWUsS0FBbkIsRUFBMEI7QUFDeEJVLG9CQUFZTCxVQUFaO0FBQ0Q7O0FBRUQsZUFBU00sUUFBVCxDQUFrQkMsV0FBbEIsRUFBK0JDLEVBQS9CLEVBQW1DQyxRQUFuQyxFQUE2QztBQUMzQyxZQUFJQyxVQUFXRixLQUFLQyxRQUFOLEdBQWtCLEVBQWhDO0FBQ0E7O0FBRUFFLG1CQUFXLFlBQVc7QUFDcEIsY0FBSWhCLGVBQWUsS0FBbkIsRUFBMEI7QUFDeEJZLDJCQUFlRyxPQUFmO0FBQ0QsV0FGRCxNQUVPO0FBQ0xILDJCQUFlRyxPQUFmO0FBQ0Q7QUFDRDtBQUNBakIsY0FBSWEsUUFBSixDQUFhLENBQWIsRUFBZ0JDLFdBQWhCOztBQUVBLGNBQUlaLGVBQWUsS0FBbkIsRUFBMEI7QUFDeEIsZ0JBQUlGLElBQUltQixXQUFKLElBQW1CVCxlQUF2QixFQUF3QztBQUN6QyxXQUZELE1BRU87QUFDTCxnQkFBSVYsSUFBSW1CLFdBQUosSUFBbUJKLEVBQXZCLEVBQTJCO0FBQzVCO0FBQ0RGLG1CQUFTQyxXQUFULEVBQXNCQyxFQUF0QixFQUEwQkMsV0FBVyxFQUFyQztBQUNELFNBZkQsRUFlRyxFQWZIO0FBZ0JEOztBQUVESCxlQUFTTixVQUFULEVBQXFCSyxTQUFyQixFQUFnQyxHQUFoQztBQUNEO0FBcENNLEdBWG1CO0FBaUQ1QlEsWUFBVTtBQWpEa0IsQ0FBOUIiLCJmaWxlIjoiNS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBWdWUgZnJvbSBcInZ1ZVwiO1xyXG5cclxuVnVlLmNvbXBvbmVudChcImFuY2hvckJ1dHRvblwiLCB7XHJcbiAgcHJvcHM6IHtcclxuICAgIGNsYXNzZXM6IHtcclxuICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICBkZWZhdWx0OiBcImRvd24tYnRuXCJcclxuICAgIH0sXHJcbiAgICBzY3JvbGxUb0VsZW06IHtcclxuICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICBkZWZhdWx0OiBcIlwiXHJcbiAgICB9XHJcbiAgfSxcclxuICBtZXRob2RzOiB7XHJcbiAgICBjbGlja0hhbmRsZXIoZSkge1xyXG4gICAgICBjb25zdCBET0MgPSBkb2N1bWVudDtcclxuICAgICAgY29uc3QgV0lOID0gd2luZG93O1xyXG4gICAgICBjb25zdCB0b0VsZW1OYW1lID0gZS50YXJnZXQuYXR0cmlidXRlcy5zY3JvbGxUb0VsZW0udmFsdWU7XHJcbiAgICAgIGNvbnN0IHNjcm9sbFRvRWxlbSA9IERPQy5nZXRFbGVtZW50QnlJZCh0b0VsZW1OYW1lKTtcclxuICAgICAgY29uc3QgYnRuWU9mZnNldCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3A7XHJcbiAgICAgIGNvbnN0IGVsZW1Ub09mZnNldFRvcCA9IHNjcm9sbFRvRWxlbS5vZmZzZXRUb3A7XHJcbiAgICAgIGxldCB2U2Nyb2xsVG8gPSBlbGVtVG9PZmZzZXRUb3A7XHJcbiAgICAgIGlmICh0b0VsZW1OYW1lID09PSBcInRvcFwiKSB7XHJcbiAgICAgICAgdlNjcm9sbFRvID0gYnRuWU9mZnNldDtcclxuICAgICAgfVxyXG5cclxuICAgICAgZnVuY3Rpb24gc2Nyb2xsVG8odG90YWxTY3JvbGwsIHRvLCBkdXJhdGlvbikge1xyXG4gICAgICAgIHZhciBwZXJUaWNrID0gKHRvIC8gZHVyYXRpb24pICogMTA7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJwZXJUaWNrXCIsIHBlclRpY2spO1xyXG5cclxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgaWYgKHRvRWxlbU5hbWUgPT09IFwidG9wXCIpIHtcclxuICAgICAgICAgICAgdG90YWxTY3JvbGwgLT0gcGVyVGljaztcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRvdGFsU2Nyb2xsICs9IHBlclRpY2s7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcInRvdGFsU2Nyb2xsXCIsIHRvdGFsU2Nyb2xsKTtcclxuICAgICAgICAgIFdJTi5zY3JvbGxUbygwLCB0b3RhbFNjcm9sbCk7XHJcblxyXG4gICAgICAgICAgaWYgKHRvRWxlbU5hbWUgPT09IFwidG9wXCIpIHtcclxuICAgICAgICAgICAgaWYgKFdJTi5wYWdlWU9mZnNldCA8PSBlbGVtVG9PZmZzZXRUb3ApIHJldHVybjtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmIChXSU4ucGFnZVlPZmZzZXQgPj0gdG8pIHJldHVybjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHNjcm9sbFRvKHRvdGFsU2Nyb2xsLCB0bywgZHVyYXRpb24gLSAxMCk7XHJcbiAgICAgICAgfSwgMTApO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBzY3JvbGxUbyhidG5ZT2Zmc2V0LCB2U2Nyb2xsVG8sIDcwMCk7XHJcbiAgICB9XHJcbiAgfSxcclxuICB0ZW1wbGF0ZTogXCIjYW5jaG9yLWJ0blwiXHJcbn0pO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy9idG4uanMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///5\n')},6:function(module,exports,__webpack_require__){"use strict";eval('\n\nvar _vue = __webpack_require__(0);\n\nvar _vue2 = _interopRequireDefault(_vue);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar downBtn = new _vue2.default({\n  el: "#down-btn-container"\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy9kb3duLWJ0bi5qcz8xZTdmIl0sIm5hbWVzIjpbImRvd25CdG4iLCJWdWUiLCJlbCJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7Ozs7O0FBRUEsSUFBTUEsVUFBVSxJQUFJQyxhQUFKLENBQVE7QUFDdEJDLE1BQUk7QUFEa0IsQ0FBUixDQUFoQiIsImZpbGUiOiI2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFZ1ZSBmcm9tIFwidnVlXCI7XHJcblxyXG5jb25zdCBkb3duQnRuID0gbmV3IFZ1ZSh7XHJcbiAgZWw6IFwiI2Rvd24tYnRuLWNvbnRhaW5lclwiXHJcbn0pO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy9kb3duLWJ0bi5qcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///6\n')}},[26]);