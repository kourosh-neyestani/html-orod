(function ($) {
    "use strict";
    var AFRA = {};

    /*====== Test ======*/
    AFRA.Test = function () {
        console.log("Worked!");
    };

    /*====== Preloader ======*/
    var preloader = $(".preloader");
    $(window).on("load", function () {
        var preloaderFadeOutTime = 500;

        function hidePreloader() {
            preloader.fadeOut(preloaderFadeOutTime);
        }

        hidePreloader();
    });

    /*====== Data Filters Setting ======*/
    AFRA.DataFilters = function () {
        var className = "active";
        var link = $(".el-data-filters .el-data-filters-links ul");

        link.on("click", "li", function () {
            var links = $(this).siblings("li");
            var filter = $(this).attr("data-filter");
            var items = $(this).parent().parent().siblings(".el-data-filters-content").children("ul").children("li");

            console.log($(this).parent().parent());

            links.removeClass(className);
            $(this).addClass(className);

            if (filter == "all") {
                items.show(600);
            } else {
                items.hide();
                $("li[data-filter=" + filter + "]").show(600);
            }
        });
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

        var mySwiper = new Swiper(".el-swiper-category-3", {
            loop: false,
            spaceBetween: 18,
            slidesPerView: 3,
            slidesPerColumn: 2,
        });

        var mySwiper = new Swiper(".el-swiper-products-3", {
            loop: false,
            spaceBetween: 18,
            slidesPerView: 4,
        });

        var mySwiper = new Swiper(".el-swiper-blog-3", {
            loop: false,
            spaceBetween: 18,
            slidesPerView: 3,
        });
    };

    /*====== Counter ======*/
    AFRA.Counter = function () {
        var plus = $(".el-counter").find(".button-plus");
        var minus = $(".el-counter").find(".button-minus");

        plus.on("click", function () {
            var input = $(this).siblings("input");
            var value = parseInt(input.attr("value"));
            var max = parseInt(input.attr("max"));
            if (value < max) {
                input.attr("value", ++value);
                AFRA.MathProductsPrice($(this));
            } else {
                value = max;
            }
        });

        minus.on("click", function () {
            var input = $(this).siblings("input");
            var value = parseInt(input.attr("value"));
            var min = parseInt(input.attr("min"));
            if (value > min) {
                input.attr("value", --value);
                AFRA.MathProductsPrice($(this));
            } else {
                value = min;
            }
        });
    };

    /*====== Math Products Price ======*/
    AFRA.MathProductsPrice = function (t) {
        if (typeof t === "undefined") {
            return;
        }

        var value = $(t).siblings("input").val();
        var price = $(t).parent().parent().siblings(".item-price").attr("data-price");
        var total = $(t).parent().parent().siblings(".item-total").children(".val");

        total.text("$" + parseInt(value * price).toFixed(2));

        var product = $(".el-math-product-price");
        var input = product.children(".item-quantity").children(".el-counter").children("input");

        // total.text("$" + parseInt(price * quantity).toFixed(2));

        input.on("change", function (e) {
            var newValue = e.target.value;
            var newTotal = $(this).parent().parent().siblings(".item-total");
            var newPrice = $(this).parent().parent().siblings(".item-price").attr("data-price");
            newTotal.text("$" + parseInt(newPrice * newValue).toFixed(2));
        });
    };

    /*====== Math Products Price ======*/
    AFRA.RemoveItemFromShoppingCart = function () {
        var button = $(".shopping-cart-item .item-trash");

        button.on("click", function () {
            $(this).parent(".shopping-cart-item").remove();
            alert("Product deleted successfully.");
        });
    };

    // Windows.On.Load
    $(window).on("load", function () {});

    // Document.Ready
    $(document).ready(function () {
        AFRA.Test(), AFRA.Counter(), AFRA.Carousel(), AFRA.DataFilters(), AFRA.MathProductsPrice(), AFRA.RemoveItemFromShoppingCart();
    });
})(jQuery);
