/**
 * Created by Jimena on 31/10/2016.
 */


var perspectiveWrapper = document.getElementById( 'perspective' ),
    container = perspectiveWrapper.querySelector( '.container' ),
    contentWrapper = container.querySelector( '.wrapper' );



function scrollY() {
    return window.pageYOffset || window.document.documentElement.scrollTop;
}




$(document).ready(function(){

    $('#icon-menu, #home-mobile').click(function () {

        docScroll = scrollY();

        $('.container').toggleClass('animate');

        $('.shadow').toggleClass('animate-shadow');

        $('.perspective').toggleClass('modalview');
        $('.wrapper').toggleClass('wrapper-animate');
        $('.nav').toggleClass('nav-animate');

        $('.container').scrollTop(docScroll);
    });

    $( '#about-mobile' ).click(function() {
        $('.container').removeClass('animate');
        $('.perspective').removeClass('modalview');
        $('.wrapper').removeClass('wrapper-animate');
        $('.nav').removeClass('nav-animate');
        $('.shadow').removeClass('animate-shadow');
        setTimeout(function(){
            $('html,body').scrollTop($('#bm-about').offset().top -25);
        }, 500);
    });

    $( '#models-mobile' ).click(function() {
        $('.container').removeClass('animate');
        $('.perspective').removeClass('modalview');
        $('.wrapper').removeClass('wrapper-animate');
        $('.nav').removeClass('nav-animate');
        $('.shadow').removeClass('animate-shadow');
        setTimeout(function(){
            $('html,body').scrollTop($('#bm-models').offset().top -25);
        }, 500);
    });

});
