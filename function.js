var main = function() {
    $('.slider1').cycle({ 
	fx:     'scrollHorz', 
	speed:  'slow',
	timeout: 0,
	next:   '#next1', 
	prev:   '#prev1',
	// after:   onAfter
    });
    
    $('.slider2').cycle({ 
	fx:     'scrollHorz', 
	speed:  'slow',
	timeout: 0,
	next:   '#next2', 
	prev:   '#prev2' 
    });

    $('.slider3').cycle({ 
	fx:     'scrollHorz', 
	speed:  'slow',
	timeout: 0,
	next:   '#next3', 
	prev:   '#prev3' 
    });

    $('.slider4').cycle({ 
	fx:     'scrollHorz', 
	speed:  'slow',
	timeout: 0,
	next:   '#next4', 
	prev:   '#prev4' 
    });

    $('.slider5').cycle({ 
	fx:     'scrollHorz', 
	speed:  'slow',
	timeout: 0,
	next:   '#next5', 
	prev:   '#prev5' 
    });

    $('.slider6').cycle({ 
	fx:     'scrollHorz', 
	speed:  'slow',
	timeout: 0,
	next:   '#next6', 
	prev:   '#prev6' 
    });

};

// function onAfter(curr,next,opts) {
// 	var caption = 'Image ' + (opts.currSlide + 1) + ' of ' + opts.slideCount;
// 	$('#caption').html(caption);
// }


var helper = function() {
    $('#next1').click();
    $('#next2').click();
    $('#next3').click();
    $('#next4').click();
    $('#next5').click();
    $('#next6').click();
};

$(document).ready(main);
$(document).ready(helper);
