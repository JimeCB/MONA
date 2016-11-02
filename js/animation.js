
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

    $( '#about-mobile, #models-mobile, .wrapper' ).click(function(ev) {
        ev.stopPropagation();
        ev.preventDefault();

        if($('.container').hasClass('animate')){
            $('.container').removeClass('animate');
            $('.perspective').removeClass('modalview');
            $('.wrapper').removeClass('wrapper-animate');
            $('.nav').removeClass('nav-animate');
            $('.shadow').removeClass('animate-shadow');
        }
    });

});