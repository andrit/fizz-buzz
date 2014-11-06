$(document).ready(function(){
	$('#go-button').on('click', function(){
		for (var i=1; i <= 100; i++)
{
    if (i % 15 == 0){
        $('<p>').text("FizzBuzz").appendTo('.count-off');
    }
    else if (i % 3 == 0){
        $('<p>').text("Fizz").appendTo('.count-off');
    }
    else if (i % 5 == 0){
        $('<p>').text("Buzz").appendTo('.count-off');
    }
    else{
        $('<p>').text(i).appendTo('.count-off');
    }
}
	});
});