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
// elemButton.addEventListener("click", () => {
//     console.log('Клик отработал корректно');
//     // window.scrollTo(0, 0); - не плавно
//     window.scrollTo({top: 0, behavior: 'smooth'}); //Прописываем условия, чтобы скроллинг был плавный.
// });


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
