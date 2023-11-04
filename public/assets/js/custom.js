/* HTML document is loaded. DOM is ready. 
-------------------------------------------*/
$(document).ready(function() {


 /* Parallax section
    -----------------------------------------------*/
  function initParallax() {
    $('#intro').parallax("100%", 0.1);
    $('#overview').parallax("100%", 0.3);
    $('#detail').parallax("100%", 0.2);
    $('#video').parallax("100%", 0.3);
    $('#speakers').parallax("100%", 0.1);
    $('#program').parallax("100%", 0.2);
    $('#register').parallax("100%", 0.1);
    $('#faq').parallax("100%", 0.3);
    $('#venue').parallax("100%", 0.1);
    $('#sponsors').parallax("100%", 0.3);
    $('#contact').parallax("100%", 0.2);

  }
  initParallax();


  /* Owl Carousel
  -----------------------------------------------*/
  $(document).ready(function() {
    $("#owl-speakers").owlCarousel({
      autoPlay: 6000,
      items : 4,
      itemsDesktop : [1199,2],
      itemsDesktopSmall : [979,1],
      itemsTablet: [768,1],
      itemsTabletSmall: [985,2],
      itemsMobile : [479,1],
    });
  });

  $(document).ready(function() {
    $("#owl-sponsors").owlCarousel({
      autoPlay: 6000,
      items : 4,
      itemsDesktop : [1199,2],
      itemsDesktopSmall : [979,1],
      itemsTablet: [768,1],
      itemsTabletSmall: [985,2],
      itemsMobile : [479,1],
    });
  });


  /* wow
  -------------------------------*/
  new WOW({ mobile: false }).init();

});

