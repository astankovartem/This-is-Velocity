"use strict"

//переменные

let namber = 25; //переменая
const age = 14; //константа

//типы данных

let v; //undefined - неопределенный
v = null; // null - ничего
v = true; // Boolean
v = 15; // Number - числа, целые или дробные
v = 45646468888868468468468476868644676464687687n; // Bigint
v = 'string'; // String
v = {
	name: "sasun",
	age: 24				// Object
} 
v = Symbol('id');
function func(){
	console.log(); //function
}

console.log(typeof 25); //typeof - оператор который возвращает тип данных

let a = 58;
console.log(typeof a);
a = String(a);
console.log(typeof a);
a = Number(a);
console.log(typeof a);

//операторы

a++;
a--; //инкримент и диеримент
/*
Больше: a > b
Меньше: a < b
Больше или равно: a >= b
Меньше или равно: a <= b
Равно: a == b
Не равно: a != b
Строгое равно: a === b
Строгое не равно: a !== b
*/
/*
оператор строгого равенства или не равенства
проверяет равенство без приведения типов.
*/
//Оператор || (ИЛИ)
//Оператор && (И)

/*
if - если
else - if иначе если
else - иначе
*/

//циклы

// Цикл WHILE
/*
// Синтаксис
while (Условие) {
	// Тело цикла
	// Тут будет выполняться код
}
*/
/*
// Конструкция DO...WHILE
let num = 0;
do {
	console.log(num);
	num++;
} while (num < 0);

//=====================
*/
/*
// Цикл FOR
// Синтаксис
for (Начало; Условие; Шаг) {
	// Тело цикла
	// Тут будет выполняться код
}
//------
*/

//функции

function sum(a, b){
	return a + b;
}
console.log(sum(5, 10));

function local(){
	let a = 10;     //локальная переменная
}

let c;
function global(){
	c = 10;         //глобальная переменная(внешняя)
}

//рекурсия - вложенные функции

let strelFunc = () => {
	console.log('я стрелочная функция');  //стрелочная функция
};

strelFunc();

function ghul(num){
	console.log(num + ' -' + 7 + ' =' + ' ' + (num - 7));
	if (num > 0){
		setTimeout(ghul, 200, num -= 7);
	}
		
}
setTimeout(ghul, 200, 1000);


//Обьекты

/*
// Создание объекта

let userInfo = new Object(); // синтаксис "конструктор объекта"
let userInfo = {};  // синтаксис "литерал объекта"
*/
// Имена свойств
/*
// Имя из двух и больше слов
let userInfo = {
	name: "Вася",
	age: 30,
	"likes javascript": true,
};
console.log(userInfo.name);
console.log(userInfo['name']);
console.log(userInfo["likes javascript"]);

// Передаем имя
let firstPart = "likes";
let userInfo = {
	name: "Вася",
	age: 30,
	[firstPart]: true,
};
console.log(userInfo[firstPart]);

// Добавление свойства
let userInfo = {
	name: "Вася",
}

console.log(userInfo);

userInfo.age = 30;

// Удаление свойства

let userInfo = {
	name: "Вася",
	age: 30,
	"likes javascript": true
}
console.log(userInfo);

delete userInfo.age;

console.log(userInfo);

// Изменение свойства

let userInfo = {
	name: "Вася",
	age: 30,
}
console.log(userInfo);

userInfo.age = 18;

console.log(userInfo);

// Копирование объектов

// При копировании объекта в другую переменную
// сам объект не дублируется, а копируется только ссылка на него

// Дублирование объектов (Object.assign)

// Синтаксис
//Object.assign(куда(объект), что(свойство #1), что(свойство #2), ...);
/*
let userInfo = {
	name: "Вася",
	age: 30,
}

let user = Object.assign({}, userInfo);

user.age = 18;

console.log(userInfo);
console.log(user);

// Цикл «for…in»
/*
// Для перебора всех свойств объекта используется цикл for..in.
// Этот цикл отличается от изученного ранее цикла for(;;).

for (let key in object) {
	// тело цикла выполняется для каждого свойства объекта
}

// Функция-конструктор

/*
Обычный синтаксис создания объекта{... } позволяет создать
только один объект. Но зачастую нам нужно создать множество
однотипных объектов, таких как пользователи, элементы меню и т.д.
Это можно сделать при помощи функции - конструктора и оператора "new".
*/
/*
Функции - конструкторы являются обычными функциями.
Но есть два правила:
1. Имя функции - конструктора должно начинаться с большой буквы.
2. Функция - конструктор должна вызываться при помощи
	оператора "new".
*/
/*
function UserInfo(name) {

	// this = {}; Создается пустой объект (неявно)

	this.name = name;
	this.age = 30;

	// return this; Возвращается объект (неявно)
}

console.log(new UserInfo('Вася'));
console.log(new UserInfo('Лена'));

*/

