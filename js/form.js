$(document).ready(form);
var count= 1;
function form(){
	$('.menu_bar').click(function(){
		// $('nav').toggle(); 

		if(count == 1){
			$('form').animate({
				left: '0'
			});
			count = 0;
		} else {
			count = 1;
			$('form').animate({
				left: '-100%'
			});
		}

	});

};
