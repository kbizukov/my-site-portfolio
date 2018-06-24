$(function() {
  const $hamburger = $(".hamburger");
  const $fullscreenMenu = $(".fullscreen-menu");
  const $fullscreenMenuBg = $(".fullscreen-menu-bg");
  const $fullscreenMenuLink = $(".fullscreen-menu__link");

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
