document.addEventListener('DOMContentLoaded', function () {
  // Burger
  document.querySelector('#burger-menu').addEventListener('click', function () {
    document.querySelector('.burger-menu').classList.add('burger-menu_active');
  });
  document.querySelector('#x-icon').addEventListener('click', function () {
    document.querySelector('.burger-menu').classList.remove('burger-menu_active');
  });
  document.querySelectorAll('.burger-menu__link').forEach(function (item) {
    item.addEventListener('click', function () {
      document.querySelector('.burger-menu').classList.remove('burger-menu_active');
    });
  });

  $(document).ready(function () {
    $('body').click(function(event) {
    $('body').toggleClass('lock');
    })
  })

  // search
  document.querySelector(".header__top-form-btn-open").addEventListener("click", function () {
    document.querySelector(".header__top-container-form").classList.add("form__active");
    this.classList.add("active");
  })

  document.addEventListener("click", function (e) {
    let target = e.target;
    let form = document.querySelector(".header__top-container-form");
    if (!target.closest(".header__top-form-container")) {
      form.classList.remove("form__active");
      form.querySelector("input").value = "";
      document.querySelector(".header__top-form-btn-open").classList.remove("active")
    }
    document.querySelector('#x-icon-search').addEventListener('click', function () {
      document.querySelector('.header__top-container-form').classList.remove('form__active');
    });
  });

  // Dropdown
  const menuBtns = document.querySelectorAll('.menu__btn');
  const drops = document.querySelectorAll('.dropdown');
  menuBtns.forEach(el => {
    el.addEventListener('click', (e) => {
      let currentBtn = e.currentTarget;
      let drop = currentBtn.closest('.menu__item').querySelector('.dropdown');

      menuBtns.forEach(el => {
        if (el !== currentBtn) {
          el.classList.remove('menu__btn--active');
        }
      });
      drops.forEach(el => {
        if (el !== drop) {
          el.classList.remove('dropdown--active')
        }
      })
      drop.classList.toggle('dropdown--active');
      // currentBtn.classList.toggle('menu__btn--active')
    });
  });



  document.addEventListener('click', (e) => {
    if (!e.target.closest('.menu')) {
      menuBtns.forEach(el => {
        el.classList.remove('menu__btn--active');
      });
      drops.forEach(el => {
        el.classList.remove('dropdown--active');
      });
    }
  });

  /* Gallery Modal */
  let galleryImgs = document.querySelectorAll('.gallery-slide-general');
  let galleryModal = document.querySelector('.gallerypopap');
  let galleryModalClose = galleryModal.querySelector('.gallerypopap__modal-close');
  let body = document.querySelector('body');
  galleryImgs.forEach(el => {
    el.addEventListener('click', function () {
      let img = this.querySelector('img');
      let imgSrc = img.getAttribute('src');
      galleryModal.querySelector('img').setAttribute('src', imgSrc);
      galleryModal.classList.add('gallerypopap_active_true');
      body.classList.add('modal_active');
    })
  })
  galleryModalClose.addEventListener('click', function () {
    galleryModal.classList.remove('gallerypopap_active_true');
    body.classList.remove('modal_active');
  });

  // Swiper 1
  const container = document.querySelector(".container")
  const swiper1 = new Swiper('.hero__swiper', {
    // Default parameters
    slidesPerView: 1,
    spaceBetween: 10,
    speed: 2000,
    autoplay: {
      delay: 2000
    },
    effect: "fade",
    allowTouchMove: false,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    pagination: {
      el: '.swiper-bullet-pagination',
      type: 'bullets',
      clickable: true,
    },

  });

  // Swiper 2
  const swiper2 = new Swiper('.gallery__swiper', {
    slidesPerView: 3,
    spaceBetween: 50,
    navigation: {
      nextEl: '.gallery__button-next',
      prevEl: '.gallery__button-prev',
      clickable: true,
    },
    pagination: {
      el: '.gallery__pagination',
      type: 'fraction',
      clickable: true,
    },
    breakpoints: {
      300: {
        slidesPerView: 1,

      },
      768: {
        slidesPerView: 2,
        spaceBetween: 34,
      },
      1201: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
    }
  });


  // Swiper 3
  const swiper3 = new Swiper('.event__swiper', {
    slidesPerView: 3,
    spaceBetween: 50,
    navigation: {
      nextEl: '.event__button-next',
      prevEl: '.event__button-prev',
      clickable: true,
    },
    pagination: {
      el: '.event__pagination',
      type: 'bullets',
      clickable: true,
    },
    breakpoints: {
      300: {
        slidesPerView: 1,
      },
      730: {
        slidesPerView: 2,
        spaceBetween: 34,
      },
      769: {
        slidesPerView: 3,
        spaceBetween: 27,
      },
      1201: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
    }
  });

  // Swiper 4
  const swiper4 = new Swiper('.project__swiper', {
    slidesPerView: 3,
    spaceBetween: 50,
    navigation: {
      nextEl: '.project__slider-next',
      prevEl: '.project__slider-prev',
      clickable: true,
    },
    breakpoints: {
      300: {
        slidesPerView: 1,
        slidesPerGroup: 1,

      },
      450: {
        slidesPerView: 2,
        slidesPerGroup: 1,
        spaceBetween: 34
      },
      1021: {
        slidesPerView: 2,
        slidesPerGroup: 1,
        spaceBetween: 50
      },
      1201: {
        slidesPerView: 3,
        slidesPerGroup: 1,
        spaceBetween: 50
      }
    },
  });

  // Select
  const element = document.querySelector('select');
  const choices = new Choices(element, {
    searchEnabled: false,
    choices: [0],
    shouldSort: false,

  });

  /* Catalog: accordions */
  $('.catalog__tabs-accordion').each(function () {
    let accordionId = $(this).attr('id');
    $(`#${accordionId}`).accordion({
      header: '.catalog__tabs-accordion-item-title',
      heightStyle: 'content'
    });
  })

  /* Catalog: scroll to painter info in mobile */
  $('.catalog__tabs-painters-list-item-link').click(function () {
    if (window.innerWidth <= 767) {
      const tabNo = this.closest('.catalog__tabs-item').dataset.target;
      $('body, html').animate({
        scrollTop: $(`.catalog__tabs-item[data-target="${tabNo}"] .catalog__tabs-item-left.catalog__tabs-true`).offset().top
      }, 1000);
      // there is no need to have "return false" here because it is already written below
    }
  })

  /* Catalog Accordions: To Gallery  */
  $('.catalog__tabs-accordion-item-content-link').click(function () {
    let toGalHref = $(this).attr('href').substr(1);
    let goTo = `.${toGalHref}`
    $('body, html').animate({
      scrollTop: $(goTo).offset().top
    }, 1500);
    return false;
  });

  $('.catalog__tabs-item-content-link').click(function () {
    let toGalHref = $(this).attr('href').substr(1);
    let goTo = `.${toGalHref}`
    $('body, html').animate({
      scrollTop: $(goTo).offset().top
    }, 1500);
    return false;
  });


  var selector = document.querySelector("input[type='tel']");
  var im = new Inputmask("+7 (999)-999-99-99");

  im.mask(selector);

  new JustValidate('.contacts__container-form', {
    rules: {
      name: {
        required: true,
        minLength: 2,
        maxLength: 25
      },
      tel: {
        required: true,
        function: (name, value) => {
          const phone = selector.inputmask.unmaskedvalue()
          console.log(phone)
          return Number(phone) && phone.length === 10
        }
      }
    },
    messages: {
      name: {
        required: 'Недопустимый формат',
        minLength: 'Вы ввели слишком мало символов',
        maxLength: 'Вы ввели слишком много символов'
      },
      tel: {
        required: 'Недопустимый формат',
        function: 'Введите корректный номер телефона'
      }
    }
  })

  /* Project tooltip */
  tippy('.tooltip-1', {
    content: 'Пример современных тенденций - современная&nbsp;методология разработки',
    theme: 'projects',
    trigger: 'click',
    trigger: 'focus'
  });
  tippy('.tooltip-2', {
    content: 'Приятно, граждане, наблюдать, как сделанные на базе аналитики выводы вызывают у вас эмоции',
    theme: 'projects',
    trigger: 'click',
    trigger: 'focus'
  });
  tippy('.tooltip-3', {
    content: 'В стремлении повысить качество',
    theme: 'projects',
    trigger: 'click',
    trigger: 'focus'
  });

  ymaps.ready(init);

  function init() {
    // Создание карты.
    var myMap = new ymaps.Map("Mymap", {
      // Координаты центра карты.
      // Порядок по умолчанию: «широта, долгота».
      // Чтобы не определять координаты центра карты вручную,
      // воспользуйтесь инструментом Определение координат.
      center: [55.758468, 37.601088],
      // Уровень масштабирования. Допустимые значения:
      // от 0 (весь мир) до 19.
      zoom: 14
    });

    // Создание геообъекта с типом точка (метка).
    var myGeoObject = new ymaps.GeoObject({
      geometry: {
        type: "Point", // тип геометрии - точка
        // coordinates: [55.8, 37.5] // координаты точки
      }
    });

    var myPlacemark = new ymaps.Placemark([55.758468, 37.601088], {}, {
      iconLayout: 'default#image',
      iconImageHref: 'map.svg',
      iconImageSize: [20, 20],
      iconImageOffset: [-10, -12]
    });

    // Размещение геообъекта на карте
    myMap.geoObjects.add(myGeoObject);
    myMap.geoObjects.add(myPlacemark);
  }

  // Убираем текст в инпуте по клику
  let form_input = document.querySelectorAll('.header__bottom-input');

  if (form_input) {
    for (let i = 0; i < form_input.length; i++) {
      form_input[i].addEventListener('click', function () {
        let thisElement = this;

        let savePlaceholder = this.getAttribute('placeholder');

        this.setAttribute('placeholder', ' ');
        document.addEventListener('mouseup', function () {
          thisElement.setAttribute('placeholder', savePlaceholder);
        });
      });
    }
  }

  /* Catalog: Painters Info */
  document.querySelectorAll('.catalog__tabs-painters-list-item-link').forEach(currentPainter => {
    currentPainter.addEventListener('click', function (event) {
      const tabNo = this.closest('.catalog__tabs').dataset.target;
      const painterNo = this.dataset.tab;
      document.querySelectorAll(`.catalog__tabs[data-target="${tabNo}"] .catalog__tabs-item-left`).forEach(allCatalogTabsItems => {
        allCatalogTabsItems.classList.remove('catalog__tabs-true')
      });
      document.querySelector(`.catalog__tabs[data-target="${tabNo}"] .catalog__tabs-item-left[data-target="${painterNo}"]`).classList.add('catalog__tabs-true');
      event.preventDefault();
    })
  });



})
