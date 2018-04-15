function modal () {
	 //modal
   let more = document.querySelector('.more'), 
       overlay = document.querySelector('.overlay'),
       close = document.querySelector('.popup-close');

      more.addEventListener('click', function () {
        this.classList.add('more-splash');
        overlay.style.display = "block";
        document.body.style.overflow = 'hidden';

      });
       close.addEventListener('click', function() {
            overlay.style.display = "none";
            more.classList.remove('more-splash');
            document.body.style.overflow = '';
       });


   let descr_btn = document.getElementsByClassName('description-btn');
       
     descr_btn[0].addEventListener('click', function () {
       this.classList.add('more-splash');
       overlay.style.display = "block";
       document.body.style.overflow = 'hidden'; });
     descr_btn[1].addEventListener('click', function () {
       this.classList.add('more-splash');
       overlay.style.display = "block";
       document.body.style.overflow = 'hidden'; });
     descr_btn[2].addEventListener('click', function () {
       this.classList.add('more-splash');
       overlay.style.display = "block";
       document.body.style.overflow = 'hidden'; });
    descr_btn[3].addEventListener('click', function () {
       this.classList.add('more-splash');
       overlay.style.display = "block";
       document.body.style.overflow = 'hidden';});
}

module.exports = modal;