
/*-----------------------------------------
Напишите функцию sum, которая работает таким образом: sum(a)(b) = a+b.
*/
function sum(a){
	
	return function(b){
  		return  a + b;
  };
}

//alert(sum(1)(2));
//alert (sum(5)(-1));// = 4

/*-----------------------------------------
Сделайте набор «готовых к употреблению» фильтров:
inBetween(a, b) – между a и b (включительно).
inArray([...]) – находится в данном массиве.
Они должны использоваться таким образом:
arr.filter(inBetween(3,6)) – выбирает только значения межу 3 и 6 (включительно).
arr.filter(inArray([1,2,3])) – выбирает только элементы, совпадающие с одним из элементов массива
*/

function inBetween(leftBorder, rightBorder){

	return function (item){
		if((item >= leftBorder) && (item <= rightBorder)) return item;
	};

}

function inArray(arr){

	return function (item){
		if(arr.includes(item)) return item;
	};

}

let arr = [1, 2, 3, 4, 5, 6, 7];

//alert( arr.filter(inBetween(3, 6)) ); // 3,4,5,6
//alert( arr.filter(inArray([1, 2, 10,4,7])) ); // 1,2,4,7

/*-----------------------------------------
есть массив объектов, который нужно отсортировать,
чтобы вместо функции, мы просто писали byField(fieldName):
users.sort(byField('name'));
*/

function byField(fieldName){

	return (a,b) => a[fieldName] > b[fieldName] ? 1 : -1;
}

let users = [
  { name: "John", age: 20, surname: "Johnson" },
  { name: "Pete", age: 18, surname: "Peterson" },
  { name: "Ann", age: 19, surname: "Hathaway" }
];


users.sort(byField('name'));
users.sort(byField('age'));
users.sort(byField('surname'));

/*-----------------------------------------
 код создаёт массив из стрелков (shooters).
Каждая функция предназначена выводить их порядковые номера. 
Почините код, чтобы он работал как задумано
*/

function makeArmy() {
	let shooters = [],
  		i = 0;

 	while (i < 10) {
 		let j = i;
	    let shooter = function() { 
	    	alert (j);
	    	//alert(shooters.indexOf(shooter));
	    };

	    shooters.push(shooter);
	    i++;
  }

  return shooters;
}

let army = makeArmy();

army[0](); 
army[5](); 
army[2]();
army[7]();
army[3]();

