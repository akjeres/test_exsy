var scroll_delta = 0;
var position = $(window).scrollTop();
function parameter_2_int (string) {

	return parseInt(string.substring(0, string.indexOf("px")));
}
function getScrollbarWidth() {
  const outer = document.createElement('div');
  const inner = document.createElement('div');
  outer.style.visibility = 'hidden';
  outer.style.width = '100px';
  inner.style.width = '100%';
  outer.appendChild(inner);
  document.body.appendChild(outer);
  const widthWithoutScrollbar = outer.offsetWidth;
  outer.style.overflow = 'scroll';
  const widthWithScrollbar = inner.offsetWidth;
  document.body.removeChild(outer);

  return (widthWithoutScrollbar - widthWithScrollbar);
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
	if ($(window).width() < (720 - getScrollbarWidth())) {
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
function navbarCollapse() {
	if ($(window).width() < (720 - getScrollbarWidth())) { 
		$("nav").removeClass("navbar-expand-sm").addClass("fixed-top");
		!($("nav").hasClass("navbar-expand-md")) && $("nav").addClass("navbar-expand-md");
		$("nav").hasClass("bg-transparent") && $("nav").removeClass("bg-transparent").addClass("bg-light");
		//alert($('body').innerWidth() + " " + $("body").prop("scrollWidth") + " " + $(window).width());
	} else {
		$("nav").hasClass("navbar-expand-md") && $("nav").removeClass("navbar-expand-md");
		$("nav").addClass("navbar-expand-sm").removeClass("fixed-top");
		!($("nav").hasClass("bg-transparent")) && $("nav").removeClass("bg-light").addClass("bg-transparent");
	}
	
}
function navbarJustify() {
	if ($(window).width() > 1199) {
		$("nav.navbar").css("left", ($(window).width() - $("nav.navbar").width())/2 + "px");
	} else {
		$("nav.navbar").css("left", "");
	}
}
function menuAnimate() {
	let mobile_flag = $("nav").hasClass("fixed-top");
	let button_padding = parameter_2_int($("#request_call").css("paddingTop")) +
		parameter_2_int($("#request_call").css("paddingBottom"));
	let button_height = $("#request_call").height();
	let scroll_value = $("nav.navbar").height()
	+ parameter_2_int($("nav.navbar").css("marginTop"))
	+ (button_height + button_padding) / 2;
	let position_flag = (position <= scroll_value);
	
	if (!mobile_flag && position_flag) {
		$("nav.navbar").delay(500).animate({top: 0}, 250);
	} else $("nav.navbar").css({top: ""});

	return false;
}

function paddingSet() {
	let main_offset = $("p.address_paragraph").offset().left;
	$("#manufacturing h2").css({
		paddingLeft: main_offset + "px"
	});
	$("#manufacturing p").css({
		paddingLeft: main_offset + "px"
	});
}
$(window).scroll(function() {
	position = $(window).scrollTop();
	menuAnimate();
});
$(document).ready(function() {
	//setMobileStyles();
	menuAnimate();
	navbarCollapse();
	navbarJustify();
	clipCarousel();
	arrowJustify();
	paddingSet();
});
$(window).resize(function() {
	//setMobileStyles();
	navbarJustify();
	navbarCollapse();
	clipCarousel();
	arrowJustify();
	paddingSet();
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
$(".smooth_link").click(function() {
    let elementClick = $(this).attr("href");
    let nav_padding = parameter_2_int($("#navbar_nav").css("paddingTop")) + 
    parameter_2_int($("#navbar_nav").css("paddingBottom"));
    const destination = ($(window).width() < (720 - getScrollbarWidth())) ?
    ($(elementClick).offset().top - $("#navbar_nav").height() -	nav_padding) : $(elementClick).offset().top;
    $("html, body").animate({ scrollTop: destination }, 1500);

    return false;
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

//alert(1000 - getScrollbarWidth());
//alert(11 - "1");