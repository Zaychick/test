let money = prompt("Ваш бюджет?");
let name = prompt("Название вашего магазина?");
let time = 19;

let mainList = {
	budget: money,
	shopName: name,
	shopGoods: [],
	employers: {},
	open: false
}

/*for (let i = 0; i < 5; i++) {

	let a = prompt("Какой тип товара будем продавать?");

	if ((typeof(a)) === 'string'  &&  (typeof(a)) != null && a != '' &&  a.length < 50){
		console.log('Все верно!');
		mainList.shopGoods[i] = a;
	} 
	else {
		alert('Ошибка');
		i--;
	}
}*/
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


alert(mainList.budget / 30);

console.log(mainList);


