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


    function disableContactInputs() {
        $("#contact-form input, #contact-form textarea").prop("disabled", "disabled");
    }

    // contact form submission
    $('#contact-form').on('submit', function(e) {
        $('body').toggleClass('popup-shown');
        disableContactInputs();
        e.preventDefault();

        $.post({
            url: "https://wedding-contact-email.appspot.com",
            data: $(this).serialize(),
        });
    });

    // thank you popup dismissal
    $('#popup .confirm-button').on('click', function(e) {
        $('body').toggleClass('popup-shown');
    });
});