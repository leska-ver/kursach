document.addEventListener('DOMContentLoaded', function() {
  
   //---На мобильный Dekstop slider---
   class Cards {
    isOpened = false;

    get current() {
      return this;
    }

    params = {
      // здесь, в параметрах необходимо задать настройки
      MIN_DESKTOP: 900,
      MIN_TABLET: 581,
      DESKTOP_CARDS: 3,
      TABLET_CARDS: 2,
      MOBILE_CARDS: false,

      cardsWrapName: "js-cards-wrap",
      paginationClassName: "pagination",
      btn: "events__button",
      card: "events__item",
      hidden: "is-hidden",
      interaction: "interaction",
      openAnimation: "fade-in",
      closeAnimation: "fade-out",
      showText: "Все события",
      hideText: "Скрыть всё"
    };

    constructor() {
      this.setCards();
    }

    cardsWrap = document.querySelector(`.${this.params.cardsWrapName}`);
    btn = this.cardsWrap.querySelector(`.${this.params.btn}`);
    cards = Array.from(this.cardsWrap.querySelectorAll(`.${this.params.card}`));

    setHiddenCards(quantity, isResize) {
      if (quantity) {
        this.cards.forEach((el, i) => {
          el.classList.remove(
            this.params.hidden,
            this.params.interaction,
            this.params.openAnimation,
            this.params.closeAnimation
          );

          if (i >= quantity) {
            el.classList.add(this.params.hidden, this.params.interaction);
          }

          const currentCards = this;

          el.addEventListener("animationend", function (evt) {
            if (
              !currentCards.isOpened &&
              evt.target.classList.contains(currentCards.params.interaction)
            ) {
              evt.target.classList.add(currentCards.params.hidden);
              evt.target.classList.remove(
                currentCards.params.closeAnimation,
                currentCards.params.openAnimation
              );
            }
          });

          this.isOpened = false;
          this.btn.textContent = this.params.showText;

          if (isResize === "resize") {
            this.isOpened = false;
            this.btn.textContent = this.params.showText;
          }
        });

        this.btn.classList.remove(this.params.hidden);
      } else {
        this.cards.forEach((el) => {
          el.classList.remove(this.params.hidden);
        });

        this.btn.classList.add(this.params.hidden);
      }

      this.setBtnListener(quantity);
    }

    setBtnListener(quantity) {
      const currentCards = this.current;

      this.btn.outerHTML = this.btn.outerHTML;
      this.btn = this.cardsWrap.querySelector(`.${this.params.btn}`);

      this.btn.addEventListener("click", function () {
        currentCards.isOpened = !currentCards.isOpened;

        if (currentCards.isOpened) {
          currentCards.btn.textContent = currentCards.params.hideText;

          currentCards.cards.forEach((el) => {
            el.classList.remove(
              currentCards.params.hidden,
              currentCards.params.closeAnimation
            );
            el.classList.add(currentCards.params.openAnimation);
          });

          currentCards.cards[quantity].scrollIntoView({
            block: "start",
            behavior: "smooth"
          });
        } else {
          currentCards.btn.textContent = currentCards.params.showText;

          currentCards.cards.forEach((el, i) => {
            if (el.classList.contains(currentCards.params.interaction)) {
              el.classList.add(currentCards.params.closeAnimation);
            }
          });

          currentCards.cards[0].scrollIntoView({
            block: "start",
            behavior: "smooth"
          });
        }
      });
    }

    checkDisplay(evt, currentObj) {
      let isResize;

      if (evt) {
        isResize = evt.type;
      }

      this.windowWidth = Math.max(
        document.body.scrollWidth,
        document.documentElement.scrollWidth,
        document.body.offsetWidth,
        document.documentElement.offsetWidth,
        document.body.clientWidth,
        document.documentElement.clientWidth
      );

      switch (true) {
        case this.windowWidth > currentObj.params.MIN_DESKTOP:
          this.setHiddenCards(currentObj.params.DESKTOP_CARDS, isResize); // цифра означает количество карточек, которые будут показаны изначально
          break;
        case this.windowWidth > currentObj.params.MIN_TABLET &&
          this.windowWidth <= currentObj.params.MIN_DESKTOP:
          this.setHiddenCards(currentObj.params.TABLET_CARDS, isResize);
          break;
        default:
          this.setHiddenCards(currentObj.params.MOBILE_CARDS, isResize);
      }
    }

    setCards() {
      const cards = this.current;

      cards.checkDisplay(false, cards);
      cards.setSlider(cards);

      window.addEventListener("resize", (evt) => {
        cards.checkDisplay(evt, cards);
        cards.setSlider(cards);
      });
    }

    setSlider(cards) {
      if (
        this.windowWidth < cards.params.MIN_TABLET &&
        (!cards.cardsSlider || cards.cardsSlider.destroyed)
      ) {
        const pagination = document.createElement("div");
        pagination.classList.add(cards.params.paginationClassName);
        cards.cardsWrap.append(pagination);

        cards.cardsWrap.classList.add("swiper");
        cards.cardsWrap.children[0].classList.add("swiper-wrapper");
        

        cards.cardsSlider = new Swiper(`.${cards.params.cardsWrapName}`, {
          //slidesPerColumnFill: "row",(от Swiper-а 6-ой версии)
          slidesPerView: 1,
         //slidesPerColumn: 1,(от Swiper-а 6-ой версии)
          grid: {rows: 1, fill: "row"},//(от Swiper-а 7-ая версия)          
          spaceBetween: 20,

          pagination: {
            el: `.${cards.params.cardsWrapName} .${cards.params.paginationClassName}`,
            clickable: true,/*Листать через булит*/
          },

          on: {
            beforeInit() {
              document
                .querySelectorAll(`.${cards.params.card}`)
                .forEach((el) => {
                  el.classList.add("swiper-slide");
                });
            },
            beforeDestroy() {
              this.slides.forEach((el) => {
                el.classList.remove("swiper-slide");
                el.removeAttribute("role");
                el.removeAttribute("aria-label");
              });
              
              this.pagination.el.remove();
            }
          }
        });
      } else if (
        this.windowWidth >= cards.params.MIN_TABLET &&
        cards.cardsSlider 
      ) {
        cards.cardsSlider.destroy();
        cards.cardsWrap.classList.remove("swiper");
        cards.cardsWrap.children[0].classList.remove("swiper-wrapper");
        cards.cardsWrap.children[0].removeAttribute("aria-live");
        cards.cardsWrap.children[0].removeAttribute("id");
      }
    }
  }

  const cards = new Cards();

  /* Конец копирования */





});	

  