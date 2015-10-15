$(function() {

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
