$.getScreenWidth = function () {
	return $('html').width() / parseFloat($('html').css('font-size'))
};
$(function () {
	FastClick.attach(document.body);
	var showabout = true;
	$('.about').css('left', '0');
	if ($.getScreenWidth() <= 80) {
		$('.about').hide();
		if ($.getScreenWidth() <= 40) {
			$('.about').css('top', '0');
		}
	}
	$('.showabout').removeClass('showabout-active').click(function () {
		$('.about').css('top', '0');
		showabout = $('.about').css('display') !== '0';
		if (showabout) {
			$('.showabout').css('background-image', 'none');
			if ($.getScreenWidth() > 40) {
				$('.share').css('margin-left', '25rem');
			}
		}
	});
	if ($.getScreenWidth() <= 80) {
		$('.about img').show();
	}
	$('.about img').click(function () {
		if ($.getScreenWidth() <= 80) {
			$('.showabout').css('background-image', 'url(images/v2.svg)').show();
			$('.about').hide();
			$('.share').css('margin-left', '0');
			$('.showabout').addClass('showabout-hover');
			if ($.getScreenWidth() <= 40) {
				$('.showabout').css('background-image', 'url(images/v1.svg)');
			}
		}
	});
	$('html').click(function() {
		if ($.getScreenWidth() <= 80) {
			$('.showabout').css('background-image', 'url(images/v2.svg)').show();
			$('.about').hide();
			$('.share').css('margin-left', '0');
			$('.showabout').addClass('showabout-hover');
			if ($.getScreenWidth() <= 40) {
				$('.showabout').css('background-image', 'url(images/v1.svg)');
			}
		}
	});
	$('.main img').css('cursor', 'zoom-in').attr('title', 'Click to zoom').click(function () {
		window.open($(this).attr('src'), '_blank');
	});
	$('.showabout, .about').click(function(event){
		event.stopPropagation();
	});
});
$(window).resize(function() {
	// @media screen and (max-width: 80rem)
	if ($.getScreenWidth() <= 80) {
		$('.about').hide();
		$('.about img').show()
		$('.share').css('margin-left', '0');
		$('.showabout').css('background-image', 'url(images/v2.svg)');
		// @media screen and (max-width: 40rem)
		if ($.getScreenWidth() <= 40) {
			$('.showabout').css('background-image', 'url(images/v1.svg)');
		}
	// Global styles
	} else {
		$('.about').show();
		$('.about img').hide();
		$('.share').css({
			'margin-left': '25rem',
			'background-image': 'none'
		});
	}
});
