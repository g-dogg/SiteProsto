//= ../libs/jquery/dist/jquery.min.js
//= ../libs/html5shiv/dist/html5shiv.min.js
//= ../libs/waypoints/lib/waypoints.min.js
//= ../libs/bootstrap-sass/assets/javascripts/bootstrap.js
//= ../libs/iconate/dist/iconate.min.js
//= ../libs/parallax/deploy/jquery.parallax.js
//= ../libs/fullpage/jquery.fullPage.js
//

$(document).ready(function(){
	 function heightDetect() {
		$(".mainHead").css("height", $(window).height());
	}

	heightDetect();
	$(window).resize(function() {
		heightDetect();
	});

(function($) {
		$.fn.animated = function(inEffect, outEffect) {
				$(this).css("opacity", "0").addClass("animated").waypoint(function(dir) {
						if (dir === "down") {
								$(this).removeClass(outEffect).addClass(inEffect).css("opacity", "1");
						} else {
								$(this).removeClass(inEffect).addClass(outEffect).css("opacity", "1");
						};
				}, {
						offset: "80%"
				}).waypoint(function(dir) {
						if (dir === "down") {
								$(this).removeClass(inEffect).addClass(outEffect).css("opacity", "1");
						} else {
								$(this).removeClass(outEffect).addClass(inEffect).css("opacity", "1");
						};
				}, {
						offset: -$(window).height()
				});
		};
})(jQuery);

/*
	var waypoints = $('#mission').waypoint({
		handler: function(direction) {
				notify(this.element.id + ' hit')
			}
		});
	});
*/
	//$(".mainLogo").animated("fadeInUp", "fadeOutDown");
	//$(".secHeader").addClass("animated zoomIn");
	//$(".work .secHeader").animated("fadeInUp", "fadeOutDown");

	$('#scene').parallax();
/*
	$scene = $("#scene");
	$scene.parallax(function() {

		relativeInput: true,
		clipRelativeInput: false,
		hoverOnly: true,
		//inputElement: document.getElementById('myinput'),
		calibrateX: false,
		calibrateY: true,
		invertX: false,
		invertY: true,
		limitX: false,
		limitY: 10,
		scalarX: 2,
		scalarY: 8,
		frictionX: 0.2,
		frictionY: 0.8,
		originX: 0.0,
		originY: 1.0,
		precision: 1,
		pointerEvents: false

	});
*/
	$("#fullpage").fullpage({
		sectionSelector: '.slide',
		anchors: ['home', 'mis', 'wrk', 'pr', 'cont'],
		//navigation: true,
		slidesNavigation: true,
		controlArrows: false,
		scrollingSpeed: 1000,
		//animashke
		afterLoad: function(anchorLink, index) {
			switch (index) {
				case 1:
					$(".mainLogo").animated("fadeInUp", "fadeOutDown");
					break;
				case 2:
					$("#misHeader").animated("slideInLeft", "slideOutRight");
					$("#misDescr").animated("slideInRight", "slideOutLeft");
					$(".misAnim1").animated("fadeIn", "fadeOut");
					$(".misAnim2").animated("fadeIn", "fadeOut");
					$(".misAnim3").animated("fadeIn", "fadeOut");
					break;
				case 3:
					break;
				case 4:
					$(".anim1").animated("fadeIn", "fadeOutDown");
					$(".anim2").animated("fadeIn", "fadeOutDown");
					$(".anim3").animated("fadeIn", "fadeOutDown");
					$(".anim4").animated("fadeIn", "fadeOutDown");
					break;
				case 5:
					break;
			}
			/*
			if(index == 1) {
				$(".mainLogo").animated("fadeInUp", "fadeOutDown");
			}
			if (index == 2) {
				$("#misHeader")..animated("slideInLeft", "slideOutLeft");
			}
    	if (index == 4) {
        $(".anim1").animated("fadeIn", "fadeOutDown");
				$(".anim2").animated("fadeIn", "fadeOutDown");
				$(".anim3").animated("fadeIn", "fadeOutDown");
				$(".anim4").animated("fadeIn", "fadeOutDown");
      }
			*/
  	},
	});

});

$(window).load(function() {

	$(".loaderInner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");

	//$(".mainLogo").animated("fadeInUp", "fadeOutDown");

});
/*
*/