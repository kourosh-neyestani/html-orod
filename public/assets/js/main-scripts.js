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

    /*====== Countdown ======*/
    AFRA.Countdown = function () {
        $(".el-countdown").each(function () {
            var $this = $(this),
                finalDate = $(this).data("time"),
                e = $(this).data("labels");
            $this.countdown(finalDate, function (event) {
                $this.html(event.strftime('<div class="countdown-item"><div class="countdown-value">%D</div><div class="countdown-label">' + e["label-day"] + '</div></div><div class="countdown-item"><div class="countdown-value">%H</div><div class="countdown-label">' + e["label-hour"] + '</div></div><div class="countdown-item"><div class="countdown-value">%M</div><div class="countdown-label">' + e["label-minute"] + '</div></div><div class="countdown-item"><div class="countdown-value">%S</div><div class="countdown-label">' + e["label-second"] + "</div></div>"));
            });
        });
    };

    /*====== Accordion ======*/
    AFRA.Accordion = function () {
        var toggle = $(".el-accordion .el-accordion-head");
        toggle.click(function (e) {
            e.preventDefault();

            var $this = $(this);
            var arrow = $(this).children(".inner").children(".accordion-arrow");

            console.log(arrow);

            if ($this.next().hasClass("show")) {
                $this.next().removeClass("show");
                $this.next().slideUp(350);
                arrow.removeClass("active");
                $this.parent().removeClass("active");
            } else {
                $this.parent().parent().find("li .inner").removeClass("show");
                $this.parent().parent().find("li .inner").slideUp(350);
                $this.next().toggleClass("show");
                $this.next().slideToggle(350);
                arrow.addClass("active");
                $this.parent().addClass("active");
            }
        });
    };

    /*====== Default Tabs ======*/
    AFRA.DefaultTabs = function () {
        var className = "active";
        var link = $(".el-tabs .el-tabs-links ul li");

        link.on("click", function (e) {
            e.preventDefault();

            var data = $(this).data("tab-link");
            var links = $(this).siblings("li");
            var item = $("[data-tab-content=" + data + "]");
            var items = $(this).parent().parent().siblings(".el-tabs-content").children("ul").children("li");

            links.removeClass(className);
            items.removeClass(className);
            item.addClass(className);
            $(this).addClass(className);
        });
    };

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
        // var x = document.getElementsByClassName("el-slider");
        // for (var i = 0; i < x.length; i++) {
        //     var el = x[i];
        //     var swiper = el.getElementsByClassName("swiper-container")[0];
        //     var nx = el.getElementsByClassName("el-slider-next")[0];
        //     var pr = el.getElementsByClassName("el-slider-prev")[0];
        //     new Swiper(swiper, {
        //         slidesPerView: 2,
        //         spaceBetween: 10,
        //         navigation: {
        //             nextEl: nx,
        //             prevEl: pr,
        //         },
        //     });
        // }
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
        var counter = $(".el-counter");
        var plus = counter.find(".button-plus");
        var minus = counter.find(".button-minus");

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

            if (value > 0) {
                $(this).parent().removeClass("empty");
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

            if (value === 0) {
                $(this).parent().addClass("empty");
            }
        });
    };

    /*====== Show Password ======*/
    AFRA.ShowPassword = function () {
        var button = $(".el-show-password");

        button.on("click", function () {
            var input = $(this).siblings("input");

            if (input.attr("type") === "text") {
                input.attr("type", "password");
                $(this).html("Show password");
            } else {
                input.attr("type", "text");
                $(this).html("Hide password");
            }
        });
    };

    /*====== Switch Grid ======*/
    AFRA.SwitchGrid = function () {
        var grid = $(".el-switch-grid");
        var button = grid.find(".button");

        button.on("click", function (e) {
            e.preventDefault();
            var gridId = $(this).parent().attr("data-switch-grid-id");
            var gridType = $(this).attr("data-switch-grid-type");
            var row = $(".row[data-switch-grid-id='" + gridId + "']");

            if (gridType === "grid-card") {
                row.removeClass("grid-list").removeClass("grid-large").addClass("grid-card");
            } else if (gridType === "grid-list") {
                row.removeClass("grid-card").removeClass("grid-large").addClass("grid-list");
            } else if (gridType === "grid-large") {
                row.removeClass("grid-card").removeClass("grid-list").addClass("grid-large");
            }

            $(this).siblings().removeClass("active");
            $(this).addClass("active");
        });
    };

    /*====== Produnt Images ======*/
    AFRA.ProductImages = function () {
        var select = $(".el-swiper-product-images");
        var number = select.attr("data-slider-index");
        var direction = select.attr("data-slider-dir");
        var swiper = new Swiper(select, {
            pagination: {
                el: ".el-swiper-dots",
                loop: true,
                effect: "fade",
                clickable: true,
                renderBullet: function (index, className) {
                    return '<div class="el-swiper-pagination-image el-swiper-pagination-image-' + index + " " + className + '">' + "<img src='assets/images/product/" + number + "-" + (index + 1) + ".jpg' alt='alternative'/>" + "</div>";
                },
            },
        });
    };

    /*====== Produnt Image Zoom ======*/
    AFRA.ProductImageZoom = function () {
        var image = $(".el-image-zoom");

        image.ezPlus({
            easing: true,
            zoomType: "lens",
            lensShape: "round",
            lensSize: 180,
            scrollZoom: true,
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

    /*====== Produnt Slider Price ======*/
    AFRA.ProductSliderPrice = function () {
        var slider = $("#slider-range");

        var skipSlider = document.getElementById("slider-non-linear-step");
        var $sliderFrom = document.querySelector(".js-slider-range-from");
        var $sliderTo = document.querySelector(".js-slider-range-to");
        var min = parseInt($sliderFrom.dataset.range);
        var max = parseInt($sliderTo.dataset.range);
        noUiSlider.create(skipSlider, {
            start: [$sliderFrom.value, $sliderTo.value],
            connect: true,
            step: 1,
            range: {
                min: min,
                max: max,
            },
        });
        var skipValues = [document.getElementById("skip-value-lower"), document.getElementById("skip-value-upper")];

        skipSlider.noUiSlider.on("update", function (values, handle) {
            skipValues[handle].value = values[handle];
        });
    };

    /*====== Masonry Layout ======*/
    AFRA.Masonry = function () {
        $(function () {
            $(".masonry").masonry();
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
        AFRA.Test(), AFRA.Accordion(), AFRA.Countdown(), AFRA.Counter(), AFRA.Carousel(), AFRA.Masonry(), AFRA.DefaultTabs(), AFRA.DataFilters(), AFRA.ShowPassword(), AFRA.SwitchGrid(), AFRA.ProductImages(), AFRA.ProductImageZoom(), AFRA.MathProductsPrice(), AFRA.ProductSliderPrice(), AFRA.RemoveItemFromShoppingCart();
    });
})(jQuery);
