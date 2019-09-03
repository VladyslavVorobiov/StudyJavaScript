/*--------------------------------------------------
Create some Date
*/
	let someDay = new Date (2012, 1, 20, 3,12);

	//alert (someDay);

/*--------------------------------------------------
getWeekDay(date), показывающую день недели в коротком 
формате: «ПН», «ВТ», «СР», «ЧТ», «ПТ», «СБ», «ВС».
*/
	function getWeekDay (date){

		let dayWeek = ["ВС" , "ПН" , "ВТ" , "СР" , "ЧТ" ,"ПТ" , "СБ" ];

		return dayWeek[date.getDay()];
	}

	let date = new Date(2012, 0, 3);  // 3 января 2012 года
	//alert( getWeekDay(date) );        // нужно вывести "ВТ"
	//alert( getWeekDay(someDay) );
	//alert ( getWeekDay( new Date(2014, 0, 3)));

/*--------------------------------------------------
 getLocalDay(date), которая возвращает «европейский» 
 день недели для даты date.
 */

 function getLocalDay(date){		

		return  ( date.getDay() == 0 ? 7 : date.getDay());
 }

	date = new Date(2012, 0, 4);  // 4 января 2012 года
	//alert( getLocalDay(date) );       //

/*--------------------------------------------------
getDateAgo(date, days), возвращающую число, которое 
было days дней назад от даты date. 
К примеру, если сегодня двадцатое число, то getDateAgo(new Date(), 1) 
вернёт девятнадцатое и getDateAgo(new Date(), 2) – восемнадцатое.
Функция должна надёжно работать при значении days=365 и больших значениях.
Функция не должна изменять переданный ей объект date.
*/
function getDateAgo(date, days){

	let dateBefore = new Date(date);
	
	 dateBefore.setDate(dateBefore.getDate() - days);

	 alert (dateBefore);
	 return dateBefore.getDate();

	 
}

 date = new Date(2015, 0, 2);

//alert( getDateAgo(date, 1) ); // 1, (1 Jan 2015)
//alert( getDateAgo(date, 2) ); // 31, (31 Dec 2014)
//alert( getDateAgo(date, 365) ); // 2, (2 Jan 2014)

/*--------------------------------------------------
getLastDayOfMonth(year, month), возвращающую последнее 
число месяца. Иногда это 30, 31 или даже февральские 28/29.

Параметры:
year – год из четырёх цифр, например, 2012.
month – месяц от 0 до 11.
К примеру, getLastDayOfMonth(2012, 1) = 29 (високосный год, февраль).
*/

function getLastDayOfMonth ( year,month ){

	let date = new Date (year, month + 1, 0);

	return date.getDate();
}


//alert( ` At 2012.02 a last day is ${getLastDayOfMonth(2012, 1)}`);
//alert( ` At 2016.11 a last day is ${getLastDayOfMonth(2016, 10)}`);
//alert( ` At 1912.01 a last day is ${getLastDayOfMonth(1912, 0)}`);

/*--------------------------------------------------
getSecondsToday(), возвращающую количество секунд с начала сегодняшнего дня.
Например, если сейчас 10:00, и не было перехода на зимнее/летнее время, то:
getSecondsToday() == 36000 // (3600 * 10)
Функция должна работать в любой день, т.е. 
в ней не должно быть конкретного значения сегодняшней даты.
*/

function getSecondsToday(){

	return Math.round((new Date () - (new Date()).setHours(0,0,0,0))/1e3);

}

/*--------------------------------------------------
getSecondsToTomorrow(), возвращающую количество секунд 
до завтрашней даты.
Функция должна работать в любой день, т.е. 
в ней не должно быть конкретного значения сегодняшней даты.
*/
function getSecondsToTomorrow(){
	
	let dateNow = new Date(),
		dateTomorrow = new Date();
		
		dateTomorrow.setDate( dateNow.getDate()+1 );
		dateTomorrow.setHours(0,0,0,0);

		
		return Math.round((dateTomorrow -  dateNow)/1e3);
	

}

/*--------------------------------------------------
 
 день.месяц.год часы:минуты", всё в виде двух цифр, т.е. 31.12.16 10:00.
*/
function setZeroBeforeNumber(number){

		if( number < 10) return "0" + number;
		if( (10 <= number) && ( number <= 59) ) return number;

		return (number % 100);
}


function  formatDate(date) {
	
	let nowDate = new Date(),
		deltaDate = nowDate - date;


	if ( deltaDate < 1000 ) {
		
		return "Right Now!";
	}
	else if (deltaDate < (1000 * 60)) {

		return ( Math.round(deltaDate/1e3) + " " + "seconds ago");
	}
	else if ( deltaDate < (1000 * 3600) ){

		return ( Math.round(deltaDate/1e3/60) + " " + "minutes ago");
	}
	else {

		return 	setZeroBeforeNumber(date.getDate()) + "." + 
				setZeroBeforeNumber(date.getMonth()+1) + "." + 
				setZeroBeforeNumber(date.getFullYear()) + " " + 
				setZeroBeforeNumber(date.getHours()) + ":" + 
				setZeroBeforeNumber(date.getMinutes());
	} 

}

alert( formatDate(new Date(new Date - 1)) ); // "прямо сейчас"

alert( formatDate(new Date(new Date - 30 * 1000)) ); // "30 сек. назад"

alert( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 мин. назад"

// вчерашняя дата вроде 31.12.2016, 20:00
alert( formatDate(new Date(new Date - 1123520400 * 1000)) );

