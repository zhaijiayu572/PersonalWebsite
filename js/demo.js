$(function () {
    var topBtn = $('#top-btn');
    topBtn.on('click',function () {
        $('html,body').animate({
            scrollTop:'0px'
        },1000);
    });
    function changeInfo(last,now) {
        var $title = $('.loop-title');
        var $content = $('.loop-content');
        var $btn = $('.nav-btn');
        $title.find('li').eq(last).removeClass('show').addClass('leave');
        $title.find('li').eq(now).removeClass('leave').addClass('show');
        $content.find('li').eq(last).removeClass('show').addClass('leave');
        $content.find('li').eq(now).removeClass('leave').addClass('show');
        $btn.find('li').eq(last).removeClass('show').addClass('leave');
        $btn.find('li').eq(now).removeClass('leave').addClass('show');
        $('.loop-nav').find('li').eq(now).addClass('show').siblings().removeClass();
    }
    var index = 0;
    var timer = setInterval(function () {
        var last = index;
        index++;
        if(index>3){
            index = 0;
        }
        changeInfo(last,index);
    },5000);
    $('.loop-nav li').on({
        'mouseover':function () {
            var last = index;
            index = $(this).index();
            changeInfo(last,index);
            clearInterval(timer);
        },
        'mouseout':function () {
            timer = setInterval(function () {
                var last = index;
                index++;
                if(index>3){
                    index = 0;
                }
                changeInfo(last,index);
            },5000);
        }
    });
    var selfMessageHeight = $('#self-message').offset().top;
    var selfSkillHeight = $('#my-skill').offset().top;
    var selfItemHeight = $('#self-item').offset().top;
    var selfAchieve = $('#self-achievement').offset().top;
    function scroll(idx) {
        switch (idx) {
            case 0:
                $('html,body').animate({
                    scrollTop:selfMessageHeight+'px'
                },1000);
                break;
            case 1:
                $('html,body').animate({
                    scrollTop:selfSkillHeight+'px'
                },1000);
                break;
            case 2:
                $('html,body').animate({
                    scrollTop:selfItemHeight+'px'
                },1000);
                break;
            case 3:
                $('html,body').animate({
                    scrollTop:selfAchieve+'px'
                },1000);
                break;
        }
    }
    var $btns = $('.nav-btn .btn');
    $btns.on({
        'mouseover':function () {
            clearInterval(timer);
        },
        'mouseout':function () {
            timer = setInterval(function () {
                var last = index;
                index++;
                if(index>3){
                    index = 0;
                }
                changeInfo(last,index);
            },5000);
        },
        'click':function () {
            var idx = $btns.index($(this));
            scroll(idx);
        }
    });
    $('.menu').on('click',function () {
        $('#nav-list').slideToggle();
    });
    $('#nav-list li').on('click',function () {
        var idx = $(this).index();
        scroll(idx);
        $('#nav-list').slideUp();
    });
    //监听滚动条事件当滚动条滚动到指定位置时触发相应的效果


    $(document).scroll(function () {
        // var scrollHeight = $(document).height()-$(window).height();
        // var hrefHeight = (600/$(document).height())*scrollHeight;
        //触发self-message的文字进入动画
        if($(this).scrollTop()>100){
            topBtn.addClass('show');
        }else{
            topBtn.removeClass();
        }
        if($(this).scrollTop()>(selfMessageHeight-200)){
            $('.self-title').addClass('show');
                setTimeout(function () {
                $('.self-title').css('color','#fff');
            },1000);
            $('.self-content').children().addClass('show');
        }
        if($(this).scrollTop()>(selfSkillHeight-200)){
            $('.skill-title').addClass('show');
            setTimeout(function () {
                $('.skill-title').css('color','#fff');
            },1000);
            $('.progress .progress-bar').addClass('show');
            $('.skill-tip').addClass('show');
        }
        if($(this).scrollTop()>(selfItemHeight-200)){
            $('.item-title').addClass('show');
            setTimeout(function () {
                $('.item-title').css('color','#fff');
            },1000);
        }
        if($(this).scrollTop()>(selfAchieve-200)){
            $('.achieve-title').addClass('show');
            setTimeout(function () {
                $('.achieve-title').css('color','#fff');
            },1000);
        }
    });
});
