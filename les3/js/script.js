/*jshint esversion: 6 */
let money,
  	time,
	  sum;

let employers = {
	number: [],
	names: []
};

let mainList = {
	budget: money,
	shopName: name,
	shopGoods: [],
	employers,
	open: false,
	discount: "нет"
};

function start() {
	money = prompt("Ваш бюджет?");

		while (isNaN(money) || money === "" || money === null){
			 let money = prompt("Ваш бюджет?");
		}
	let name = prompt("Название вашего магазина?").toUpperCase();
	mainList.shopName = name;
	mainList.budget = parseInt(money);
	time = 19;
}

start();


function chooseGoods() {

	for (let i = 0; i < 5; i++) {

		let a = prompt("Какой тип товара будем продавать?");

		if ((typeof(a)) === 'string'  &&  (typeof(a)) !== null && a !== '' &&  a.length < 50){
			console.log('Все верно!');
			mainList.shopGoods[i] = a;
		} 
		else {
			alert('Ошибка');
			i--;
		}
	}
}

chooseGoods();

function doDiscount(){
	let price = 600;
	f = prompt("Есть ли скидка?", "Да/нет");
	if (f == "Да" || f =="да" || f == "ДА"){
		price = price * 0.8;
		console.log(price);
	}
}
doDiscount();

for (let i = 0; i < 4; i++){
	let c = prompt("Номер");
	mainList.employers.number[i] = c;
	let d = prompt("Имя сотрудника?");
	mainList.employers.names[i] = d;
}

function workTime(time){

	if (time < 0) {
		console.log('Такого просто нет');
	}
	 else if (time > 8 && time < 20) {
	 	console.log('Время работать!');
	 } else if(time < 24){
	 	console.log('УЖе слишком поздно');
	 } else {
	 	console.log('В сутках только 24 часа');
	 }

}

workTime(10);


function calcBudget(sum) {
	alert(Math.floor(sum / 30));	
}

calcBudget(mainList.budget);

console.log(mainList);



