

$(function() {
	

// Criando square colorido

	function getRandomColor() {
			var letters = "0123456789ABCDEF";
			var color = "#";
			for (var i = 0; i < 6; i++) {
			color += letters[Math.floor(Math.random() * 16)];
			}
			return color;
	}

	
	
	$("#for-square button").click(function() {

		var novoEl = document.createElement("div");

		novoEl.style.width = "100px";
		novoEl.style.height = "100px";
		novoEl.style.backgroundColor = "red";
		novoEl.style.marginTop = "10px";	

		document.getElementById('square').appendChild(novoEl);

		novoEl.style.backgroundColor = getRandomColor();

		novoEl.animate([
		  // keyframes
		  { transform: 'translateY(0px)' }, 
		  { transform: 'translateY(-300px)' }
		], { 
		  // timing options
		  duration: 1000,
		  
		});
		
	})

	
// Preenchendo lista

	var nomes = ["Diego", "Gabriel", "Lucas"];

	var listElement = document.querySelector("#app ul");
	

	function criarLista() {

		listElement.innerHTML = "";

		for(valor of nomes) {

			var list = document.createElement("li");
			var text = document.createTextNode(valor);

			list.appendChild(text);
			listElement.appendChild(list);

		}
	}

	function addLista() {

		var content = document.querySelector("#app input");

		if (!content.value == "") {

			nomes.push(content.value);
			content.value = "";

			criarLista();

		}		

	}


	$("#fill").click(function() {

		criarLista();

	})

	$("#add").click(function() {

		addLista();

	})



}) // end document ready



