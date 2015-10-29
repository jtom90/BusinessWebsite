$(document).ready(function() {
	$("p").hide();
	$("p").fadeIn(3000);
	$('.dest').click(function(){
    $('.dest').animate({width:"800px"});
								});
	$('.batman').click(function(){
		$('.batman').animate({width:"200px"});
	});
	$('.gta').click(function(){
		$('.gta').animate({width:"200px"});
	});
});

