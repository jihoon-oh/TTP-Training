$(document).ready(function(){
	$("p").click(function(){
		$(this).slideUp();
	});
	$("h1").click(function(){
		$(this).fadeOut(3000);
	});
	$("div").hover(function(){
		$(this).hide();
	});
	$("#one").hover(function(){
		$(this).animate({
			opacity: .5,
		}, 3000)
	});
})