$(window).scroll(function(){
    if ($(window).scrollTop() >= 75) {
        $('.navibar__left').addClass('switch-logo');
        $('header').addClass('white');
        $('.navibar__right__span').addClass('blue');
    }
    else {
        $('.navibar__left').removeClass('switch-logo');
        $('header').removeClass('white');
        $('.navibar__right__span').removeClass('blue');
    }
});
