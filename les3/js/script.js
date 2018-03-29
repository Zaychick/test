let money,
	name,
	time,
	sum,
	price;

function start() {
	money = prompt("Ваш бюджет?");

	while (isNaN(money) || money == "" || money == null){
		 let money = prompt("Ваш бюджет?");
	}

	 name = prompt("Название вашего магазина?").toUpperCase;
	time = 19;
}

start();

let mainList = {
	budget: money,
	shopName: name,
	shopGoods: [],
	employers: {},
	open: false,
	discount: false
}

function chooseGoods() {

	for (let i = 0; i < 5; i++) {

		let a = prompt("Какой тип товара будем продавать?");

		if ((typeof(a)) === 'string'  &&  (typeof(a)) != null && a != '' &&  a.length < 50){
			console.log('Все верно!');
			mainList.shopGoods[i] = a;
		} 
		else {
			alert('Ошибка');
			i--;
		}
	}

}
/*chooseGoods();*/

/*var i = 0;
while (i<5) {
	let a = prompt("Какай тип товара будем продавать?");
	if ((typeof(a)) === 'string'  &&  (typeof(a)) != null && a != '' &&  a.length < 50){
		console.log('Все верно!');
		mainList.shopGoods[i] = a;
	}
	else {
		alert('Ошибка');
		i--;
	}
	i++;
}*/
/*var i = 0;
do {
  let a = prompt("Какай тип товара будем продавать?");
	if ((typeof(a)) === 'string'  &&  (typeof(a)) != null && a != '' &&  a.length < 50){
		console.log('Все верно!');
		mainList.shopGoods[i] = a;
	}
	else {
		alert('Ошибка');
		i--;
	}
	i++;
} 
while (i<5);*/
function workTime(time){

	if (time < 0) {
		console.log('Такого просто нет');
	}
	 else if (time > 8 && time < 20) {
	 	console.log('Время работать!')
	 } else if(time < 24){
	 	console.log('УЖе слишком поздно')
	 } else {
	 	console.log('В сутках только 24 часа')
	 }

}
workTime(10);


function calcBudget(sum) {

alert(Math.floor(sum / 30));	

}
calcBudget(mainList.budget);
console.log(mainList);




