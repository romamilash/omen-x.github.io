'use strict';

// ========>> FUNCTIONS <<========

function sideMenu() {
  if ($('.side-menu').length) {
    var navListWrap = document.querySelector('.side-menu');
    var $navButton = $('.side-menu-btn');
    var navOverlay = document.querySelector('.side-menu-overlay');
    var $close = $('.side-menu-close');

    var navToggle = function navToggle() {
      // open
      if (navListWrap.classList.contains('animate')) {
        navOverlay.addEventListener('click', navToggle);
        navListWrap.classList.toggle('animate');
        document.documentElement.classList.add('modal-open');

        navOverlay.classList.add('side-menu-overlay_visible');
        setTimeout(function () {
          navOverlay.classList.add('side-menu-overlay_animate');
        }, 10);
        // hide
      } else {
        navListWrap.classList.toggle('animate');
        navOverlay.classList.remove('side-menu-overlay_animate');
        document.documentElement.classList.remove('modal-open');

        // fix fast double-click on overlay
        navOverlay.removeEventListener('click', navToggle);

        setTimeout(function () {
          return navOverlay.classList.remove('side-menu-overlay_visible');
        }, 300);
      }
    };

    $('.side-menu').niceScroll({
      cursorcolor: '#fca1af',
      cursorwidth: '7px'
    });

    $navButton.click(navToggle);
    $close.click(navToggle);
  }
}

/**
 * Общий конфиг для слайдеров
 */
function carouselMain() {
  // Запускаем поле инициализации слайдеров
  setTimeout(function () {

    if ($('.slick-dots').length) {
      // Убираем навигацию на слайдере, если один элемент
      if ($('.slick-dots li').length < 2) $('.slick-dots').hide();
    }
  }, 0);
}

function welcomeCarousel() {
  if ($('.welcome-carousel').length) {
    $('.welcome-carousel').slick({
      slidesToShow: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      speed: 1000,
      arrows: true,
      dots: true,
      prevArrow: '<button type="button" class="slick-prev"></button>',
      nextArrow: '<button type="button" class="slick-next"></button>'
    });
  }
}

function reviewCarousel() {
  if ($('.review-carousel').length) {
    $('.review-carousel').slick({
      slidesToShow: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      speed: 1000,
      arrows: true,
      dots: true,
      prevArrow: '<button type="button" class="slick-prev"></button>',
      nextArrow: '<button type="button" class="slick-next"></button>'
    });
  }
}

function trainersCarousel() {
  if ($('.trainers-carousel').length) {
    $('.trainers-carousel').slick({
      slidesToShow: 3,
      centerMode: true,
      centerPadding: '-5px',
      autoplay: true,
      autoplaySpeed: 5000,
      speed: 1000,
      arrows: true,
      dots: false,
      prevArrow: '<button type="button" class="slick-prev"></button>',
      nextArrow: '<button type="button" class="slick-next"></button>',
      responsive: [{
        breakpoint: 899,
        settings: {
          slidesToShow: 1,
          centerMode: false
        }
      }]
    });
  }
}

function articlesCarousel() {
  if ($('.articles-carousel').length) {
    $('.articles-carousel').slick({
      slidesToShow: 3,
      // autoplay: true,
      autoplaySpeed: 5000,
      speed: 1000,
      arrows: true,
      dots: false,
      prevArrow: '<button type="button" class="slick-prev"></button>',
      nextArrow: '<button type="button" class="slick-next"></button>',
      responsive: [{
        breakpoint: 767,
        settings: {
          slidesToShow: 2
        }
      }, {
        breakpoint: 575,
        settings: {
          slidesToShow: 1
        }
      }]
    });
  }
}

function lazyLoadMap() {
  if ($('.map').length) {
    var mapFrame = $('.map iframe');
    var src = mapFrame.attr('data-src');
    mapFrame.attr('src', src);
  }
}

function similarCarousel() {
  if ($('.similar-carousel').length) {
    $('.similar-carousel').slick({
      slidesToShow: 4,
      speed: 1000,
      arrows: true,
      dots: false,
      prevArrow: '<button type="button" class="slick-prev"></button>',
      nextArrow: '<button type="button" class="slick-next"></button>',
      responsive: [{
        breakpoint: 1420,
        settings: {
          slidesToShow: 3
        }
      }, {
        breakpoint: 991,
        settings: {
          slidesToShow: 2
        }
      }, {
        breakpoint: 767,
        settings: {
          slidesToShow: 1
        }
      }]
    });
  }
}

function eventsCarousel() {
  if ($('.events-carousel').length) {
    $('.events-carousel').slick({
      slidesToShow: 3,
      centerMode: true,
      centerPadding: '150px',
      speed: 1000,
      arrows: true,
      dots: false,
      prevArrow: '<button type="button" class="slick-prev"></button>',
      nextArrow: '<button type="button" class="slick-next"></button>',
      responsive: [{
        breakpoint: 991,
        settings: {
          centerMode: false,
          centerPadding: 0,
          slidesToShow: 3
        }
      }, {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          centerMode: false
        }
      }]
    });
  }
}

