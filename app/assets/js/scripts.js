/*
Template Name: 69 Studio
Author: TrendyTheme
Version: 2.0
*/

jQuery(function ($) {

    'use strict';

    /* ======= Blank Wrapper ======= */
    (function () {

        // content here...

    }());


    /* ======= Preloader ======= */
    (function () {
        $('#status').fadeOut();
        $('#preloader').delay(200).fadeOut('slow');
    }());


    new WOW().init();
// Submenu
var Main_menu = {

    delay: 500,

    timer: {
        open: 0,
        hide: 0,
    },

    show_menu: function(elem){
        if($(elem).hasClass('submenu-li')){
            Main_menu.timer.open = setTimeout(function() { 
                var dataId = $($(elem).data('id'));
                $('.submenu-block').removeClass('active');
                $('.submenu-li,.submenu-li__item').removeClass('active');
                dataId.addClass('active');
                $(elem).find('.submenu-li__item').addClass('active');
            }, Main_menu.delay);

        }else{
            console.log(2);
            clearTimeout(Main_menu.timer.open);
            clearTimeout(Main_menu.timer.hide);
            var dataId = $('.submenu-li[data-id="#' + $(elem).attr('id') + '"]');
            dataId.find('.submenu-li__item').addClass('active');
            $(elem).addClass('active');
        }
    },

    hide_menu: function(elem){
        if($(elem).hasClass('submenu-li')){
            var dataId = $($(elem).data('id'));
                    // dataId.removeClass('active');
                    //$(this).find('.nav-link__item').removeClass('active');    
                }else{
                    var dataId = $('.submenu-li[data-id="#' + $(elem).attr('id') + '"]');
                    dataId.find('.submenu-li__item').removeClass('active');
                    $(elem).removeClass('active');  
                }
            },

            init: function(){


                $('nav').mouseleave(function(){
                    clearTimeout(Main_menu.timer.open);
                    clearTimeout(Main_menu.timer.hide);
                    $('.submenu-li,.submenu-li__item,.submenu-block').removeClass('active');
                });

                $('.submenu-li').hover(
                    function () {
                        Main_menu.show_menu(this);
                    }, 
                    function () {
                        console.log(1);
                        var elem = this;
                        Main_menu.timer.hide = setTimeout(function() { 
                            Main_menu.hide_menu(elem);
                        }, Main_menu.delay);

                    }
                    );
            }
        };
        Main_menu.init();
        /* ======= Search box ======= */
        $("#search-box").hide();
        var searchIcon = $(".search-icon");
        var searchBox = $("#search-box");
        searchIcon.on('click', function(event) {
            searchIcon.toggleClass("active");
            searchBox.slideToggle();
        });
// Show Popup
$('.show-popup').on('click tap', function(){
    $('.popup').addClass('active');
});
// Popup Close Button
$('.popup-close').on('click tap', function(){
    $('.popup').removeClass('active');
});
// Form Steps
var form = $("#form-company, #form-company-hh, #form-candidate");

form.steps({
    headerTag: "h3",
    bodyTag: "section",
    transitionEffect: "slideLeft",
    onStepChanging: function (event, currentIndex, newIndex)
    {
        // Allways allow previous action even if the current form is not valid!
        if (currentIndex > newIndex)
        {
            return true;
        }
        // Forbid next action on "Warning" step if the user is to young
        if (newIndex === 3 && Number($("#age-2").val()) < 18)
        {
            return false;
        }
        // Needed in some cases if the user went back (clean up)
        if (currentIndex < newIndex)
        {
            // To remove error styles
            form.find(".body:eq(" + newIndex + ") label.error").remove();
            form.find(".body:eq(" + newIndex + ") .error").removeClass("error");
        }
        form.validate().settings.ignore = ":disabled,:hidden";
        return form.valid();
    },
    onStepChanged: function (event, currentIndex, priorIndex)
    {
        // Used to skip the "Warning" step if the user is old enough.
        if (currentIndex === 2 && Number($("#age-2").val()) >= 18)
        {
            form.steps("next");
        }
        // Used to skip the "Warning" step if the user is old enough and wants to the previous step.
        if (currentIndex === 2 && priorIndex === 3)
        {
            form.steps("previous");
        }
    },
    onFinishing: function (event, currentIndex)
    {
        form.validate().settings.ignore = ":disabled";
        return form.valid();
    },
    onFinished: function (event, currentIndex)
    {
        alert("Submitted!");
    }
}).validate({
    errorPlacement: function errorPlacement(error, element) { element.before(error); },
    rules: {
        confirm: {
            equalTo: "#password-2"
        }
    }
});

// language mbl
$(".lang-link").on('click tap', function(){
    $('.lang-link').removeClass('active');
    $(this).addClass('active');
});
/* === jQuery for page scrolling feature - requires jQuery Easing plugin === */

$('a.page-scroll').on('click', function(event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top - 60
    }, 1500, 'easeInOutExpo');
    event.preventDefault();
});

    // Spoile nbl menu
    var spoil = $('.spoiler-body');
    spoil.hide();
    $('.spoiler-title').click(function(e){
        if($(this).next().hasClass('spoiler-body'))
        {
            $(this).next().slideToggle(300);
            $(this).toggleClass('active');      
            return false;
        }
    });

    /* ======= Sticky Menu  ======= */
    // $(window).scroll(function(){
    //     if ($(window).scrollTop() > 10){
    //         $('.main-nav, .navbar-fixed-top, .tt-default-nav').addClass("sticky");
    //     }else{
    //         $('.main-nav, .navbar-fixed-top, .tt-default-nav').removeClass("sticky");
    //     }
    // });
    
    // on mbl button & menu
    $('.hamburger-box').on('click tap', function(){
        $(this).toggleClass('on');
        $('.mbl-container').toggleClass('active');
    });

