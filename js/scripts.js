$(".dropdown-menu li a").click(function(){

  $(this).parents(".dropdown").find('.dropdown-text').text($(this).text());
  $(this).parents(".dropdown").find('.dropdown-menu').val($(this).text());

});