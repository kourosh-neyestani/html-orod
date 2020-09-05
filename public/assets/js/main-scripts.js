(function ($) {
    "use strict";
    var AFRA = {};

    /*====== Test ======*/
    AFRA.Test = function () {
        console.log("Worked!");
    };

    /*====== Owl Carousel Setting ======*/
    AFRA.Carousel = function () {
        var x = document.getElementsByClassName("el-slider");

        for (var i = 0; i < x.length; i++) {
            var el = x[i];

            var swiper = el.getElementsByClassName("swiper-container")[0];
            var nx = el.getElementsByClassName("el-slider-next")[0];
            var pr = el.getElementsByClassName("el-slider-prev")[0];

            new Swiper(swiper, {
                slidesPerView: 2,
                spaceBetween: 10,
                navigation: {
                    nextEl: nx,
                    prevEl: pr,
                },
            });
        }

        var mySwiper = new Swiper(".el-swiper-3", {
            loop: false,
            spaceBetween: 24,
            slidesPerView: 3,
            slidesPerColumn: 2,
        });

        var mySwiper = new Swiper(".el-swiper-products-3", {
            loop: false,
            spaceBetween: 24,
            slidesPerView: 4,
            slidesPerColumn: 2,
        });
    };

    // Windows.On.Load
    $(window).on("load", function () {});

    // Document.Ready
    $(document).ready(function () {
        AFRA.Test(), AFRA.Carousel();
    });
})(jQuery);
