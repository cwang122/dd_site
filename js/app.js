$(function () {
    $(".gallery-shell").slice(0, 1).show();
    
    $("#loadMore").on('click', function (e) {
        e.preventDefault();
        $(".gallery-shell:hidden").slice(0, 1).slideDown();
        if ($(".gallery-shell:hidden").length == 0) {
            $("#load").fadeOut('slow');
        }
    
        $('html,body').animate({
            scrollTop: $(this).offset().top
        }, 1000);
    });
});

$('a[href=#top]').click(function () {
    $('body,html').animate({
        scrollTop: 0
    }, 600);
    return false;
});

$(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
        $('.totop a').fadeIn();
    } else {
        $('.totop a').fadeOut();
    }
});

// JS For Search Bar
