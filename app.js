$(document).ready(function() {
	var endNumber = prompt("Enter a number:");
	console.log(typeof(endNumber));
	parseInt(endNumber);
	console.log(typeof(endNumber));
	isInteger(endNumber);
});
function isInteger(input) {
        if(input % 1 === 0) {
        	return lister(input);
    	} else {
    		var secondNumber = prompt("Please only enter whole numbers in: ");
    		return lister(secondNumber);
    	}
 }   
function lister(number) {
	for (var i = 1; i <= number; i++) {
		if ((i % 3 == 0) && (i % 5 == 0)) {
			$('#fizzbuzzPrint').append('<li class="toadd">FizzBuzz</li>');
		} else if (i % 3 == 0) {
					$('#fizzbuzzPrint').append('<li class="toadd">Fizz</li>');
		} else if (i % 5 == 0) {
			$('#fizzbuzzPrint').append('<li class="toadd">Buzz</li>');
		} else {
			$('#fizzbuzzPrint').append('<li class="toadd">' + i + '</li>');
		}
	}
}
