$(document).ready(function () {
    "use strict";
    
    $(".header_mobile_bottom_burger").click(function() {
        $(this).toggleClass("active");
        $(".header_dropdown").toggleClass("active");
        $(".main_background").toggleClass("active");
    });

    $('.clients_block_slider').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: true,
        arrows: false,
        infinite: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            }
        ]
    });

    $('.goal_block_slider').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        infinite: true,
        responsive: [
            {
                breakpoint: 650,
                settings: {
                    slidesToShow: 1,
                    fade: true,
                    slidesToScroll: 1,
                }
            }
        ]
    });

    $('.case_block_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        fade: true,
        infinite: true
    });

    $(".back_modal").click(function() {
        $(this).removeClass("active");
        $(".modal_form").removeClass("active");
    });

    $(".header_desktop_call").click(function() {
        $(".back_modal").addClass("active");
        $(".modal_form").addClass("active");
    });

    $(".goal_block_main_item_call").click(function() {
        $(".back_modal").addClass("active");
        $(".modal_form").addClass("active");
    });

    $(".footer_desktop_call").click(function() {
        $(".back_modal").addClass("active");
        $(".modal_form").addClass("active");
    });

    $(".sale_block_text_btns_call").click(function() {
        $(".back_modal").addClass("active");
        $(".modal_form").addClass("active");
    });

    $(".header_mobile_bottom_callback").click(function() {
        $(".back_modal").addClass("active");
        $(".modal_form").addClass("active");
    });

    $(".goal_block_slider_item_call").click(function() {
        $(".back_modal").addClass("active");
        $(".modal_form").addClass("active");
    });

    $(".footer_mobile_bottom_callback").click(function() {
        $(".back_modal").addClass("active");
        $(".modal_form").addClass("active");
    });

    $(".sale_block_text_btns_video").click(function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: $(".video").offset().top
        }, 1500);
    });

    $(".header_desktop_nav li").click(function() {
        var id = $(this).attr("data-target");
        $([document.documentElement, document.body]).animate({
            scrollTop: $(`#${id}`).offset().top
        }, 2000);
    });

    $(".footer_desktop_nav li").click(function() {
        var id = $(this).attr("data-target");
        $([document.documentElement, document.body]).animate({
            scrollTop: $(`#${id}`).offset().top
        }, 2000);
    });
    
    $(".header_dropdown ul li").click(function() {
        $(".header_mobile_bottom_burger").removeClass("active");
        $(".main_background").removeClass("active");
        $(".header_dropdown").removeClass("active");
        var id = $(this).attr("data-target");
        $([document.documentElement, document.body]).animate({
            scrollTop: $(`#${id}`).offset().top
        }, 2000);
    });

    $(".main_background").click(function() {
        $(this).removeClass("active");
        $(".header_mobile_bottom_burger").removeClass("active");
        $(".header_dropdown").removeClass("active");
    });

});