//----------------------------------- MAP and SET
/* ----------------------------------------------
 unique(arr), вернёт массив уникальных, 
 не повторяющихся значений массива arr.
*/

function unique(arr) {
  
	let set = new Set(arr),
		rezult = [];

	for(let value of set ){
		rezult.push(value);
	}

	return rezult;

}

let valuesArr = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

//alert( unique(valuesArr) ); // Hare, Krishna, :-O

/* ----------------------------------------------
aclean(arr), возвращает массив слов, 
очищенный от анаграмм
*/

function aclean(arr) {


	let arrSortSymbol = arr.map( (item,index,array) => array[index].toLowerCase().split("").sort().join("") ),
		noAnnagramSet = new Set(arrSortSymbol),
		noAnnagramArray = [];

	for (let i = 0; i < arrSortSymbol.length; i++ ){

		if ( noAnnagramSet.delete(arrSortSymbol[i])) {
			noAnnagramArray.push(arr[i]);
		}

	}

	return noAnnagramArray;
}

let arr = ["Sarina", "teachers", "cheaters", "rinaSa", "eat", "tea", "hectares"];

let arrNoAnnagram = aclean(arr);
//alert( arrNoAnnagram );

// Another decision
/*
function aclean(arr) {
  let map = new Map();

  for (let word of arr) {
    // разбиваем слово на буквы, сортируем и объединяем снова в строку
    let sorted = word.toLowerCase().split("").sort().join(""); // (*)
    map.set(sorted, word);
  }

  return Array.from(map.values());
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

alert( aclean(arr) );
*/

/* ----------------------------------------------
получить массив ключей map.keys() в переменную и 
далее работать с ними, например, применить метод .push.
*/

let map = new Map();

map.set("name", "John");
map.set("sername", "White");
map.set("dateOfBirthDay", "18-07-1990");

let keys = Array.from(map.keys());

keys.push("isHavingCar");
keys.push("profession");

//alert(keys);

//--------------------------- WeakMAP and WeakSET
/* ----------------------------------------------
 Есть массив сообщений.
 Есть к ним доступ, но управление этим массивом 
 происходит где-то ещё. Добавляются новые сообщений
 и удаляются старые, и вы не знаете в какой момент 
 это может произойти.

Имея такую вводную информацию, какую структуру 
данных использовать для ответа на вопрос 
«было ли сообщение прочитано?». Структура должна быть 
подходящей, чтобы можно было однозначно сказать, 
было ли прочитано это сообщение для каждого объекта сообщения.

P.S. Когда сообщение удаляется из массива messages, 
оно должно также исчезать из структуры данных.

P.P.S. Нам не следует модифицировать сами объекты сообщений, 
добавлять туда свойства. Если сообщения принадлежат какиму-то 
другому коду, то это может привести к плохим последствиям.
*/
let messages = [
  {text: "Hello", from: "John"},
  {text: "How goes?", from: "John"},
  {text: "See you soon", from: "Alice"},
  {text: "Are you at home?", from: "Alice"},
  {text: "I am runnnig", from: "John"}
];


let messageSeen = new WeakSet();

	messageSeen.add(messages[0]);
	messageSeen.add(messages[4]);
	messageSeen.add(messages[2]);

	alert (`Is seen message "${messages[0].text}" : ${messageSeen.has(messages[0])}` );

	//messages.shift();
	//alert (`Is having message "${messages[0].text} in seen " : ${messageSeen.has(messages[0])}` );	
	// !!! В этом случае  происходит сдвиг индексов в массиве после shift(), 
	// и элементы массива доступны для проверки в messageSeen с новыми индексами

/* ----------------------------------------------
какую структуру данных использовать для хранения 
информации о том, когда сообщение было прочитано?

В предыдущем задании нам нужно было сохранить только 
факт прочтения «да или нет». Теперь же нам нужно 
сохранить дату, и она должна исчезнуть из памяти 
при удалении «сборщиком мусора» сообщения.
*/

let messageSeenDate = new WeakMap();

	messageSeenDate.set(messages[0], "18-06-2018, 18:34");
	messageSeenDate.set(messages[2], "18-06-2018, 18:45");
	messageSeenDate.set(messages[3], "18-06-2018, 18:46");
	messageSeenDate.set(messages[4], "18-06-2018, 18:56");


alert (`Date of message "${messages[0].text}" is ${messageSeenDate.get(messages[0])}`);
alert (`Date of message "${messages[2].text}" is ${messageSeenDate.get(messages[2])}`);
alert (`Date of message "${messages[4].text}" is ${messageSeenDate.get(messages[4])}`);

	messages.shift();



