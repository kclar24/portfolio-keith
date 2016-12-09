$(document).ready(function() {
  $('nav div#bs-example-navbar-collapse-1 ul li a').click(function() {
    var page = $(this).attr('href');
    $('#content').hide('fast');
    $('#content').promise().done(function() {
      $('#content').load('pages/' + page + ' #' + page + '-container', function() {
        $('#content').show('slow');
      });
    });

    return false;
  });

});
