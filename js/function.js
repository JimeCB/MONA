
function change_text (index){

	$("#about-title").text($('#about-title' + index ).html());
	$('#about').text($('#about' + index).html());

	for(var i = 1; i < 5; i++)
		$('#icon-h' + i ).css('background',(i == index) ? '#ff80b2' : 'black');
}

function change_img(index) {
	if (index < 5) {
		$('#img_model1').css('background','url(images/model' + index + '.png)');
		for(var i = 1; i < 5; i++) {
			document.getElementById('icon-v' + i).style.background = (i == index) ? '#ff80b2' : "black";}
	}else if (4 < index < 9){
		$('#model-mobile').css('background','url(images/model' + index + '.png) no-repeat').css('background-size','cover');
		for (var i = 5; i < 9; i++) {
			document.getElementById('icon-v' + i).style.background = (i == index) ? '#ff80b2' : "black";}
	}else if( 8 < index < 13 ){

	}
}





