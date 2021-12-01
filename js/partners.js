document.addEventListener('DOMContentLoaded', function() {

  //Слайдер
   let partnersItem = new Swiper(".partners__swiper", {
    // slidesPerColumnFill: "row",(от Swiper-а 6-ой версии)
    slidesPerView: 1,
    // slidesPerColumn: 1,(от Swiper-а 6-ой версии)
    grid: {rows: 1, fill: "row"},//(от Swiper-а 7-ая версия)
    spaceBetween: 20,
    
    //Бесконечное листание страниц
    speed: 2000, //Интервал ожидания

    autoplay: {
      delay: 13000, //Интервал ожидания
       disableOnInteraction: false,      
    },  


    pagination: {
    el: ".swiper-pagination_p",
    type: "fraction"
    },

    navigation: {
    nextEl: ".partners__button_next",
    prevEl: ".partners__button_prev"
    },

    //Стили для галереи
    breakpoints: {
    581: {
      slidesPerView: 2,
      // slidesPerColumn: 1,(от Swiper-а 6-ой версии)
      grid: {rows: 1},//(от Swiper-а 7-ая версия)
      spaceBetween: 34
    },

    768: {
      slidesPerView: 2,
      // slidesPerColumn: 1,(от Swiper-а 6-ой версии)
      grid: {rows: 1},//(от Swiper-а 7-ая версия)
      spaceBetween: 32
    },

    925: {
      slidesPerView: 2,
      // slidesPerColumn: 1,(от Swiper-а 6-ой версии)
      grid: {rows: 1},//(от Swiper-а 7-ая версия)
      spaceBetween: 40
    },

    1024: {
      slidesPerView: 2,
      // slidesPerColumn: 1,(от Swiper-а 6-ой версии)
      grid: {rows: 1},//(от Swiper-а 7-ая версия)
      spaceBetween: 48
    },

    1200: {
      slidesPerView: 3,
      // slidesPerColumn: 1,(от Swiper-а 6-ой версии)
      grid: {rows: 1},//(от Swiper-а 7-ая версия)
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






});	