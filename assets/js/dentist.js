// form validate
function validaFormulario(nome, email, telefone=null, mensagem, form) {
	var regEmail = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i;
    var formInput = $(form).find("input, textarea");

	$(formInput).each(function() {
        this.style["border-color"] = "#dadada";
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
	$('.menu-mobile').click(function() {
		$(this).find('ul').slideToggle();
	});

	// scroll to top
	$(".chevron").hide();
	$(window).scroll(function() {
		if ($(this).scrollTop() > 400) {
			$(".chevron").fadeIn(1000);
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

	$("#contactForm").submit(function(e) {
		e.preventDefault();
		validaFormulario($("#nome").val(), $("#email").val(), $("#telefone").val(), $("#mensagem").val(), this);
	});
});

