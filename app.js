var main = function() {
$('.pull-right li').click(function() {
    if ($(this).children('div.drop').is(':hidden')) {
        $('.pull-right li').children('p').css("color", "#2a83fa");
        $('.pull-right li').children('div.drop').hide();
        $(this).children('p').css("color", "#2f8e20");
    } else {
        $(this).children('p').css("color", "#2a83fa");
    }
        
    $(this).children('div.drop').toggle();
    });

}


$(document).ready(main);
