var main = function() {
    $('.slider1').cycle({ 
	fx:     'scrollHorz', 
	speed:  'slow',
	next:   '#next1', 
	prev:   '#prev1' 
    });
    
    $('.slider2').cycle({ 
	fx:     'scrollHorz', 
	speed:  'slow',
	next:   '#next2', 
	prev:   '#prev2' 
    });

    $('.slider3').cycle({ 
	fx:     'scrollHorz', 
	speed:  'slow',
	next:   '#next3', 
	prev:   '#prev3' 
    });

    $('.slider4').cycle({ 
	fx:     'scrollHorz', 
	speed:  'slow',
	next:   '#next4', 
	prev:   '#prev4' 
    });

    $('.slider5').cycle({ 
	fx:     'scrollHorz', 
	speed:  'slow',
	next:   '#next5', 
	prev:   '#prev5' 
    });

    $('.slider6').cycle({ 
	fx:     'scrollHorz', 
	speed:  'slow',
	next:   '#next6', 
	prev:   '#prev6' 
    });

};

$(document).ready(main);
