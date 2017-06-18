$(document).ready(function(){
	$('.cntnr').html('');
	$('.start').trigger('click');
	var rawseconds=0;var timebypass=0;
	var moves = 0;var timer;
	$('.infoftr2').html('Moves: '+ moves);
	var score=0;
	$('.infoftr').html('Score: '+score);
	function pad(number, targetLength) {
		var output = number + '';
		while (output.length < targetLength) {
			output = '0' + output;
		}
		return output;
	}
	function resetclock(){
		$('.timertext').html('Time wasted: ');
		$('.timernumbers').html('');clearInterval(timer);
		var s= 0;var m =0;var ms = 0;var h=0;rawseconds=0;
		function clock(){
			ms+=10;
			if(ms == 1000){
				ms = 0;
				s++;
				rawseconds++;
			}
			if(s == 60){
				s = 0;
				m++;
			}
			if(m == 60){
				m = 0;
				h++;
			}
			if(h==0){
				$('.timernumbers').html(pad(m,2) + ':' + pad(s,2) + '<span class="timernumbers ms">:'+pad(Math.round(ms/10,0),3)+' </span>');
			}else{
				$('.timernumbers').html(pad(h,2) +':'+pad(m,2) + ':' + pad(s,2));
			}
			if(h == 99){
				timebypass = 1;
				$('.start').trigger('click');
			}
		}
		timer = setInterval(clock,10);
	}
	var usrname = "Mr. Bored";
	var level = 0;
	var clicked = 0;
	var msgs = ['Bring it on!','I still have some time to spare..','Killing time is fun, lets do it again!','I am not done yet..','I could go on all day','Oh yeah baby, Lets GO!!'];
	$('.modal-header').html('Welcome, ' + usrname + ' !');
	$('.btn-warning').click(function(){
		var asd=0;
		if(clicked == 1){
			if($('.inp').val() != 'undefined'){
				usrname = $('.inp').val();
			}
			level = $('.slct').val();
			$(this).attr('data-dismiss','modal');
			$('.infohdr2').html("Lv. " + level + " ");
			setTimeout(function(){
				$('.inp').hide(1);
				$('.modal-header').html('Level '+level+' cleared!!');
				$('.modal-body').html('Congrats! '+ usrname +', i think you love wasting time, Wanna waste some more??<br><br>Which level would you like to go with now?&nbsp;<select class="slct"><option value="1" selected="selected">Level 1</option><option value="2">Level 2</option><option value="3">Level 3</option></select>' );
				$('.btn-warning').html(msgs[Math.floor(Math.random()*msgs.length)]);
				if(timebypass){
					$('.modal-header').html('What the ....');
					$('.modal-body').html('Congrats! '+ usrname +', you just wasted 99 hours, Either you are broke, or you got some serious patience... Wanna waste some more??<br><br>Which level would you like to go with?&nbsp;<select class="slct"><option value="1" selected="selected">Level 1</option><option value="2">Level 2</option><option value="3">Level 3</option></select><br>Advice: Go get a life human!!' );
					$('.btn-warning').html('No man, i left my browser with the game on and this happened...');
				}
			},500);
			$('.generate').trigger('click');
			clicked++;asd = 1;
		}
		if(asd == 0){
			if(clicked == 2){
				level = $('.slct').val();
				$('.generate').trigger('click');
				moves = 0;score=0;
				$('.infoftr2').html('Moves: '+ moves);
				$('.infoftr').html('Score: '+score);
				resetclock();
			}
		}
		if(clicked == 0){
			$('.modal-body').slideUp(300).delay(200).slideDown(300);
			setTimeout(function(){	
				$('.modal-body').html('<input class="inp" placeholder="Name" maxlength = "20"></input><br>Which level would you like to start off with?&nbsp;<select class="slct"><option value="1" selected="selected">Level 1</option><option value="2">Level 2</option><option value="3">Level 3</option></select>');
				$('.btn-warning').html("Let's kill time!");
			},300);	
			clicked = 1;
		}
	});
	$('.generate').click(function(){
		//this code generates squares according to the level and resets clock
		resetclock();
		moves = 0;score=0;
		$('.cntnr').html('');
		var n = level*2;
		var numbers = [];
		var i = 0;
		for(i=0;i<(n*n/2);i++){
			var temp = i;
			numbers[2*i] = temp;
			numbers[(2*i)+1] = temp;
		}
		for(i = 0;i<(numbers.length);i++){
			while(numbers[i] > 25){
				numbers[i] -26;
			}
			numbers[i] = String.fromCharCode(numbers[i]+65);
		}
		for(i=0;i<n*n;i++){
			var letter = numbers.splice((Math.floor(Math.random()*(numbers.length))),1);
			$('.cntnr').append('<div class="cntnr2"><div class="flipper noselect"><div class="sqr"></div><div class="sqr2">'+ letter +'</div></div></div>');
		}
		//this code adjusts the squares width and stuff
		$('.cntnr2').width($('.cntnr').width()/n);
		$('.cntnr2').height($('.cntnr').height()/n);
		$('.flipper').width($('.cntnr2').width() - 6);
		$('.flipper').height($('.cntnr2').height() - 6);
		$('.flipper').each(function(){
			$(this).attr('active','no');
		});
		$('.sqr2').each(function(){
			$(this).addClass('blur2');
		});
		$('.sqr2').css('font-size',($('.sqr2').height()*0.7));
		//following code is for hovering and clicking effects
		function flip(obj){
			if(obj.find('.flipper').attr('active') == 'no'){
				obj.find('.flipper').addClass('flip').attr('active','yes');
				obj.find('.sqr2').removeClass('blur2');
			}else{
				obj.find('.flipper').removeClass('flip').attr('active','no');
				setTimeout(function(){
					obj.find('.sqr2').addClass('blur2');
				},350);
			}
		}
		$('.cntnr2').hover(function(){
			$(this).find('.flipper').addClass('grow');
			$('.flipper').each(function(){
				if($(this).attr('active') == 'no'){
					$(this).find('.sqr').addClass('blur');
				}
			});
			$(this).find('.flipper').find('.sqr').removeClass('blur');
		},function(){
			$(this).find('.flipper').removeClass('grow');
			$('.flipper').each(function(){
				$(this).find('.sqr').removeClass('blur');
			});
		});
		//here the main code starts!!
		$('.cntnr2').each(function(){
			$(this).find('.flipper').attr('prev','0');
			$(this).find('.flipper').removeClass('found');
		});
		var ctr1=0;
		var matchtext;
		$('.cntnr2').click(function(){
			ctr2=0;
			if($(this).find('.flipper').attr('prev')=='1' && ctr1==1){
				flip($(this));
				$(this).find('.flipper').attr('prev','0');
				ctr1 = 3;ctr2=3;
				moves++;score-=1;
				setTimeout(function(){ctr2=1;ctr1=0;},500);
			}
			if($(this).find('.flipper').attr('prev')=='0'&& ctr1==1){
				if($(this).find('.sqr2').text() == matchtext){
					flip($(this));
					var that = $(this);
					setTimeout(function(){
						that.find('.flipper').addClass('found').fadeOut(300);
						$('.cntnr2').each(function(){
							if($(this).find('.flipper').attr('prev')=='1'){
								$(this).find('.flipper').addClass('found').attr('prev','0').fadeOut(300);
								if($.find('.found').length == n*n){
									$('.start').trigger('click');
								}
							}
						});
					},500);
					score+=10;
				}else{
					flip($(this));
					var that = $(this);
					setTimeout(function(){
						flip(that);
						$('.cntnr2').each(function(){
							if($(this).find('.flipper').attr('prev')==1){
								$(this).find('.flipper').attr('prev','0');
								flip($(this));
							}
						});
					},600);
					score-=2;
				}ctr1 = 3;ctr2=3;
				moves++;
				setTimeout(function(){ctr2=1;ctr1=0;},1000);
			}
			if(ctr1 ==0 && ctr2==0){
				flip($(this));
				matchtext = $(this).find('.sqr2').text();
				$(this).find('.flipper').attr('prev','1');
				ctr1 = 1;
			}		
			$('.infoftr2').html('Moves: '+ moves);
			$('.infoftr').html('Score: '+score);
		});
	});
});