function scroll_effect(){
    var tt = $(window).scrollTop();
    var hh = $(window).height();
    $('.scroll-fade').each(function(){
        var yy = $(this).offset().top+600;
        if (tt > yy - hh){
            $(this).addClass('done');
        }
    });
    $('.scroll-up').each(function(){
        var yy = $(this).offset().top+600;
        if (tt > yy - hh){
            $(this).addClass('done');
        }
    });
}
