/* ----------------------------------
 makeCounter(), чтобы счётчик мог увеличивать и устанавливать значение:

counter() должен возвращать следующее значение (как и раньше).
counter.set(value) должен устанавливать счётчику значение value.
counter.decrease() должен уменьшать значение счётчика на 1.

P.S. Для того, чтобы сохранить текущее значение счётчика, 
можно воспользоваться как замыканием, так и свойством функции.
сделать два варианта решения: и так, и так.
*/

/* with closing*/
/*
function makeCounter() {
	let count = 0;

	function counter(){
		return count++;
	}

	counter.set = function(value){
		count = value;
	};

	counter.decrease = function(){
		count--;
	};

return counter;
}
*/

/* with function property*/

function makeCounter() {

	function counter(){
		return counter.count++;
	}

	counter.count = 0;

	counter.set = function(value){
		counter.count = value;
	};

	counter.decrease = function(){
		counter.count--;
	};

return counter;
}


let counter = makeCounter();

alert(counter());

counter.set(124);
alert(counter());

counter.decrease();
alert(counter());

/* ----------------------------------

 sum(), которая бы работала следующим образом:

sum(1)(2) == 3; // 1 + 2
sum(1)(2)(3) == 6; // 1 + 2 + 3
sum(5)(-1)(2) == 6
sum(6)(-1)(-2)(-3) == 0
sum(0)(1)(2)(3)(4)(5) == 15
*/

function sum(argument){
	
	sum.summ += argument;
	
	sum.valueOf = function () {
		let rezult = sum.summ;
		sum.summ = 0;
		return rezult;
  	};

	return sum;
}

sum.summ = 0;


alert(sum(1)(2) == 3); // 1 + 2
alert(sum(1)(2)(3) == 6); // 1 + 2 + 3
alert(sum(5)(-1)(2) == 6);
alert(sum(6)(-1)(-2)(-3) == 0);
alert(sum(0)(1)(2)(3)(4)(5) == 15);

