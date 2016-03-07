$.getScreenWidth = function () {
	return $('html').width() / parseFloat($('html').css('font-size'))
};
$(function () {
	FastClick.attach(document.body);
	var showabout = true;
	$('#showabout').removeClass('showabout-active').click(function () {
		$('#about').show();
		showabout = !($('#about').css('display') === 'none');
		console.log('$(\'#showabout\')');
		if (showabout) {
			$('#showabout').css('background-image', 'none');
			if ($.getScreenWidth() > 40) {
				$('#share').css('margin-left', '25rem');
			}
		}
	});
	if ($.getScreenWidth() <= 80) {
		$('#about img').show();
	}
	$('#about img').click(function () {
		console.log('$(\'#about img\')');
		if ($.getScreenWidth() <= 80) {
			$('#showabout').css('background-image', 'url(images/v2.svg)').show();
			$('#about').hide();
			$('#share').css('margin-left', '0');
			$('#showabout').addClass('showabout-hover');
			if ($.getScreenWidth() <= 40) {
				$('#showabout').css('background-image', 'url(images/v1.svg)');
			}
		}
	});
	$('html').click(function() {
		console.log('$(\'html\')');
		if ($.getScreenWidth() <= 80) {
			$('#showabout').css('background-image', 'url(images/v2.svg)').show();
			$('#about').hide();
			$('#share').css('margin-left', '0');
			$('#showabout').addClass('showabout-hover');
			if ($.getScreenWidth() <= 40) {
				$('#showabout').css('background-image', 'url(images/v1.svg)');
			}
		}
	});
	$('#showabout, #about').click(function(event){
		console.log('$(\'#showabout, #about\')');
		event.stopPropagation();
	});
});
$(window).resize(function() {
	// @media screen and (max-width: 80rem)
	if ($.getScreenWidth() <= 80) {
		$('#about').hide();
		$('#about img').show()
		$('#share').css('margin-left', '0');
		$('#showabout').css('background-image', 'url(images/v2.svg)');
		// @media screen and (max-width: 40rem)
		if ($.getScreenWidth() <= 40) {
			$('#showabout').css('background-image', 'url(images/v1.svg)');
		}
	// Global styles
	} else {
		$('#about').show();
		$('#about img').hide();
		$('#share').css({
			'margin-left': '25rem',
			'background-image': 'none'
		});
	}
});
