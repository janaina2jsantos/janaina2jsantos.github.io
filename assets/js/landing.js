$(document).ready(function() {
	document.getElementById("year").innerHTML = new Date().getFullYear();
	// scroll to top
   	$(".chevron").hide();
	$(window).scroll(function() {
		if ($(this).scrollTop() > 1000) {
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

    $("#contactForm").submit(function(e) {
		var nome = $('#nome').val();
		var email = $('#email').val();
		var telefone = $('#telefone').val();
		var regEmail = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i;
    	var formInput = $(this).find('input');

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
		else {
			e.preventDefault();
			alert("Mensagem enviada com sucesso!");
			$(this).find('input').each(function() {
	            $(this).val('');
	        });
		}
	});
});

