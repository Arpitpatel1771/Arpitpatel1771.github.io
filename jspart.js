$(document).ready(function(){
	var letters = ["A","A","B","B","C","C","D","D","E","E","F","F","G","G","H","H"];
	$('.sqr').each(function(){
		var ind = Math.floor(Math.random()*(letters.length));
		var letter = letters.splice(ind,1);
		$(this).find('span').html(letter);
	});
	$('.cntnr').css('top',($(window).height()/2-$('.cntnr').height()/2-25));
	$('.cntnr').css('left',($(window).width()/2-$('.cntnr').width()/2-25));
	$(window).resize(function(){
		$('.cntnr').css('top',($(window).height()/2-$('.cntnr').height()/2-25));
		$('.cntnr').css('left',($(window).width()/2-$('.cntnr').width()/2-25));
	});
	var ctr1 = 0;
	var matchtext;
	$('.sqr').attr('detected','no');
	$('.sqr').find('span').attr('prev','0');
	$('.sqr').click(function(){
		var ctr2=0;
		if($(this).find('span').attr('prev')==1){
			$(this).find('span').fadeOut(100);
			$('.sqr').find('span').attr('prev','0');
			ctr1=0;ctr2=1;
		}
		if($(this).attr('detected') == 'no' && $(this).find('span').attr('prev')==0){
			if(ctr1 == 1){
				if($(this).find('span').text() == matchtext){
					$(this).find('span').fadeIn(100);ctr1=0;ctr2=1;
					$(this).attr('detected','yes');$(this).addClass('found').removeClass('sqr');
					$('.sqr').each(function(){
						if($(this).find('span').attr('prev')==1){
							$(this).attr('detected','yes');
							$(this).find('span').attr('prev','0');
							$(this).addClass('found').removeClass('sqr');
						}
					});
				}else{
					$(this).find('span').fadeIn(100).fadeOut(100);
					$('.sqr').each(function(){
						if($(this).find('span').attr('prev')==1){
							$(this).find('span').delay(100).fadeOut(100);
							$(this).find('span').attr('prev','0');
						}
					});
					ctr1=0;ctr2=1;
				}
			}
			if(ctr2==0){
				if(ctr1 == 0){
					$(this).find('span').fadeIn(100);
					$(this).find('span').attr('prev','1');
					matchtext = $(this).find('span').text();
					ctr1++;
				}
			}
		}
		if($('.found').length == 16){
			setTimeout(function(){
				alert('Congrats!! Game completed! Refresh to start again...');
			},100);	
		}
	});
});