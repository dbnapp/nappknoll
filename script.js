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


    function clearContactInputs() {
        var inputs = $('#contact-form input:not([type="submit"]), #contact-form textarea');

        inputs.val('');
    }

    // contact form submission
    $('#contact-form').on('submit', function(e) {
        e.preventDefault();

        var valuesArray = $(this).serializeArray();
        var data = {};

        valuesArray.forEach(function(value){
            data[value.name] = value.value; 
        });

        $('body').toggleClass('popup-shown');
        clearContactInputs();

        $.post({
            url: 'https://wedding-contact-email.appspot.com',
            data: data
        });
    });

    // thank you popup dismissal
    $('#popup .confirm-button').on('click', function(e) {
        $('body').toggleClass('popup-shown');
    });
});