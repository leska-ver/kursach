document.addEventListener('DOMContentLoaded', function() {

  //Слайдер
   let publicationsSlider = new Swiper(".publications__slides-container", {
    // slidesPerColumnFill: "row",(от Swiper-а 6-ой версии)
    slidesPerView: 1,
    // slidesPerColumn: 1,(от Swiper-а 6-ой версии)
    grid: {rows: 1, fill: "row"},//(от Swiper-а 7-ая версия)
    spaceBetween: 50,
    
    //Бесконечное листание страниц
    speed: 2000,//Интервал ожидания

    autoplay: {
      delay: 13000, //Интервал ожидания
      disableOnInteraction: false,      
    },  


    pagination: {
    el: ".publications .publications__pagination",
    type: "fraction"
    },

    navigation: {
    nextEl: ".publications__btn_next",
    prevEl: ".publications__btn_prev"
    },

    //Стили для издания
    breakpoints: {
    320: {
      slidesPerView: 2,
      // slidesPerColumn: 4,(от Swiper-а 6-ой версии)
      grid: {rows: 4},//(от Swiper-а 7-ая версия)
      spaceBetween: 30
    },  

    581: {
      slidesPerView: 2,
      // slidesPerColumn: 1,(от Swiper-а 6-ой версии)
      grid: {rows: 1},//(от Swiper-а 7-ая версия)
      spaceBetween: 34
    },

    1024: {
      slidesPerView: 2,
      // slidesPerColumn: 1,(от Swiper-а 6-ой версии)
      grid: {rows: 1},//(от Swiper-а 7-ая версия)
      spaceBetween: 49 
    },

    1200: {
      slidesPerView: 3,
      // slidesPerColumn: 1, (от Swiper-а 6-ой версии)
      grid: {rows: 1},
      spaceBetween: 50 
    }
    },

    on: {
    /* исправляет баг с margin-top остающимся при смене брейкпоинта */
    beforeResize: function () {
      this.slides.forEach((el) => {
      el.style.marginTop = "";
      });
    }
    }    
  });

  
  //Убираем marginRight у каждой второй лишки
  $(document).ready(function(){
    $(".publications__item:nth-child(2n)").click(function(){
       $(".publications__item:nth-child(2n)").show();
       document.getElementsByClassName("{.publications__item:nth-child(2n)}").style.marginRight = "0";
    });
  });



  //Табы "Категория"
  const MOBILE_WIDTH = 580;
  let acc;
  const accWrap = document.querySelector(".publications__accordion-wrap");
  const checkboxes = accWrap.querySelector(".publications__js-checkboxes");
  const accHeader = accWrap.querySelector(".publications__js-accordion-h3");

  function sortElems(elems) {
    elems.sort(function (a, b) {
      const valueA = parseInt(a.parentNode.dataset.position);
      const valueB = parseInt(b.parentNode.dataset.position);

      if (valueA < valueB) {
        return -1;
      }
      if (valueA > valueB) {
        return 1;
      }
      return 0;
    });
  }

  function getWindowWidth() {
    return Math.max(
      document.body.scrollWidth,
      document.documentElement.scrollWidth,
      document.body.offsetWidth,
      document.documentElement.offsetWidth,
      document.body.clientWidth,
      document.documentElement.clientWidth
    );
  }
// Прячет блок если ему выбор отменить 
  function removeCheckbox (e) {
    checkboxes.append(e.target.parentElement);
    e.target.removeEventListener('change', removeCheckbox);
  }
  //Конец прячет блок если ему выбор отменить 

  function onAccordionClick(evt, ui) {
    const checkedBoxes = Array.from(accWrap.querySelectorAll(".js-checkbox"));
    sortElems(checkedBoxes);

    if (!ui.newHeader[0]) {
      checkedBoxes.forEach(function (el) {
        if (el.checked) {
          accWrap.append(el.parentNode);
          el.addEventListener('change', removeCheckbox);
        }
      });
    } else {
      checkedBoxes.forEach(function (el) {
        checkboxes.append(el.parentNode);
        el.removeEventListener('change', removeCheckbox);
      });
    }
  }

  function checkWindowWidth() {
    const currentWidth = getWindowWidth();
    const checkedBoxes = Array.from(accWrap.querySelectorAll(".js-checkbox"));

    if (currentWidth > MOBILE_WIDTH && acc) {
      // Прячет блок если ему выбор отменить 
      const checkedBoxes = Array.from(accWrap.querySelectorAll(".js-checkbox"));
      sortElems(checkedBoxes);
      //Конец прячет блок если ему выбор отменить
      acc.accordion("destroy");
      acc = false;
      checkedBoxes.forEach(function (el) {
        checkboxes.append(el.parentNode);
      });
    } else if ((currentWidth <= MOBILE_WIDTH) & !acc) {
      acc = $(".publications__js-accordion").accordion({
        collapsible: true,
        active: false,
        icons: false,
        heightStyle: "auto",
        activate: function (evt, ui) {
          console.log(ui);
          onAccordionClick(evt, ui);
        }
      });

      checkedBoxes.forEach(function (el) {
        if (el.checked) {
          accWrap.append(el.parentNode);
        }
      });
    }
  }

  checkWindowWidth();
  window.addEventListener("resize", function () {
    checkWindowWidth();
  });





});	

  

