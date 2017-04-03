jQuery(document).ready(function($) {

    // mobile menu icon clicking
    $('#menu-button').on('click', function(){
        $('body').toggleClass('nav-active');
    });

});