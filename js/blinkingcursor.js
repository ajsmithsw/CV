var captionLength = 0;
var caption = '';

var textOne = "Aha, I added some custom text!";


$(document).ready(function() {
    setInterval ('cursorAnimation()', 500);
    captionEl = $('#caption');
    
    $('#touched-yes').click(function(){
        testTypingEffect();
    });

    $('#touched-no').click(function(){
        testErasingEffect();
    });
});

function testTypingEffect() {
    caption = $('input#user-caption').val();
    type();
}

function type() {
    captionEl.html(caption.substr(0, captionLength++));
    if(captionLength < caption.length+1) {
        setTimeout('type()', 20);
    } else {
        captionLength = 0;
        caption = '';
    }
}
/*Do I still need this now that I've removed the second button?*/
function testErasingEffect() {
    caption = captionEl.html();
    captionLength = caption.length;
    if (captionLength>0) {
        erase();
    } else {
        $('#caption').html("You didn't write anything to erase, but that's ok!");
        setTimeout('testErasingEffect()', 600);
    }
}

function erase() {
    captionEl.html(caption.substr(0, captionLength--));
    if(captionLength >= 0) {
        setTimeout('erase()', 50);
    } else {
        captionLength = 0;
        caption = '';
    }	
}

function cursorAnimation() {
    $('#cursor').animate({
        opacity: 0
    }, 'fast', 'swing').animate({
        opacity: 1
    }, 'fast', 'swing');
}