$(document).ready(function () {
	$(".ryu").mouseenter(function() {
		//alert('mouse entered .ryu div');//
		$('.ryu-still').hide();
		$('.ryu-ready').show();
	})
	.mouseleave(function() {
		//alert('mouse left');//
		$('.ryu-action').hide();
		$('.ryu-still').show();
	})
	.mousedown(function() {
		// console.log('mousedown');
		playHadouken();
		$('.ryu-action').hide();
		$('.ryu-throwing').show();
		$('.hadouken').finish().show()
		.animate(
			{'left': '300px'},
			500,
			function() {
				$(this).hide();
				$(this).css('left', '-173px');
			}
		);
		// ryu to throwing position
		// play hadouken sound
		// show hadouken and animate it to the right
	})
	.mouseup(function() {
		//console.log('mouseup');
		$('.ryu-action').hide();
		$('.ryu-ready').show();
		// ryu goes back to ready position
	});

	$(document).keydown(function (e) {
		if (e.keyCode == 88) {
			playCool();
			$('.ryu-action').hide();
			$('.ryu-cool').show();
		}
	})
	.keyup(function (e) {	
		if (e.keyCode == 88) {
			$('#cool')[0].pause();
			$('#cool')[0].load();  
			$('.ryu-action').hide();
			$('.ryu-still').show();
		}
	});
});
function playHadouken () {
	$('#hadouken-sound')[0].volume = 0.5;
	$('#hadouken-sound')[0].load();
	$('#hadouken-sound')[0].play(); 
}
function playCool () {
	//$('#cool-pose')[0].volume = 0.5;
	//$('#cool-pose')[0].load();
	$('#cool')[0].play(); 
}