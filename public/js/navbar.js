jQuery(document).ready(function() {
	 return;
	/*
	    Navigation
	*/
	// toggle "navbar-no-bg" class
	$('.minimizeNavbar').waypoint(function() {
		$('nav').toggleClass('navbar-no-bg');
	});

    $('.top-content').backstretch("pictures/welcome_background.png");

    $('#top-navbar-1').on('shown.bs.collapse', function(){
    	$('.top-content').backstretch("resize");
    });
    $('#top-navbar-1').on('hidden.bs.collapse', function(){
    	$('.top-content').backstretch("resize");
    });
});
