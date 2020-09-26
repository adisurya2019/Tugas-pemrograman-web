$(document).ready(function() {
    var cek = $('.form-checkbox').val();
    $('.form-checkbox').click(function() {
      if ($(this).is(':checked')) {
        $('.form_password').attr('type', 'text');
      } else {
        $('.form_password').attr('type', 'password');
      }
    });
  });