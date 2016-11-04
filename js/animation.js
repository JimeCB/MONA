
$(document).ready(function(){

    $('#icon-menu').click(function () {
        $('.container').addClass('animate').addClass('overflow');
        $('.shadow').addClass('animate-shadow');
        $('.wrapper').addClass('wrapper-animate');
        $('.perspective').addClass('modalview');
        $('.nav').addClass('nav-animate');
    });

    $( '#home-link, #about-link, #models-link, .wrapper' ).click(function(ev) {
        ev.stopPropagation();
        ev.preventDefault();
        $('.nav').removeClass('nav-animate');
        $('.perspective').removeClass('modalview');
        $('.wrapper').removeClass('wrapper-animate');
        $('.shadow').removeClass('animate-shadow');
        $('.container').removeClass('animate');

        setTimeout(function () {
            $('.container').removeClass('overflow');
        },150);

        var id = $(this).attr("id");

        setTimeout(function () {
            if(id == 'about-link'){
                $('html, body').animate({
                    scrollTop: $("#bm-about").offset().top
                }, 600);
            }else if (id == 'models-link'){
                $('html, body').animate({
                    scrollTop: $("#bm-models").offset().top
                }, 900);
            }
        },500);
    });

});