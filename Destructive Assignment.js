/*-----------------------------------------------
Деструктурирующее присваивание
*/

let user = { name: "John", years: 30 };

({name, years: age, isAdmin = false } = user);

//alert( name ); // John
//alert( age ); // 30
//alert( isAdmin ); // false

/*-----------------------------------------------
topSalary(salaries), возвращает имя самого
высокооплачиваемого сотрудника.
Если объект salaries пустой, то нужно вернуть null.
Если несколько высокооплачиваемых сотрудников, 
можно вернуть любого из них.

Используйте Object.entries и деструктурирование,
чтобы перебрать пары ключ/значение.
*/

function topSalary (obj){

	let nameTopWorker = null,
		maxSalary = 0;

	for(let [name, salary] of Object.entries(obj)){
		
		if (salary > maxSalary){			
			nameTopWorker = name;
			maxSalary = salary;
		} 
	}

	return nameTopWorker;

}

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250,
  "Jary": 500,
  "Bill": 500
};


alert(topSalary(salaries));

/*-----------------------------------------------
Вложенная деструктуризация
*/

let options = {
  size: {
    width: 100,
    height: 200
  },
  items: ["Cake", "Donut"],
  extra: true
};

// деструктуризация разбита на несколько строк для ясности
let {
  size: { // положим size сюда
    width,
    height
  },
  items: [item1, item2], // добавим элементы к items
  title = "Menu" // отсутствует в объекте (используется значение по умолчанию)
} = options;

alert(title);  // Menu
alert(width);  // 100
alert(height); // 200
alert(item1);  // Cake
alert(item2);  // Donut