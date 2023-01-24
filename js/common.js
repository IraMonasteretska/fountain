$(document).ready(function () {
    var swiper = new Swiper(".discountslider", {
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },

        speed: 700,
    });

    //   testimonials slider
    var swiper = new Swiper(".testimonials-slider", {
        centeredSlides: true,
        speed: 600,
        loop: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        breakpoints: {
            576: {
                slidesPerView: 1.5,
                spaceBetween: 20,
            },

            992: {
                slidesPerView: 3,
                spaceBetween: 30,
            },

        },
    });

    // scroll to top
    $(function () {
        $('.totop').click(function () {
            $('html, body').animate({
                scrollTop: 0
            }, 1500);
            return false;
        })

    });

    // scroll to sect
    $(".scrollarrow").on("click", "a", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({ scrollTop: top }, 1500);
    });

    // modal
    $('.videoposter').click(function () {
        $('.modalsect').removeClass('hide');
    });

    $('.closemodal').click(function () {
        $('.modalsect').addClass('hide');
    });

    $('.closemodal').click(function () {
        $('.videoyt').each(function () {
            var el_src = $(this).attr("src");
            $(this).attr("src", el_src);
        });
    });

    $('.modalsect').click(function (event) {
        $('.modalsect').addClass('hide');
        let $target = $(event.target);
        if (!$target.closest('.modalwindow').length) {
            $('.videoyt').each(function () {
                var el_src = $(this).attr("src");
                $(this).attr("src", el_src);
            });
        }
    });

    $('.header .dropdown').click(function () {
        $(this).toggleClass('show');
    });

    // show menu
    $('.headerburger').click(function () {
        $('header.header .mobmenu').addClass('show');
    });

    $('.closemenu').click(function () {
        $('header.header .mobmenu').removeClass('show');
    });


    // header stycky
    // When the user scrolls the page, execute myFunction
    window.onscroll = function () { myFunction() };

    // Get the header
    var header = document.getElementById("header");

    // Get the offset position of the navbar
    var sticky = header.offsetTop;

    // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
    function myFunction() {
        if (window.pageYOffset > sticky) {
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }
    }





    // SERVICES
    // faq
    $('.question__header').click(function () {
        $(this).next('.question__body').slideToggle();
        $(this).toggleClass('show');

        $('.question__header').not(this).next('.question__body').slideUp();
        $('.question__header').not(this).removeClass('show');
    });


});