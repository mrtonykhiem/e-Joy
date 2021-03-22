// JavaScript Document

function makeTimer() {

	//		var endTime = new Date("29 April 2018 9:56:00 GMT+01:00");	
		var endTime = new Date("1 February 2021 9:56:00 GMT+01:00");			
			endTime = (Date.parse(endTime) / 1000);

			var now = new Date();
			now = (Date.parse(now) / 1000);

			var timeLeft = endTime - now;

			var days = Math.floor(timeLeft / 86400); 
			var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
			var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
			var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));
  
			if (hours < "10") { hours = "0" + hours; }
			if (minutes < "10") { minutes = "0" + minutes; }
			if (seconds < "10") { seconds = "0" + seconds; }

			$("#days").html(days + "<span>Days</span>");
			$("#hours").html(hours + "<span>Hours</span>");
			$("#minutes").html(minutes + "<span>Minutes</span>");
			$("#seconds").html(seconds + "<span>Seconds</span>");		

	}

setInterval(function() { makeTimer(); }, 1000);


		$('.featured-category').slick({
		  infinite: true,
		  slidesToShow: 5,
		  slidesToScroll: 1,
			autoplay: true,
  			autoplaySpeed: 3000,
			pauseOnFocus: false,
			pauseOnHover: false,
			responsive: [
			{
			  breakpoint: 1100,
			  settings: {
				slidesToShow: 3,
				slidesToScroll: 1
			  }
			},
			{
			  breakpoint: 992,
			  settings: {
				slidesToShow: 3,
				slidesToScroll: 1
			  }
			},
			{
			  breakpoint: 500,
			  settings: {
				slidesToShow: 2,
				slidesToScroll: 1
			  }
			}
		  ],
			dots: false,
			prevArrow: '<button class="slide-arrow prev-arrow"></button>',
    		nextArrow: '<button class="slide-arrow next-arrow"></button>'
		});
		
		$('.offer-product').slick({
		  infinite: true,
		  slidesToShow: 1,
		  slidesToScroll: 1,
			autoplay: true,
  			autoplaySpeed: 2000,
			prevArrow: false,
			nextArrow: false,
			dots: false,
			pauseOnFocus: false,
			pauseOnHover: false
		});
		
		$('.special').slick({
		  infinite: true,
		  slidesToShow: 1,
		  slidesToScroll: 1,
			autoplay: true,
  			autoplaySpeed: 5000,
			prevArrow: false,
			nextArrow: false,
			dots: true,
			pauseOnFocus: false,
			pauseOnHover: false
		});

function makeTimer2() {

	//		var endTime = new Date("29 April 2018 9:56:00 GMT+01:00");	
		var endTime = new Date("1 March 2021 9:56:00 GMT+01:00");			
			endTime = (Date.parse(endTime) / 1000);

			var now = new Date();
			now = (Date.parse(now) / 1000);

			var timeLeft = endTime - now;

			var days = Math.floor(timeLeft / 86400); 
			var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
			var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
			var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));
  
			if (hours < "10") { hours = "0" + hours; }
			if (minutes < "10") { minutes = "0" + minutes; }
			if (seconds < "10") { seconds = "0" + seconds; }

			$(".time-days").html(days + "<span>Days</span>");
			$(".time-hours").html(hours + "<span>Hours</span>");
			$(".time-minutes").html(minutes + "<span>Minutes</span>");
			$(".time-seconds").html(seconds + "<span>Seconds</span>");		

	}

