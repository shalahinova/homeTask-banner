$(document).ready(function(){
    $("#sliderContaier").owlCarousel(
        {
            loop: true,
            margin: 10,
            nav: true,
            navText: [' ', ' '],
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1000: {
                    items: 1
                }
            }
    });
});