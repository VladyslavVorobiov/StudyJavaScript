/*---------------------------------------------
sumSalaries(salaries), которая возвращает сумму 
всех зарплат с помощью метода Object.values и цикла for..of.
Если объект salaries пуст, то результат должен быть 0.
*/
function sumSalaries(obj){
	
	//return Object.values(obj).reduce((sum, item) => sum + item,0);  or :
	
	let sum = 0;
	
	for (let salaries of Object.values(obj)){
			sum += salaries;
	}	 
	
	return sum;
}

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

alert( sumSalaries(salaries) ); // 650

/*---------------------------------------------
Напишите функцию count(obj), которая возвращает 
количество свойств объекта. Игнорируйте символьные свойства, 
подсчитывайте только «обычные».
*/
function countProperty(obj) {
	
	return Object.keys(obj).length;
}

let user = {
  name: 'John',
  age: 30,
  static: 1,
  sex: "man"
};

alert( countProperty(user) ); // 2