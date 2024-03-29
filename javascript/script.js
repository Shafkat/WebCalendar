$(document).ready(function(){
						   
 $(window).resize(function(){

  $('.center').css({
   position:'absolute',
   left: ($(window).width() 
     - $('.center').outerWidth())/2,
   top: ($(window).height() 
     - $('.center').outerHeight())/2
  });
		
 });
 
 // To initially run the function:
 $(window).resize();

});


var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
var week = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
var weekShort = ['Mon','Tues','Wed','Thurs','Fri','Sat','Sun'];

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

	var date;

function loadEverything()
{
	date = new Date();
	
	$('#year').text( date.getFullYear() );
	$('#monthName').text( months[date.getMonth()] );
	
	$('#today').text( week[date.getDay()]  + ', ' + date.getDate());
	
	loadDays();
	loadCalendar(daysInMonth(date.getFullYear(), date.getMonth()));
	
	afterEverything();
}


function daysInMonth(iMonth, iYear)
{
	return 32 - new Date(iYear, iMonth, 32).getDate();
}

function loadDays()
{
	var mainBox = document.getElementById('days');
	var row = document.createElement('tr');

	mainBox.appendChild(row);
	
	for(var i = 0; i < weekShort.length; i++)
	{
		var box = document.createElement('td');
		
		$(box).text( weekShort[i] );
		$(box).css( 'margin-left', '7%' );
		$(box).css( 'width', this.screen.width/9 );
		
		row.appendChild(box);
	}
}

function loadCalendar(numberOfDays)

{
	var mainBox = document.getElementById('mainCal');
	
	for(var i = 0; i < numberOfDays; i++)
	{
		var box = document.createElement('div');
		var innerBox = document.createElement('div');
		
		$(box).attr('class','touchBox');
		$(innerBox).text(i+1);
		$(innerBox).css('position','relative');
		$(innerBox).css('top','32%');
		$(innerBox).css('font-size','2em');
		
		if( i+1 == date.getDate())
		{
			$(innerBox).css('font-weight','bold');
			$(innerBox).css('font-size','3em');
			$(innerBox).css('top','23%');
		}
		
		mainBox.appendChild(box);
		box.appendChild(innerBox);
	}
	
			$('.touchBox').css('width', this.screen.width/8);
		$('.touchBox').css('height', this.screen.height*0.75/5);
	
	head.js("https://ajax.googleapis.com/ajax/libs/jquery/1.7.0/jquery.min.js","./javascript/ui.js","./javascript/touch.js", function (){
	$('.touchBox').draggable({revert:true});
	});
}

function afterEverything()
{
	$('.touchBox').mouseenter( function(){ $(this).css('background-color','#000000'); } );
	$('.touchBox').mouseleave( function(){ $(this).css('background-color','#2AB0E8'); } );
	
	$('.touchBox').attr('ontouchstart','$(this).css("opacity","1");');
	$('.touchBox').attr('ontouchstart','$(this).css("background-color","#000000");');	
	

	$('.touchBox').attr('ontouchend','$(this).css("opacity","0.75");');
	$('.touchBox').attr('ontouchend','$(this).css("background-color","#2AB0E8");');
}

