/**
 * Created by Jimena on 31/10/2016.
 */

$(document).ready(function(){

    $('#icon-menu').click(function () {
        $('.container').toggleClass('animate');
        $('.perspective').toggleClass('modalview');
        $('.nav').toggleClass('nav-animate');
    });

    $( '.container, #home-link' ).click(function() {
        if ($('.container').hasClass('animate')){
            $('.container').removeClass('animate');
            $('.perspective').removeClass('modalview');
            $('.nav').removeClass('nav-animate');
        }
    });

    $( '#about-link' ).click(function() {
        $('.container').removeClass('animate');
        $('.perspective').removeClass('modalview');
        $('.nav').removeClass('nav-animate');
        setTimeout(function(){
            $('html,body').scrollTop($('#bm-about').offset().top -25);
        }, 500);
    });

    $( '#models-link' ).click(function() {
        $('.container').removeClass('animate');
        $('.perspective').removeClass('modalview');
        $('.nav').removeClass('nav-animate');
        setTimeout(function(){
            $('html,body').scrollTop($('#bm-models').offset().top -25);
        }, 500);
    });

});
