document.addEventListener('DOMContentLoaded', function() {
  // console.log(); находит в js-ce ошибку. Deftools
   // Модальное окно//
      const btns = document.querySelectorAll('.modalGoBtn-js');
      const modalOverlay = document.querySelector('.modalGo-overlay ');
      const modals = document.querySelectorAll('.modalGo');
  
      btns.forEach((el) => {
        el.addEventListener('click', (e) => {
          let path = e.currentTarget.getAttribute('data-path');
          const currentModal = document.querySelector(`[data-target="${path}"]`);
          const closeBtn = currentModal.querySelector('.modalGo__js-close');
  
          
          modals.forEach((el) => {
            el.classList.remove('modalGo--visible');
          });
        
          currentModal.classList.add('modalGo--visible');
          modalOverlay.classList.add('modalGo-overlay--visible');
  
          //Для modalGo__js-close 
          // closeBtn.focus(); 
        });
      });
  
      // Реакция нажима в любом месте(выключатель окна) не удалять
      modalOverlay.addEventListener('click', (e) => {
        console.log(e.target);
        
        if (e.target == modalOverlay) {
          modalOverlay.classList.remove('modalGo-overlay--visible');
          modals.forEach((el) => {
            el.classList.remove('modalGo--visible');
          });
        }
      });
  
      //Реакция нажима на Х(выключатель окна)
      modals.forEach((el) => {
        const closeBtn = el.querySelector('.modalGo__js-close');
  
        closeBtn.addEventListener('click', function () {
          modalOverlay.classList.remove('modalGo-overlay--visible');
          modals.forEach((el) => {
            el.classList.remove('modalGo--visible');
          });
        });
      });
    
  
      
    /*Модальное окно для Регистрации*/
      document.querySelector("#registration").onclick = function(){
    alert("Вы нажали на Регистрацию");
  }
  
  const example = document.querySelector('#registration');
    
    
    
    
    //В contacts.js стоит другой вариант. Не удалять! Маска телефона//
    var selector = document.querySelector("input[type='tel']"); //Всем input с атрибутом type со значением tel
    var im = new Inputmask("+7 (999)-999-99-99"); //Задали внешний вид маски
  
    //С помощью метода .mask инициализировали этот плагин и натравили его на selector-ы input[type='tel']
    im.mask(selector);
  
    //Валидация телефона//
    //Первый аргумент передаём селектор т.е html с классом form
    new JustValidate('.modalGo__form', {
      //Второй аргумент передаём его(form) правила
      rules: {
        name: { //data-validate-field="name"
          required: true, //Это означает поле обязательное для заполнение
          minLength: 2,
          maxLenght: 30
        },
        tel: { //data-validate-rules="phone"
          required: true, //Это означает поле обязательное для заполнение
          function: (name, value) => {
            const phone = selector.inputmask.unmaskedvalue()
            console.log(phone)
            return Number(phone) && phone.length === 10
          }
        },
        mail: { //data-validate-field="mail"
          required: true, //Это означает поле обязательное для заполнение
          email: true //Проверяет сама себя на валидность, например @ на месте
        },
      },
      //От проверяющего дополнен код
      messages: { //Извещает об ошибке
        tel: {
          required: 'Укажите ваш телефон'
        },
        name: 'Как вас зовут?',
        mail: 'Укажите ваш e-mail'
      },
      colorWrong: '#FF5C00' //цвет сообщений валидации(ошибки фразы) и бордера
    });
  
  
      });