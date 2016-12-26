<!-- скрипт показу великих детальних фото продукту  -->

$(function () {
  $('.product-preview .thumbs').slick({
    slidesToShow: 3,
    vertical: true,
    verticalSwiping: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1051,
        settings: {
          slidesToShow: 1,
          infinite: true,
          vertical: false,
          verticalSwiping: false,
          dots: false
        }
      }
    ]
  });

  $('.thumbs a').on('click', function (e) {
    e.preventDefault();
    var picLink = $(this).attr('href');
    var $image = $('#product-image');
    $image.fadeTo(200, 0, function () {
      $image.attr('src', picLink);
      $image.fadeTo(800, 1)
    });
    /*   $('#product-image').attr('src', picLink);*/
  })
});

