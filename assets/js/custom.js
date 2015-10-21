// INSTANTIATES FLOW TYPE JS
  $('body').flowtype({
     minimum   : 500,
     maximum   : 2000,
     minFont   : 10,
     maxFont   : 16,
     fontRatio : 30
  });


// INSTANTIATES FOUNDATION JS
  $(document).foundation({
    "magellan-expedition": {
      fixed_top: 60, // top distance in pixels assigend to the fixed element on scroll
    }
  });

// OPENING DOCUMENT.READY FUNCTION
$(function() {

  //TESTING SCRIPTS

  //$('#jetmenu').hide();


  // SEARCH SCRIPTS
  $('.search-nav-bar').hide();
  $('.search-nav-bar, .search-form-input').addClass('height-100');
  $('.search-close-div').addClass('search-close-div-100');

  $(window).scroll(function(){
    if($(document).scrollTop() > 0) {
      $('.search-nav-bar, .search-form-input').removeClass('height-100');
      $('.search-nav-bar, .search-form-input').addClass('height-60');
      $('.search-close-div').addClass('search-close-div-60');
      $('.search-close-div').removeClass('search-close-div-100');
    }else {
      $('.search-nav-bar, .search-form-input').removeClass('height-60');
      $('.search-nav-bar, .search-form-input').addClass('height-100');
      $('.search-close-div').removeClass('search-close-div-60');
      $('.search-close-div').addClass('search-close-div-100');
    }
  });

  // SHRINKING NAV SCRIPTS
  $('.megamenu.full-width').addClass('margin-top-active');
  $('#jetmenu').data('size','big');

  $(window).scroll(function(){
    if($(document).scrollTop() > 0)
    {
      if($('#jetmenu').data('size') === 'big')
      {
          $('.megamenu.full-width').removeClass('margin-top-active');
          $('#jetmenu').data('size','small');
          $('#jetmenu').stop().animate({
              height:'60px'
          },600);
      }
    }
    else
      {
        if($('#jetmenu').data('size') === 'small')
          {
            $('.megamenu.full-width').addClass('margin-top-active');
            $('#jetmenu').data('size','big');
            $('#jetmenu').stop().animate({
                height:'100px'
            },600);
          }
      }
  });


// SEARCH BAR SCRIPTS
  $('.search-nav-bar').hide();

  $('#nav-search').on('click', function(){
    $('.search-nav-bar').fadeIn('slow');
  });
  $('.search-close-div').on('click', function(){
    $('.search-nav-bar').fadeOut('slow');
  });


// FEATURE BLOCK HOVER SCRIPTS

  $('.feature-block-1-hover-content').hide();

  $('#feature-block-1').on('mouseenter', function(){
    $('.feature-block-1-hover-content').fadeIn('slow');
  }).on('mouseleave', function(){
    $('.feature-block-1-hover-content').fadeOut('slow');
  });


  $('.feature-block-2-hover-content').hide();

  $('#feature-block-2').on('mouseenter', function(){
    $('.feature-block-2-hover-content').fadeIn('slow');
  }).on('mouseleave', function(){
    $('.feature-block-2-hover-content').fadeOut('slow');
  });




// GRID SCRIPTS
// ********
//ROW #1
//********
  // GRID #1
//   $('.hover-wrapper-1').hide();
//   $('.grid-img-1').on('mouseenter', function(){
//     $('.grid-img-1 img').fadeOut(500);
//     $('.hover-wrapper-1').delay(500).fadeIn('slow');
//   }).on('mouseleave', function(){
//     $('.hover-wrapper-1').finish().hide();
//     $('.grid-img-1 img').fadeIn('slow');
//   });

//   // GRID #2
//   $('.hover-wrapper-2').hide();
//   $('.grid-img-2').on('mouseenter', function(){
//     $('.grid-img-2 img').fadeOut(500);
//     $('.hover-wrapper-2').delay(500).fadeIn('slow');
//   }).on('mouseleave', function(){
//     $('.hover-wrapper-2').finish().hide();
//     $('.grid-img-2 img').fadeIn('slow');
//   });

//   // GRID #3
//   $('.hover-wrapper-3').hide();
//   $('.grid-img-3').on('mouseenter', function(){
//     $('.grid-img-3 img').fadeOut(500);
//     $('.hover-wrapper-3').delay(500).fadeIn('slow');
//   }).on('mouseleave', function(){
//     $('.hover-wrapper-3').finish().hide();
//     $('.grid-img-3 img').fadeIn('slow');
//   });

//   // GRID #4
//   $('.hover-wrapper-4').hide();
//   $('.grid-img-4').on('mouseenter', function(){
//     $('.grid-img-4 img').fadeOut(500);
//     $('.hover-wrapper-4').delay(500).fadeIn('slow');
//   }).on('mouseleave', function(){
//     $('.hover-wrapper-4').finish().hide();
//     $('.grid-img-4 img').fadeIn('slow');
//   });

// // ********
// //ROW #2
// //********
//     // GRID #5
//   $('.hover-wrapper-5').hide();
//   $('.grid-img-5').on('mouseenter', function(){
//     $('.grid-img-5 img').fadeOut(500);
//     $('.hover-wrapper-5').delay(500).fadeIn('slow');
//   }).on('mouseleave', function(){
//     $('.hover-wrapper-5').finish().hide();
//     $('.grid-img-5 img').fadeIn('slow');
//   });

//   // GRID #6
//   $('.hover-wrapper-6').hide();
//   $('.grid-img-6').on('mouseenter', function(){
//     $('.grid-img-6 img').fadeOut(500);
//     $('.hover-wrapper-6').delay(500).fadeIn('slow');
//   }).on('mouseleave', function(){
//     $('.hover-wrapper-6').finish().hide();
//     $('.grid-img-6 img').fadeIn('slow');
//   });

//   // GRID #7
//   $('.hover-wrapper-7').hide();
//   $('.grid-img-7').on('mouseenter', function(){
//     $('.grid-img-7 img').fadeOut(500);
//     $('.hover-wrapper-7').delay(500).fadeIn('slow');
//   }).on('mouseleave', function(){
//     $('.hover-wrapper-7').finish().hide();
//     $('.grid-img-7 img').fadeIn('slow');
//   });

//   // GRID #8
//   $('.hover-wrapper-8').hide();
//   $('.grid-img-8').on('mouseenter', function(){
//     $('.grid-img-8 img').fadeOut(500);
//     $('.hover-wrapper-8').delay(500).fadeIn('slow');
//   }).on('mouseleave', function(){
//     $('.hover-wrapper-8').finish().hide();
//     $('.grid-img-8 img').fadeIn('slow');
//   });

// // ********
// //ROW #3
// //********
//     // GRID #9
//   $('.hover-wrapper-9').hide();
//   $('.grid-img-9').on('mouseenter', function(){
//     $('.grid-img-9 img').fadeOut(500);
//     $('.hover-wrapper-9').delay(500).fadeIn('slow');
//   }).on('mouseleave', function(){
//     $('.hover-wrapper-9').finish().hide();
//     $('.grid-img-9 img').fadeIn('slow');
//   });

//   // GRID #10
//   $('.hover-wrapper-10').hide();
//   $('.grid-img-10').on('mouseenter', function(){
//     $('.grid-img-10 img').fadeOut(500);
//     $('.hover-wrapper-10').delay(500).fadeIn('slow');
//   }).on('mouseleave', function(){
//     $('.hover-wrapper-10').finish().hide();
//     $('.grid-img-10 img').fadeIn('slow');
//   });

//   // GRID #11
//   $('.hover-wrapper-11').hide();
//   $('.grid-img-11').on('mouseenter', function(){
//     $('.grid-img-11 img').fadeOut(500);
//     $('.hover-wrapper-11').delay(500).fadeIn('slow');
//   }).on('mouseleave', function(){
//     $('.hover-wrapper-11').finish().hide();
//     $('.grid-img-11 img').fadeIn('slow');
//   });

//   // GRID #12
//   $('.hover-wrapper-12').hide();
//   $('.grid-img-12').on('mouseenter', function(){
//     $('.grid-img-12 img').fadeOut(500);
//     $('.hover-wrapper-12').delay(500).fadeIn('slow');
//   }).on('mouseleave', function(){
//     $('.hover-wrapper-12').finish().hide();
//     $('.grid-img-12 img').fadeIn('slow');
//   });



// VIDEOS CAROUSEL
$('.slick-carousel').slick({
    dots: false,
    autoplay: true,
    autoplaySpeed: 7000,
    lazyLoad: 'ondemand',
    infinite: true,
    arrows: true,
    speed: 1000,
    fade: true,
    respondTo: 'window',
    cssEase: 'linear'
  });

// PRODUCT PAGE AUTO-SCROLL SCRIPTS
  $(function() {
    $('a.page-scroll').bind('click', function(event) {
      var $anchor = $(this);
      $('html, body').stop().animate({
          scrollTop: $($anchor.attr('href')).offset().top
      }, 2500, 'easeInOutExpo');
      event.preventDefault();
    });
  });

}); // ENDING OF OPENING $(function)




















