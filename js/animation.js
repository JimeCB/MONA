
$(document).ready(function(){

    $('#icon-menu').click(function () {
        $('.container').addClass('animate').addClass('overflow');
        $('.shadow').addClass('animate-shadow');
        $('.wrapper').addClass('wrapper-animate');
        $('.perspective').addClass('modalview');
        $('.nav').addClass('nav-animate');
    });

    $( '#home-link, #about-link, #models-link, #contact-link, #news-link, .wrapper' ).click(function(ev) {
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
        var width = $( window ).width();

        setTimeout(function () {
            if(id == 'about-link'){
                $('html, body').animate({
                    scrollTop: $("#bm-about").offset().top
                }, 600);
            } else if (id == 'models-link'){
                if(width > 680){
                    $('html, body').animate({
                        scrollTop: $("#bm-models").offset().top
                    }, 900);
                } else {
                    $('html, body').animate({
                        scrollTop: $("#model-mobile").offset().top
                    }, 900);
                }
            } else if (id == 'news-link'){
                $('html, body').animate({
                    scrollTop: $("#news").offset().top
                }, 1100);
            } else if (id == 'contact-link'){
                $('html, body').animate({
                    scrollTop: $("#contact").offset().top
                }, 1300);
            }
        },500);
    });

});