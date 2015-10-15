$(function() {

// GRID SCRIPTS

  $('.grid-jquery-hover').hide();

  $('.grid-img-1').on('mouseenter', function(){
    $('.grid-img-1 img').fadeOut('slow');
    $('.grid-jquery-hover').fadeIn('slow');
  }).on('mouseleave', function(){
    console.log('mouse leave');
  });

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

});
