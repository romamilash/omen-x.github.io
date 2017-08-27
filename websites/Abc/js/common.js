'use strict';

// ========>> FUNCTIONS <<========

// ========>> HOME CAROUSEL <<========

var homeCarousel = function homeCarousel() {
  if ($('.home-carousel').length) {
    $('.home-carousel__items').slick({
      infinity: true,
      slidesToShow: 1,
      speed: 1400
    });
  }
};

// ========>> CATALOG NAV <<========

var catalogNav = function catalogNav() {
  if ($('.catalog-nav').length) {
    var catalogNavItems = $('.catalog-nav__item');
    var catalogNavTitles = $('.catalog-nav__item-title');
    var catalogNavLinks = $('.catalog-nav__links');
    var activeClass = 'catalog-nav__item_active';

    // Initial (page load)

    $('.' + activeClass).find('.catalog-nav__links').show();

    // Click

    catalogNavTitles.click(function (event) {
      var target = $(event.target);
      var currItem = target.closest('.catalog-nav__item');

      if (currItem.hasClass(activeClass)) {
        currItem.find('.catalog-nav__links').stop().slideToggle(200);
        currItem.toggleClass(activeClass);
      } else {
        catalogNavItems.removeClass(activeClass);
        catalogNavLinks.stop().slideUp(200);

        currItem.addClass(activeClass);
        currItem.find('.catalog-nav__links').stop().slideDown(200);
      }
    });
  }
};

// ========>> TABS-NAV <<========

var tabsNav = function tabsNav() {
  if ($('.tabs').length) {
    var tabsLinks = $('.tabs__nav-item');
    var tabs = $('.tabs__item');
    var activeClass = 'tabs__item_active';

    tabsLinks.click(function () {
      var target = $(this);
      var currTabNum = target.prevAll().length + 1;

      tabsLinks.removeClass('tabs__nav-item_active');
      tabs.removeClass(activeClass);

      console.log('.tabs__item:nth-child(' + currTabNum + ')');
      target.addClass('tabs__nav-item_active');
      target.closest('.tabs').find('.tabs__item:nth-child(' + currTabNum + ')').addClass(activeClass);
    });
  }
};

// ========>> CARD CAROUSEL <<========

var cardCarousel = function cardCarousel() {
  if ($('.card').length) {
    $('#light-slider').lightSlider({
      gallery: true,
      item: 1,
      loop: true,
      thumbMargin: 30,
      thumbItem: 2
    });
  }
};

// ========>> DOCUMENT READY <<========

function documentReady() {
  // Loader
  var loader = document.getElementById('loader');

  loader.classList.remove('active');
  setTimeout(function () {
    document.body.removeChild(loader);
  }, 300);

  // ========>> MAIN NAV <<========

  var navList = document.querySelector('nav .nav__list');
  var navButton = document.querySelector('.nav-mob-button');
  var navOverlay = document.querySelector('nav .nav__overlay');

  // navList.classList.add('animate');
  // setTimeout(() => navList.classList.add('trs'), 0);

  function navToggle() {
    if (navList.classList.contains('animate')) {
      $(document.documentElement).addClass('modal-open');
      navOverlay.addEventListener('click', navToggle);
      navList.classList.toggle('animate');

      navOverlay.classList.add('nav__overlay_visible');
      setTimeout(function () {
        navOverlay.classList.add('nav__overlay_animate');
      }, 10);
    } else {
      $(document.documentElement).removeClass('modal-open');
      navList.classList.toggle('animate');
      navOverlay.classList.remove('nav__overlay_animate');

      // fix fast double-click on overlay
      navOverlay.removeEventListener('click', navToggle);

      setTimeout(function () {
        return navOverlay.classList.remove('nav__overlay_visible');
      }, 300);
    }
  }
  navButton.onclick = navToggle;

  // end main-nav


  // ========>> FIXED HEADER <<========

  var headerTop = $('.header-top');

  // if (window.pageYOffset > 0) headerTop.addClass('header-top_fixed');

  var fixedHeader = function fixedHeader(currentScrollTop) {
    if (currentScrollTop > 0) headerTop.addClass('header-top_fixed');else headerTop.removeClass('header-top_fixed');
  };

  // end fixed header


  // ========>> GLOBAL EVENTS <<========

  // Scroll

  var raf = window.requestAnimationFrame;
  var lastScrollTop = window.pageYOffset;

  var handleWindowScroll = function handleWindowScroll() {
    var currentScrollTop = window.pageYOffset;

    // skip calculations when the page doesn't scroll
    if (lastScrollTop === currentScrollTop) {
      raf(handleWindowScroll);
      return false;
    }
    lastScrollTop = currentScrollTop;

    // fixed header
    // if (window.matchMedia('(min-width: 899px)').matches) fixedHeader(currentScrollTop);


    return raf(handleWindowScroll);
  };

  handleWindowScroll();

  // Resize

  $(window).on('resize', function () {
    if ($(window).width() >= 768) {
      navList.classList.add('animate');
      navOverlay.classList.remove('nav__overlay_visible');
    }
  }).resize(); // end resize


  // ========>> FUNCTIONS CALL <<========

  homeCarousel();
  catalogNav();
  tabsNav();
  cardCarousel();
} // end document ready


// ========>> UTILS <<========

!function checkLoad() {
  // eslint-disable-line
  if (document.readyState !== 'complete') setTimeout(checkLoad, 10);else documentReady(); // eslint-disable-line
}();