$(function () {
    var $title = $('.head-loop-container .loop-title');
    var $content = $('.head-loop-container .loop-content');
    var $showBtn = $('.head-loop-container .nav-btn');
    var width = $('.head-loop-container').width();
    var $loopNav = $('.head-loop-container .loop-nav');
    var index = 0;
    $showBtn.find('li').not('.show').css({
        'left':width,
        'opacity':0
    });
    function hideText(index) {
        $title.find('li').eq(index).addClass('hide');
        $content.find('li').eq(index).addClass('hide');
        $showBtn.find('li').eq(index).animate({
            left:-width,
            opacity:0
        },1000,function () {
            $showBtn.find('li').eq(index).css({
                left:width
            })
        });
        setTimeout(function () {                 //控制元素在css动画结束后回到最右边
            $title.find('li').eq(index).removeClass();
            $content.find('li').eq(index).removeClass();
        },1000);

    }
    function showText(index) {
        $loopNav.find('li').eq(index).addClass('show').siblings().removeClass('show');
        $title.find('li').eq(index).addClass('show');
        $content.find('li').eq(index).addClass('show');
        $showBtn.find('li').eq(index).animate({
            left:0,
            opacity:1
        },1000);
    }
    var timer = setInterval(function () {
        hideText(index);
        index++;
        if(index>3){
            index = 0;
        }
        showText(index);
    },5000);
    //给showbtn加上效果，在鼠标悬停时清除定时器
    $showBtn.on({
        'mouseover':function () {
            clearInterval(timer);
        },
        'mouseout':function () {
            timer = setInterval(function () {
                hideText(index);
                index++;
                if(index>3){
                    index = 0;
                }
                showText(index);
            },5000);
        }
    });
    //给下面的导航圆点加上效果悬停时切换轮播图并清除定时器
    $loopNav.find('li').on(
        {
            'mouseover': function () {
                var iNow = $(this).index();
                hideText(index);
                index = iNow;
                showText(index);
                clearInterval(timer);
            },
            'mouseout':function () {
                timer = setInterval(function () {
                    hideText(index);
                    index++;
                    if(index>3){
                        index = 0;
                    }
                    showText(index);
                },5000);
            }

        });
    $('.menu').on('click',function () {
        $('#nav-list').slideToggle();
    });
    //监听滚动条事件当滚动条滚动到指定位置时触发相应的效果
    $(document).scroll(function () {
        // var scrollHeight = $(document).height()-$(window).height();
        // var hrefHeight = (600/$(document).height())*scrollHeight;
        //触发self-message的文字进入动画
        if($(this).scrollTop()>400){
            $('.self-title').addClass('show');
                setTimeout(function () {
                $('.self-title').css('color','#fff');
            },1000);
            $('.self-content').children().addClass('show');
        }
        if($(this).scrollTop()>900){
            $('.skill-title').addClass('show');
            setTimeout(function () {
                $('.skill-title').css('color','#fff');
            },1000);
            $('.progress .progress-bar').addClass('show');
            $('.skill-tip').addClass('show');
        }
    });
});
