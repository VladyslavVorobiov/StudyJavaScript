/*--------------------------------------------------------
 sumTo(n), которая вычисляет сумму чисел 1 + 2 + ... + n.
...
sumTo(100) = 100 + 99 + ... + 2 + 1 = 5050
Сделайте три варианта решения:
С использованием цикла.
Через рекурсию, т.к. sumTo(n) = n + sumTo(n-1) for n > 1.
С использованием формулы арифметической прогрессии.
P.S. Какой вариант решения самый быстрый? Самый медленный? Почему?
*/

function cycleSumTo(n) {

	let	sum = 0;

		for (let i = 1; i <= n; i++){
			sum += i ;
		}

	return sum;
}

function recursionSumTo(n) {

		return (n == 1) ?  n : n + recursionSumTo(n - 1) ;

}

function formulaSumTo(n){

	return ((1 + n) * n) / 2;
}

let rezult; 
let start = Date.now();
rezult = cycleSumTo(10);
let end = Date.now();
//alert( rezult);
//alert("Time for calculating from cycle is " + (end - start) + "ms");

start = Date.now();
rezult = recursionSumTo(10);
end = Date.now();
//alert( rezult);
//alert("Time for calculating from recursion is " + (end - start) + "ms");

start = Date.now();
rezult = formulaSumTo(10);
end = Date.now();
//alert( rezult );
//alert("Time for calculating from formula is " + (end - start) + "ms");

/*--------------------------------------------------------
 Calculate factorial
*/

function factorialTo(n){

	return (n == 1) ? n : n * factorialTo(n - 1);
}
//alert (factorialTo(10));

/*--------------------------------------------------------
fib(n) которая возвращает n-е число Фибоначчи.
P.S. Все запуски функций из примера выше должны работать быстро. 
Вызов fib(77) должен занимать не более доли секунды.
*/

function fib(n) { 

	/* solved by recursion is too much slower for big n
	if ((n == 1)||(n == 2)) return 1;

	else if (n > 2) {

		return fib(n - 1) + fib(n - 2);
	}
	*/

	// solved by cycle is so faster for big n
	let prePrevious = 1,
		previous = 1,
		rezult = 0;

		for (let i = 3; i <= n; i++){

			rezult = previous + prePrevious;
			prePrevious = previous;
			previous = rezult;

		}
	return rezult;
}

//alert(fib(3)); // 2
//alert(fib(7)); // 13
//alert (fib(11));//89
//alert(fib(77)); // 5527939700884757

/*--------------------------------------------------------
printList(list), которая выводит элементы списка по одному.
два варианта решения: используя цикл и через рекурсию.
*/

function printList (list){

	if (list == null) alert ("This is end of list");
	else if (! (typeof(list) == "object"))  alert (`Element of list is ${list}.`);
	else{

		for (let item of Object.values(list)){
			printList(item);
		}
	}
	
}

function cyclePrintList(list) {

	let tmp = list;
	while (tmp){
		alert(tmp.value);
		tmp = tmp.next;
	}	

}

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};


//printList(list);
//cyclePrintList(list);

/*--------------------------------------------------------
Выведите односвязный список из предыдущего задания в обратном порядке.
Сделайте два решения: с использованием цикла и через рекурсию
*/

function printListReverse (list){

	if (list.next != null)  printListReverse(list.next);
	alert (`Reverse : Element of list is ${list.value}.`);
} 

function cyclePrintListReverse(list){

	let tmp = list,
		arrayValue =[];

	while (tmp){
		arrayValue.push(tmp.value);
		tmp = tmp.next;
	}

	for (let i = arrayValue.length - 1; i >=0; i--){
		alert(`Cycle Reverse : Element of list is ${arrayValue[i]}.`);;
	}

}

printListReverse(list);
cyclePrintListReverse(list);