// google maps
window.onload = function() {
	var map;

	function initialize() {
		var mapProp = {
			center: new google.maps.LatLng(-27.648598, -48.577423),
			scrollwheel:false,
			zoom:12,
			mapTypeId:google.maps.MapTypeId.ROADMAP
		}
		map = new google.maps.Map(document.getElementById("mapa"), mapProp);
	}

	function addMarker(lat, long, icon, content, click) {
		var latLng = {'lat':lat,'lng':long};
		var marker = new google.maps.Marker({
			position:latLng,
			map:map,
			icon:icon
		});

		var infoWindow = new google.maps.InfoWindow({
			content:content,
			maxWidth:200,
			pixelOffset: new google.maps.Size(0, 20)
		});

		if(click == true) {
			google.maps.event.addListener(marker,'click',function() {
				infoWindow.open(map, marker);
			});
		}
		else {
			infoWindow.open(map, marker);
		}
	}

	initialize();
	var conteudo = '<p style="color:black;font-size:13px;padding:10px 0;border-bottom:1px solid black;">Meu endereço</p>';
	addMarker(-27.616637, -48.5923228, '', conteudo, true);
}

// modal
function abrirJanelaModal() {
    $('.showModal').click(function(e) {
    	e.stopPropagation();
    	$('.bgModal').fadeIn();
    	window.scrollTo({top: 0, behavior: 'smooth'});
    });

    $('.formModal').click(function(e) {
    	e.stopPropagation();
    });
}

function fecharJanelaModal() {
	var close = $('body, .btnClose');
	close.click(function() {
		$('.bgModal').fadeOut();
	});
}

// form validate
function validaFormulario(nome, email, telefone=null, mensagem, form) {
	var regEmail = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i;
    var formInput = $(form).find("input, textarea");

    $(formInput).each(function() {
        this.style["border-color"] = "#ccc";
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

$(document).ready(function() {
	document.getElementById("year").innerHTML = new Date().getFullYear();
	// responsive menu
	$('.mobile-menu').click(function() {
		$(this).find('ul').slideToggle();
	});

	// scroll to top
    $(".chevron").hide();
	$(window).scroll(function() {
		if ($(this).scrollTop() > 10) {
			$(".chevron").fadeIn();
		}
		else {
			$(".chevron").fadeOut();
		}
	});

	// smooth scroll
	$('a[href*="#"]:not([href="#"])').click(function() {
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

	// carousel testimonials
	$('.slide-bullet').on('click', function() {
		$('.slider-bullets').find('span').each(function() {
            $(this).removeClass('active');
        });

        $(this).addClass('active');
		
		if ($(this).attr('id') == 'bullet01') {
			$('#sobre-autor01').css('display', 'initial');
			$('#sobre-autor02').css('display', 'none');
			$('#sobre-autor03').css('display', 'none');
		}
		else if($(this).attr('id') == 'bullet02') {
			$('#sobre-autor01').css('display', 'none');
			$('#sobre-autor02').css('display', 'initial');
			$('#sobre-autor03').css('display', 'none');
		}
		else {
			$('#sobre-autor01').css('display', 'none');
			$('#sobre-autor02').css('display', 'none');
			$('#sobre-autor03').css('display', 'initial');
		}
	});

	$("#contactForm").submit(function(e) {
		e.preventDefault();
		validaFormulario($("#nome").val(), $("#email").val(), $("#telefone").val(), $("#mensagem").val(), this);
	});

	$("#contactForm02").submit(function(e) {
		e.preventDefault();
		validaFormulario($("#nome02").val(), $("#email02").val(), null, $("#mensagem02").val(), this);
	});

	abrirJanelaModal();
	fecharJanelaModal();
});
