'use strict'
let elemButton = document.querySelector("#scrollTop");



document.addEventListener("DOMContentLoaded", () => {
    console.log('Скрипт отработал корректно'); 

    let elemHeaders = document.querySelectorAll(".js-courses h3");
    const dataTitleCards = ['Геометрия/Алгебра', 'История', 'Французский язык'];

    if(elemHeaders.length) {
        elemHeaders.forEach((item, index) => {
            item.textContent = dataTitleCards[index];
        });

    } else {
        console.log("Элементов");
    }

    console.log(elemHeaders);

});



document.addEventListener("scroll", () => {
    console.log('Скролл отработал корректно'); //Сайт листается (скроллится) 
    if (window.pageYOffset > 500) {
        console.log('> 500');    //Если скролл больше 500px, то кнопка кнопка "назад" показывается и становится кликабельной
        elemButton.removeAttribute('hidden');
      } else {
        console.log('< 500');     //Если скролл меньше 500px, то кнопка кнопка "назад"- скрыта
        elemButton.setAttribute('hidden', "");
      }



      // Получаем элементы слайдера
const slider = document.querySelector('.slider');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const slides = Array.from(slider.querySelectorAll('.hero__image'));
const slideCount = slides.length;
let slideIndex = 0;

// Устанавливаем обработчики событий для кнопок
prevButton.addEventListener('click', showPreviousSlide);
nextButton.addEventListener('click', showNextSlide);

// Функция для показа предыдущего слайда
function showPreviousSlide() {
  slideIndex = (slideIndex - 1 + slideCount) % slideCount;
  updateSlider();
}

// Функция для показа следующего слайда
function showNextSlide() {
  slideIndex = (slideIndex + 1) % slideCount;
  updateSlider();
}

// Функция для обновления отображения слайдера
function updateSlider() {
  slides.forEach((slide, index) => {
    if (index === slideIndex) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  });
}

// Инициализация слайдера
updateSlider();







});

elemButton.addEventListener("click", () => {
    console.log('Клик отработал корректно');
    // window.scrollTo(0, 0); - не плавно
    window.scrollTo({top: 0, behavior: 'smooth'}); //Прописываем условия, чтобы скроллинг был плавный.
});





document.addEventListener("DOMContentLoaded", () => {
  console.log("3.5")

 const cardsPrice = document.querySelector('.courses.js-obj');
 const priceList = cardsPrice.querySelector('.courses__list');
 console.log("priceList1", priceList);
  if (cardsPrice) {
  
      const cardsPriceData = {
        card1: {
            title: '– Математика для ОГЭ/ЕГЭ –',
            src: 'images/cute-girl-with-schoolbag.jpg',
            alt: 'Курс ОГЭ',
            description: 'Подготовка по математике для успешной сдачи экзаменов.',
        },
        card2: {
            title: '– Подготовка к ЕГЭ –',
            src: 'images/happy-student-girl-with-thumbs-up.jpg',
            alt: 'Курс ЕГЭ',
            description: 'Курсы для 11-классников с квалифицированными преподавателями.',
        },
        card3: {
            title: '– Подготовка к ОГЭ –',
            src: 'images/11556456.jpg',
            alt: 'Подготовка по математике',
            description: 'Индивидуальные занятия для школьников 9 классов.',
      },
    }
       const createCard = (title, src, alt, description) => {
               // Создаем переменную  card, которая будет содержать HTML-код карточки и вставляем туда 2 переменные
              const card = `
                <div class="course-card">
                      <img src="${src}" style="width:auto;height:287px;" alt="${alt}" class="course-card__image">
                      <h3 class="course-card__title">${title}</h3>
                      <p class="course-card__description">${description}</p>
                  </div>
          `;
              //  Возвращаем значение переменной card
              return card;
          }
            // Создаем цикл for и проходим по всем элементам объекта cardsPriceData.
          for (const cardKey in cardsPriceData) {
            //Получаем данные одной карточки из объекта cardsPriceData 
              const card = cardsPriceData[cardKey];
              console.log("priceList", priceList);
              console.log("card", card);
                //создаем переменную cardElement и вызываем функцию createLink, куда передаем тариф, цену, описание и кнопку (то, из чего будет состоять ваша карточка).
              const cardElement = createCard(card.title, card.src, card.alt, card.description);
              // с помощью метода insertAdjacentHTML добавляем созданный HTML-код в конец списка priceList.
              priceList.insertAdjacentHTML('beforeend', cardElement);

          }
  }
  
  

// 3.6
   /* Лекция 6 */
   const cardsContainer = document.querySelector('#cards');
   if (cardsContainer) {
       const cardList = cardsContainer.querySelector('.card__list');

       // Пример URL для получения данных с сервера
       const apiUrl = 'data.json';

       // Функция для создания карточки
       const createCard = (linkUrl, iconUrl, iconAlt, iconWidth, iconHeight, title, description) => {

           // Шаблонные строки и подстановки
           const card = `
               <a class="card__item" href="${linkUrl}">
                   <span class="card__icon">
                       <img src="${iconUrl}" alt="${iconAlt}" width="${iconWidth}" height="${iconHeight}">
                   </span>
                   <h3 class="card__title">${title}</h3>
                   <p class="card__description">${description}</p>
               </a>
           `;

           return card;
       }

       // Загрузка данных с сервера
       fetch(apiUrl)
           .then(response => response.json())
           .then(data => {
               console.log(data); // Данные
               console.log(typeof (data)); // Тип полученных данных

               // for (const item in data) {
               //     const card = data[item];

               //     const cardElement = createCard(card.link, card.icon, card.iconAlt, card.iconWidth, card.iconHeight, card.title, card.description);
               //     cardList.insertAdjacentHTML('beforeend', cardElement);
               // }

               data.forEach(item => {
                   const cardElement = createCard(item.link, item.icon, item.iconAlt, item.iconWidth, item.iconHeight, item.title, item.description);
                   cardList.insertAdjacentHTML('beforeend', cardElement);
               });
           })
           .catch(error => {
               console.error('Ошибка при загрузке данных:', error);
           });
   }









});





























// /* Устанавливаем стартовый индекс слайда по умолчанию: */
// let slideIndex = 1;
// /* Вызываем функцию, которая реализована ниже: */
// showSlides(slideIndex);

// /* Увеличиваем индекс на 1 — показываем следующий слайд: */
// function nextSlide() {
//     showSlides(slideIndex += 1);
// }

// /* Уменьшаем индекс на 1 — показываем предыдущий слайд: */
// function previousSlide() {
//     showSlides(slideIndex -= 1);  
// }

// /* Устанавливаем текущий слайд: */
// function currentSlide(n) {
//     showSlides(slideIndex = n);
// }

// /* Функция перелистывания: */
// function showSlides(n) {
//     /* Обращаемся к элементам с названием класса "item", то есть к картинкам: */
//     let slides = document.querySelectorAll(".hero__image1");
//     console.log(slides);
//     /* Проверяем количество слайдов: */
//     if (n > slides.length) {
//       slideIndex = 1
//     }
//     if (n < 1) {
//         slideIndex = slides.length
//     }
  
//     /* Проходим по каждому слайду в цикле for: */
//     for (let slide of slides) {
//         slide.style.display = "none";
//     }
//     /* Делаем элемент блочным: */
    
//     if(slides.length) {
//         slides[slideIndex - 1].style.display = "block";   
//     } 
// }
