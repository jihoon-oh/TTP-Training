$(document).ready(function(){
	$(".one").click(function(){
		$(this).fadeOut();
	});
	$('#two').click(function(){
		$(this).hide();
	});
	$('#three').hover(function(){
		$(this).slideUp();
	});
	$('#four').dblclick(function(){
		$(this).animate({
			opacity: .5
		},3000);
	});
	$('#five').hover(function(){
		$(this).slideDown();
	});
	$('#six').dblclick(function(){
		$(this).animate({
			width: '50%'
		},3000);
	});
	$('#seven').click(function(){
		$(this).animate({
			left: '100px'
		}, 3000);
	});
	$('#eight').hover(function(){
		$(this).fadeOut(4000);
	});
	$('#nine').dblclick(function(){
		$(this).animate({
			height: '50%'
		},3000);
	});
	$('#ten').click(function(){
		$(this).hide();
	});
});