setInterval(function() { makeTimer2(); }, 1000);

		$('.new-category').slick({
		  infinite: true,
		  slidesToShow: 5,
		  slidesToScroll: 1,
			autoplay: true,
  			autoplaySpeed: 3000,
			pauseOnFocus: false,
			pauseOnHover: false,
			responsive: [
			{
			  breakpoint: 1100,
			  settings: {
				slidesToShow: 4,
				slidesToScroll: 1
			  }
			},
			{
			  breakpoint: 992,
			  settings: {
				slidesToShow: 3,
				slidesToScroll: 1
			  }
			},
			{
			  breakpoint: 500,
			  settings: {
				slidesToShow: 2,
				slidesToScroll: 1
			  }
			}
		  ],
			dots: false,
			prevArrow: '<button class="slide-arrow prev-arrow"></button>',
    		nextArrow: '<button class="slide-arrow next-arrow"></button>'
		});
		$('.news-blogs-contents').slick({
			infinite: true,
		  	slidesToShow: 3,
			slidesToScroll: 1,
			autoplay: true,
  			autoplaySpeed: 3000,
			pauseOnFocus: false,
			pauseOnHover: false,
			dots: false,
			prevArrow: '<button class="slide-arrow prev-arrow"></button>',
    		nextArrow: '<button class="slide-arrow next-arrow"></button>',
			responsive: [
			{
			  breakpoint: 1100,
			  settings: {
				slidesToShow: 3,
				slidesToScroll: 1
			  }
			},
			{
			  breakpoint: 992,
			  settings: {
				slidesToShow: 2,
				slidesToScroll: 1
			  }
			},
			{
			  breakpoint: 500,
			  settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			  }
			}
		  ],
		});
		$('.hot-category').slick({
			infinite: true,
		  	slidesToShow: 6,
			slidesToScroll: 1,
			autoplay: true,
  			autoplaySpeed: 3000,
			pauseOnFocus: false,
			pauseOnHover: false,
			dots: false,
			prevArrow: '<button class="slide-arrow prev-arrow"></button>',
    		nextArrow: '<button class="slide-arrow next-arrow"></button>',
			responsive: [
			{
			  breakpoint: 1100,
			  settings: {
				slidesToShow: 5,
				slidesToScroll: 1
			  }
			},
			{
			  breakpoint: 992,
			  settings: {
				slidesToShow: 4,
				slidesToScroll: 1
			  }
			},
			{
			  breakpoint: 500,
			  settings: {
				slidesToShow: 2,
				slidesToScroll: 1
			  }
			}
		  ],
		});
		$('.brand-list').slick({
			infinite: true,
		  	slidesToShow: 6,
			slidesToScroll: 1,
			autoplay: true,
  			autoplaySpeed: 3000,
			pauseOnFocus: false,
			pauseOnHover: false,
			dots: false,
			prevArrow: false,
    		nextArrow: false,
			responsive: [
			{
			  breakpoint: 1100,
			  settings: {
				slidesToShow: 5,
				slidesToScroll: 1
			  }
			},
			{
			  breakpoint: 992,
			  settings: {
				slidesToShow: 4,
				slidesToScroll: 1
			  }
			},
			{
			  breakpoint: 500,
			  settings: {
				slidesToShow: 3,
				slidesToScroll: 1
			  }
			}
		  ],
		});
		$('#phone-tab').on("click", function() {
			$('.new-category').slick('refresh');
		});
		$('#laptop-tab').on("click", function() {
			$('.new-category').slick('refresh');
		});
		$('#tv-tab').on("click", function() {
			$('.new-category').slick('refresh');
		});
		$('#camera-tab').on("click", function() {
			$('.new-category').slick('refresh');
		});
		$('#game-tab').on("click", function() {
			$('.new-category').slick('refresh');
		});
		$('#accessories-tab').on("click", function() {
			$('.new-category').slick('refresh');
		});

$('.testimonial-slider').slick({
		  infinite: true,
		  slidesToShow: 1,
		  slidesToScroll: 1,
			autoplay: true,
  			autoplaySpeed: 5000,
			prevArrow: false,
			nextArrow: false,
			dots: true,
			pauseOnFocus: false,
			pauseOnHover: false,
			prevArrow: '<button class="slide-arrow prev-arrow"></button>',
    		nextArrow: '<button class="slide-arrow next-arrow"></button>'
		});

$('.shop-banner-slider').slick({
		  infinite: true,
		  slidesToShow: 1,
		  slidesToScroll: 1,
			autoplay: true,
  			autoplaySpeed: 5000,
			prevArrow: false,
			nextArrow: false,
			dots: true,
			pauseOnFocus: false,
			pauseOnHover: false
		});

$(window).scroll(function() {
			if($(window).scrollTop() >= 200) {
				$('.bg-menu').addClass("position-fixed");
				$('.bg-menu').addClass("fixed-top");
				$('.back-to-top').removeClass("back-appear");
			} else {
				$('.bg-menu').removeClass("position-fixed");
				$('.bg-menu').removeClass("fixed-top");
				$('.back-to-top').addClass("back-appear");
			}
		});

		$(window).on("load", function() {
			if ($(window).width() <= 500) {
				$('.collapsed-button').prop('disabled',false);
				$('.collapsed-button').addClass("collapsed");
				$('.footer-collapse-content').removeClass("show");
			} else {
				$('.collapsed-button').prop('disabled',true);
				$('.collapsed-button').removeClass("collapsed");
				$('.footer-collapse-content').addClass("show");
			}
		});
		$(window).resize(function() {
			if ($(window).width() <= 500) {
				$('.collapsed-button').prop('disabled',false);
				$('.collapsed-button').addClass("collapsed");
				$('.footer-collapse-content').removeClass("show");
			} else {
				$('.collapsed-button').prop('disabled',true);
				$('.collapsed-button').removeClass("collapsed");
				$('.footer-collapse-content').addClass("show");
			}
		});

setTimeout(function () {
			   $('#popup-suscribe').modal("show");
			}, 5000);
