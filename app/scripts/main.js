$(document).ready(function() {
  $('.arrow').click(function() {
    $('html, body').animate(
      {
        scrollTop: $('.about-us').offset().top
      },
      1000
    );
  });
});
