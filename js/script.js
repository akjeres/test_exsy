$(".test").html("test");
function parameter_2_int (string) {

	return parseInt(string.substring(0, string.indexOf("px")));
}
function clipCarousel() {
	if ($(window).height() <= $(".carousel-inner").height()) {
		$(".carousel-inner").css({
			marginTop: ($(window).height() - $(".carousel-inner").height())+"px"
		});
	} else {
		$(".carousel-inner").css({
			marginTop: ""
		});
	}
	if ($(window).width() < 720) {
		if ($(window).height() < $(window).width()) {
			//$(".header_carousel_wrapper").height($(window).height());
			$("header").css({
				height: $(window).height() + "px",
				backgroundSize: Math.ceil($(window).height() /
					($(window).width()/1.78) * 100) + "%"
			});
		} else {
			//$(".header_carousel_wrapper").height($(window).width());
			$("header").css({
				height: $(window).width() + "px",
				backgroundSize: "180%"
			});
		}
	} else {
		$("header").css({
				height: "",
				backgroundSize:""
			});
	}
}
function arrowJustify() {
	var margin_top;
	if ($(window).height() <= $(".carousel-inner").height()) {
		margin_top = $(window).height() - $(".carousel-inner").height();
	} else margin_top = 0;
	$("a.carousel-control-prev").css({
		top: ($(".carousel-inner").height() - $("a.carousel-control-prev").height() - margin_top) / 2 + "px"
	});
	$("a.carousel-control-next").css({
		top: ($(".carousel-inner").height() - $("a.carousel-control-prev").height() - margin_top) / 2 + "px"
	});
}
$(document).ready(function() {
	clipCarousel();
	arrowJustify();
});
$(window).resize(function() {
	clipCarousel();
	arrowJustify();
});
$(".header_carousel a").hover(function() {
	var t = $(this).prop("className");
	var backgroundImage_url = $("span." + t + "-icon").css("backgroundImage");
	var divider = "_";
	var divider_position = backgroundImage_url.lastIndexOf(divider);
	$("span." + t + "-icon").css({
		backgroundImage: backgroundImage_url.slice(0, divider_position) + "_active.png"
	});
}, function() {
	var t = $(this).prop("className");
	var backgroundImage_url = $("span." + t + "-icon").css("backgroundImage");
	var divider = "_";
	var divider_position = backgroundImage_url.lastIndexOf(divider);
	$("span." + t + "-icon").css({
		backgroundImage: backgroundImage_url.slice(0, divider_position) + "_unactive.png"
	});
});
/*Map*/
function initMap() {
		        var uluru = {lat: 54.208089, lng: 36.623343};
		        var map = new google.maps.Map(document.getElementById("map"), {
		          zoom: 13,
		          center: uluru,
		          disableDefaultUI: true
		        });
		        var contentString;
		        var infowindow = new google.maps.InfoWindow({
		          content: contentString
		        });
		        var iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';
		        var marker = new google.maps.Marker({
		          position: uluru,
		          map: map,
		          title: "поселок Ханино",
		          icon: "./images/marker.png"
		        });
		        marker.addListener("hover", function() {
		          infowindow.open(map, marker);
		        });
		      }
/*Map*/