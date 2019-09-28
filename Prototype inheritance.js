/* ------------------------------------------------------
Добавить функциям метод "f.defer(ms)"
Добавьте всем функциям в прототип метод defer(ms), 
который вызывает функции через ms миллисекунд.

После этого должен работать такой код:

function f() {
  alert("Hello!");
}

f.defer(1000); // выведет "Hello!" через 1 секунду
*/

Function.prototype.defer = function(ms){
	setTimeout(this, ms);
};

function f() {
  alert("Hello!");
}

//f.defer(1000);

//(()=> alert("Yep!")).defer(4000);



/* ------------------------------------------------------
Добавьте всем функциям в прототип метод defer(ms), 
который возвращает обёртку, откладывающую вызов 
функции на ms миллисекунд.

Например, должно работать так:

function f(a, b) {
  alert( a + b );
}

f.defer(1000)(1, 2); // выведет 3 через 1 секунду.

Пожалуйста, заметьте, что аргументы должны корректно 
передаваться оригинальной функции.
*/

Function.prototype.deferDelay = function(ms){

	let thisFunc = this;

	return function (){
		setTimeout( ()=> thisFunc.call(thisFunc, ...arguments), ms);
	};
	
};

function f(a, b) {
  alert( a + b );
}

//f.deferDelay(2000)(5, 2);

/* ------------------------------------------------------
Имеется объект dictionary, созданный с помощью 
Object.create(null) для хранения любых пар ключ/значение.

Добавьте ему метод dictionary.toString(), который должен 
возвращать список ключей, разделённых запятой. 
Ваш toString не должен выводиться при итерации объекта 
с помощью цикла for..in.
*/

let dictionary = Object.create(null);

// ваш код, который добавляет метод dictionary.toString
dictionary.toString = function(){
	
	return Object.keys(this).join(",");
};

Object.defineProperty(dictionary,"toString", {
	enumerable:false
});


// добавляем немного данных
dictionary.apple = "Apple";
dictionary.__proto__ = "test"; // здесь __proto__ -- это обычный ключ

// только apple и __proto__ выведены в цикле
for(let key in dictionary) {
  alert(key); // "apple", затем "__proto__"
}

// ваш метод toString в действии
alert(dictionary); // "apple,__proto__"


