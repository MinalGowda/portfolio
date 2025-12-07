$(document).ready(function () {
    console.log("Website loaded successfully!");


    $('a[href^="#"]').on('click', function (event) {
        var target = $(this.getAttribute('href'));
        if (target.length) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top - 100
            }, 1000);
        }
    });


    $('#print-btn').click(function () {
        window.print();
    });


    $('.container').hide().fadeIn(1000);
});
