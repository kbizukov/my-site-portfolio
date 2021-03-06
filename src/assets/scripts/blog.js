import "./modules/main-app";
import "./modules/fullscreen-menu";
import "./modules/parallax-scroll";
import "./modules/btn";
import "./modules/down-btn";
import "./modules/posts";
import "./modules/swipe-menu";

const WIN = window;
const $swipeMenu = $(".swipe-menu");

const positionAsideNav = function() {
  const SCR = screen;
  const $articles = $(".blog__article"); // статьи справа
  const articles = $articles.toArray(); // []
  const $nav = $(".nav--blog");
  // const $footer = $(".footer");
  const $articlesList = $(".nav__list"); // ul со списком статей слева
  const $articleTitles = $(".blog__nav"); // aside
  const $navItem = $(".nav__item");
  const $swipeNavItem = $(".swipe-nav__item");
  const $swipeNavLink = $(".swipe-nav__link");
  const wrapper = $(".wrapper")[0];

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
        $swipeNavItem.removeClass("swipe-nav__link--active");
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
    // const footerChords = $footer.offset();

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
    if (SCR.availWidth > 767) {
      $articlesList.css({
        width: $nav.innerWidth()
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
};

WIN.addEventListener("positionAsideNav", event => {
  positionAsideNav();
});

$(function() {
  /** swipe menu **/

  const $swipeTouch = $(".swipe-touch");
  const $body = $("body");

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
});
