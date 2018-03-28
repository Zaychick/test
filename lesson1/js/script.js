/*jshint esversion: 6 */
//2 переменные для бюджета и названия магазина
ques1 =  prompt("Ваш бюджет?","5000");
ques2 =  prompt("Название Вашего магазина?","Lololo");
/*Массив товаров*/
shopGoods = [];
shopGoods[0] =  prompt("Какой тип товара будем продавать?","Клубника");
shopGoods[1] =  prompt("Какой тип товара будем продавать?","Клубника");
shopGoods[2] =  prompt("Какой тип товара будем продавать?","Клубника");
/*Объект employers */
employers = {
	name: 'Sasha',
	age: 19
}

mainList = {
	budget: ques1,
	shopName: ques2,
	shopGoods,
	employers,
	open: true
}


alert (Math.floor(ques1/30));
console.log(mainList);