// register form
var links = $('.nav-link');
var line = $('.line');
var input = $('.form-input');

links.on('click tap', function(event){
    links.removeClass('active');
    $(this).addClass('active');
    if($(this).hasClass('nav-register')){
        line.addClass('second');
    }else{
        line.removeClass('second');
    }
    Showblock(event);
});
function Showblock(event){

    console.log($(event.target).text());
    if($(event.target).hasClass("showLogin") ){
        $('.form-blocks').removeClass('active');
        $('#login-block').addClass('active');
    }else{
        $('.form-blocks').removeClass('active');
        $('#register-block').addClass('active');
    }
}

if(input){

}
input.focusout(function(){
    console.log($(this).val());
    if($(this).val() != ""){
        $(this).next().addClass('active');
    }else{
        $(this).next().removeClass('active');
    }
});


/* ======= Full Screen Menu  ======= */
$('.nav-bars, .tt-nav').on('click', function(){
    $('.nav-bars').toggleClass('navbar-on');
    $('.tt-nav').fadeToggle();
    $('.tt-nav').removeClass('nav-hide');
});

/* ======= How to work  ======= */
// var waypointsvg = new Waypoint({

//     element: $("#features"),
//     handler: function(dir) {

//         if (dir === "down") {

//             $("#features .tc-item").each(function(index) {
//                 var ths = $(this);
//                 setTimeout(function() {
//                     var myAnimation = new DrawFillSVG({
//                         elementId: "tc-svg-" + index
//                     });
//                     ths.children(".tc-content").addClass("tc-content-on");
//                 }, 500*index);
//             });

//         };
//         this.destroy();
//     },
//     offset: '55%'
// });




/* ======= Full Screen Background ======= */

$(".tt-fullHeight").height($(window).height());
$(window).resize(function(){
    $(".tt-fullHeight").height($(window).height());
});



/* === Youtube Video Script === */
if ($('.player').length > 0) {
    jQuery(".player").mb_YTPlayer();
}
/* ======= Textrotator ======= */
if ($('.rotate').length > 0) {
    $(".rotate").textrotator({
            animation: "dissolve", // You can pick the way it animates when rotating through words. Options are dissolve (default), fade, flip, flipUp, flipCube, flipCubeUp and spin.
            separator: "|", //  You can define a new separator (|, &, * etc.) by yourself using this field.
            speed: 3000 // How many milliseconds until the next word show.
        });
}
/* ======= Revolution slider  homepage Creative======= */
if ($('.tt-banner').length > 0) {
    jQuery(".tt-banner").revolution({
        delay:10000,
        startwidth:1170,
        startheight:500,
        onHoverStop:"off",
        hideThumbs:10,
        hideTimerBar:"on",
        navigationType:"none",
        navigationStyle:"preview1",
        fullWidth:"off",
        fullScreen:"on",
        fullScreenOffsetContainer: ""
    });
}
/* ======= Revolution slider  homepage Gallery======= */
if ($('.tt-banner-gallery').length > 0) {
    jQuery(".tt-banner-gallery").revolution({
        delay:9000,
        startwidth:1170,
        startheight:500,
        onHoverStop:"off",
        hideThumbs:10,
        hideTimerBar:"on",
        navigationType:"none",
        navigationStyle:"preview1",
        fullWidth:"off",
        fullScreen:"on",
        fullScreenOffsetContainer: ""
    });
}
/* === Progress Bar === */
$('.progress').on('inview', function(event, visible, visiblePartX, visiblePartY) {
    if (visible) {
        $.each($('div.progress-bar'),function(){
            $(this).css('width', $(this).attr('aria-valuenow')+'%');
        });
        $(this).off('inview');
    }
});
/* === Counter === */
$('.counter-section').on('inview', function(event, visible, visiblePartX, visiblePartY) {
    if (visible) {
        $(this).find('.timer').each(function () {
            var $this = $(this);
            $({ Counter: 0 }).animate({ Counter: $this.text() }, {
                duration: 2000,
                easing: 'swing',
                step: function () {
                    $this.text(Math.ceil(this.Counter));
                }
            });
        });
        $(this).off('inview');
    }
});



