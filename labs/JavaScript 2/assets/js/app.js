$('.navigation-item').click(function() {
	var button_name = $(this).data('button');

	$('.content').attr('class', 'column content');
	$('.content').addClass(button_name);

	$('.navigation-item').removeClass('active');
	$('.about-text').addClass('hide');
	$(this).addClass('active');

	if (button_name == 'beyonce') {
		$('.lightbox').removeClass('hide');
		$('audio')[0].play();
	} else if (button_name == 'about') {
	  $('.about-text').removeClass('hide');
	}
});

$('.close-button').click(function() {
	$('.lightbox').addClass('hide');
	$('audio')[0].pause();
	$('.navigation-item.beyonce').removeClass('active');
});