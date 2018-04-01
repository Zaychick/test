let third  = document.getElementById('third'),
		menu = document.getElementById('menu'),
		ads = document.getElementById('adv'),
		column = document.getElementById('column1'),
		title = document.getElementById('title'),
		promp = document.getElementById('prompt'),
		menuItem = document.getElementsByClassName('menu-item');



menu.removeChild(menuItem[1]);

menu.insertBefore(third, menuItem[2]);



document.getElementById('body').style.backgroundImage = 'url(../les5/img/apple_true.jpg)';


column.removeChild(ads);
title.innerHTML =' Мы продаем только подлинную технику Apple';
a = prompt("Какой тип товара будем продавать?", "");
promp.innerHTML = a; 
