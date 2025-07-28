(function ($) {
  "use strict";

  /*--------- WOW js-----------*/
  function bodyScrollAnimation() {
    var scrollAnimate = $("body").data("scroll-animation");
    if (scrollAnimate === true) {
      new WOW({}).init();
    }
  }

  bodyScrollAnimation();

  //Nav Popup
  $(".toggler").click(function () {
    $(this).toggleClass("active");
    $(".navPopupOuter").toggleClass("show");
  });
  $(".closeIcon").click(function () {
    $(".navPopupOuter").removeClass("show");
    $(".search__wrapper,.toggler").removeClass("active");
  });

  //Search Field
  $(".search__wrapper").on("click", function () {
    $(this).addClass("active");
  });

  var nav_offset_top = $(".banner_area").height() - 270;
  /*-------------------------------------------------------------------------------
	  Navbar 
	-------------------------------------------------------------------------------*/

  //* Navbar Fixed
  function buttonScroll() {
    $(window).scroll(function () {
      var scroll = $(window).scrollTop();
      if (scroll >= nav_offset_top) {
        $("#section1Link").css({ opacity: "0", visibility: "hidden" });
        $("#section2Link").css({ opacity: "1", visibility: "visible" });
      } else {
        $("#section1Link").css({ opacity: "1", visibility: "visible" });
        $("#section2Link").css({ opacity: "0", visibility: "hidden" });
      }
    });
  }
  buttonScroll();

  $(window).on("scroll", function () {
    if ($(window).height() < 768) {
      if ($(this).scrollTop() > 600) {
        $("#section2Link").css({ opacity: "0", visibility: "hidden" });
      }
    } else {
      if ($(this).scrollTop() > 900) {
        $("#section2Link").css({ opacity: "0", visibility: "hidden" });
      }
    }
  });

  $("#section1Link").on("click", function () {
    $(this).css({ opacity: "0", visibility: "hidden" });
    $("#section2Link").css({ opacity: "1", visibility: "visible" });

    if ($(window).height() < 768) {
      $("html, body").animate(
        { scrollTop: $(".video_area").offset().top - 40 },
        1000
      );
    } else {
      $("html, body").animate(
        { scrollTop: $(".video_area").offset().top - 140 },
        1000
      );
    }
    return false;
  });

  $("#section2Link").on("click", function () {
    $("html, body").animate(
      { scrollTop: $(".about_info").offset().top - 100 },
      1000
    );
    return false;
  });

  $(".cursorLink").mouseover(function () {
    $(".circle").addClass("in");
  });
  $(".cursorLink").mouseleave(function () {
    $(".circle").removeClass("in");
  });
  $(document).mousemove(function (e) {
    // console.log(e);
    var x = e.clientX;
    var y = e.clientY;
    var newposX = x - 35;
    var newposY = y - 22;
    $(".outer").css({ top: newposY, left: newposX });
  });

  if ($(".promo_slider").length) {
    const sliders = $(".promo_slider");
    sliders.on("init", function (e, slick) {
      var $firstAnimatingElements = $("div.item:first-child").find(
        "[data-animation]"
      );
      doAnimations($firstAnimatingElements);
    });
    sliders.on("beforeChange", function (e, slick, currentSlide, nextSlide) {
      var $animatingElements = $(
        'div.item[data-slick-index="' + nextSlide + '"]'
      ).find("[data-animation]");
      doAnimations($animatingElements);
    });

    function onSliderAfterChange(event, slick, currentSlide) {
      $(event.target).data("current-slide", currentSlide);
    }

    sliders
      .each(function (index, element) {
        var $element = $(element);
        $element.data("slider-length", $element.children().length);
      })
      .slick({
        infinite: true,
        centerMode: true,
        centerPadding: "10%",
        slidesToShow: 3,
        dots: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 1800,
        speed: 1000,
        responsive: [
          {
            breakpoint: 4000,
            settings: {
              slidesToShow: 1,
              centerPadding: "30%",
            },
          },
          {
            breakpoint: 3000,
            settings: {
              slidesToShow: 1,
              centerPadding: "22%",
            },
          },
          {
            breakpoint: 2000,
            settings: {
              slidesToShow: 1,
              centerPadding: "15.5%",
            },
          },
          {
            breakpoint: 1500,
            settings: {
              slidesToShow: 1,
              centerPadding: "11.5%",
            },
          },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              centerPadding: "5%",
            },
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 1,
              centerPadding: "40px",
            },
          },
          // {
          //   breakpoint: 2000,
          //   // settings: {
          //   //   verticalSwiping: false,
          //   //   vertical: false,
          //   // },
          // },
        ],
      });

    function doAnimations(elements) {
      var animationEndEvents =
        "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";
      elements.each(function () {
        var $this = $(this);
        var $animationDelay = $this.data("delay");
        var $animationType = "animated " + $this.data("animation");
        $this.css({
          "animation-delay": $animationDelay,
          "-webkit-animation-delay": $animationDelay,
        });
        $this.addClass($animationType).one(animationEndEvents, function () {
          $this.removeClass($animationType);
        });
      });
    }
  }

  /*-------------------------------------------------------------------------------
	  Portfolio isotope js
	-------------------------------------------------------------------------------*/
  function portfolioMasonry() {
    var portfolio = $("#blog_masonry");
    if (portfolio.length) {
      portfolio.imagesLoaded(function () {
        portfolio.isotope({
          itemSelector: ".reasource_item_col",
          layoutMode: "masonry",
          masonry: {
            columnWidth: 0,
          },
        });
      });
    }
  }
  portfolioMasonry();

  /* ===============
   Back to Top Button
  =============*/
  var back_btn = $(".back_to_top");

  // $(window).scroll(function () {
  // 	if ($(window).scrollTop() > 300) {
  // 		back_btn.addClass('show');
  // 	} else {
  // 		back_btn.removeClass('show');
  // 	}
  // });

  back_btn.on("click", function (e) {
    e.preventDefault();
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      "1000"
    );
  });

  if ($(".page_menu").length) {
    var social_icon_offset = $(".page_menu .container").offset().top + 0;
    $(window).scroll(function () {
      var scroll = $(window).scrollTop();
      if (scroll >= social_icon_offset) {
        $(".page_menu .scroll_menu").addClass("active");
      } else {
        $(".page_menu .scroll_menu").removeClass("active");
      }
      // if (
      //   $(".page_menu ul").offset().top + $(".page_menu ul").height() >
      //   $("footer").offset().top + 200
      // ) {
      //   $(".page_menu ul").removeClass("active");
      // }
    });
  }

  // $(document).on("scroll", function () {
  //   var pixels = $(window).scrollTop();
  //   var h = $(".wrapper .container").height();
  //   var pageHeight = $(document).height() - $(".wrapper .container").height();
  //   var progress = (100 * pixels) / h;

  //   $("div.progress").css("height", progress + "%");
  // });

  if ($(".scrollbar").length) {
    var $window = $(window);
    var hscroll = $(".scrollbar").offset().top + 1;
    $(window).scroll(function () {
      var a = $(document).height();
      var b = $(window).height();
      var scroll = $(window).scrollTop();
      var d = (scroll / (a - b)) * 100;
      // var d = (100 * scroll) / pageHeight;

      if (scroll >= hscroll) {
        $("div.progress").css({
          height: d + "%",
        });
      } else {
        $("div.progress").css({
          height: "35",
        });
      }
    });
  }

  if ($(".team_slider").length) {
    $(".team_slider").slick({
      autoplay: false,
      slidesToShow: 3,
      slidesToScroll: 1,
      centerMode: true,
      centerPadding: "190px",
      autoplaySpeed: 3000,
      speed: 1000,
      dots: false,
      arrows: true,
    });
  }

  // scrollspy section
  var sections = [];
  var id = false;
  var $navbara = $(".scroll_menu a");

  $navbara.on("click", function (e) {
    e.preventDefault();
    $("html, body").animate(
      {
        scrollTop: $($(this).attr("href")).offset().top,
      },
      1000
    );
  });

  $navbara.each(function () {
    sections.push($($(this).attr("href")));
  });
  $(window).scroll(function (e) {
    var scrollTop = $(this).scrollTop() + $(window).height() / 2;
    for (var i in sections) {
      var section = sections[i];
      if (scrollTop > section.offset().top + 100) {
        var scrolled_id = section.attr("id");
      }
    }
    if (scrolled_id !== id) {
      id = scrolled_id;
      $($navbara).removeClass("current");
      $('.scroll_menu a[href="#' + id + '"]').addClass("current");
    }
  });

  // hash = function (h) {
  //   if (history.pushState) {
  //     history.pushState(null, null, h);
  //   } else {
  //     location.hash = h;
  //   }
  // };

  // isotop plugin area
  $(window).on("load", function () {
    // Activate isotope in container
    $(".gallery_item").imagesLoaded(function () {
      $(".gallery_item").isotope({
        itemSelector: ".single_item",
        layoutMode: "masonry",
      });
    });

    // Add isotope click function
    $(".gallery_filter li").on("click", function () {
      $(".gallery_filter li").removeClass("active");
      $(this).addClass("active");

      var selector = $(this).attr("data-filter");
      $(".gallery_item").isotope({
        filter: selector,
        animationOptions: {
          duration: 450,
          easing: "linear",
          queue: false,
        },
      });
      return false;
    });
  });
})(jQuery);
