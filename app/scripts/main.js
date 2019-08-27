$(document).ready(function() {
  $('.arrow').click(function() {
    $('html, body').animate(
      {
        scrollTop: $('.about-us').offset().top
      },
      1000
    );
  });
  $('.nav-item > .nav-link').click(function() {
    $('.nav-link').removeClass('active');
    $(this).addClass('active');
  });
});
