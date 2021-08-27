function nav_toggle(){
  document.getElementById("nav_toggle").classList.toggle("nav_toggle");
  document.getElementById("navigation").classList.toggle("navigation");
  document.getElementById("nav").classList.toggle("nav");
};

window.onload = function() {
  const spinner = document.getElementById('loading');
  spinner.classList.add('loaded');
}

$(function(){
  $('a[href^="#"]').click(function(){
    let speed = 500;
    let href= $(this).attr("href");
    let target = $(href == "#" || href == "" ? 'html' : href);
    let position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });
});

$(function(){
  $(window).on('load scroll',function (){
    $('.scroll-up').each(function(){
      var target = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var height = $(window).height();
      if (scroll + 100 > target - height){
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
      if (scroll > target - height){
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
    $('.scroll-down-l').each(function(){
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
    $('.scroll-down-r').each(function(){
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
$(function(){
  $(window).on('load scroll',function (){
    $('.scroll-slide-r').each(function(){
      var target = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var height = $(window).height();
      if (scroll > target - height){
        $(this).addClass('active');
      }
    });
  });
});
