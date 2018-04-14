$(document).ready(function(){

 //через точку получаем класс первой кнопки и работаем с ней
 $('.main_btna').on('click', function(){
  
 $('.overlay').animate(
 		{
 			opacity: "show"
 		}, 1800 );
 	$('.modal').slideDown(800);

 });

 //через точку получаем класс второй кнопки (классы у них отличаются) и работаем с ней
 $('.main_btn').on('click', function(){

 	$('.overlay').animate(
 		{
 			opacity: "show"
 		}, 1800 );
 	$('.modal').slideDown(800);

 });

  /*без точки получаем тег nav, который единственный на странице, далее через '>' берем ul, 
  который внутри него, и опять через '>' берем li, который внутри него,
   с помощью eq(1) указываем что наc инетересует второй li (yнумерация идет с 0, поэтому берем 1) */
  $('nav> ul > li:eq(1)').on('click', function(){

 	$('.overlay').animate(
 		{
 			opacity: "show"
 		}, 1800 );
 	$('.modal').slideDown(800);

 });
 
 //Для крестика 
 $('.close').on('click', function(){
 	$('.overlay').animate(
 		{
 			opacity: "hide"
 		}, 1800 );
 	$('.modal').slideUp();
 });

});