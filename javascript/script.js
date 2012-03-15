head.js("https://ajax.googleapis.com/ajax/libs/jquery/1.7.0/jquery.min.js","./javascript/ui.js","./javascript/touch.js", function (){
$('.touchBox').draggable({revert:true});
	$(".dropArea").droppable({
    drop: function( event, ui ) {
        //$(ui.draggable).remove();
        $(this).css({'border':'#777 solid 3px','background':'#eee'});
    },
    over: function(event, ui) {
        $(this).css({'border':'#a33 solid 3px','background':'#faa'});
    },
    out: function (event, ui){
        $(this).css({'border':'#777 solid 3px','background':'#eee'});
    }
	});
});

function loadCal()
{
	
	head.js("https://ajax.googleapis.com/ajax/libs/jquery/1.7.0/jquery.min.js","./javascript/ui.js","./javascript/touch.js", function (){
	$('.touchBox').draggable({revert:true});
	});
	
}

function calculateDate()
{
	
}
