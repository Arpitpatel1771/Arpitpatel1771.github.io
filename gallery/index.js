$(document).ready(function(){
    $('.rod').width($('.bar').width()/3)
    $('.outside').width(0)
    function barpos() {
        if($(window).width()  >  340) {
            $('.bar').css('left', $(window).width() / 2 - $('.bar').width() / 2)
        }
    }
    barpos()
    function hideheader(){
        $('.header').css('margin-top','-70px')
    }
    function showheader(){
        $('.header').css('margin-top','0px')
        setTimeout(function(){
           hideheader()
        },3000)
    }
    showheader()
    function imagefullset(){
        var aspectratio = $(window).width()/$(window).height()
        if( aspectratio > 1366/768){
            $('.imagefull').width('70%')
            $('.imagefull').css('left','15%')
        }else if( aspectratio > 4/3){
            $('.imagefull').width('80%')
            $('.imagefull').css('left','10%')
        }else if(aspectratio > 0.9){
            $('.imagefull').width('90%')
            $('.imagefull').css('left','5%')
        }else{
            $('.imagefull').width('100%')
            $('.imagefull').css('left','0')
        }
    }
    imagefullset()
    var trans3duration = 300;
    var rods = ['.rod1','.rod2','.rod3','.rod4','.rod5']
    var images = ['img1','img2','img3','img4','img5']
    var c1imgs = ['c1/1.jpg','c1/2.jpg','c1/3.jpg','c1/4.jpg','c1/5.jpg']
    var c2imgs = ['c2/1.jpg','c2/2.jpg','c2/3.jpg','c2/4.jpg','c2/5.jpg','c2/6.jpg','c2/7.jpg']
    var c3imgs = ['c3/1.jpg','c3/2.jpg','c3/3.jpg','c3/4.jpg','c3/5.jpg']
    var c4imgs = ['c4/1.jpg','c4/2.jpg','c4/3.jpg','c4/4.jpg','c4/5.jpg']
    var c5imgs = ['c5/1.jpg','c5/2.jpg','c5/3.jpg','c5/4.jpg','c5/5.jpg']
    var cat = [ c1imgs , c2imgs, c3imgs, c4imgs, c5imgs]
    var c1 = ['<strong>Ezio Auditore</strong>','Brotherhood','Everything is permitted','Creed Logo','<strong>Edward Kenway</strong>']
    var c2 = ['Bucky\'s spouse','Just another poster','Just another mammal','Just another hero','Bucky\'s spouse #2','Ryan Reynolds','You know who he is']
    var c3 = ['<strong>Kaneki</strong>','<i class="em em-heart"></i>','Light yagami','Kira','Just another wallpaper']
    var c4 = ['Madara <em>fuckin\'</em>&nbsp; Uchiha','2 idiots','Best man ever','<strong>Kakashi hatake</strong>','Gaara of the sand']
    var c5 = ['Popular builds','Mighty dragon','Dragonborn','<em>Dovahkiin</em>','Filler photo #1']
    var imgtext = [ c1 , c2, c3, c4, c5]
    var activeind = 2
    var inind = 1;var inxind=0;var outind=3;var outxind=4;
    function rodpos(){
        $('.rodcenter').css('margin-left', -$('.rodin').width() / 2)
        $('.rodin').css('margin-left', -($('.rodin').width() * 3 / 2))
        $('.rodinx').css('margin-left', -($('.rodin').width() * 5 / 2))
        $('.rodout').css('margin-left', ($('.rodin').width() * 1 / 2))
        $('.rodoutx').css('margin-left', ($('.rodin').width() * 3 / 2))
    }
    function addtrans(){
        $('.rod').each(function(){
            $(this).addClass('trans2')
        })
    }
    function rmtrans(){
        $('.rod').each(function(){
            $(this).removeClass('trans2')
        })
    }
    rodpos()
    $('.nextrod').click(function(){
        $('.prevrod').prop('disabled',true)
        $('.nextrod').prop('disabled',true)
        addtrans()
        $(rods[inxind]).removeClass('rodinx').addClass('rodin')
        $(rods[inind]).removeClass('rodin').addClass('rodcenter')
        $(rods[activeind]).removeClass('rodcenter').addClass('rodout')
        $(rods[outind]).removeClass('rodout').addClass('rodoutx')
        $(rods[outxind]).removeClass('rodoutx').addClass('rodinx')
        rodpos()
        setTimeout(function(){
            rmtrans()
            $('.prevrod').prop('disabled',false)
            $('.nextrod').prop('disabled',false)
        },trans3duration)
        activeind = activeind - 1
        inind = activeind - 1
        inxind = inind - 1
        outind = activeind + 1
        outxind = outind + 1
        if(activeind<0){activeind = 4}
        if(inind < 0){ inind += 5 }
        if(inxind < 0){ inxind += 5 }
        if(outind > 4){ outind -= 5 }
        if(outxind > 4){ outxind -= 5 }
    })
    $('.prevrod').click(function(){
        $('.prevrod').prop('disabled',true)
        $('.nextrod').prop('disabled',true)
        addtrans()
        $(rods[inxind]).removeClass('rodinx').addClass('rodoutx')
        $(rods[inind]).removeClass('rodin').addClass('rodinx')
        $(rods[activeind]).removeClass('rodcenter').addClass('rodin')
        $(rods[outind]).removeClass('rodout').addClass('rodcenter')
        $(rods[outxind]).removeClass('rodoutx').addClass('rodout')
        rodpos()
        setTimeout(function(){
            rmtrans()
            $('.prevrod').prop('disabled',false)
            $('.nextrod').prop('disabled',false)
        },trans3duration)
        activeind = activeind + 1
        inind = activeind - 1
        inxind = inind - 1
        outind = activeind + 1
        outxind = outind + 1
        if(activeind > 4){activeind = 0}
        if(inind < 0){ inind += 5 }
        if(inxind < 0){ inxind += 5 }
        if(outind > 4){ outind -= 5 }
        if(outxind > 4){ outxind -= 5 }
    })
    function assign(a,b){
        $(a).find('.img').each(function () {
            $(this).addClass(b)
        })
    }
    var marginb
    var imgs = 5
    var imgheight
    var border = '0px solid red'
    $('.cat').each(function(){
        imgheight = Math.round($(this).height()/imgs-25)
        if(imgheight > 109){imgheight = 100}
        $(this).html('')
        $(this).html(
            '<div class="img upper"></div>' +
            '<div class="img up"></div>' +
            '<div class="img middle"></div>' +
            '<div class="img low"></div>' +
            '<div class="img lower"></div>'
        )
        $(this).find('.img').each(function(){
            $(this).height(imgheight)
            $(this).width(imgheight)
            $(this).css('left', $('.rodin').width() / 2 - $(this).width() / 2 -2)
        })
    })
    var topvalue = -5
    $('.img').each(function() {
        marginb = ($(this).parent().height()-($(this).height()*imgs))/(imgs-1)
        if(marginb<0){marginb=3}
        $(this).css('margin-bottom',marginb)
        $(this).css('top',topvalue).css('border',border)
    })
    assign('.cat1','img1');assign('.cat2','img2');assign('.cat3','img3');assign('.cat4','img4');assign('.cat5','img5');
    function transimgadd(that) {
        $(that).find('.img').each(function () {
            $(this).addClass('trans3')
        })
    }
    function transimgremove(that) {
        $(that).find('.img').each(function () {
            $(this).removeClass('trans3')
        })
    }
    function imgass() {
        var i = 0
        var j = 0
        for(i=0;i<5;i++){
            j=0
            var category = ('.cat').concat((i+1).toString());
            $(category).find('.img').each(function(){
                $(this).html('<img class="imagethumb" src="'+cat[i][j]+'" />')
                j++
            })
        }
    }
    imgass()
    $('.nextimg').click(function(){
        $('.nextimg').prop('disabled',true)
        $('.previmg').prop('disabled',true)
        $('.rodcenter').find('.cat').each(function () {
            var that = $(this)
            var imght = that.find('.middle').height()
            var preimageurl = that.find('.upper').find('.imagethumb').attr('src')
            $(this).prepend('<div class="img temp" ></div>')
            that.find('.temp').html('<img class="imagethumb" src="'+
                (preimageurl.substring(0,3)).concat(((parseInt(preimageurl.substring(3,4)) - 1 < 1 )?(cat[parseInt(preimageurl.substring(1,2)) - 1].length) : (parseInt(preimageurl.substring(3,4)) - 1)).toString(),(preimageurl.substring(4)))
                +'"/>')
            that.find('.temp').css('left', $('.rodin').width() / 2 - imght / 2 -2).css('margin-bottom',0).css('top',topvalue-marginb-imght/2).addClass(images[activeind]).width(imght)
            that.find('.temp').height(0)
            transimgadd(that)
            that.find('.temp').css('margin-bottom',marginb).height(imght).css('top',topvalue).width(imght)
            that.find('.low').addClass('lower').removeClass('low')
            that.find('.middle').addClass('low').removeClass('middle')
            that.find('.up').addClass('middle').removeClass('up')
            that.find('.upper').addClass('up').removeClass('upper')
            that.find('.temp').addClass('upper').removeClass('temp').addClass('filter')
            that.find('.lower').next().addClass('temp2')
            setTimeout(function () {
                transimgremove(that)
                that.find('.temp2').detach()
                $('.nextimg').prop('disabled',false)
                $('.previmg').prop('disabled',false)
            },trans3duration)
        })
    })
    $('.previmg').click(function(){
         $('.nextimg').prop('disabled',true)
         $('.previmg').prop('disabled',true)
         var that = $('.rodcenter').find('.cat')
         var imght = that.find('.middle').height()
         var preimageurl = that.find('.lower').find('.imagethumb').attr('src')
         transimgadd(that)
         that.find('.upper').addClass('temp').removeClass('upper')
         that.find('.up').addClass('upper').removeClass('up')
         that.find('.middle').addClass('up').removeClass('middle')
         that.find('.low').addClass('middle').removeClass('low')
         that.find('.lower').addClass('low').removeClass('lower')
         that.append('<div class="img lower"></div>')
         that.find('.lower').html('<img class="imagethumb" src="'+
                (preimageurl.substring(0,3)).concat(((parseInt(preimageurl.substring(3,4)) + 1 > cat[parseInt(preimageurl.substring(1,2))-1].length )?(1) : (parseInt(preimageurl.substring(3,4)) + 1)).toString(),(preimageurl.substring(4)))
                +'"/>')
         that.find('.lower').width(imght).css('left', $('.rodin').width() / 2 - imght / 2 -2).css('margin-bottom',marginb).css('top',topvalue).addClass(images[activeind]).addClass('filter')
         that.find('.lower').height(imght)
         that.find('.temp').css('top',topvalue - marginb).height(0).css('margin-bottom',0)
         setTimeout(function(){
             transimgremove(that)
             that.find('.temp').css('border','0px')
             that.find('.temp').detach()
            $('.nextimg').prop('disabled',false)
            $('.previmg').prop('disabled',false)
         },trans3duration)
     })
    $('.img').addClass('filter')
    $('.glow').width($(window).width())
    $('.glow').height($(window).height())
    //background code starts here :D
    function transglow(element, value1, value2){
        element.css('-webkit-transition',('top ').concat((value1).toString(),'s ease-in-out, ','left ',(value2).toString(),'s ease-in-out'))
        element.css('-moz-transition',('top ').concat((value1).toString(),'s ease-in-out, ','left ',(value2).toString(),'s ease-in-out'))
        element.css('-ms-transition',('top ').concat((value1).toString(),'s ease-in-out, ','left ',(value2).toString(),'s ease-in-out'))
        element.css('-o-transition',('top ').concat((value1).toString(),'s ease-in-out, ','left ',(value2).toString(),'s ease-in-out'))
        element.css('transition',('top ').concat((value1).toString(),'s ease-in-out, ','left ',(value2).toString(),'s ease-in-out'))
    }
    function scale(element, value){
        element.css('-webkit-transform',('scale(').concat((value).toString(),')'))
        element.css('-moz-transform',('scale(').concat((value).toString(),')'))
        element.css('-ms-transform',('scale(').concat((value).toString(),')'))
        element.css('-o-transform',('scale(').concat((value).toString(),')'))
        element.css('transform',('scale(').concat((value).toString(),')'))
    }
    var i =0
    setInterval(function(){
        for(i=0;i<1+Math.random()*150;i++){
            $('.glow').prepend('<img class="particle init" src="particle.png" />')
        }
        $('.init').each(function(){
            $(this).css('top',$(this).css('top') - Math.random()*50)
            $(this).css('left',$(window).width()*Math.random())
            var speed = Math.random()
            transglow($(this),6 + speed*6.5, 3 + Math.random())
            scale($(this),1.0 - 0.5 * speed)
            $(this).css('opacity',1.0 - 0.5*speed)

        })
        $('.init').each(function(){
            $(this).css('top',$(window).height()+100)
            $(this).removeClass('init')
        })
    },400 + Math.random()*300)
    setInterval(function() {
        $('.particle').each(function () {
            if ($(this).position().top > $(window).height()) {
                $(this).detach()
            }
        })
    },400)
    setInterval(function() {
        $('.particle').each(function () {
            var pass = Math.random()
            if(pass > 0.3 ) {
                var cssleft = $(this).css('left')
                if ( pass > 0.65) {
                    $(this).css('left', parseFloat(cssleft) - 150 * Math.random())
                } else {
                    $(this).css('left', parseFloat(cssleft) + 150 * Math.random())
                }
            }
        })
    },7000)
    //background code ends here :(
    function fullsizeimagepos(){
        $('.imagefull').css('top',$(window).height()/2 - $('.imagefull').height()/2 - 15)
    }
    function imagetext(url){
        return imgtext[url.substring(1,2) - 1][url.substring(3,4) - 1]
    }
    function infotextpos() {
        $('.infotext').css('margin-left',-$('.infotext').width()/2)
    }
    var ctr3 = 0;
    $(document).on('click','.img',function(){
        hideheader()
        $('.imagefull').attr('src',$(this).find('.imagethumb').attr('src'))
        fullsizeimagepos()
        imagefullset()
        $('.fullsize').fadeIn(500)
        $('.infoimgwrapper').css('bottom','0px')
        setTimeout(function() {
            $('.prev').css('margin-left', '-210px')
            $('.next').css('margin-right', '-210px')
        },300)
        $('.infotext').html(imagetext($('.imagefull').attr('src')))
        infotextpos()
        $('.imagefull').css('top',$(window).height()/2-$('.imagefull').height()/2 - 15)
        ctr3 = 1;
        var classtext = $(this).parent().parent().attr('class')
        var classself = $(this).attr('class')
        if(classtext.search('rodin') != -1){
            $('.nextrod').trigger('click')
        }else if(classtext.search('rodout') != -1) {
            $('.prevrod').trigger('click')
        }
        if(classself.search('upper') != -1){
            $('.nextimg').trigger('click')
            setTimeout(function(){$('.nextimg').trigger('click')},trans3duration)
        }else if(classself.search('up') != -1){
            $('.nextimg').trigger('click')
        }else if(classself.search('low') != -1 && classself.search('.lower') == -1){
            $('.previmg').trigger('click')
        }else if(classself.search('lower') != -1){
            $('.previmg').trigger('click')
            setTimeout(function(){$('.previmg').trigger('click')},trans3duration)
        }
    })
    $('.img').on('dragstart', function(event) { event.preventDefault(); });
    $(document).mouseup(function(e){
        if(ctr3 == 1) {
            var container = $(".tostay");
            if (!container.is(e.target) && container.has(e.target).length === 0) {
                $('.fullsize').fadeOut(500);
                $('.infoimgwrapper').css('bottom','-40px')
                setTimeout(function() {
                    $('.prev').css('margin-left', '-150px')
                    $('.next').css('margin-right', '-150px')
                    showheader()
                },300)
                ctr3 = 0;
            }
        }
    });
    $(document).on('click','.next',function(){
        $('.previmg').trigger('click')
        $('.imagefull').attr('src',$('.rodcenter').find('.middle').find('.imagethumb').attr('src'))
        fullsizeimagepos()
        imagefullset()
        $('.infotext').html(imagetext($('.imagefull').attr('src')))
        infotextpos()
    })
    $(document).on('click','.prev',function(){
        $('.nextimg').trigger('click')
        $('.imagefull').attr('src',$('.rodcenter').find('.middle').find('.imagethumb').attr('src'))
        fullsizeimagepos()
        imagefullset()
        $('.infotext').html(imagetext($('.imagefull').attr('src')))
        infotextpos()
    })
    $('.img').hover(function(){
        $(this).removeClass('filter')
    },function(){
        $(this).addClass('filter')
    })
    function bkset(){
        if( $(window).width()/$(window).height() > 1366/768 ){
            $('body').css('background-size','100% auto')
        }else{
            $('body').css('background-size','auto 100%')
        }
    }
    bkset()
    $(window).resize(function(){
        $('.rod').width($('.bar').width()/3)
        $('.outside').width(0)
        $('.img').css('left', $('.rodin').width() / 2 - $('.img').width() / 2 -2)
        $('.glow').width($(window).width())
        $('.glow').height($(window).height())
        $('.imagefull').css('top',$(window).height()/2-$('.imagefull').height()/2 - 15)
        $('.imagefull').css('top',$(window).height()/2-$('.imagefull').height()/2 - 15)
        barpos()
        bkset()
        imagefullset()
        rodpos()
    })
})