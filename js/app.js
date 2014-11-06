$(document).ready(function(){
	$('#go-button').on('click', function(){
		for (var i=1; i <= 100; i++)
{
    if (i % 15 == 0){
        $('<li>').text("FizzBuzz").appendTo('.count-off').addClass('fizzbuzz');
    }
    else if (i % 3 == 0){
        $('<li>').text("Fizz").appendTo('.count-off').addClass('fizz');
    }
    else if (i % 5 == 0){
        $('<li>').text("Buzz").appendTo('.count-off').addClass('buzz');
    }
    else{
        $('<li>').text(i).appendTo('.count-off');
    }
}
	});
});