/*

Style   : MobApp Script JS
Version : 1.0
Author  : Surjith S M
URI     : https://surjithctly.in/

Copyright © All rights Reserved 

*/

$(function() {
    "use strict";

    /*-----------------------------------
     * FIXED  MENU - HEADER
     *-----------------------------------*/
    function menuscroll() {
        var $navmenu = $('.nav-menu');
        if ($(window).scrollTop() > 50) {
            $navmenu.addClass('is-scrolling');
        } else {
            $navmenu.removeClass("is-scrolling");
        }
    }
    menuscroll();
    $(window).on('scroll', function() {
        menuscroll();
    });
    /*-----------------------------------
     * NAVBAR CLOSE ON CLICK
     *-----------------------------------*/

    $('.navbar-nav > li:not(.dropdown) > a').on('click', function() {
        $('.navbar-collapse').collapse('hide');
    });
    /* 
     * NAVBAR TOGGLE BG
     *-----------------*/
    var siteNav = $('#navbar');
    siteNav.on('show.bs.collapse', function(e) {
        $(this).parents('.nav-menu').addClass('menu-is-open');
    })
    siteNav.on('hide.bs.collapse', function(e) {
        $(this).parents('.nav-menu').removeClass('menu-is-open');
    })

    /*-----------------------------------
     * ONE PAGE SCROLLING
     *-----------------------------------*/
    // Select all links with hashes
    $('a[href*="#"]').not('[href="#"]').not('[href="#0"]').not('[data-toggle="tab"]').on('click', function(event) {
        // On-page links
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            // Figure out element to scroll to
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            // Does a scroll target exist?
            if (target.length) {
                // Only prevent default if animation is actually gonna happen
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000, function() {
                    // Callback after animation
                    // Must change focus!
                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) { // Checking if the target was focused
                        return false;
                    } else {
                        $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                        $target.focus(); // Set focus again
                    };
                });
            }
        }
    });
    /*-----------------------------------
     * OWL CAROUSEL
     *-----------------------------------*/
    var $testimonialsDiv = $('.testimonials');
    if ($testimonialsDiv.length && $.fn.owlCarousel) {
        $testimonialsDiv.owlCarousel({
            items: 1,
            nav: true,
            dots: false,
            navText: ['<span class="ti-arrow-left"></span>', '<span class="ti-arrow-right"></span>']
        });
    }

    var $galleryDiv = $('.img-gallery');
    if ($galleryDiv.length && $.fn.owlCarousel) {
        $galleryDiv.owlCarousel({
            nav: false,
            center: true,
            loop: true,
            autoplay: true,
            dots: true,
            navText: ['<span class="ti-arrow-left"></span>', '<span class="ti-arrow-right"></span>'],
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 3
                }
            }
        });
    }


    /*-----------------------------------
     * MODAL
     *-----------------------------------*/


    $( "#mensagem" ).click(function() {
        $("#modal").slideToggle();
    });

    $( "#close" ).click(function() {
        $("#modal").hide(500);
    });




    // validaçao dos campos do formulário
    
    $( "#enviar" ).click(function() {
        
        var nome = $( "#recipient-name" ).val();
        var telefone = $( "#recipient-tel" ).val();
        var email = $( "#recipient-email" ).val();
        var mensagem = $( "#message-text" ).val();
        var form = $("#form input");



        if (nome.length < 3) {

            alert("Informe o nome completo!");
            
            form[0].style["border-color"]="red";
           
           
        }
        else if (telefone.length < 10) {

            alert("Informe telefone: DDD + número!");
            form[1].style["border-color"]="red";
        }
        else if ((email.indexOf('@') == -1 ) || (email.indexOf('.') == -1 )) {

            alert("Informe um e-mail válido!");
            form[2].style["border-color"]="red";
        }
        else if (mensagem.length < 2) {

            alert("Digite sua mensagem!");
            document.getElementById('message-text').style["border-color"]="red";
        }
        else {

            alert("Mensagem enviada com sucesso!");
            form[0].value = ""; 
            form[0].style["border-color"]="transparent"; 

            form[1].value = ""; 
            form[1].style["border-color"]="transparent"; 

            form[2].value = ""; 
            form[2].style["border-color"]="transparent";

            document.getElementById('message-text').value = "";
            document.getElementById('message-text').style["border-color"]="transparent";       
            
        }

        
    });
        


}); /* End document ready */