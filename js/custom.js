/*global jQuery */
/* Contents
// ------------------------------------------------>
1.  MENU SMOOTH SCROLL DWON PAGE
2.  LOADING SCREEEN
3.  ANIMACTION
4.  SMOOTH SCROLL
5.  CHANGE HEADER STYLE
6.  NAVBAR
7.  TRAINER SLIDER
8.  VIDEO SECTION
9.  GALLERY SECTION
10. BLOG SLIDER
11. HOME NAV SMOOTH SCROLL
12. SCROLL TO TOP
13. TESTIMONIALS SLIDER
14. PORTFOLIO
15. COUNTER
16. COMMING SOON
17. CLASSES FILTER
18. TIME TABLE
*/
(function($) {
  /*---------------- MENU SMOOTH SCROLL DWON PAGE ------------------*/
  $(window).on('scroll', function() {
    headerStyle();
  });
  /*---------------- LOADING SCREEEN ------------------*/
  headerStyle();
  
  $(window).on('load', function() {
    handlePreloader();
  });

  function handlePreloader() {
    if($('.preloader').length){
      $('.preloader').delay(500).fadeOut(500);
    }
  }

  /* WHOLE SCRIPT STRIzCT MODE SYNTAX */
  "use strict";
  
$('.carousel').carousel({
  interval: 4000
})
  /*---------------- ANIMACTION ------------------*/
  if($('.wow').length){
    wow = new WOW(
      {
        animateClass: 'animated',
        offset:       100,
        callback:     function(box) {
          console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
        }
      }
    );
    wow.init();
  } 
  /*---------------- SMOOTH SCROLL ------------------*/
  // $("a[href^='#']").on("click", function(e) {
  //       e.preventDefault();
  //       var target = this.hash;
  //       var $target = $(target);
  //       $("html, body").animate({
  //           "scrollTop": $target.offset().top - 90
  //       }, 1000, "swing");
  // });
  
  /*---------------- CHANGE HEADER STYLE ------------------*/
  function headerStyle() {
    if($('.main-header').length){
      var topbarHeight = $('.header-top').innerHeight();
      var windowpos = $(window).scrollTop();
      if (windowpos >= topbarHeight) {
        $('.main-header').addClass('header-fixed');
      } else {
        $('.main-header').removeClass('header-fixed');
      }
    }
  }

  /*---------------- NAVBAR ------------------*/
  if(screen.width <= parseInt(767))
  {
    $('.menu_btn').on('click', function(e) {
      $('.navbar-collapse').toggleClass('in');
      $('.navbar-collapse').toggleClass('slideInLeft');
      $('.icon-bar').toggleClass('cross');
    });
  }
  $(window).on('scroll', function(e) {
    var scroll = $(window).scrollTop();
    if (scroll > parseInt(300)) {
      $(".header-lower").css("background" , "rgba(9, 9, 9, 0.90)");
    }
    else{
      $(".header-lower").css("background" , "rgba(9, 9, 9, 0.90)");   
    }
  })
  var header = document.getElementById("onenav");
  var btns = header.getElementsByClassName("nav-link");
  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
      var current = document.getElementsByClassName("current");
      current[0].className = current[0].className.replace(" current", "");
      this.className += " current";
    });
  }
  /*---------------- TRAINER SLIDER ------------------*/
  var owl = $('#slider3');
    owl.owlCarousel({
    loop:true,
    margin: 20,
    autoplayTimeout:5000,
    smartSpeed:450,
    dots:true,
    nav: true,
    navText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 3
      }
    }
  })
  /*---------------- VIDEO SECTION ------------------*/
  var $iframe = $('iframe'),
  $videoLink = $('.video-link'),
  playerTemplate = '<div class="player"><div class="player__video"><div class="video-filler"></div><button class="video-close">&times;</button><iframe class="video-iframe" src="{{iframevideo}}" frameborder="0" allowfullscreen></iframe></div><div/>';

  $videoLink.on('click', function(e) {
    var localTemplate = '',
      videoWidth = parseInt($(this).data('width')),
      videoHeight = parseInt($(this).data('height')),
      videoAspect = ( videoHeight / videoWidth ) * parseInt(100),
      $player = null,
      $video = null,
      $close = null,
      $iframe = null;
      e.preventDefault();
      localTemplate = playerTemplate.replace('{{iframevideo}}', $(this).prop('href'));
      $player = $(localTemplate);
      $player
        .find('.video-filler')
        .css('padding-top', videoAspect + '%');
      $close = $player
        .find('.video-close')
        .on('click', function() {
          $(this).off().closest('.player').hide().remove();
    });

    $player.appendTo('body').addClass('js--show-video');
  });
  /*---------------- GALLERY SECTION ------------------*/
  // $('.footer-gallery').magnificPopup({
  //   delegate: 'a',
  //   type: 'image',
  //   closeOnContentClick: false,
  //   closeBtnInside: false,
  //   mainClass: 'mfp-with-zoom mfp-img-mobile',
  //   image: {
  //     verticalFit: true,
  //       titleSrc: function (item) {
  //       return item.el.attr('title') + ' &middot; <a class="image-source-link" href="' + item.el.attr('data-source') + '" target="_blank">image source</a>';
  //       }
  //     },
  //     gallery: {
  //       enabled: true
  //     },
  //     zoom: {
  //       enabled: true,
  //       duration: 300, // don't foget to change the duration also in CSS
  //       opener: function (element) {
  //         return element.find('img');
  //       }
  //     }
  // });
  var owl = $('#slider2');
    owl.owlCarousel({
    loop:true,
    margin: 0,
    autoplayTimeout:5000,
    smartSpeed:450,
    dots:false,
    nav: true,
    navText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 3
      },
      1000: {
        items: 5
      }
    }
  })
  /*---------------- BLOG SLIDER ------------------*/
  var owl = $('#slider4');
    owl.owlCarousel({
    loop:false,
    margin: 20,
    autoplayTimeout:5000,
    smartSpeed:450,
    dots:false,
    nav: true,
    navText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],  
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 3
      }
    }
  })
  /*---------------- HOME NAV SMOOTH SCROLL ------------------*/
  $('.ToTop').on('click', function(e) {
    $('html, body').animate({scrollTop : 0},800);
    $('.nav-link').removeClass('current');
    $('.home').addClass('current');
    return false;
  });
  $('.scrollToTop').on('click', function(e) {
    $('html, body').animate({scrollTop : 0},800);
    return false;
  });

