$.getScreenWidth = function () {
	return $('html').width() / parseFloat($('html').css('font-size'))
};
$(function () {
	var showabout = true;
	$('#showabout').removeClass('showabout-active').click(function () {
		$('#about').show();
		showabout = !($('#about').css('display') === 'none');
		if (showabout) {
			$('#share').css('margin-left', '25rem');
			$('#showabout').css('background-image', 'none');
		}
	});
	$('#about img').show().click(function () {
		if ($.getScreenWidth() <= 80) {
			$('#showabout').css('background-image', 'url(images/v2.svg)').show();
			$('#about').hide();
			$('#share').css('margin-left', '0');
			$('#showabout').addClass('showabout-hover');
		}
	});
	$('html').click(function() {
		if ($.getScreenWidth() <= 80) {
			$('#showabout').show().css('background-image', 'url(images/v2.svg)');
			$('#about').hide();
			$('#share').css('margin-left', '0');
			$('#showabout').addClass('showabout-hover');
		}
	});
	$('#showabout, #about').click(function(event){
		event.stopPropagation();
	});
});
$(window).resize(function() {
	// @media screen and (max-width: 80rem)
	if ($.getScreenWidth() <= 80) {
		$('#about').hide();
		$('#about img').show()
		$('#share').css('margin-left', '0');
	// Global styles
	} else {
		$('#about').show();
		$('#about img').hide()
		$('#share').css('margin-left', '25rem');
	}
});
