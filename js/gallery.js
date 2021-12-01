  document.addEventListener('DOMContentLoaded', function() {

    //Слайдер//
		let gallerySlider = new Swiper(".gallery__slides-container", {
      // slidesPerColumnFill: "row",(от Swiper-а 6-ой версии)
      slidesPerView: 1,
      // slidesPerColumn: 2,(от Swiper-а 6-ой версии)
      grid: {rows: 1, fill: "row"},//(от Swiper-а 7-ая версия)
      spaceBetween: 20,


      //Бесконечное листание страниц
      speed: 2000, //Интервал ожидания

      autoplay: {
        delay: 3000,//Интервал ожидания
          disableOnInteraction: false,      
      }, 


      pagination: {
      el: ".gallery .gallery__pagination",
      type: "fraction"
      },

      navigation: {
      nextEl: ".gallery__btn_next",
      prevEl: ".gallery__btn_prev"
      },

      //Стили для галереи
      breakpoints: {
      581: {
        slidesPerView: 2,
        // slidesPerColumn: 2,(от Swiper-а 6-ой версии)
        grid: {rows: 2},//(от Swiper-а 7-ая версия)
        spaceBetween: 30
      },

      768: {
        slidesPerView: 2,
        // slidesPerColumn: 2,(от Swiper-а 6-ой версии)
        grid: {rows: 2}, //(от Swiper-а 7-ая версия)
        spaceBetween: 32 
      },

      1024: {
        slidesPerView: 2,
        // slidesPerColumn: 2,(от Swiper-а 6-ой версии)
        grid: {rows: 2}, //(от Swiper-а 7-ая версия)
        spaceBetween: 34 
      },

      1200: {
        slidesPerView: 3,
        // slidesPerColumn: 2,(от Swiper-а 6-ой версии)
        grid: {rows: 2},//(от Swiper-а 7-ая версия)
        spaceBetween: 50
      }
		},

		  //on: {
			// исправляет баг с margin-top остающимся при смене брейкпоинта */
        // beforeResize: function () {
          // this.slides.forEach((el) => {
          // el.style.marginTop = "";
          // });
        // }
		  // }
		});



    // Модальное окно//
    const btns = document.querySelectorAll('.gallery__btn-js');
    const modalOverlay = document.querySelector('.modal-overlay ');
    const modals = document.querySelectorAll('.modal');

    btns.forEach((el) => {
      el.addEventListener('click', (e) => {
        let path = e.currentTarget.getAttribute('data-path');
        const currentModal = document.querySelector(`[data-target="${path}"]`);
        const closeBtn = currentModal.querySelector('.modal__js-close');

        
        modals.forEach((el) => {
          el.classList.remove('modal--visible');
        });
      
        currentModal.classList.add('modal--visible');
        modalOverlay.classList.add('modal-overlay--visible');

        //Для modal__js-close 
        closeBtn.focus(); 
      });
    });

    // Реакция нажима в любом месте(выключатель окна) не удалять
    modalOverlay.addEventListener('click', (e) => {
      console.log(e.target);
      
      if (e.target == modalOverlay) {
        modalOverlay.classList.remove('modal-overlay--visible');
        modals.forEach((el) => {
          el.classList.remove('modal--visible');
        });
      }
    });

    //Реакция нажима на Х(выключатель окна)
    modals.forEach((el) => {
      const closeBtn = el.querySelector('.modal__js-close');

      closeBtn.addEventListener('click', function () {
        modalOverlay.classList.remove('modal-overlay--visible');
        modals.forEach((el) => {
          el.classList.remove('modal--visible');
        });
      });
    });







    



    



	});	