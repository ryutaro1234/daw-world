$(function(){
$('.nav_toggle').on('click', function () {
		$('.nav_toggle, .nav, #nav').toggleClass('show');
});
})


$(function(){
	$(window).on('load scroll',function (){
		$('.scroll-up').each(function(){
			var target = $(this).offset().top;
			var scroll = $(window).scrollTop();
			var height = $(window).height();
			if (scroll > target - height){
				$(this).addClass('active');
			}
		});
	});
});

$(function(){
	$(window).on('load scroll',function (){
		$('.scroll-down').each(function(){
			var target = $(this).offset().top;
			var scroll = $(window).scrollTop();
			var height = $(window).height();
			if (scroll > target - height){
				$(this).addClass('active');
			}
		});
	});
});

$(function(){
	$(window).on('load scroll',function (){
		$('.scroll-slide').each(function(){
			var target = $(this).offset().top;
			var scroll = $(window).scrollTop();
			var height = $(window).height();
			if (scroll > target - height){
				$(this).addClass('active');
			}
		});
	});
});


$(function(){
	$(window).on('load scroll',function (){
		$('.scroll-right-down').each(function(){
			var target = $(this).offset().top;
			var scroll = $(window).scrollTop();
			var height = $(window).height();
			if (scroll > target - height){
				$(this).addClass('active');
			}
		});
	});
});
