jQuery(document).ready(function($) {

    var page = 0;

    // mobile menu icon clicking
    $('#menu-button').on('click', function() {
        $('body').toggleClass('nav-active');
    });

    // story navigation
    $('.story .page .arrow.right').on('click', function() {
        page++;

        var prevPage = $('.story .page').eq(page - 1);
        var nextPage = $('.story .page').eq(page);

        prevPage.toggleClass('shown');
        nextPage.toggleClass('shown');
    });

    $('.story .page .arrow.left').on('click', function() {
        page--;

        var nextPage = $('.story .page').eq(page);
        var prevPage = $('.story .page').eq(page + 1);

        nextPage.toggleClass('shown');
        prevPage.toggleClass('shown');
    });

    function showMessageSuccess(){
        $('body').addClass('message-success');
    }

    // contact form
    $('#contact-form').on('submit', function(e){
        e.preventDefault();
        $.post({
            url: "https://wedding-contact-email.appspot.com",
            data: $(this).serialize(),
        });
    });
});