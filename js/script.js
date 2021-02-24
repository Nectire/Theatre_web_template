$(document).ready(function() {

 $(".header-burger").click(function(event){
 	$('.header-burger, .header-menu, .header-list, .header-cross').toggleClass('active');
 	$("body").toggleClass('lock');
 	});
  $(".header-cross").click(function(event){
 	$('.header-burger, .header-menu, .header-list, .header-cross').toggleClass('active');
 	$("body").toggleClass('lock');
 	});

  $('.slider').slick({
		arrows:false, 
		dots:false,
		adaptiveHeight:true, 
		slidesToShow:3, 
		slidesToScroll:1,
		speed:1000, easing:'ease',
		infinite: true,
		initalSlide:0,
		autoplay:true,
		autoplaySpeed:1000,
		pauseOnFocus:true,
		pauseOnHover:true,
		pauseOnDotsHover:true,
		draggable:true, //перелистывание мышкой
		swipe:true, //перелистывание на тачскринах
		touchTreshold:5, //усилие для перелистывания на тачскринах
		touchMove:true,
		waitForAnimate:true,
		centerMode:true,
		variableWidth:true,
		rows:1,
		fade:false,
		slidesPerRow:1,
		vertical:false,
		verticalSwiping: false,
		// asNavFor:".sliderbig",
		responsive:[
		{
			breakpoint:850,
			settings:{slidesToShow:2,},
			},{
			breakpoint:450,
			settings:{slidesToShow:2,}
		}
			],
		mobileFirst:false,
		// appendArrows:$('.content'),
		// appendDots:$('.content'),
	});

	
});