let userInfo = {
	name: "Вася",
	age: "30",
}

console.log(userInfo);
userInfo.name = "Лена";
console.log(userInfo);
delete userInfo.name;
console.log(userInfo);


//числа


let num = 264.58;
console.log(num.toString(2))
console.log(num.toString(8))    //преобразование в другую систеиу счисления
console.log(num.toString(16))


console.log(Math.floor(5.8)); //округление в меньшую сторону

console.log(Math.ceil(2.2)); //округление в большую сторону
console.log(Math.round(2.6)); //округление до ближайшего целого
console.log(num.toFixed(1)); //округляет число до n знаков после запаятой, возврвщвет строку


console.log(Math.round(num + Number.EPSILON)); //более точное округление

console.log(parseInt('150px')) //преобразование в число строки со сторонними символами(целое число)
console.log(parseInt('150.56px')) //преобразование в число строки со сторонними символами(дробное число)

//строки

let text = `2 + 2 = ${2500 + 2500}`;
console.log(text);

console.log(text.length); //возвращает длинну строки
console.log(text[0]); //возвращает конкретный символ строки

//масивы

let arr = ['говно', 'залупа', 'пенис', 'хер']; //массив
console.log(arr[0]);
console.log(arr.length); //длинна массива
arr.push('давалка'); //добавление элемента в конец массива
arr.shift(); //удаляет элемент в начале(второй элемент становится первым и тд)
arr.pop(); //удаляет последний элемент массива
arr.unshift('говно'); //добавляет элемент в ночало
arr.splice(1, 1); //удаление конкретного элемента массива
arr.splice(2, 1, 'апчихба'); //заменяет конкретный элемент массива
arr.splice(1, 0, 'залупа'); //добавляет элемент в конкретное место

let arr2 = arr.slice(0, arr.length); //дублирование массива
let arr3 = arr.concat(); //другой способ дублирования массива

let str = 'говно залупа пенис хер';
let arr4 = str.split(' '); //преобразование строки в массив
console.log(arr4);
let srt = arr4.join(' ');
console.log(srt); //наоборот

for (let i of arr){
	console.log(i);  //переберает значения масива
}


//DOM


	//узлы
const bodyElement = document.body;
const firstBodyNode = bodyElement.firstChild; //первый узел
const lastBodyNode = bodyElement.lastChild;   //последний узел
const childNodes = bodyElement.childNodes;   //получение колекции всех дочерних узлов
const previousSiblingNode = bodyElement.previousSibling; //предыдущий узел на этом уровне вложенности
const nextSiblingNode = bodyElement.nextSibling; //следующий узел на этом уровне вложенности
const parentNode = bodyElement.parentNode; //родительский узел

console.log(firstBodyNode);
console.log(lastBodyNode);
console.log(childNodes);
console.log(previousSiblingNode);
console.log(nextSiblingNode);
console.log(parentNode);

	//элементы

const childElement = bodyElement.children; 	//получение колекции всех дочерних элементов
const firstBodyElement = bodyElement.firstElementChild; //первый элемент
const lastBodyElement = bodyElement.lastElementChild;   //последний элемент
const previousSiblingElement = bodyElement.previousElementSibling; //предыдущий элемент на этом уровне вложенности
const nextSiblingElement = bodyElement.nextElementSibling; //следующий элемент на этом уровне вложенности
const parentElement = bodyElement.parentElement; //родительский элемент


console.log(childElement);
console.log(firstBodyElement);
console.log(lastBodyElement);
console.log(previousSiblingElement);
console.log(nextSiblingElement);
console.log(parentElement);


const elems = document.querySelectorAll('.conteiner'); //возврощает колекцию(не живую) элементов с соответствующим селектором
const elemss = document.querySelector('.conteiner'); //возвращает первый попавшийся элемент с соответствующим селектором

console.log(elems);
console.log(elemss);