function ajax () {
     let message = new Object(); 
   console.log(message);
    message.loading = "Загрузка...";
    message.success = "Спасибо! Скоро мы с Вами свяжемся";
    message.failure = "Что-то пошло не так";


    let form = document.getElementsByClassName('main-form')[0],
        input = form.getElementsByTagName('input'),
        statusMessage = document.createElement('div');
        statusMessage.classList.add('status');

        form.addEventListener('submit', function(event){
            event.preventDefault();
            form.appendChild(statusMessage);

            //AJAX

            let request = new XMLHttpRequest();
            request.open("POST", 'server.php');
            request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

            let formData = new FormData(form);

            request.send(formData);

            request.onreadystatechange = function(){
              if (request.readyState < 4) {
                statusMessage.innerHTML = message.loading;
                console.log(message.loading);
              } else if (request.readyState === 4) {
                if (request.status == 200 && request.status < 300) {
                statusMessage.innerHTML = message.success;
                console.log(message.success);
                //Добавляем контент на страницу
                }
                else {
                statusMessage.innerHTML = message.failure;
                console.log(message.failure);
                }
              }
            };

            for (let i = 0; i < input.length; i++) {
              input[i].value = '';
              //Очищаем поля ввода
            }
        });

      let form_2 = document.getElementsByClassName('contact-form')[0],
      input_2 = form_2.getElementsByTagName('input');

       form_2.addEventListener('submit', function(event){
            event.preventDefault();
            form_2.appendChild(statusMessage);

            //AJAX

            let request = new XMLHttpRequest();
            request.open("POST", 'server.php');
            request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

            let formData = new FormData(form);

            request.send(formData);

            request.onreadystatechange = function(){
              if (request.readyState < 4) {
                statusMessage.innerHTML = message.loading;
                console.log(message.loading);
              } else if (request.readyState === 4) {
                if (request.status == 200 && request.status < 300) {
                statusMessage.innerHTML = message.success;
                console.log(message.success);
                //Добавляем контент на страницу
                }
                else {
                statusMessage.innerHTML = message.failure;
                console.log(message.failure);
                }
              }
            };

            for (let i = 0; i < input.length; i++) {
              input[i].value = '';
              //Очищаем поля ввода
            }
        });
}

module.exports = ajax;