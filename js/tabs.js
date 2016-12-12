/**
 * Created by admin on 11.12.2016.
 */
$('.tab').click(function () {
  $('.tab').removeClass('tab-open');
  $($(this).attr('href')).addClass('tab-open');
});
