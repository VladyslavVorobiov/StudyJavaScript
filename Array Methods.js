/*----------------------------------------------------------------------------------
массив объектов user, и в каждом из них есть user.name. 
код, который преобразует их в массив имён.
*/

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [ vasya, petya, masha ];

let names = users.map(item => item.name);

//alert( names ); // Вася, Петя, Маша

/*----------------------------------------------------------------------------------
есть массив объектов user, и у каждого из объектов 
есть name, surname и id. 
код, который создаст ещё один массив объектов с 
параметрами id и fullName, где 
fullName – состоит из name и surname.
*/

 vasya = { name: "Вася", surname: "Пупкин", id: 1 };
 petya = { name: "Петя", surname: "Иванов", id: 2 };
 masha = { name: "Маша", surname: "Петрова", id: 3 };

 users = [ vasya, petya, masha ];

let usersMapped = users.map( item => ( {
	fullName: item.name + " " + item.surname, 
	id: item.id
}));

/*
usersMapped = [
  { fullName: "Вася Пупкин", id: 1 },
  { fullName: "Петя Иванов", id: 2 },
  { fullName: "Маша Петрова", id: 3 }
]
*/

/*----------------------------------------------------------------------------------
функция sortByAge(users), которая принимает 
массив объектов со свойством age и сортирует их по нему.
*/

function sortByAge (arr){

	arr.sort( (a,b) => a.age - b.age);
}

 vasya = { name: "Вася", age: 25 };
 petya = { name: "Петя", age: 30 };
 masha = { name: "Маша", age: 28 };
 let lena = { name: "Lena", age: 37};

let arr = [ vasya, lena, petya, masha ];
sortByAge(arr);

/*----------------------------------------------------------------------------------
функция shuffle(array), которая перемешивает 
(переупорядочивает случайным образом) элементы массива.
Все последовательности элементов должны иметь одинаковую вероятность
Оптимальное решение:
алгоритм под названием Тасование Фишера — Йетса:
 проходить по массиву в обратном порядке и менять местами каждый элемент 
 со случайным элементом, который находится перед ним (с меньшим индексом)
*/
function shuffle (arr){

	let copyArr = [],
		arrayUsedIndex = [],
		randomIndex;

	for (let i of arr) {
		copyArr.push(i);
	}
	arr.splice(0,arr.length);

	while( arr.length != copyArr.length ){

		randomIndex = Math.round( Math.random()*( (copyArr.length-1) + 0.8) - 0.4 );

		if ( arrayUsedIndex.includes(randomIndex)) continue;

		arrayUsedIndex.push(randomIndex);
		arr.push(copyArr[randomIndex]);
	}	

}
//arr = [1, 2, 3,78,46.45,44,4,58,28,274,-8,26,-448, "ef"];
//shuffle(arr);

// подсчёт вероятности для всех возможных вариантов
let count = {
  '123': 0,
  '132': 0,
  '213': 0,
  '231': 0,
  '321': 0,
  '312': 0
};

/*for (let i = 0; i < 1000000; i++) {
  let array = [1, 2, 3];
  shuffle(array);
  count[array.join('')]++;
}*/

// показать количество всех возможных вариантов
/*for (let key in count) {
  alert(`${key}: ${count[key]}`);
}*/

/*----------------------------------------------------------------------------------
getAverageAge(users), принимает массив объектов 
со свойством age и возвращает средний возраст.
*/
function getAverageAge(arr) {
	
	return Math.round(arr.reduce ( (sum,item) => sum + item.age , 0) / arr.length) ;

}

 vasya = { name: "Вася", age: 27 };
 petya = { name: "Петя", age: 31 };
 masha = { name: "Маша", age: 31 };

 arr = [ vasya, petya, masha ];

//alert( getAverageAge(arr) ); 
/*----------------------------------------------------------------------------------
arr – массив строк
unique(arr) возвращает массив, содержащий только уникальные элементы arr
*/

function unique(arr) {  

 	let uniqueArray = [];
	
	for (let i of arr) {
		if( !uniqueArray.includes(i) ) uniqueArray.push(i);
	}

	return uniqueArray;
}

let strings = ["кришна", "кришна", "харе", "харе",
  "харе", "харе", "кришна", "кришна", ":-O", 45, 45, "хареs", "хаsеs","хареs", ":-O", ":-O",":-O", 89 ,89,89
];

alert( unique(strings) ); 