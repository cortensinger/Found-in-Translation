var main = function() {
    $('.slider1').cycle({ 
	fx:     'fade', 
	speed:  'slow',
	delay: -100001,
	timeout: 100000,
	next:   '#next1', 
	prev:   '#prev1' 
    });
    
    $('.slider2').cycle({ 
	fx:     'fade', 
	speed:  'slow',
	delay: -100001,
	timeout: 100000,
	next:   '#next2', 
	prev:   '#prev2' 
    });

    $('.slider3').cycle({ 
	fx:     'fade', 
	speed:  'slow',
	delay: -100001,
	timeout: 100000,
	next:   '#next3', 
	prev:   '#prev3' 
    });

    $('.slider4').cycle({ 
	fx:     'fade', 
	speed:  'slow',
	delay: -100001,
	timeout: 100000,
	next:   '#next4', 
	prev:   '#prev4' 
    });

    $('.slider5').cycle({ 
	fx:     'fade', 
	speed:  'slow',
	delay: -100001,
	timeout: 100000,
	next:   '#next5', 
	prev:   '#prev5' 
    });

    $('.slider6').cycle({ 
	fx:     'fade', 
	speed:  'slow',
	delay: -100001,
	timeout: 100000,
	next:   '#next6', 
	prev:   '#prev6' 
    });

};

$(document).ready(main);
$(document).ready(function(){
   $('#next1').click();
  });
