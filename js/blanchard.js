document.addEventListener('DOMContentLoaded', function() {

  // slider Не удалять//
  const swiper = new Swiper('.image-slider', {
    speed: 3000,//Интервал ожидания
    effect: 'fade',//Слайдер постепенно исчезает.
    // allowslidenext: false, Блокирует слайдер. На будущее
    allowTouchMove: false,//Уберает прокрутку мыши
    
    autoplay: {
      delay: 5000,//Интервал ожидания
      disableOnInteraction: false,
    },

    // If we need pagination(Разбивка на страницы)
    pagination: {
     el: '.swiper-pagination',
     clickable: 'true',
    },
  });



   //select выбор материалов//            
   const element = document.querySelector('#selectCustom'),
   //Библиотечный second-selectCustom
   second = document.querySelector('second-selectCustom');
 const choices = new Choices(element, {
   searchEnabled: false
 });

 //Типа счётчика для следующих select
 let selects = document.querySelectorAll('.gallery__my-select')

 selects.forEach((element) => {
   const choices = new Choices(element, {
     searchEnabled: false
   });
 });




//Меню(Флаги) клик или is-open--is-active//
const params = {
  btnClassName: "header__bottom-item-btn",
  activeClassName: "is-active",
  disabledClassName: "is-disabled"
}

function onDisable(evt) {
  if (evt.target.classList.contains(params.disabledClassName)) {
    evt.target.classList.remove(params.disabledClassName, params.activeClassName);
    evt.target.removeEventListener("animationend", onDisable);
  }
}

function setMenuListener() {
  document.body.addEventListener("click", (evt) => {
    const activeElements = document.querySelectorAll(`.${params.activeClassName}`);

    if (activeElements.length && !evt.target.closest(`.${params.activeClassName}`)) {
      activeElements.forEach((current) => {
        if (current.classList.contains(params.btnClassName)) {
          current.classList.remove(params.activeClassName);
        } else {
          current.classList.add(params.disabledClassName);
        }
      });
    }

    if (evt.target.closest(`.${params.btnClassName}`)) {
      const btn = evt.target.closest(`.${params.btnClassName}`);
      const path = btn.dataset.path;
      const drop = document.querySelector(`[data-target="${path}"]`);

      btn.classList.toggle(params.activeClassName);

      if (!drop.classList.contains(params.activeClassName)) {
        drop.classList.add(params.activeClassName);
        drop.addEventListener("animationend", onDisable);
      } else {
        drop.classList.add(params.disabledClassName);
      }
    }
  });
}

setMenuListener();



// Табы (info Каталог-Доменико) Цепляем target
const allTabBtns = document.querySelectorAll('.js-tabs-btn');

  allTabBtns.forEach(function(tabsBtn) {  
    tabsBtn.addEventListener('click', function(event) {

      // event.preventDefault();//Отменяем клик ссылке

      const path = event.currentTarget.dataset.path

      document.querySelectorAll('.tab-content').forEach(function(tabContent) {
        tabContent.classList.remove('tab-content-active')
      })
      document.querySelector(`[data-target="${path}"]`).classList.add('tab-content-active')

      allTabBtns.forEach(function (el) {
        el.classList.remove('is-active');
      });

      this.classList.add('is-active');
    })  
  })

  //Аккордеон//
  $(".js-accordion").accordion({
    heightStyle: "content",
    //Сворачивает аккордеон у всех
    collapsible: true
  });



  
  /*Клик БУРГЕР*/
  // $ предполагает использование библиотеки jQuery. В codepen-е без неё работает, в других местах без библиотеки jQuery не работает
  window.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#burger').addEventListener('click', function() {
        document.querySelector('#menu').classList.toggle('is-active')
    }) 
  })

  $(document).ready(function() {
    $('#burger').click(function() {
      $(this).toggleClass('open');
    })
  })


  // Плавный скролл по якорям. В любое место можно кинуть.
  $(function(){
    $('a[href^="#"]').click(function(){
      var target = $(this).attr('href');
      $('html, body').animate({scrollTop: $
    (target).offset().top},800);
      return false;
    })
  })


  
});