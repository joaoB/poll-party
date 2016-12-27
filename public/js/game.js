$( document ).ready(function() {
    console.log( "ready!" );



	function getNumbers(inputString){
		var regex=/[0-9]+/g, 
			results = [],
			n;

		while(n = regex.exec(inputString)) {
			results.push(parseInt(n[0]));
		}

		return results;
	}


	var puzzle = "(9+9-10)×3";

	var numbers = getNumbers(puzzle);
	var hidden = puzzle.replace(/[0-9]+/g, "X")
	hidden.split('').map(e => $('#solution').append('<span>' + e + '</span>'))


});