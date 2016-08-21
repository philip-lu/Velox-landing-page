$(document).ready(function() {
  $(".feedback__slider").owlCarousel({
    items:1,
    itemElement:"slide",
    nav:true,
    autoplay:true,
    autoHeight:true,
    dots:true,
    dotsClass:"slider__dots",
    dotClass:"slider__dot",
    navContainerClass:"slider__arrows",
    navClass:["slider__arrow slider__arrow--prev","slider__arrow slider__arrow--next"],
    loop:true
  });
});

$(function() {
$('a[href*="#"]:not([href="#"])').click(function() {
if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
  var target = $(this.hash);
  target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
  if (target.length) {
    $('html, body').animate({
      scrollTop: target.offset().top
    }, 1000);
    return false;
  }
}
});
});
