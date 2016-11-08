
function change_text (index){
		$("#about-title").text($('#about-title' + index ).html());
		$('#about').text($('#about' + index).html());
		for(var i = 1; i < 5; i++){
			(i == index) ? $('#icon-h' + i ).addClass('diamond-border') : $('#icon-h' + i ).removeClass('diamond-border');}
}

function change_img(index) {
	if (index < 5) {
		$('#img_model1').css('background','url(images/model' + index + '.png)').css('background-size','cover');
		for(var i = 1; i < 5; i++) {
			(i == index) ? $('#icon-v' + i ).addClass('diamond-border') : $('#icon-v' + i ).removeClass('diamond-border');}
	}else if (4 < index){
		$('#img_model2').css('background','url(images/model' + index + '.png) no-repeat').css('background-size','cover');
		for (var i = 5; i < 9; i++) {
			(i == index) ? $('#icon-v' + i ).addClass('diamond-border') : $('#icon-v' + i ).removeClass('diamond-border');}
	}
}

function change_img2(index) {
	$('#model-mobile').css('background','url(images/model' + index + '.png) no-repeat').css('background-size','cover');
	for(var i = 9; i < 13; i++) {
		(i == index) ? $('#icon-v' + i ).addClass('diamond-border') : $('#icon-v' + i ).removeClass('diamond-border');}
}


function change_news(index) {
	for(var i = 1; i < 5; i++){
		$('#news-info' + i ).css('display',(i == index) ? 'block' : 'none');
		(i == index) ? $('#icon-n' + i ).addClass('diamond-border') : $('#icon-n' + i ).removeClass('diamond-border');}
}

