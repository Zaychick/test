/*jshint esversion: 6 */
let money,
  	time,
	  sum;


let mainList = {
	budget: money,
	shopName: name,
	shopGoods: [],
	employers: {},
	open: false,
	discount: false, 
	shopItems: [],
	chooseGoods:

	

	 function chooseGoods() {
			for (let i = 0; i < 5; i++) {
				let a = prompt("Какой тип товара будем продавать?", "");
				if ((typeof(a)) === 'string'  &&  (typeof(a)) !== null && a !== '' &&  a.length < 50){
					console.log('Все верно!');
					mainList.shopGoods[i] = a;
				} 
				else {
					alert('Ошибка');
					i--;
				}
			}
		},
	workTime: function workTime(time){
		if (time < 0) {
			console.log('Такого просто нет');
		}
		 else if (time > 8 && time < 20) {
		 	console.log('Время работать!');
		 	mainList.open = true;
		 } else if(time < 24){
		 	console.log('УЖе слишком поздно');
		 } else {
		 	console.log('В сутках только 24 часа');
		 }
	}, 
 start: function start() {
	money = prompt("Ваш бюджет?");

		while (isNaN(money) || money === "" || money === null){
			 let money = prompt("Ваш бюджет?", "");
		}
		let name = prompt("Название вашего магазина?", "").toUpperCase();
		mainList.shopName = name;
		mainList.budget = parseInt(money);
		time = 19;
	},
	makeDiscount:function makeDiscount() {
		if (mainList.discount === true) {
			price = (price/100) * 80;
		}
	},
	calcBudget: function calcBudget(sum) {
	alert(Math.floor(sum / 30));	
	},
	hireEmployers: function hireEmployers() {
		for (let i = 0; i < 4; i++){
		let d = prompt("Имя сотрудника?", "");
		mainList.employers[i] = d;
		}
	},
	chooseShopItems: function chooseShopItems() {
		let item = prompt("Перечислите через запятую товары", "");
				if ((typeof(item)) === 'string'  &&  (typeof(item)) !== null && item !== ''){
					mainList.shopItems = item.split(",");
					let it = prompt("Подождите, еще ", ""); 
					if (it !== '' && (typeof(item)) === 'string' && (typeof(item)) !== null) {
						mainList.shopItems.push(it);
					}
					
				} 
				else {
					chooseShopItems();
				}
		mainList.shopItems.sort();
		mainList.shopItems.forEach(function(item, i) {
			document.write(i + 1 + " У нас вы можете купить: " + item + "<br/>");


		});

	},
	
};

for( let key in mainList) {
			console.log('Наш магазин включает в себя: ' + key)
		}



console.log(mainList);