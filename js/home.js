$('#header_search_icon').click(function(){
	$('#header_input').focus();
});

$('#top_nav_ul').delegate('li', 'click', function(){
	$('.green-line').css('left', 13 + 190 * $(this).attr('data-number'));
	$('#top_nav_ul li').removeClass('active');
	$(this).addClass('active');
});