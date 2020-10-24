(function ($) {
    "use strict";
    var AFRA = {};

    /*====== Preloader ======*/
    var preloader = $(".preloader");
    $(window).on("load", function () {
        var preloaderFadeOutTime = 500;

        function hidePreloader() {
            preloader.fadeOut(preloaderFadeOutTime);
        }

        hidePreloader();
    });

    /*====== Sticky Navigation Menu ======*/
    AFRA.StickyHeader = function () {
        var header = $(".app-header");
        $(window).scroll(function () {
            if ($(this).scrollTop() > header.height()) {
                header.addClass("sticky");
            } else {
                header.removeClass("sticky");
            }
        });
    };

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

    /*====== Dropdown ======*/
    AFRA.Dropdown = function () {
        var link = $(".el-dropdown.el-dropdown-hover");
        link.on({
            mouseenter: function () {
                $(this).find(".el-dropdown-box").show();
                $(this).addClass("active");
            },
            mouseleave: function () {
                $(this).removeClass("active");
                $(this).find(".el-dropdown-box").slideUp(150);
            },
        });

        // Dropdown search
        var search = $(".el-hover-search-bar");
        search.on({
            mouseenter: function () {
                $(this).find(".el-hover-search-bar-box").show();
                $(this).addClass("active");
            },
            mouseleave: function () {
                $(this).removeClass("active");
                $(this).find(".el-hover-search-bar-box").slideUp(450);
            },
        });
    };

    /*====== Sidenav ======*/
    AFRA.Sidenav = function () {
        var button = $(".button-display-sidenav");
        var sidenav = $(".app-sidenav");

        button.on("click", function (e) {
            e.preventDefault();
            sidenav.addClass("active");
        });
        sidenav.on("click", ".button-close-sidenav, .sidenav-close", function () {
            sidenav.removeClass("active");
        });
    };

    /*====== Sidenav ======*/
    AFRA.SidebarFilterProducts = function () {
        var button = $("#button-display-filter-products");
        var sidenav = $("#sidebar-filter-products");

        button.on("click", function (e) {
            e.preventDefault();
            sidenav.toggleClass("active");
        });
        sidenav.on("click", ".button-close-sidenav, .sidebar-close", function () {
            sidenav.removeClass("active");
        });
    };

    /*====== Megamenu ======*/
    AFRA.Megamenu = function () {
        var headerLink = $(".app-header .el-megamenu");
        var sidenavLink = $(".app-sidenav .el-megamenu > a, .app-sidenav .el-dropdown > a");

        headerLink.on({
            mouseenter: function () {
                $(this).find(".el-megamenu-box").show();
                $(this).addClass("active");
            },
            mouseleave: function () {
                $(this).removeClass("active");
                $(this).find(".el-megamenu-box").slideUp(150);
            },
        });
        sidenavLink.on("click", function (e) {
            e.preventDefault();
            var menu = $(this).siblings(".el-megamenu-box, .el-dropdown-box");
            menu.slideToggle(30);
            $(this).parent(".el-megamenu, .el-dropdown").toggleClass("active");
        });
    };

    /*====== Shopping Cart ======*/
    AFRA.ShoppingCart = function () {
        var button = $(".button-display-shopping-cart");
        var sidenav = $(".app-shopping-cart");

        button.on("click", function (e) {
            e.preventDefault();
            sidenav.addClass("active");
        });
        sidenav.on("click", ".button-close-sidenav, .sidenav-close", function () {
            sidenav.removeClass("active");
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
        var mySwiper = new Swiper(".el-swiper-blog-3", {
            loop: false,
            navigation: {
                nextEl: ".el-slider-next",
                prevEl: ".el-slider-prev",
            },
            breakpoints: {
                0: {
                    slidesPerView: 1.2,
                    spaceBetween: 12,
                },
                576: {
                    slidesPerView: 1.5,
                    spaceBetween: 12,
                },
                768: {
                    slidesPerView: 1.8,
                    spaceBetween: 18,
                },
                992: {
                    slidesPerView: 3,
                    spaceBetween: 18,
                },
                1200: {
                    slidesPerView: 3,
                    spaceBetween: 18,
                }
            },
        });
        var mySwiper = new Swiper(".el-swiper-hero-2", {
            loop: true,
            effect: "fade",
            autoplay: {
                delay: 5100,
                disableOnInteraction: false,
            },
            slidesPerView: 1,
            pagination: {
                el: ".swiper-pagination",
                type: "fraction",
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
        });
        var mySwiper = new Swiper(".el-swiper-hero-demo", {
            loop: true,
            effect: "fade",
            autoplay: {
                delay: 6000,
                disableOnInteraction: false,
            },
            slidesPerView: 1,
        });
        var mySwiper = new Swiper(".el-swiper-category-3", {
            loop: false,
            navigation: {
                nextEl: ".el-slider-next",
                prevEl: ".el-slider-prev",
            },
            breakpoints: {
                0: {
                    slidesPerView: 1.1,
                    spaceBetween: 12,
                },
                576: {
                    slidesPerView: 1.5,
                    spaceBetween: 12,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 18,
                },
                992: {
                    slidesPerView: 3,
                    spaceBetween: 18,
                },
                1200: {
                    slidesPerView: 3,
                    spaceBetween: 18,
                }
            },
        });
        var mySwiper = new Swiper(".el-swiper-products-3", {
            loop: false,
            navigation: {
                nextEl: ".el-slider-next",
                prevEl: ".el-slider-prev",
            },
            breakpoints: {
                0: {
                    slidesPerView: 1.2,
                    spaceBetween: 12,
                },
                576: {
                    slidesPerView: 2,
                    spaceBetween: 12,
                },
                768: {
                    slidesPerView: 2.3,
                    spaceBetween: 18,
                },
                992: {
                    slidesPerView: 3.3,
                    spaceBetween: 18,
                },
                1200: {
                    slidesPerView: 4,
                    spaceBetween: 18,
                }
            },
        });
        var mySwiper = new Swiper(".swiper-testimonial", {
            loop: true,
            spaceBetween: 30,
            breakpoints: {
                0: {
                    slidesPerView: 1.1,
                    spaceBetween: 12,
                },
                640: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 40,
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 45,
                },
            },
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
        AFRA.StickyHeader(), AFRA.Accordion(), AFRA.Dropdown(), AFRA.Sidenav(), AFRA.SidebarFilterProducts(), AFRA.Megamenu(), AFRA.ShoppingCart(), AFRA.Countdown(), AFRA.Counter(), AFRA.Carousel(), AFRA.Masonry(), AFRA.DefaultTabs(), AFRA.DataFilters(), AFRA.ShowPassword(), AFRA.SwitchGrid(), AFRA.ProductImages(), AFRA.ProductImageZoom(), AFRA.MathProductsPrice(), AFRA.RemoveItemFromShoppingCart();
    });
})(jQuery);
