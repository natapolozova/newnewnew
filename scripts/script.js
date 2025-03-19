'use strict'
let elemButton = document.querySelector("#scrollTop");

document.addEventListener("DOMContentLoaded", () => {
    console.log('Скрипт отработал корректно'); 
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
});
elemButton.addEventListener("click", () => {
    console.log('Клик отработал корректно');
    // window.scrollTo(0, 0); - не плавно
    window.scrollTo({top: 0, behavior: 'smooth'}); //Прописываем условия, чтобы скроллинг был плавный.
});


/* Устанавливаем стартовый индекс слайда по умолчанию: */
let slideIndex = 1;
/* Вызываем функцию, которая реализована ниже: */
showSlides(slideIndex);

/* Увеличиваем индекс на 1 — показываем следующий слайд: */
function nextSlide() {
    showSlides(slideIndex += 1);
}

/* Уменьшаем индекс на 1 — показываем предыдущий слайд: */
function previousSlide() {
    showSlides(slideIndex -= 1);  
}

/* Устанавливаем текущий слайд: */
function currentSlide(n) {
    showSlides(slideIndex = n);
}

/* Функция перелистывания: */
function showSlides(n) {
    /* Обращаемся к элементам с названием класса "item", то есть к картинкам: */
    let slides = document.getElementsByClassName("item");
    
    /* Проверяем количество слайдов: */
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
  
    /* Проходим по каждому слайду в цикле for: */
    for (let slide of slides) {
        slide.style.display = "none";
    }
    /* Делаем элемент блочным: */
    slides[slideIndex - 1].style.display = "block";    
}
