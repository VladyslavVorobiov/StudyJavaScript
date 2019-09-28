/* ----------------------------------------------------------
декоратор spy(func), который должен возвращать обёртку, 
которая сохраняет все вызовы функции в своём свойстве calls.

Каждый вызов должен сохраняться как массив аргументов.

Этот декоратор иногда полезен для юнит-тестирования. 
Его расширенная форма – sinon.spy – содержится в библиотеке Sinon.JS.

function work(a, b) {
  alert( a + b ); // произвольная функция или метод
}

work = spy(work);

work(1, 2); // 3
work(4, 5); // 9

for (let args of work.calls) {
  alert( 'call:' + args.join() ); // "call:1,2", "call:4,5"
}
*/

function spy(func){

	let wrraperFunction = function(){

		let result = func.call(this,...arguments);
		wrraperFunction.calls.push(Array.from(arguments));

		return result;
	};
	
	wrraperFunction.calls = [];
	return wrraperFunction;
}

function work(a, b) {
  alert( a + b ); 
}

let user = {
	metodUser(a,b,c){
		return a + b + c;
	}
};

/*
work = spy(work);
work(1, 2);
work(5,6);
work(-2323,3453453);
work("dqdd","qwefrr");

for (let arg of work.calls){
	console.log("calls:" + arg.join() );
}

user.metodUser = spy(user.metodUser);
alert(user.metodUser(3,4,5));
user.metodUser(13,-4,500);
user.metodUser(366,"eeee",Date.now());
user.metodUser("I","need","cookies")

for (let arg of user.metodUser.calls){
	console.log("calls:" + arg.join() );
}
*/

/* ----------------------------------------------------------
декоратор delay(f, ms), который задерживает 
каждый вызов f на ms миллисекунд
delay(f, ms) возвращает вариант f с «задержкой на ms мс».

В приведённом  коде f – функция с одним аргументом, но ваше 
решение должно передавать все аргументы и контекст this.

function f(x) {
  alert(x);
}

// создаём обёртки
let f1000 = delay(f, 1000);
let f1500 = delay(f, 1500);

f1000("test"); // показывает "test" после 1000 мс
f1500("test"); // показывает "test" после 1500 мс
*/

function delay (func, interval){

	
	let functionDelay = function(...args){
		setTimeout( () => func.apply(this, arguments), interval);
	};

	return functionDelay;
}

function f(x) {
  alert(x);
}

let obj = {
	metod(x,y,z){
 		alert(x + y + z);
	}
};

/*
let f1000 = delay(f, 1000);
let f1500 = delay(f, 4000);

f1000("test"); 
f1500("test2"); 

let u1000 = delay(obj.metod, 1000);
let u1500 = delay(obj.metod, 4000);

u1000("test", 34 , Date.now()); 
u1500("test2", "with", "delay2"); 
*/

/* ----------------------------------------------------------
Результатом декоратора debounce(f, ms) должна быть обёртка, 
которая передаёт вызов f не более одного раза в ms миллисекунд. 
Другими словами, когда мы вызываем debounce, это гарантирует, 
что все остальные вызовы будут игнорироваться в течение ms.

На практике debounce полезен для функций, которые получают/обновляют данные, 
и мы знаем, что повторный вызов в течение короткого промежутка времени 
не даст ничего нового. Так что лучше не тратить на него ресурсы.
Например

let f = debounce(alert, 1000);

f(1); // выполняется немедленно
f(2); // проигнорирован

setTimeout( () => f(3), 100); // проигнорирован (прошло только 100 мс)
setTimeout( () => f(4), 1100); // выполняется
setTimeout( () => f(5), 1500); // проигнорирован (прошло только 400 мс от последнего вызова)

// solution from the book
function debounce(f, ms) {

  let isCooldown = false;

  return function() {
    if (isCooldown) return;

    f.apply(this, arguments);

    isCooldown = true;

    setTimeout(() => isCooldown = false, ms);
  };

}
*/

function debounce (func, ms){

	let startTime = Date.now(),
		countFunctionCalls = 0;


	let result = function (){
		countFunctionCalls++;

		if(( (Date.now() - startTime) < ms)&&(countFunctionCalls == 1)){
			func.apply(this, arguments);
		}
		else if ( (Date.now() - startTime) > ms) {
			startTime = Date.now();
			countFunctionCalls = 1;
			func.apply(this, arguments);
		} 
		
	 
	};

return result;
}
/*
let func = debounce(alert, 1000);

func(1); // выполняется немедленно
func(2); // проигнорирован

setTimeout( () => func(3), 100); // проигнорирован (прошло только 100 мс)
setTimeout( () => func(4), 2500); // выполняется
setTimeout( () => func(5), 3600);
*/

/* ----------------------------------------------------------
Создайте «тормозящий» декоратор throttle(f, ms), 
который возвращает обёртку, передавая вызов в f 
не более одного раза в ms миллисекунд. Те вызовы, которые 
попадают в период «торможения», игнорируются.

Отличие от debounce – если проигнорированный вызов является 
последним во время «задержки», то он выполняется в конце.

function f(a) {
  console.log(a)
}

// f1000 передаёт вызовы f максимум раз в 1000 мс
let f1000 = throttle(f, 1000);

f1000(1); // показывает 1
f1000(2); // (ограничение, 1000 мс ещё нет)
f1000(3); // (ограничение, 1000 мс ещё нет)

// когда 1000 мс истекли ...
// ...выводим 3, промежуточное значение 2 было проигнорировано
*/
function throttle (func, ms){

	let isStart = true,
		argumentLastFunction,
		lastThis;

	let result = function (){
		
		if (!isStart){
			argumentLastFunction = arguments;
			lastThis = this;
			return;
		}

		func.apply(this, arguments);
		isStart = false;

		let excecuteLast = function(){
			isStart = true;	
			if(argumentLastFunction){
				result.apply(lastThis,argumentLastFunction);
				argumentLastFunction = lastThis= null;
			}
			
		};

		setTimeout(excecuteLast, ms);
	 
	};

return result;
}

function f1(a) {
  console.log(a);
}

let f1000 = throttle(f1, 1000);

for (let i = 1 ; i < 100; i++){
	setTimeout( () => f1000(i), 1500);
}

