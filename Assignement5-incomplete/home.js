$(document).ready(function(){
    function contentpos(){
        $('.pnlbody').height($('.pnlbody').parent().height() - $('.pnlheader').height() - $('.pnlfooter').height())
        $('.boxbody').height($('.boxbody').parent().height() - $('.boxheader').height() - $('.boxfooter').height())
    }
    contentpos();
    function paneldisplay(){
        if($(window).width() < 1000){
            $('.panel').addClass('hide')
        }else{
            $('.panel').removeClass('hide')
        }
    }
    paneldisplay()
    $(window).resize(function(){
        contentpos()
        paneldisplay()
    })
    var request;
    var request2;
    function getusers(){
        if (request) {
            request.abort();
        }
        var getusers = $("input[name='getusers']").val('yes');
        var $form = $('#getusersform')
        var $inputs = $form.find("input, select, button, textarea");
        var serializedData = $form.serialize();
        $inputs.prop("disabled", true);
        request = $.ajax({
            url: "users.php",
            type: "post",
            data: serializedData,
            async: true
        });
        request.done(function (response, textStatus, jqXHR) {
            $('.pnlbody').html(response)
            $('.boxheader').append('<div class="personheader">'+ $('.active').attr('id') +'</div>')
        });
        request.fail(function (jqXHR, textStatus, errorThrown) {});
        request.always(function () {
            $inputs.prop("disabled", false);
        });
    }
    function getmsgs(personname){
        $("input[name='otherperson']").val(personname);
        var $form = $('#msgform')
        var $inputs = $form.find("input, select, button, textarea");
        var serializedData = $form.serialize();
        $inputs.prop("disabled", true);
        request2 = $.ajax({
            url: "msgs.php",
            type: "post",
            data: serializedData,
            async: true
        });
        request2.done(function (response, textStatus, jqXHR) {
            $('.boxbody').html(response)
        });
        request2.fail(function (jqXHR, textStatus, errorThrown) {});
        request2.always(function () {
            $inputs.prop("disabled", false);
        });
    }
    getusers()
    getmsgs('arpitpatel1771')
    $(document).on('click','.user',function(){
        if(($(this).attr('class')).indexOf('active') == -1){
            $('.active').removeClass('active')
            $(this).addClass('active')
            $('.boxheader').html($('input[name="otherperson"]').val($('.active').attr('id')))
        }
    })
    $('.paneltoggle').click(function(){
        if($('.panel').attr('class').indexOf('hide') == -1){
            $('.panel').addClass('hide')
            $(this).css('margin-right','10px')
        }else {
            $('.panel').removeClass('hide')
            $(this).css('margin-right','210px')
        }
    })
    $('.sendbtn').click(function(){
        $("textarea[name='nmsg']").val($('.msginput').text());
        $("input[name='otherperson2']").val( $('.active').attr('id'))
        var $form = $('#newmsg')
        var $inputs = $form.find("input, select, button, textarea");
        var serializedData = $form.serialize();
        $inputs.prop("disabled", true);
        request2 = $.ajax({
            url: "nmsg.php",
            type: "post",
            data: serializedData,
            async: true
        });
        request2.done(function (response, textStatus, jqXHR) {
            getmsgs($('.active').attr('id'))
            $('.msginput').html('')
        });
        request2.fail(function (jqXHR, textStatus, errorThrown) {
            alert('the message was not deliverd, please try again.')
        });
        request2.always(function () {
            $inputs.prop("disabled", false);
        });
    })
});
(function(){
    function id(v){ return document.getElementById(v); }
    function loadbar() {
        var ovrl = id("overlay"),
            prog = id("progress"),
            stat = id("progstat"),
            img = document.images,
            c = 0,
            tot = img.length;
        if(tot == 0) return doneLoading();
        function imgLoaded(){
            c += 1;
            var perc = parseInt(100/tot*c)+"%";
            var width = parseInt(100/tot*c) + "%";
            prog.style.width = width ;
            stat.innerHTML = "Loading "+ perc;
            if(c===tot) return doneLoading();
            //if(c===tot) setTimeout(function(){return doneLoading()});
        }
        function doneLoading(){
            ovrl.style.opacity = 0;
            $('#progress').removeClass('rounded')
            setTimeout(function(){
                ovrl.style.display = "none";
                $('body').css('overflow','auto')
            }, 1200);
        }
        for(var i=0; i<tot; i++) {
            var tImg     = new Image();
            tImg.onload  = imgLoaded;
            tImg.onerror = imgLoaded;
            tImg.src     = img[i].src;
        }
    }
    document.addEventListener('DOMContentLoaded', loadbar, false);
}());