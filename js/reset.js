$('input')
  .focus(function () {
    $(this).parents('.input-box').addClass('border-add');
    $(this).parents('.input-box').find('i').addClass('color-add');
  })
  .blur(function () {
    $(this).parents('.input-box').removeClass('border-add');
    $(this).parents('.input-box').find('i').removeClass('color-add');
  });
$('#form').on('submit', function (e) {
  e.preventDefault();
  location.href = 'code.html';
});
