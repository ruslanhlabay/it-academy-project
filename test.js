/**
 * Created by admin on 24.11.2016.
 */

$(function () {
  var $myslider = $('.slider');

  if ($myslider.children().length > 2) (

    /* $($myslider).on('init', function(){
     console.log('слайдер запустився');
     });*/


    $('.slider').slick({
      autoplay: true,
      autoplaySpeed: 800,
      arrows: false,
      /*fade:true,*/
      /*easing: ease,*/
      speed: 800,
      vertical: false,
      dots: true

    })

  )

});
