$(document).ready(function(){
    function repos(){
        var stuffwidth = $('.signupcontent').width() + $('.logincontent').width() + $('.seperatorwrapper').width()
        var rem = $(window).width() - stuffwidth
        if(rem > 0){
            $('.logincontent').css('left',rem/2)
            $('.seperatorwrapper').removeClass('hidden').css('left',rem/2)
            $('.signupcontent').css('left',rem/2)
            $('.logincontent').css('top',$('.logincontent').parent().height()/2 - $('.logincontent').height()/2)
            $('.seperatorwrapper').css('top',$('.seperatorwrapper').parent().height()/2 - $('.seperatorwrapper').height()/2)
            $('.signupcontent').css('top',$('.signupcontent').parent().height()/2 - $('.signupcontent').height()/2)
            $('.content').css('top',$(window).height()/2 - $('.content').height()/2)
        }else{
            $('.logincontent').css('left',$(window).width()/2 - $('.logincontent').width()/2)
            $('.signupcontent').css('left',$(window).width()/2 - $('.signupcontent').width()/2)
            $('.seperatorwrapper').addClass('hidden').css('left',$(window).width()/2 - $('.seperatorwrapper').width()/2)
            $('.logincontent').css('top','0px')
            $('.seperatorwrapper').css('top','0px')
            $('.signupcontent').css('top','0px')
            $('.content').css('top','120px')
        }
        $('.btn').each(function() {
            $(this).css('margin-left', $(this).parent().width() / 2 - $(this).width() / 2)
        })
        $('.hdrtext').css('top',$('.hdrtext').parent().height()/2-$('.hdrtext').height()/2)
        $('.hdrtext').css('left',$('.hdrtext').parent().width()/2-$('.hdrtext').width()/2)
        $('.error').css('left',$('.error').parent().width()/2-$('.error').width()/2)
    }
    repos()
    $('.logincontent').hover(function(){
        $('.signupcontent').css('opacity','0.7')
    },function(){
        $('.signupcontent').css('opacity','1.0')
    })

    $('.signupcontent').hover(function(){
        $('.logincontent').css('opacity','0.7')
    },function(){
        $('.logincontent').css('opacity','1.0')
    })
    $(window).resize(function(){
        repos()
    })

})