/* -----------------------------------------------------
printNumbers(from, to), выводит число каждую секунду, 
начиная от from и заканчивая to.

 два варианта решения.

Используя setInterval.
Используя рекурсивный setTimeout.
*/

/* use setInterval */
/*
function printNumbers(from,to){
	
	let currentNumber = from;
	
	let alertNumber = function () {
		console.log(currentNumber++);
		//alert(currentNumber++);	

		if(currentNumber > to) {
			clearInterval(timerIdAlertNumber);
			alert("Stop alert numbers");
		}
	};

	let timerIdAlertNumber = setInterval(alertNumber,500);

}
*/

/* use recursively setTimeout*/

function printNumbers(from,to){
	
	let currentNumber = from;
	
	let alertNumber = function () {
		console.log(currentNumber++);
		
		if(currentNumber > to) {
			clearInterval(timerIdAlertNumber);
			alert("Stop alert numbers");
		}
		else timerIdAlertNumber = setTimeout(alertNumber,300);
	};

	let timerIdAlertNumber = setTimeout(alertNumber,300);

}


printNumbers(2,18);


