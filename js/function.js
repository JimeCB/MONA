
function change_text (index){
		$("#about-title").text($('#about-title' + index ).html());
		$('#about').text($('#about' + index).html());
		for(var i = 1; i < 5; i++){
			$('#icon-h' + i ).css('background',(i == index) ? '#ff80b2' : 'black');}
}

function change_img(index) {
	if (index < 5) {
		$('#img_model1').css('background','url(images/model' + index + '.png)').css('background-size','cover');
		for(var i = 1; i < 5; i++) {
			$('#icon-v' + i ).css('background',(i == index) ? '#ff80b2' : 'black');}
	}else if (4 < index){
		$('#img_model2').css('background','url(images/model' + index + '.png) no-repeat').css('background-size','cover');
		for (var i = 5; i < 9; i++) {
			$('#icon-v' + i ).css('background',(i == index) ? '#ff80b2' : 'black');}
	}
}

function change_img2(index) {
	$('#model-mobile').css('background','url(images/model' + index + '.png) no-repeat').css('background-size','cover');
	for(var i = 9; i < 13; i++) {
		$('#icon-v' + i ).css('background',(i == index) ? '#ff80b2' : 'black');}

}


function change_news(index) {
	for(var i = 1; i < 5; i++){
		$('#icon-n' + i ).css('background',(i == index) ? '#ff80b2' : 'black');
		$('#news-info' + i ).css('display',(i == index) ? 'block' : 'none');
	}

}

