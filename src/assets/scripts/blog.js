// import Vue from "vue";

// new Vue({
//   el: "#animation-root",
//   data: {
//     show: true,
//     title: "Hello world"
//   },
//   template: "#animation"
// });

$(function() {
  const WIN = window;
  const DOC = document;
  const SCR = screen;
  const $articles = $(".blog__article"); // статьи справа
  const articles = $articles.toArray(); // []
  const $articlesList = $(".nav__list"); // ul со списком статей слева
  const $articleTitles = $(".blog__nav"); // aside
  const $navItem = $(".nav__item");
  const $swipeNavLink = $(".swipe-nav__link");
  const wrapper = $(".wrapper")[0];
  const $swipeTouch = $(".swipe-touch");
  const $swipeMenu = $(".swipe-menu");
  const $hamburger = $(".hamburger");
  const $fullscreenMenu = $(".fullscreen-menu");
  const $fullscreenMenuBg = $(".fullscreen-menu-bg");
  const $fullscreenMenuLink = $(".fullscreen-menu__link");
  const $body = $("body");

  let activeArticleId = null;

  function getCoords(elem) {
    const box = elem.getBoundingClientRect(); // {top: 123, left: 123}

    return {
      top: box.top + WIN.pageYOffset,
      left: box.left + WIN.pageXOffset
    };
  }

  function setArticleActive(initialOffset = 0) {
    function setActive(artcl) {
      if (artcl.dataset.idtitle !== activeArticleId) {
        activeArticleId = artcl.dataset.idtitle;

        $navItem.removeClass("nav__item--active");
        $swipeNavLink.removeClass("swipe-nav__link--active");
        $(`[name=${activeArticleId}]`).addClass("nav__item--active");

        $swipeMenu
          .find(`[name=${activeArticleId}]`)
          .addClass("swipe-nav__link--active");
      }
    }

    if (WIN.pageYOffset < getCoords(articles[0]).top) {
      setActive(articles[0]);
    } else if (
      WIN.pageYOffset + WIN.innerHeight ===
      wrapper.offsetHeight - initialOffset
    ) {
      setActive(articles[articles.length - 1]);
    } else {
      articles.forEach(article => {
        const elemTop = getCoords(article).top;
        if (WIN.pageYOffset > elemTop - 150) {
          setActive(article);
        }
      });
    }
  }

  function setArticleChords() {
    // в elemChords получаем объект с координатами aside
    const elemChords = getCoords($articleTitles[0]);

    if (WIN.pageYOffset >= elemChords.top - 30) {
      $articlesList.css({
        position: "fixed",
        top: 30 + "px"
        // 'left': elemChords.left + 'px'
      });
    } else {
      $articlesList.css({
        position: "static"
      });
    }
  }

  function setArticlesWidth() {
    if (SCR.availWidth > 1199) {
      $articlesList.css({
        width: $articlesList.outerWidth()
      });
    } else {
      $articlesList.removeAttr("style");
    }
  }

  if ($articlesList.length && $articles.length) {
    setArticlesWidth();

    // выполниться только тогда когда будет действия скроллинг
    $(WIN).scroll(() => {
      setArticleChords();
      setArticleActive();
    });

    // выполниться при загрузке кода
    setArticleChords();
    setArticleActive(41);

    $(WIN).resize(() => {
      setArticlesWidth();
    });
  }

  /** swipe menu **/

  $swipeMenu.on("click", e => {
    let target = $(e.target);
    if (target.is(".swipe-nav__link")) {
      target.addClass("swipe-nav__link--active");
    }

    if ($swipeMenu.hasClass("swipe-menu--opened")) {
      $swipeMenu.removeClass("swipe-menu--opened");
    } else {
      $swipeMenu.addClass("swipe-menu--opened");
    }
  });

  $body.on("click", e => {
    let target = $(e.target);

    if (target.is($swipeMenu) || target.is($swipeTouch)) return;

    if ($swipeMenu.hasClass("swipe-menu--opened")) {
      $swipeMenu.removeClass("swipe-menu--opened");
    }
  });

  /** fullscreen menu **/

  $hamburger.on("click", e => {
    $hamburger.toggleClass("hamburger--close-btn");
    $fullscreenMenu.toggleClass("fullscreen-menu--opened");
    $fullscreenMenuBg.toggleClass("fullscreen-menu-bg--opened");
  });

  $fullscreenMenu.on("click", e => {
    let target = $(e.target);
    if (target.is($fullscreenMenuLink)) return;
    $hamburger.trigger("click");
  });
});
