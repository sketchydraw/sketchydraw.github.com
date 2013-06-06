$(function() {

$(window).load(function()
	{
		$('#header').css({visibility: 'visible', opacity: 0}).fadeTo(500, 1, function()
			{
				$('#inner').delay(200).fadeIn(1000);
				$('#footer').css({visibility: 'visible', opacity: 0}).delay(200).fadeTo(1000, 1, null);
			});
	});

});