$(function () {

  var $myslider = $('.slidermain');
  if ($myslider.children().length > 2) (
    /* $($myslider).on('init', function(){
     console.log('слайдер запустився');
     });*/
    $myslider.slick({
      autoplay: true,
      autoplaySpeed: 800,
      arrows: false,
      /*fade:true,*/
      /*easing: ease,*/
      speed: 800,
      vertical: false,
      dots: false
    })
  );


  var $mysliderProducts = $('.sliderLast');

  /* if ($mysliderProducts.children().length > 2) (*/

  $('.related-products-title-string .left-arrow').on('click', function (e) {
    e.preventDefault();
    $mysliderProducts.slick('slickPrev');
  });

  $('.related-products-title-string .right-arrow').on('click', function (e) {
    e.preventDefault();
    $mysliderProducts.slick('slickNext');
  });


  $mysliderProducts.slick({
    autoplay: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    focusOnSelect: false,
    arrows: false,
    /*fade:true,*/
    /*easing: ease,*/
    speed: 300,
    vertical: false,
    dots: false,
    infinite: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 610,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          speed: 400
        }
      }
    ]
  });


  /*


   var $mysliderClients = $('.slider-clients');

   if ($mysliderClients.children().length > 2) (
   /!* $($myslider).on('init', function(){
   console.log('слайдер запустився');
   });*!/

   $('.slider-clients').slick({
   autoplay: true,
   autoplaySpeed: 800,
   arrows: false,
   /!*fade:true,*!/
   /!*easing: ease,*!/
   speed: 800,
   vertical: false,
   dots: false
   })
   );*/

});