/**
 * Кладем текст для раскрытия рядом с .text-expander
 */
function textExpander() {
  if ($('.text-expander').length) {
    var $trigger = $('.text-expander__btn');

    $trigger.click(function () {
      var $this = $(this);
      var $wrapper = $this.parent();
      var currTarget = $wrapper.siblings('.text-expander-target');

      currTarget.slideDown(350, function () {
        return $wrapper.addClass('text-expander_hidden');
      });
    });
  }
}

function product() {
  if ($('.product').length) {
    $('.product-carousel').lightSlider({
      gallery: true,
      item: 1,
      loop: true,
      thumbMargin: 30,
      thumbItem: 4,
      vertical: true,
      responsive: [{
        breakpoint: 767,
        settings: {
          thumbItem: 3
        }
      }]
    });
  }
}

function myCounter() {
  if ($('.my-counter').length) {
    var $btnUp = $('.my-counter__btn-up');
    var $btnDown = $('.my-counter__btn-down');
    var disabledClass = 'my-counter__btn_disabled';

    $btnUp.click(function (event) {
      var $btn = $(event.target);
      var $field = $btn.siblings('.my-counter__value');
      var value = +$field.val();

      $field.val(value + 1);
      if (value > 1) $btn.siblings('.my-counter__btn-down').removeClass(disabledClass);
    });

    $btnDown.click(function (event) {
      var $btn = $(event.target);
      var $field = $btn.siblings('.my-counter__value');
      var value = +$field.val();

      if (value <= 1) {
        $btn.addClass(disabledClass);
        return;
      }

      $field.val(value - 1);
    });
  }
}

function productTabs() {
  if ($('.product-spec__nav').length) {
    var $link = $('.product-spec__nav-item');

    $link.click(function () {
      var $this = $(this);
      var $tabs = $this.parent().siblings('.product-spec__tabs');
      var $tab = $tabs.children();

      var currTab = $this.attr('data-tab-for');

      $tab.removeClass('product-spec__tab_active');
      $link.removeClass('product-spec__nav-item_active');

      $this.addClass('product-spec__nav-item_active');
      $tabs.children('.product-spec__tab[data-tab=' + currTab + ']').addClass('product-spec__tab_active');
    });
  }
}

function scrollButton() {
  if ($('.scroll-button').length) {
    $('.scroll-button').click(function () {
      var $this = $(this);
      var configOffset = $this.attr('data-scroll-offset') || 0;
      var $target = $($this.attr('data-target-scroll'));

      var offset = configOffset ? eval($target.offset().top + configOffset[0] + configOffset.substr(1)) : $target.offset().top;

      $('html, body').animate({
        scrollTop: offset
      }, 700);
    });
  }
}

function basketPage() {
  if ($('.basket').length) {
    var $btnRemove = $('.basket-table__del');

    $btnRemove.click(function () {
      var $target = $(this);

      $target.closest('tr').remove();
    });

    var $total = $('.basket-total_aside');
    var totalTop = $total.offset().top;

    $(window).on('scroll', function () {
      if ($('html').scrollTop() > totalTop) $total.addClass('fixed');else $total.removeClass('fixed');
    });

    $('.form__field_select').select2();
  }
}

function popupForms() {
  if ($('.form-popup-wrap').length) {
    var formWrap = document.querySelector('.form-popup-wrap');

    document.body.addEventListener('click', function (event) {
      if (event.target.classList.contains('form-trigger')) {
        event.preventDefault();

        var currFormSelector = $(event.target).attr('data-form');

        formWrap.classList.add('visible');
        document.documentElement.classList.add('modal-open');
        $(currFormSelector).show();
      }
    });

    formWrap.addEventListener('click', function (event) {
      if (event.target.classList.contains('form-popup-wrap') || event.target.classList.contains('form-close')) {
        $('.form-popup-wrap .form').hide();
        formWrap.classList.remove('visible');
        document.documentElement.classList.remove('modal-open');
      }
    });
  }
}

// ========>> DOCUMENT READY <<========

function documentReady() {
  // Loader
  var loader = document.getElementById('loader');

  loader.classList.remove('active');
  setTimeout(function () {
    document.body.removeChild(loader);
  }, 300);

  // ========>> FUNCTIONS CALL <<========

  sideMenu();
  carouselMain();
  welcomeCarousel();
  reviewCarousel();
  trainersCarousel();
  articlesCarousel();
  eventsCarousel();
  textExpander();
  product();
  myCounter();
  productTabs();
  similarCarousel();
  scrollButton();
  lazyLoadMap();
  basketPage();
  popupForms();
} // end document ready

// ========>> UTILS <<========

!function checkLoad() {
  if (document.readyState !== 'complete') setTimeout(checkLoad, 10);else documentReady(); // eslint-disable-line
}();