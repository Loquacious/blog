window.onload = function () {
	var img = document.getElementsByClassName('main')[0].getElementsByTagName('img');
	for (var i = 0;i < img.length;i++) {
		img[i].onclick = function () {
			window.open(this.src, '_blank');
		}
		img[i].style.cursor = 'zoom-in';
	}
};
