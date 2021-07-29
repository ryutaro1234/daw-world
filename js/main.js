$(function(){
$('.nav_toggle').on('click', function () {
		$('.nav_toggle, .nav, #nav').toggleClass('show');
});
})


$(function(){
	$(window).on('load scroll',function (){
		$('.scroll-up, .scroll-up-l').each(function(){
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
		$('.scroll-down, .scroll-down-r').each(function(){
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
		$('.scroll-slide-l').each(function(){
			var target = $(this).offset().top;
			var scroll = $(window).scrollTop();
			var height = $(window).height();
			if (scroll > target - height){
				$(this).addClass('active');
			}
		});
	});
});
