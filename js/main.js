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
			if (scroll > target - height + 100){
				$(this).addClass('active');
			}
		});
	});
});

$(function(){
	$(window).on('load scroll',function (){
		$('.scroll-up-l').each(function(){
			var target = $(this).offset().top;
			var scroll = $(window).scrollTop();
			var height = $(window).height();
			if (scroll > target - height + 100){
				$(this).addClass('active');
			}
		});
	});
});

$(function(){
	$(window).on('load scroll',function (){
		$('.scroll-up-r').each(function(){
			var target = $(this).offset().top;
			var scroll = $(window).scrollTop();
			var height = $(window).height();
			if (scroll > target - height + 100){
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
			if (scroll > target - height + 100){
				$(this).addClass('active');
			}
		});
	});
});

$(function(){
	$(window).on('load scroll',function (){
		$('.scroll-down-r').each(function(){
			var target = $(this).offset().top;
			var scroll = $(window).scrollTop();
			var height = $(window).height();
			if (scroll > target - height + 100){
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
			if (scroll > target - height + 100){
				$(this).addClass('active');
			}
		});
	});
});
