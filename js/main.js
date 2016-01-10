$(document).ready(function() {

    $("#banner_carousel").owlCarousel({

        navigation: true, // Show next and prev buttons
        slideSpeed: 300,

        paginationSpeed: 400,
        singleItem: true,
        pagination: true
            // "singleItem:true" is a shortcut for:
            // items : 1, 
            // itemsDesktop : false,
            // itemsDesktopSmall : false,
            // itemsTablet: false,
            // itemsMobile : false

    });
    $("#banner_carousel2").owlCarousel({

        autoPlay: 3000, //Set AutoPlay to 3 seconds

        items: 12,
        itemsDesktop: [2599, 4],
        itemsDesktopSmall: [979, 4],
        navigation: true
    });

});

$(function() {
    $('.item').matchHeight();
});

$('#nav').affix({
    offset: {
        top: $('header').height()
    }
});

$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 40) {
            $('#back-to-top').fadeIn();
        } else {
            $('#back-to-top').fadeOut();
        }
    });
    // scroll body to 0px on click
    $('#back-to-top').click(function() {
        $('#back-to-top').tooltip('hide');
        $('body,html').animate({
            scrollTop: 0
        }, 800);
        return false;
    });

    $('#back-to-top').tooltip('show');
});