/*---------------- CORONA ALERT ------------------*/
$(window).ready(function(){

  $('.alert-corona').delay(7000);
   $('.alert-corona').hide(1000);
}); 


/*---------------- FIXED BUTTON CORONA ------------------*/
$(window).on('scroll', function(e) {
  if ($(this).scrollTop() > parseInt(100)) {
    $('.fixed-button-corona').fadeIn();
  } 
  else {
    $('.fixed-button-corona').fadeOut();
  }
});

  /*---------------- FIXED BUTTON PROEFLES ------------------*/
  $(window).on('scroll', function(e) {
    if ($(this).scrollTop() > parseInt(100)) {
      $('.fixed-button-proefles').fadeIn();
    } 
    else {
      $('.fixed-button-proefles').fadeOut();
    }
  });

  /*---------------- CORONA BUTTON DESKTOP ------------------*/
  $(window).on('scroll', function(e) {
    if ($(this).scrollTop() > parseInt(100)) {
      $('.corona-btn').fadeOut();
    } 
    else {
      $('.corona-btn').fadeIn();
    }
  });


   /*---------------- FIXED BUTTON FIT CHECK ------------------*/
   $(window).on('scroll', function(e) {
    if ($(this).scrollTop() > parseInt(100)) {
      $('.fixed-button-fit-check').fadeIn();
    } 
    else {
      $('.fixed-button-fit-check').fadeOut();
    }
  });

  /*---------------- SCROLL TO TOP ------------------*/
  $(window).on('scroll', function(e) {
    if ($(this).scrollTop() > parseInt(100)) {
      $('.scrollToTop').fadeIn();
    } 
    else {
      $('.scrollToTop').fadeOut();
    }
  });
  /*---------------- TESTIMONIALS SLIDER ------------------*/
  var owl = $('#testimonials_slider');
    owl.owlCarousel({
    loop:true,
    margin: 30,
    autoplayTimeout:5000,
    smartSpeed:450,
    dots:false,
    nav: true,
    navText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 2
      }
    }
  })
  /*---------------- PORTFOLIO ------------------*/
  var $container = $('.portfolioContainer');
    $container.isotope({
      filter: '*',
      animationOptions: {
        duration: 200,
        easing: 'linear',
        queue: false
      }
  });
  $('.portfolioFilter a').on('click', function(e) {
    $('.portfolioFilter .current').removeClass('current');
    $(this).addClass('current');
    var selector = $(this).attr('data-filter');
    $container.isotope({
      filter: selector,
      animationOptions: 
      {
        duration: 200,
        easing: 'linear',
        queue: false
      }
    });
    return false;
  });
  var $grid = $('.grid').isotope({
    itemSelector: '.grid-item',
    getSortData: {
      name: '.name',
      category: '[data-category]'
    },
    masonry: {
      columnWidth: 200
    }
  });
  /*---------------- COUNTER ------------------*/

  $(window).on('scroll', function(e) {    
    var a = 0;
    if($('#counter').length!= parseInt(0)){
    var oTop = $('#counter').offset().top - window.innerHeight;
      if (a == parseInt(0) && $(window).scrollTop() > oTop) {
        $('.counter-value').each(function() {
          var $this = $(this),
            countTo = $this.attr('data-count');
          $({
            countNum: $this.text()
          }).animate({
              countNum: countTo
            },

            {

              duration: 2000,
              easing: 'swing',
              step: function() {
                $this.text(Math.floor(this.countNum));
              },
              complete: function() {
                $this.text(this.countNum);
                //alert('finished');
              }

            });
        });
        a = 1;
      }
    }
  });
  /*---------------- Coming_Soon ------------------*/
  function srvTime() {
    try {
      xmlHttp = new XMLHttpRequest();
    } catch (err1) {
    try {
      xmlHttp = new ActiveXObject("Msxml2.XMLHTTP");
    } catch (err2) {
    try {
      xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
    } catch (err3) {
      console.warn("AJAX not supported");
    }
    }
    }
    xmlHttp.open("HEAD", window.location.href.toString(), false);
    xmlHttp.setRequestHeader("Content-Type", "text/html");
    return xmlHttp.getResponseHeader("Date");
  }
  
 /*---------------- classes_filter ------------------*/
  $(function() { 
    $('nav ul li a:not(:only-child)').on('click', function(e) {
      $(this).siblings('.nav-dropdown').toggle();
    
      $('.nav-dropdown').not($(this).siblings()).hide();
      e.stopPropagation();
    });
    $('html').on('click', function(e) {
      $('.nav-dropdown').hide();
    });
    $('#nav-toggle').on('click', function(e) {
      $('nav ul').slideToggle();
    });
    $('#nav-toggle').on('click', function(e) {
      this.classList.toggle('active');
    });
  });
  /*---------------- time_table ------------------*/
  $(".tab_content").hide();
  $(".tab_content:first").show();

  /* if in tab mode */
  $("ul.tabs li").click(function() {
    
    $(".tab_content").hide();
    var activeTab = $(this).attr("rel"); 
    $("#"+activeTab).fadeIn();    
    
    $("ul.tabs li").removeClass("active");
    $(this).addClass("active");

    $(".tab_drawer_heading").removeClass("d_active");
    $(".tab_drawer_heading[rel^='"+activeTab+"']").addClass("d_active");
    
  });
  /* if in drawer mode */
  $(".tab_drawer_heading").click(function() {
    
    $(".tab_content").hide();
    var d_activeTab = $(this).attr("rel"); 
    $("#"+d_activeTab).fadeIn();
    
    $(".tab_drawer_heading").removeClass("d_active");
    $(this).addClass("d_active");
    
    $("ul.tabs li").removeClass("active");
    $("ul.tabs li[rel^='"+d_activeTab+"']").addClass("active");
  });

  $('ul.tabs li').last().addClass("tab_last");

  $(function() {
      var selectedClass = "";
      $(".fil-cat").on('click', function(e) {
      selectedClass = $(this).attr("data-rel"); 
      $("#portfolio").fadeTo(100, 0.1);
      $("#portfolio div").not("."+selectedClass).fadeOut().removeClass('scale-anm');
      setTimeout(function() {
        $("."+selectedClass).fadeIn().addClass('scale-anm');
        $("#portfolio").fadeTo(300, 1);
      }, 300); 
    });
  });

  $(window).on('load', function(){
    var $container = $('.portfolioContainer');
    $container.isotope({
      filter: '*',
      animationOptions: {
        duration: 100,
        easing: 'linear',
        queue: false
      }
  });

  $('.portfolioFilter a').on('click', function(e) {
  $('.portfolioFilter .current').removeClass('current');
  $(this).addClass('current');

  var selector = $(this).attr('data-filter');
  $container.isotope({
      filter: selector,
      animationOptions: {
          duration: 100,
          easing: 'linear',
          queue: false
      }
   });
   return false;
}); 
});
})(window.jQuery);


// dropdown

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction(x) {
  document.getElementById(x).classList.toggle("show");

  // Close the dropdown if the user clicks outside of it
  window.onclick = function(e) {
  if (!e.target.matches('.dropbtn')) {
  var myDropdown = document.getElementById(x);
    if (myDropdown.classList.contains('show')) {
      myDropdown.classList.remove('show');
    }
  }
}
}

