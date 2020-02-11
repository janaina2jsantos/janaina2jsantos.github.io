$(function(){

	/* menu */
	var $sidebarMobile = $('#js-sidebar-mobile'),
		$sidebarMobileToggle = $('#js-sidebar-mobile-toggle'),
		$body = $('body');

	/* wpp chat */
	var $wppBtn = $('#js-wpp-float-button'),
		$wppBox = $('#js-wpp-float-box'),
		$wppBtnClose = $('#js-wpp-float-box-close');

	function navShow(){
		if($sidebarMobile.attr('data-animating')==0 && $sidebarMobile.attr('data-active')==0){
			$sidebarMobileToggle.addClass('is-active');
			$body.addClass('body-faded');
			$sidebarMobile.attr('data-animating',1).addClass('is-active').attr('data-active',1)
		}
	}

	function navHide(){
		if($sidebarMobile.attr('data-animating')==0 && $sidebarMobile.attr('data-active')==1){
			$sidebarMobileToggle.removeClass('is-active');
			$body.removeClass('body-faded');
			$sidebarMobile.attr('data-animating',1).removeClass('is-active').attr('data-active',0)
		}
	}

	function wppShow(){
		if($wppBox.attr('data-animating')==0 && $wppBox.attr('data-active')==0){
			$body.addClass('body-faded');
			$wppBox.attr('data-animating',1).addClass('is-active').attr('data-active',1)
		}
	}

	function wppHide(){
		if($wppBox.attr('data-animating')==0 && $wppBox.attr('data-active')==1){
			$body.removeClass('body-faded');
			$wppBox.attr('data-animating',1).removeClass('is-active').attr('data-active',0)
		}
	}

	$sidebarMobile.on('transitionend',function(){
		$sidebarMobile.attr('data-animating',0);
	});

	$sidebarMobileToggle.click(function(){
		navShow();
	});

	$wppBox.on('transitionend',function(){
		$wppBox.attr('data-animating',0);
	});

	$wppBtn.click(function(){
		wppShow();
	});

	$wppBtnClose.click(function(){
		wppHide();
	});

	$(document).on('click', function(event){
		if(!$(event.target).closest($sidebarMobile).length){
			navHide();
		}
		if(!$(event.target).closest($wppBox).length){
			wppHide();
		}
	});
	$(document).on('touchstart', function(event) {
		if(!$(event.target).closest($sidebarMobile).length){
			navHide();
		}
		if(!$(event.target).closest($wppBox).length){
			wppHide();
		}
	});


	/* plugins */

	$('.responsive-image').responsImg();

	$('.gallery').photoswipe({
		shareEl: false,
		fullscreenEl: false
	});



	/* home */
	// Inicia o slide da home
	if($("#slider-topo").length>0){
		$("#slider-topo").flickity({
			wrapAround: true,
			prevNextButtons: false,
			draggable: true,
			autoPlay: 3000,
			selectedAttraction: 0.04,
			friction: 0.7
		});
	}

});

function openSinglePS(e, element) {
	e = e || window.event;
	e.preventDefault ? e.preventDefault() : e.returnValue = false;
	var pswpElement = $('.pswp')[0];
	var items = [
		{
			src: $(element).attr('href'),
			w: $(element).attr('data-width'),
			h: $(element).attr('data-height'),
			title: $(element).attr('data-title')
		}
	];
	var options = {
		history: false,
		shareEl: false,
		fullscreenEl: false
	};
	var gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
	gallery.init();
};

function openModal(type, title, message){
	var $modal = $('[data-remodal-id=modal-response]');
	$modal.find('.modal-message').html('<div class="modal-message__icon"><img src="img/icon-'+type+'.png" alt="Sucesso"></div><h3 class="modal-message__title--'+type+'">'+title+'</h3><p class="modal-message__desc">'+message+'</p>');
	$modal = $modal.remodal();
	$modal.open();
}