/* === factsTwo CountUp === */
$('#factsTwo').on('inview', function(event, visible, visiblePartX, visiblePartY) {
    if (visible) {
        $(this).find('.timer').each(function () {
            var $this = $(this);
            $({ Counter: 0 }).animate({ Counter: $this.text() }, {
                duration: 2000,
                easing: 'swing',
                step: function () {
                    $this.text(Math.ceil(this.Counter));
                }
            });
        });
        $(this).off('inview');
    }
});
/* ======= Contact Form ======= */
$('#contactForm').on('submit',function(e){

    e.preventDefault();

    var $action = $(this).prop('action');
    var $data = $(this).serialize();
    var $this = $(this);

    $this.prevAll('.alert').remove();

    $.post( $action, $data, function( data ) {

        if( data.response=='error' ){

            $this.before( '<div class="alert alert-danger">'+data.message+'</div>' );
        }

        if( data.response=='success' ){

            $this.before( '<div class="alert alert-success">'+data.message+'</div>' );
            $this.find('input, textarea').val('');
        }

    }, "json");

});
// slider feedback
$('.feedback-wrap').slick({
  centerMode: true,
  centerPadding: '260px',
  slidesToShow: 1,
  arrows: true,
  responsive: [
  {
      breakpoint: 1100,
      settings: {
        centerMode: true,
        centerPadding: '200px',
        slidesToShow: 1
    }
},
{
  breakpoint: 900,
  settings: {
    centerMode: true,
    centerPadding: '160px',
    slidesToShow: 1
}
},
{
    breakpoint: 768,
    settings: {
        centerMode: true,
        centerPadding: '130px',
        slidesToShow: 1
    }
},
{
    breakpoint: 700,
    settings: {
        centerMode: false,
        slidesToShow: 1,
        arrows: false
    }
}
]
});
setInterval(function(){
  $('.slick-prev').trigger('click');
}, 6000);

/* ======= GOOGLE MAP ======= */
if ($('#myMap').length > 0) {
        //set your google maps parameters
        var $latitude = 47.016022, //If you unable to find latitude and longitude of your address. Please visit http://www.latlong.net/convert-address-to-lat-long.html you can easily generate.
        $longitude = 28.826112,
        $map_zoom = 16 /* ZOOM SETTING */

        //google map custom marker icon 
        var $marker_url = 'assets/images/pin.png';

        //we define here the style of the map
        var style = [{
            "stylers": [{
                "hue": "#000"
            }, {
                "saturation": -70
            }, {
                "gamma": 2.15
            }, {
                "lightness": 12
            }]
        }];

        //set google map options
        var map_options = {
            center: new google.maps.LatLng($latitude, $longitude),
            zoom: $map_zoom,
            panControl: true,
            zoomControl: true,
            mapTypeControl: true,
            streetViewControl: true,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            scrollwheel: false,
            styles: style
        }
        //inizialize the map
        var map = new google.maps.Map(document.getElementById('myMap'), map_options);
        //add a custom marker to the map                
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng($latitude, $longitude),
            map: map,
            visible: true,
            icon: $marker_url
        });

        var contentString = '<div id="mapcontent">' + '<p>г. Кишинев, ул. В. Пыркэлаб 4</p></div>';
        var infowindow = new google.maps.InfoWindow({
            maxWidth: 320,
            content: contentString
        });

        google.maps.event.addListener(marker, 'click', function() {
            infowindow.open(map, marker);
        });

    }
});
$(window).load(function() {
    "use strict";

    /* ======= Stellar for background scrolling ======= */
    // (function () {

    //     if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {

    //     } else {
    //         $(window).stellar({
    //             horizontalScrolling: false,
    //             responsive: true
    //         });
    //     }

    // }());


    /* ======= shuffle js ======= */
    // if ($('#portfolio-grid').length > 0) {
    //     /* initialize shuffle plugin */
    //     var $grid = $('#portfolio-grid');

    //     $grid.shuffle({
    //         itemSelector: '.portfolio-item' // the selector for the items in the grid
    //     });

    //     /* reshuffle when user clicks a filter item */
    //     $('#filter li').on('click', function (e) {
    //         e.preventDefault();

    //         // set active class
    //         $('#filter li').removeClass('active');
    //         $(this).addClass('active');

    //         // get group name from clicked item
    //         var groupName = $(this).attr('data-group');

    //         // reshuffle grid
    //         $grid.shuffle('shuffle', groupName );
    //     });
    // }
});