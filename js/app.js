$('.flip').click(function () {
  $('.cover').toggleClass('add-remove');
});

$('input')
  .focus(function () {
    $(this).parents('.input-box').addClass('border-add');
    $(this).parents('.input-box').find('i').addClass('color-add');
  })
  .blur(function () {
    $(this).parents('.input-box').removeClass('border-add');
    $(this).parents('.input-box').find('i').removeClass('color-add');
  });
if (window.matchMedia('(max-width:730px)').matches) {
  $('.flip').click(function () {
    $(' .form-content .signup-form').toggle(300);
    $(' .form-content .login-form').toggle(300);
  });
}
