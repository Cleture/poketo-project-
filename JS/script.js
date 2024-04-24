const { url } = require("inspector");

$(document).ready(function () {
    $('.logos-container').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 4
            }
        }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 3
            }
        }]
    });



    function incrementQuantity() {
        var input = document.querySelector('.quantity-input');
        var value = parseInt(input.value);
        input.value = value + 1;
    }

    function decrementQuantity() {
        var input = document.querySelector('.quantity-input');
        var value = parseInt(input.value);
        if (value > 1) {
            input.value = value - 1;
        }
    }
});

function toggleActive(element) {
    const icons = document.querySelectorAll('.icon');
    icons.forEach(icon => icon.classList.remove('active-icon'));

    element.classList.add('active-icon');
}
