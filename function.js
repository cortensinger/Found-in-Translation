var main = function() {
    $('.slider1').cycle({ 
	fx:     'fade', 
	speed:  'slow',
	next:   '#next1', 
	prev:   '#prev1' 
    });
    
    $('.slider2').cycle({ 
	fx:     'fade', 
	speed:  'slow',
	timeout: 200,
	next:   '#next2', 
	prev:   '#prev2' 
    });

    $('.slider3').cycle({ 
	fx:     'fade', 
	speed:  'slow',
	timeout: 0,
	next:   '#next3', 
	prev:   '#prev3' 
    });

    $('.slider4').cycle({ 
	fx:     'fade', 
	speed:  'slow',
	timeout: 0,
	next:   '#next4', 
	prev:   '#prev4' 
    });

    $('.slider5').cycle({ 
	fx:     'fade', 
	speed:  'slow',
	next:   '#next5', 
	prev:   '#prev5' 
    });

    $('.slider6').cycle({ 
	fx:     'fade', 
	speed:  'slow',
	timeout: 0,
	next:   '#next6', 
	prev:   '#prev6' 
    });

};

$(document).ready(main);
