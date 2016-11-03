
function change_text (index){
	document.getElementById("about-title").innerHTML = document.getElementById("about-title" + index).innerHTML;
	document.getElementById("about").innerHTML = document.getElementById("about" + index).innerHTML;

	for(var i = 1; i < 5; i++)
		document.getElementById('icon-h' + i).style.color = (i == index) ? '#ff80b2' : "black";
}

function change_img(index) {
	if (index < 5) {
		document.getElementById('img_model1').src = 'images/model'+index+'.png';
		for(var i = 1; i < 5; i++) {
			document.getElementById('icon-v' + i).style.color = (i == index) ? '#ff80b2' : "black";}
	}else {
		document.getElementById('img_model2').src = 'images/model' + index + '.png';
		for (var i = 5; i < 9; i++) {
			document.getElementById('icon-v' + i).style.color = (i == index) ? '#ff80b2' : "black";}
	}
}

$('#home-link').click(function(){
	$('html, body').animate({
		scrollTop: $(".home").offset().top
	}, 800);
});

$('#about-link').click(function(){
	$('html, body').animate({
		scrollTop: $("#bm-about").offset().top -50
	}, 800);
});

$('#models-link').click(function(){
	$('html, body').animate({
		scrollTop: $("#bm-models").offset().top -30
	}, 800);
});




