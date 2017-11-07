//$('.navigation-item').click(function() {
//	if ($(this).hasClass('apple-button')) {
//		$('.apple').removeClass('hide');
//	} else if ($(this).hasClass('disney-button')) {
//		$('.disney').removeClass('hide');
//	} else if ($(this).hasClass('nike-button')) {
//		$('.nike').removeClass('hide');
//	} else  {
//		$('.vogue').removeClass('hide');
//	}
//});

$('.navigation-item').click(function() {
	var button_name = $(this).data('horse');
	alert(button_name);
});