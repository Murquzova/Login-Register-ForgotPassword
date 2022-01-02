$('input').keyup(function () {
  if ($(this).val() != '') {
    $(this).next('input').focus();
    ;
  } else {
    if ($(this).val('')) {
      $(this).prev('input').focus();
    }
  }
});