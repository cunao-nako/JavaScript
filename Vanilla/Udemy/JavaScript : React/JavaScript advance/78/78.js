import 'jquery';

$(document).ready(function() {
  $('.list-item:first').hover(function() { $(this).toggleClass('active'); });

  $('.list-item:contains("Третий")').click(function() { $('.wrapper img:odd').fadeToggle() });
});
