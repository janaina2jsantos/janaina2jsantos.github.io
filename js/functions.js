
// mapa site

window.onload = function(){

	var map;

	function initialize(){
		var mapProp = {
			center: new google.maps.LatLng(-27.648598,-48.577423),
			scrollwheel:false,
			zoom:12,
			mapTypeId:google.maps.MapTypeId.ROADMAP
		}

		map = new google.maps.Map(document.getElementById("mapa"),mapProp);
	}

	function addMarker(lat,long,icon,content,click){
		var latLng = {'lat':lat,'lng':long};

		var marker = new google.maps.Marker({
			position:latLng,
			map:map,
			icon:icon
		});

		var infoWindow = new google.maps.InfoWindow({
			content:content,
			maxWidth:200,
			pixelOffset: new google.maps.Size(0,20)
		});

		if(click == true){
			google.maps.event.addListener(marker,'click',function(){
				infoWindow.open(map,marker);
			});
		}else{
			infoWindow.open(map,marker);
		}
		
	}

	initialize();

	var conteudo = '<p style="color:black;font-size:13px;padding:10px 0;border-bottom:1px solid black;">Meu endereço</p>';
	addMarker(-27.616637,-48.5923228,'',conteudo,true);


}


// menu responsivo

$(function() {

	$('.mobile-menu').click(function() {

		$(this).find('ul').slideToggle();
	});
	
})


// scroll suave

$(function() {

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
	})

})



// janela modal

$(function() {

	function abrirJanelaModal() {

	    $('.abreModal').click(function(e) {

	    	e.stopPropagation();

	    	$('.bgModal').fadeIn();
	    });

	    $('.formModal').click(function(e) {

	    	e.stopPropagation();

	    });

	 ///// abrir modal na seçao sobre

	     $('.btn01').click(function(e) {

	    	e.stopPropagation();

	    	$('.bgModal02').fadeIn();
	    });

	    $('.formModal02').click(function(e) {

	    	e.stopPropagation();

	    });

	}

	function fecharJanelaModal() {

		var close = $('body, .btnClose');

		close.click(function() {

			$('.bgModal').fadeOut();
		});

	///// fechar modal na seçao sobre

		var close02 = $('body, .btnClose02');

		close02.click(function() {

			$('.bgModal02').fadeOut();
		});

	}
	
	abrirJanelaModal();
	fecharJanelaModal();

	/// VALIDAÇAO DO FORMULÁRIO


	$("#form01").submit(function() {


		var nome = $("input[id=nome]").val();
		var email = $("input[id=email]").val();
		var telefone = $("input[id=telefone]").val();
		var mensagem = $("textarea[id=mensagem]").val();

		var verificaNome = nome.split(" ");
		var verificaEmail = email.match(/^([a-z0-9-_.]{1,})+@([a-z.]{1,})$/);
		var verificaTel = telefone.split("-");
		var verificaMensagem = mensagem.split(" ");



		if (verificaNome.length < 2) {

			alert ("Nome Inválido! Informe nome e sobrenome!");
			return false;
		}
		else if (verificaEmail == null) {

			alert("E-mail Inválido!");
			return false;
		}

		else if (verificaTel[0].length < 7) {

			alert ("Telefone Inválido! Informe DDD + número!");
			return false;
		}

		else if (verificaMensagem[0].length < 2) {

			alert ("Mensagem inválida!");
			return false;
		}

		else {

			alert("Formulário enviado com sucesso!");
			return true;

		}


	})// fim da funçao submit




}) // fim da funçao



// Chevron to top

$(function() {

	$(".chevron").hide();

	$(window).scroll(function() {

		if ($(this).scrollTop() > 10) {

			$(".chevron").fadeIn();
		}
		else {

			$(".chevron").fadeOut();
		}
	})
	
})





