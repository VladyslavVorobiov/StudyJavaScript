/* ------------------------------------------
user в JSON, затем прочитайте этот JSON в другую переменную.
*/
let user = {
  name: "Василий Иванович",
  age: 35
};

let userToServer = JSON.stringify(user);

//alert (userToServer);

let userFromServer = JSON.parse (userToServer);

for(let value in user){
	//alert(user[value]);
}

/* ------------------------------------------
Исключить обратные ссылки
В простых случаях циклических ссылок мы можем исключить свойство, 
из-за которого они возникают, из сериализации по его имени.
Но иногда мы не можем использовать имя, так как могут быть и другие, 
нужные, свойства с этим именем во вложенных объектах. 
Поэтому можно проверять свойство по значению.

Напишите функцию replacer для JSON-преобразования, 
которая удалит свойства, ссылающиеся на meetup:

в результате должно быть:
{
  "title":"Совещание",
  "occupiedBy":[{"name":"Иванов"},{"name":"Петров"}],
  "place":{"number":23}
}
*/

let room = {
  number: 23
};

let meetup = {
  title: "Совещание",
  occupiedBy: [{name: "Иванов"}, {name: "Петров"}],
  place: room
};

// цикличные ссылки
room.occupiedBy = meetup;
meetup.self = meetup;

alert( JSON.stringify(meetup, function replacer(key, value) {
	
	return ((value == meetup) && (key != "")) ? undefined : value;

}, 2));

