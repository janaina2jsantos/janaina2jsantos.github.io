// form validate
function validaFormulario(nome, email, telefone, mensagem, form) {
    var regEmail = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i;
    var formInput = $(form).find("input, textarea");

    $(formInput).each(function() {
        this.style["border-color"] = "transparent";
    });

    if ((nome.split(" ")).length < 2) {
        alert ("Nome Inválido! Informe nome e sobrenome!");
        formInput[0].style["border-color"] = "red";
        return false;
    }
    else if (!regEmail.test(email)) {
        alert("E-mail Inválido!");
        formInput[1].style["border-color"] = "red";
        return false;
    }
    else if (telefone && telefone.length < 14) {
        alert ("Telefone Inválido! Informe DDD + número!");
        formInput[2].style["border-color"] = "red";
        return false;
    }
    else if (mensagem.length < 10) {
        alert ("Sua mensagem deve ter no mínimo 10 caracteres!");
        formInput[3].style["border-color"] = "red";
        return false;
    }
    else {
        alert("Mensagem enviada com sucesso!");
        $(form).find('input, textarea').each(function() {
            $(this).val('');
        });
    }
}

function menuscroll() {
    var $navmenu = $('.nav-menu');
    if ($(window).scrollTop() > 50) {
        $navmenu.addClass('is-scrolling');
    } else {
        $navmenu.removeClass("is-scrolling");
    }
}

$(document).ready(function() {
    document.getElementById("year").innerHTML = new Date().getFullYear();
    // scroll to top
    $(".chevron").hide();
    $(window).scroll(function() {
        menuscroll();
        if ($(this).scrollTop() > 1000) {
            $(".chevron").fadeIn();
        }
        else {
            $(".chevron").fadeOut();
        }
    });

    // smooth scroll
    $('.scroll').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 700);      
                return false;
            }
        }
    });

    // navbar close
    $('.navbar-nav > li:not(.dropdown) > a').on('click', function() {
        $('.navbar-collapse').collapse('hide');
    });

    // navbar toogle bg
    var siteNav = $('#navbar');
    siteNav.on('show.bs.collapse', function(e) {
        $(this).parents('.nav-menu').addClass('menu-is-open');
    })
    siteNav.on('hide.bs.collapse', function(e) {
        $(this).parents('.nav-menu').removeClass('menu-is-open');
    })

    // owl carousel
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

    // modal
    $(".mensagem").click(function() {
        var element = document.getElementById("modalForm");
        $(element).show();
        element.scrollIntoView({block: "end", inline: "nearest", behavior: "smooth"});
    });

    $( "#close" ).click(function() {
        $("#modalForm").hide(500);
    });

    $("#contactForm").submit(function(e) {
        e.preventDefault();
        validaFormulario($("#nome").val(), $("#email").val(), $("#telefone").val(), $("#mensagem").val(), this);
    });
});
