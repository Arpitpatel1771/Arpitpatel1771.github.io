$(document).ready(function(){
    function repos() {
        var notewidth = $('.notewrapper').width() + 2 * parseFloat($('.notewrapper').css('margin')) - 5
        var noteswidth = parseInt($(window).width() / notewidth ) * notewidth + 50
        var notesleft = $(window).width() / 2 - noteswidth / 2 + 15
        var notesheight = $(window).height() - $('.header').height()
        $('.notes').width(noteswidth)
        $('.notes').css('left', notesleft)
        $('.notes').height(notesheight)
        $('.hdrcontent').css('left',$('.hdrcontent').parent().width()/2- ($('.hdrcontent').width() - parseInt($('.seperator').css('margin-left'))*2 - $('.hdrtext').width()) - parseInt($('.seperator').css('margin-left')))
        $('.hdrcontent').css('top',$('.hdrcontent').parent().height()/2-$('.hdrcontent').height()/2)
    }
    repos()
    $(document).on('click','.closenote',function(){
        $(this).parent().find('.deletesubmit').trigger('click')
    })
    $(document).on('click','.addsymbol',function(){
        if($(document).find('.editnotewrapper').length < 1) {
            $('.newnotewrapper').before('<div class="editnotewrapper bk1"><textarea class="inputnewnote" maxlength="60"></textarea></div>')
            $('.inputnewnote').trigger('focus')
            repos()
        }
    })
    $(document).on('keypress','.inputnewnote',function(){
        if (event.which == 13) {
            event.preventDefault();
        }
    })
    $(document).on('focusout','.inputnewnote',function(){
        var text = $(this).val()
        if(text.trim() != ''){
            $('.note').val(text)
            $('.makenote').trigger('click')
        }else{
            $('.editnotewrapper').detach()
        }
    })
    $(window).resize(function(){
        repos()
    })
})
